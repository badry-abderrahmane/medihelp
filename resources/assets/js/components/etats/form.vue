<template lang="html">
  <div>
    <part-panel>
      <div slot="heading">
        Nouvelle etat
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
          etatId: function(){
            return this.$route.params.id
          }
        },
        created(){
          if (this.etatId) {
            axios.get('/etats/'+this.etatId)
              .then(response => {
                this.form.load(response.data);
            });
          }
        },

        methods: {
          onSubmit(){
            if (this.form.id == '') {
              this.form.post('/etats')
                .then(data => {
                  this.$store.dispatch('LOAD_ETATS_LIST')
                  Event.$emit('publish-success-message', data.message);
                  this.goback();
                })
                .catch(errors =>{
                  console.log(errors);
                });
            }else{
              this.form.put('/etats')
                .then(data => {
                  this.$store.dispatch('LOAD_ETATS_LIST')
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
