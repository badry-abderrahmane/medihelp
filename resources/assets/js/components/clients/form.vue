<template lang="html">
  <div>
    <part-panel>
      <div slot="heading">
        Nouvelle entreprise
      </div>
      <form v-on:submit.prevent="onSubmit" @keydown="form.errors.clear($event.target.name)" slot="body">
        <div class="row">
          <div class="col-md-12">
            <part-input v-model="form" name="name" label="Nom complet/Raison sociale"></part-input>
            <div class="col-md-6">
              <div class="form-group">
                <label for="Entreprise" class="control-label mb-10">Type client</label>
                <model-select :options="typeclients" v-model="form['typeclient_id']">
               </model-select>
              </div>
            </div>
          </div>
          <div class="col-md-12">
            <part-input v-model="form" name="phone" label="Numéro téléphone"></part-input>
            <part-input v-model="form" name="fax" label="Fax"></part-input>
          </div>
          <div class="col-md-12">
            <part-input v-model="form" name="email" label="Email"></part-input>
            <part-input v-model="form" name="adress" label="Adresse"></part-input>
          </div>
          <div class="col-md-12">
            <part-input v-model="form" name="secteur" label="Secteur d'activité"></part-input>
          </div>

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
          name:'',
          typeclient_id:'',
          phone:'',
          fax:'',
          email:'',
          adress:'',
          secteur:'',
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
      clientId: function(){
        return this.$route.params.id
      },

      typeclients: function(){
        return this.$store.state.typeclients
      },
    },
    created(){
      if (this.clientId) {
        axios.get('/clients/'+this.clientId)
          .then(response => {
            this.form.load(response.data);
        });
      }
    },

    methods: {
      onSubmit(){
        if (this.form.id == '') {
          this.form.post('/clients')
            .then(data => {
              this.$store.dispatch('LOAD_CLIENTS_LIST')
              Event.$emit('publish-success-message', data.message);
              this.goback();
            })
            .catch(errors =>{
              console.log(errors);
            });
        }else{
          this.form.put('/clients')
            .then(data => {
              this.$store.dispatch('LOAD_CLIENTS_LIST')
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
