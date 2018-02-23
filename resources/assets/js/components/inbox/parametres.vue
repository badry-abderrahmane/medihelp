<template lang="html">
<div class="row">
  <div class="col-md-6">
    <part-panel color="success">
      <div slot="heading" >
        Paramètres Authentification
      </div>
      <div slot="body">
        <div class="row">
          <div class="col-md-12">
            <part-input-warper name="server" label="Server" :form="form" vclass="col-md-12">
              <input name="server" v-model="form['server']" class="form-control" disabled slot="input">
            </part-input-warper>
            <part-input-warper name="port" label="Port" :form="form" vclass="col-md-12">
              <input name="port" v-model="form['port']" class="form-control" disabled slot="input">
            </part-input-warper>
            <part-input-warper name="email" label="Email" :form="form" vclass="col-md-12">
              <input name="email" v-model="form['email']" class="form-control" disabled slot="input">
            </part-input-warper>
            <part-input-warper name="pasword" label="Password" :form="form" vclass="col-md-12">
              <input name="password" v-model="form['password']" class="form-control" slot="input">
            </part-input-warper>
            <button class="btn btn-warning btn-block" @click="onSubmit">
              <i class="fa fa-refresh m-r-10"></i>Mettre à jour
            </button>
          </div>
        </div>
        <br>
      </div>
    </part-panel>
  </div>
  <div class="col-md-6">
    <part-panel color="warning">
      <div slot="heading" >
        Test Output
      </div>
      <div slot="body">
        <div class="row">
          <div class="col-md-12">
            <div class="jumbotron jumbotron-fluid" style="min-height:300px;">
                <div class="container">
                    <p class="text-muted" v-show="sortant.status > 0">> Configuration du serveur Mail</p>
                    <p class="text-muted" v-show="sortant.status > 1">> Ajout Données utilisateur</p>
                    <p class="text-muted" v-show="sortant.status > 2">> Démarage de test Sortant</p>
                    <p class="text-muted" v-show="sortant.status > 3">> Envoi du courier électronique</p>
                    <p class="text-muted" v-show="sortant.status > 3">> Envoi réussie</p>
                    <p class="text-danger" v-show="sortant.status > 4">> Echèc d'envoi</p>
                </div>
                <div class="container">
                    <p class="text-muted" v-show="entrant.status > 0">> Configuration du serveur Mail</p>
                    <p class="text-muted" v-show="entrant.status > 1">> Ajout Données utilisateur</p>
                    <p class="text-muted" v-show="entrant.status > 2">> Démarage de test Entrant</p>
                    <p class="text-muted" v-show="entrant.status > 3">> Récupération des dossiers</p>
                    <p class="text-success" v-for="folder in folders">> Dossier {{ folder.name }} contient {{ folder.count }} email(s)</p>
                    <p class="text-danger" v-show="entrant.status > 4">> Echèc d'authentification</p>
                </div>
            </div>
            <div class="row">
              <div class="col-md-4">
                <button class="btn btn-success btn-block" @click="incoming">
                  <i class="fa fa-sign-out m-r-10"></i>Test Courier Entrant
                </button>
              </div>
              <div class="col-md-4">
                <input name="password" v-model="form['password']" class="form-control" placeholder="Email de test">
              </div>
              <div class="col-md-4">
                <button class="btn btn-success btn-block" @click="outgoing">
                  <i class="fa fa-sign-in m-r-10"></i>Test Courier Sortant
                </button>
              </div>
            </div>
          </div>
        </div>
        <br>
      </div>
    </part-panel>
  </div>
</div>
</template>

<script>
    import { Form } from './../../api/form.js';
    export default {
        data(){
          return{
            form : new Form({
              id:'',
              server: 'imap.gmail.com',
              port: '456',
              email: '',
              password: '',
            }),
            folders:[],
            entrant:{status: 0},
            sortant:{status: 0}
          }
        },
        computed:{
          userEmail: function(){
            return this.$store.state.user.email
          }
        },
        watch:{
          userEmail: function(newVal,oldVal){
            this.form.email = newVal
          }
        },
        mounted(){
          this.form.email = this.userEmail
        },
        methods: {
          onSubmit(){
            this.form.post('/mail/config')
              .then(data => {
                Event.$emit('publish-success-message', data.message);
              })
              .catch(errors =>{
                console.log(errors);
              });
          },
          incoming(){
            this.sortant.status = 0
            this.entrant.status = 3
            axios.get('/mail/incoming')
              .then(response => {
                this.entrant.status = 4
                this.folders = response.data;
            }).catch(errors =>{
              this.entrant.status = 5
            });
          },
          outgoing(){
            this.entrant.status = 0
            this.sortant.status = 3
            axios.get('/mail/outgoing')
              .then(response => {
                this.sortant.status = 4
              }).catch(errors =>{
                this.sortant.status = 5
              });
          }
        }
    }
</script>

<style lang="css">
</style>
