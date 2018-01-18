<template lang="html">
  <div>
    <div class="col-md-12">
      <part-panel :color="color">
        <div slot="heading">
          <span v-if="!editing">Nouvelle adresse</span>
          <span v-else>Mise à jour adresse</span>
        </div>
        <form v-on:submit.prevent="onSubmit" @keydown="form.errors.clear($event.target.name)" slot="body">
          <div class="row">
            <div class="col-md-4">
              <div class="form-group">
                <label for="Clients" class="control-label mb-10">Client</label>
                <select class="form-control" name="client_id" v-model="form['client_id']" disabled>
                  <option v-for="client in clients" :value="client.value">{{ client.text }}</option>
                </select>
              </div>
            </div>
            <part-input v-model="form" name="libele" label="Libélé"></part-input>
            <part-input v-model="form" name="adress" label="Adresse"></part-input>
            <part-input v-model="form" name="phone" label="Telephone"></part-input>
          </div>
          <div class="row">
            <part-button-submit :editing="editing"></part-button-submit>
            <part-button-goback></part-button-goback>
          </div>
        </form>
      </part-panel>
    </div>
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
            color:'',
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
          adressId: function(){
            return this.$route.params.id
          },
          clientId: function(){
            return this.$route.params.clientid
          },
          clients: function(){
            return this.$store.state.clients
          },
        },
        created(){
          if (this.clientId) {
            this.form.client_id = this.clientId;
          }
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
