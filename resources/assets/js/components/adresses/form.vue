<template lang="html">
  <div>
    <part-panel>
      <div slot="heading">
        Nouvelle adresse
      </div>
      <form v-on:submit.prevent="onSubmit" @keydown="form.errors.clear($event.target.name)" slot="body">
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label for="Entreprise" class="control-label mb-10">Client</label>
              <model-select :options="clients" v-model="form['client_id']">
             </model-select>
            </div>
          </div>
          <part-input v-model="form" name="libele" label="Libélé"></part-input>
          <part-input v-model="form" name="adress" label="Adresse"></part-input>
          <part-input v-model="form" name="phone" label="Telephone"></part-input>
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
              client_id:'',
              libele:'',
              adress:'',
              phone:'',
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
          adressId: function(){
            return this.$route.params.id
          },
          clients: function(){
            return this.$store.state.clients
          },
        },
        created(){
          if (this.adressId) {
            axios.get('/adresses/'+this.adressId)
              .then(response => {
                this.form.load(response.data);
            });
          }
        },

        methods: {
          onSubmit(){
            if (this.form.id == '') {
              this.form.post('/adresses')
                .then(data => {
                  Event.$emit('publish-success-message', data.message);
                  this.goback();
                })
                .catch(errors =>{
                  console.log(errors);
                });
            }else{
              this.form.put('/adresses')
                .then(data => {
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
