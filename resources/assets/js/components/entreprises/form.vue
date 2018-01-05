<template lang="html">
  <div>
    <part-panel>
      <div slot="heading">
        Nouvelle entreprise
      </div>
      <form v-on:submit.prevent="onSubmit" @keydown="form.errors.clear($event.target.name)" slot="body">
        <div class="row">
          <part-input v-model="form" name="name" label="Nom complet/Raison sociale"></part-input>
          <part-input v-model="form" name="type" label="Type"></part-input>
          <part-input v-model="form" name="phone" label="Numéro téléphone"></part-input>
          <part-input v-model="form" name="fax" label="Fax"></part-input>
          <part-input v-model="form" name="email" label="Email"></part-input>
          <part-input v-model="form" name="adress" label="Adresse"></part-input>
          <part-input v-model="form" name="secteur" label="Secteur d'activité"></part-input>
        </div>
        <div class="row">
          <part-button-submit :editing="editing"></part-button-submit>
        </div>
      </form>
    </part-panel>
  </div>
</template>

<script>
    import { Form } from './../../api/form.js';
    export default {
        data(){
          return{
            form : new Form({
              id:'',
              name: '',
              phone: '',
              adress: '',
              specialite: '',
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
          fournisseurId: function(){
            return this.$route.params.id
          }
        },
        created(){
          if (this.fournisseurId) {
            axios.get('/fournisseurs/'+this.fournisseurId)
              .then(response => {
                this.form.load(response.data);
            });
          }
        },

        methods: {
          onSubmit(){
            if (this.form.id == '') {
              this.form.post('/fournisseurs')
                .then(data => {
                  this.$store.dispatch('LOAD_FOURNISSEUR_LIST')
                  Event.$emit('publish-success-message', data.message);
                  this.goback();
                })
                .catch(errors =>{
                  console.log(errors);
                });
            }else{
              this.form.put('/fournisseurs')
                .then(data => {
                  this.$store.dispatch('LOAD_FOURNISSEUR_LIST')
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
