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
                <basic-select :options="typeclients"
                              :selected-option="selectedTypeclient"
                              placeholder="Choisir .."
                              @select="onSelectTypeclient">
                </basic-select>
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
            <div class="col-md-4">
              <div v-bind:class="[ form.errors.get('user_id') ? 'has-danger' : '', 'form-group']">
                <label for="Clients" class="control-label mb-10">Responsable</label>
                <multi-select :options="users"
                               :selected-options="selectedUsers"
                               placeholder="Choisir un responsable"
                               @select="onSelectUser">
                </multi-select>
                <div class="form-control-feedback" v-if="form.errors.has('user_id')" v-text="form.errors.get('user_id')"></div>
              </div>
            </div>
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
import { BasicSelect } from 'vue-search-select'
import { MultiSelect } from 'vue-search-select'
import _ from 'lodash'
import { Form } from './../../api/form.js';
export default {
  components: {
    BasicSelect,
    MultiSelect
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
          users:[],
        }),
        color:'success',
        selectedUsers: [],
        lastSelectedUsers: {},
        selectedTypeclient: {}
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
      users: function(){
        return this.$store.state.users
      },
    },
    created(){
      if (this.clientId) {
        axios.get('/clients/'+this.clientId)
          .then(response => {
            this.form.load(response.data);
            this.getResponsables()
            this.getTypeClient()
        });
      }
    },
    methods: {
      onSelectUser(selectedUsers, lastSelectedUsers) {
        this.selectedUsers = selectedUsers
        this.lastSelectedUsers = lastSelectedUsers
      },
      onSelectTypeclient (item) {
        this.selectedTypeclient = item
      },
      // deselect option
      reset () {
        this.selectedUsers = [] // reset
      },
      // select option from parent component
      selectOption () {
        this.selectedUsers = _.unionWith(this.selectedUsers, [this.users[0]], _.isEqual)
      },
      onSubmit(){
        this.prepareUsers();
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
      prepareUsers(){
        let users = []
        this.selectedUsers.map(function(value,key){
          users.push(value.value)
        })
        this.form.users = users;
      },
      getResponsables(){
        this.selectedUsers = []
        if (this.clientId) {
          this.$store.state.users.map((value,key)=> {
            this.form.users.map((val,ke) => {
              if (value.value == val.id) {
                this.selectedUsers.push(value)
              }
            })
          });
        }
      },
      getTypeClient(){
        this.selectedTypeclient = {}
        if (this.clientId) {
          this.$store.state.typeclients.map((value,key)=> {
            if (value.value == this.form.typeclient_id) {
              this.selectedTypeclient = value
            }
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
