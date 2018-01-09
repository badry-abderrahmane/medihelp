<template lang="html">
  <div>
    <part-panel>
      <div slot="heading">
        Nouvelle Action
      </div>
      <form v-on:submit.prevent="onSubmit" @keydown="form.errors.clear($event.target.name)" slot="body">
        <div class="row">
          <part-input v-model="form" name="value" label="Nom"></part-input>
        </div>
        <div class="row">
          <part-button-submit :editing="editing"></part-button-submit>
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
              value:''
            }),
          }
        },
        computed:{
          editing: function(){
            if (this.$route.params.id) {
              return true
            }else{
              return false
            }
          },
          actionId: function(){
            return this.$route.params.id
          }
        },
        created(){
          if (this.actionId) {
            axios.get('/actions/'+this.actionId)
              .then(response => {
                this.form.load(response.data);
            });
          }
        },

        methods: {
          onSubmit(){
            if (this.form.id == '') {
              this.form.post('/actions')
                .then(data => {
                  this.$store.dispatch('LOAD_ACTIONS_LIST')
                  Event.$emit('publish-success-message', data.message);
                  this.goback();
                })
                .catch(errors =>{
                  console.log(errors);
                });
            }else{
              this.form.put('/actions')
                .then(data => {
                  this.$store.dispatch('LOAD_ACTIONS_LIST')
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
