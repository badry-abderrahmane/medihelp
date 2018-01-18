<template lang="html">
  <div>
    <part-panel :color="color">
      <div slot="heading">
        <span v-if="!editing">Nouveau role</span>
        <span v-else>Mise à jour role</span>
      </div>
      <form v-on:submit.prevent="onSubmit" @keydown="form.errors.clear($event.target.name)" slot="body">
        <div class="col-md-12">
          <div class="row">
            <part-input v-model="form" name="name" label="Nom"></part-input>
            <part-input v-model="form" name="display_name" label="Display"></part-input>
            <part-input v-model="form" name="description" label="Description"></part-input>
          </div>

          <div class="row">
            <part-button-submit :editing="editing"></part-button-submit>
            <part-button-goback></part-button-goback>
          </div>
        </div>
      </form>
    </part-panel>
  </div>
</template>

<script>
import { ModelSelect } from 'vue-search-select'
import { Form } from './../../api/form.js';
export default {
  components: {
    ModelSelect
  },
  data(){
      return{
        form : new Form({
          id:'',
          name:'',
          display_name:'',
          description:'',
        }),
        color:'success'
      }
    },
    computed:{
      editing: function(){
        if (this.$route.params.id) {
          this.color = 'warning'
          return true
        }else{
          this.color = 'success'
          return false
        }
      },
      roleId: function(){
        return this.$route.params.id
      },
    },
    created(){
      if (this.roleId) {
        axios.get('/roles/'+this.roleId)
          .then(response => {
            this.form.load(response.data);
        });
      }
    },

    methods: {
      onSubmit(){
        if (this.form.id == '') {
          this.form.post('/roles')
            .then(data => {
              //this.$store.dispatch('LOAD_CLIENTS_LIST')
              Event.$emit('publish-success-message', data.message);
              this.goback();
            })
            .catch(errors =>{
              console.log(errors);
            });
        }else{
          this.form.put('/roles')
            .then(data => {
              //this.$store.dispatch('LOAD_CLIENTS_LIST')
              Event.$emit('publish-success-message', data.message);
              this.goback();
            })
            .catch(errors => {
              console.log(errors);
            });
        }
      },

      goback(){
          this.$router.go(-1);
      }
    }
}
</script>

<style lang="css">
</style>
