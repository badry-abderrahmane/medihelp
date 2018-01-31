<template lang="html">
  <div>
    <part-panel :color="color">
      <div slot="heading">
        <span v-if="!editing">Nouveau utilisateur</span>
        <span v-else>Mise à jour utilisateur</span>
      </div>
      <form v-on:submit.prevent="onSubmit" @keydown="form.errors.clear($event.target.name)" slot="body">
        <div class="col-md-12">
          <div class="row">
            <part-input v-model="form" name="name" label="Nom"></part-input>
            <part-input v-model="form" name="email" label="Email"></part-input>
            <part-input v-model="form" name="password" label="Mot de passe"></part-input>
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
          email:'',
          password:'',
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
      userId: function(){
        return this.$route.params.id
      },
    },
    created(){
      if (this.userId) {
        axios.get('/users/'+this.userId)
          .then(response => {
            this.form.load(response.data);
        });
      }
    },

    methods: {
      onSubmit(){
        if (this.form.id == '') {
          this.form.post('/users')
            .then(data => {
              //this.$store.dispatch('LOAD_CLIENTS_LIST')
              Event.$emit('publish-success-message', data.message);
              this.$router.push({ path:'/users'});
            })
            .catch(errors =>{
              console.log(errors);
            });
        }else{
          this.form.put('/users')
            .then(data => {
              //this.$store.dispatch('LOAD_CLIENTS_LIST')
              Event.$emit('publish-success-message', data.message);
              this.$router.push({ path:'/users'});
            })
            .catch(errors => {
              console.log(errors);
            });
        }
      },
    }
}
</script>

<style lang="css">
</style>
