<template lang="html">
  <div>
    <div class="col-md-12">
      <part-panel :color="color">
        <div slot="heading">
          <span v-if="!editing">Nouveau ticket</span>
          <span v-else>Mise à jour ticket</span>
        </div>
        <form v-on:submit.prevent="onSubmit" @keydown="form.errors.clear($event.target.name)" slot="body">
          <div class="row">
            <!-- // INPUT -->
            <part-input-warper name="client_id" label="Client" :form="form" vclass="col-md-4">
              <basic-select :options="clients"
                            :selected-option="selectedClient"
                            placeholder="Choisir .."
                            @select="onSelectClient"
                            slot="input">
              </basic-select>
            </part-input-warper>
            <!-- // INPUT -->
            <part-input-warper name="reference" label="Référence" :form="form" vclass="col-md-4">
              <input name="reference" v-model="form['reference']" class="form-control" disabled slot="input">
            </part-input-warper>
            <!-- // INPUT -->
            <part-input-warper name="date" label="Date" :form="form" vclass="col-md-4">
              <flat-pickr v-model="form.date" class="form-control" slot="input"></flat-pickr>
            </part-input-warper>
          </div>
          <div class="row">
            <!-- // INPUT -->
            <part-input-warper name="state" label="Status" :form="form" vclass="col-md-4">
              <model-select :options="states" v-model="form['state']" slot="input">
             </model-select>
            </part-input-warper>
            <!-- // INPUT -->
            <part-input v-model="form" name="sujet" label="Sujet"></part-input>
            <!-- // INPUT -->
            <part-input v-model="form" name="note" label="Note"></part-input>
          </div>
          <div class="row">
            <!-- // INPUT -->
            <part-input-warper name="contact_id" label="Contact" :form="form" vclass="col-md-4">
              <select class="form-control" name="contact_id" v-model="form['contact_id']" slot="input">
                <option v-for="contact in contacts" :value="contact.id">{{ contact.name }}</option>
              </select>
            </part-input-warper>
            <!-- // INPUT -->
            <part-input-warper name="action_id" label="Action à faire" :form="form" vclass="col-md-4">
              <select class="form-control" name="action_id" v-model="form['action_id']" slot="input">
                <option v-for="action in actions" :value="action.value">{{ action.text }}</option>
              </select>
            </part-input-warper>
            <!-- // INPUT -->
            <part-input-warper name="user_id" label="Responsable" :form="form" vclass="col-md-4">
              <div slot="input">
                <multi-select :options="users"
                                v-show="$store.state.role < 3"
                               :selected-options="selectedUsers"
                               placeholder="Choisir un responsable"
                               @select="onSelectUser">
                </multi-select>
                <div v-show="$store.state.role > 2">
                  <span class="label label-inverse" v-for=" user in selectedUsers"> {{ user.text }}</span>
                </div>
              </div>
            </part-input-warper>
          </div>
          <div class="row">
            <part-button-submit :editing="editing"></part-button-submit>
            <part-button-goback></part-button-goback>
          </div>
        </form>
      </part-panel>
    </div>
    <modal-large v-if="showModal" @close="showModal = false">
      <h3 slot="header">Première communication</h3>
      <form-ticket-comm :ticket="storedTicket" slot="body"></form-ticket-comm>
    </modal-large>
  </div>
</template>

<script>
    import { BasicSelect } from 'vue-search-select'
    import { MultiSelect } from 'vue-search-select'
    import { ModelSelect } from 'vue-search-select'
    import flatPickr from 'vue-flatpickr-component';
    import _ from 'lodash'
    import { Form } from './../../api/form.js';

    export default {
        components: { BasicSelect,MultiSelect,ModelSelect,flatPickr},
        data(){
          return{
            form : new Form({
              id:'',
              client_id:'',
              reference: '',
              date:'',
              sujet:'',
              state:'',
              note:'',
              contact_id:'',
              action_id:'',
              users: [],
            }),
            contacts:[],
            states: [{value:'1',text:'Fermé'},{value:'2',text:'En cours'},{value:'3',text:'Ouvert'}],
            color:'',
            selectedUsers: [],
            lastSelectedUsers: {},
            selectedClient:{},

            storedTicket: 0,
            showModal: false,
          }
        },
        computed:{
          editing: function(){
            if (this.$route.params.id) { this.color='warning'; return true }
            else{ this.color='success'; return false }
          },
          ticketId: function(){
            return this.$route.params.id
          },
          clientId: function(){
            return this.$route.params.clientid
          },
          clients: function(){
            return this.$store.state.clients
          },
          actions: function(){
            return this.$store.state.actions
          },
          guid:function(){
            return 'xxxxxxxx-xxxx'.replace(/[xy]/g, function(c) {
              var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
              return v.toString(16);
            });
          },
          users: function(){
            return this.$store.state.users
          },
        },
        created(){
          // Check if client ID is set Then load it into form
          if (this.clientId) {
            this.form.reference = this.guid+'-'+this.clientId;
            this.form.client_id = this.clientId;
            this.getContacts(this.clientId)
          }else {
            this.form.reference = this.guid+'-1122';
          }
          // Check if ticket ID is set Then load data into form
          if (this.ticketId) {
            axios.get('/tickets/'+this.ticketId)
              .then(response => {
                this.form.load(response.data)
                this.getResponsables()
            });
          }
          // Check if the role is able to change responsable or not
          this.checkRole()
        },
        mounted(){
          this.getClient()
        },
        methods: {
          getClient(){
            this.selectedClient = {}
            this.$store.state.clients.map((value,key) => {
              if (value.value == this.form.client_id) {
                this.selectedClient = value
              }
            });
          },
          onSelectClient (item) {
            this.selectedClient = item
            this.getContacts(item.value)
          },
          onSelectUser(selectedUsers, lastSelectedUsers) {
            this.selectedUsers = selectedUsers
            this.lastSelectedUsers = lastSelectedUsers
          },
          reset () {
            this.selectedUsers = [] // reset
          },
          selectOption () {
            this.selectedUsers = _.unionWith(this.selectedUsers, [this.users[0]], _.isEqual)
          },
          onSubmit(){
            this.prepareUsers();
            this.prepareClient();
            if (this.form.id == '') {
              this.form.post('/tickets')
                .then(data => {
                  Event.$emit('publish-success-message', data.message);
                  this.storedTicket = data.ticket
                  Vue.nextTick( () => {
                    this.showModal = true
                  })
                })
                .catch(errors =>{
                  console.log(errors);
                });
            }else{
              this.form.put('/tickets')
                .then(data => {
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
          prepareClient(){
            if (this.selectedClient) {
              this.form.client_id = this.selectedClient.value
            }
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
          getContacts(id){
            axios.get('/clients/'+id)
              .then(response => {
                this.contacts = response.data.contacts;
            });
          },
          checkRole(){
            if (this.$store.state.role > 2) {
              this.users.map((value,key) => {
                if (this.$store.state.user.id == value.value) {
                  this.selectedUsers.push(value)
                }
              })
            }
          },
          goback(){
              this.$router.go(-1);
          },
          customFormatter(date) {
            return moment(date).format('MMMM Do YYYY, h:mm:ss a');
          }
        }
    }
</script>

<style lang="css">
</style>
