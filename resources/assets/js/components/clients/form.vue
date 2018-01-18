<template lang="html">
  <div>
    <part-panel :color="color">
      <div slot="heading">
        <span v-if="!editing">Nouveau client</span>
        <span v-else>Mise à jour client</span>
      </div>
      <form v-on:submit.prevent="onSubmit" @keydown="form.errors.clear($event.target.name)" slot="body">
        <div class="col-md-12">
          <div class="row">
            <div class="col-md-4">
              <div class="form-group">
                <label for="Entreprise" class="control-label mb-10">Type client</label>
                <model-select :options="typeclients" v-model="form['typeclient_id']">
               </model-select>
              </div>
            </div>
            <part-input v-model="form" name="name" label="Nom complet/Raison sociale"></part-input>
            <part-input v-model="form" name="phone" label="Numéro téléphone"></part-input>
          </div>
          <div class="row">
            <part-input v-model="form" name="fax" label="Fax"></part-input>
            <part-input v-model="form" name="email" label="Email"></part-input>
            <part-input v-model="form" name="adress" label="Adresse"></part-input>
          </div>
          <div class="row">
            <part-input v-model="form" name="secteur" label="Secteur d'activité"></part-input>
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
          typeclient_id:'',
          phone:'',
          fax:'',
          email:'',
          adress:'',
          secteur:'',
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
