<template lang="html">
  <div>
    <global-unite-first>
      <div class="col-md-12" slot="content">
        <part-panel-default>
          <div slot="heading">
            Liens utiles
          </div>
          <div class="row" slot="body">
            <div class="col-md-8 col-md-offset-2">
              <button class="btn btn-success btn-block btn-lable-wrap left-label" @click="$router.push({ path: `/clients` })">
                <span class="btn-label"><i class="fa fa-list"></i></span>
                <span class="btn-text">Liste des clients</span>
              </button>
            </div>
          </div>
        </part-panel-default>
        <part-panel-default>
          <div slot="heading">
            Statistiques
          </div>
          <div class="row" slot="body">
            <div class="col-md-12">
              <div class="sm-data-box">
  							<div class="container-fluid">
  								<div class="row">
                    <div class="col-xs-6 text-center  pl-0 pr-0 data-wrap-right">
  										<i class="icon-user-following data-right-rep-icon txt-light-grey"></i>
  									</div>
  									<div class="col-xs-6 text-center pl-0 pr-0 data-wrap-left">
  										<span class="txt-dark block counter"><span class="counter-anim">2245</span></span>
  										<span class="weight-500 uppercase-font block font-13">Clients</span>
  									</div>
  								</div>
  							</div>
  						</div>
            </div>
          </div>
        </part-panel-default>
      </div>
    </global-unite-first>
    <global-unite-middle>
      <div class="col-md-12" slot="content">
        <part-panel>
          <div slot="heading">
            Nouveau client
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
              <part-button-goback></part-button-goback>
              <part-button-submit :editing="editing"></part-button-submit>
            </div>
          </form>
        </part-panel>
      </div>
    </global-unite-middle>
    <global-unite-last>

    </global-unite-last>

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
