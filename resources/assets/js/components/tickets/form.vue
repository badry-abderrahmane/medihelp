<template lang="html">
  <div>
    <global-unite-first>
      <side-client slot="content"></side-client>
    </global-unite-first>
    <global-unite-middle>
      <div class="col-md-12" slot="content">
        <part-panel>
          <div slot="heading">
            Nouveau ticket
          </div>
          <form v-on:submit.prevent="onSubmit" @keydown="form.errors.clear($event.target.name)" slot="body">
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label for="Clients" class="control-label mb-10">Client</label>
                  <select class="form-control" name="client_id" v-model="form['client_id']" disabled>
                    <option v-for="client in clients" :value="client.value">{{ client.text }}</option>
                  </select>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="Clients" class="control-label mb-10">Référence</label>
                  <input name="reference" v-model="form['reference']" class="form-control" disabled>
                </div>
              </div>
            </div>
            <div class="row">
              <part-input v-model="form" name="date" label="Date et heure"></part-input>
              <div class="col-md-6">
                <div v-bind:class="[ form.errors.get('state') ? 'has-error' : '', 'form-group']">
                  <label for="State" class="control-label mb-10">Status</label>
                  <model-select :options="states" v-model="form['state']">
                 </model-select>
                 <div class="help-block" v-if="form.errors.has('state')" v-text="form.errors.get('state')"></div>
                </div>
              </div>
            </div>
            <div class="row">
              <part-input v-model="form" name="sujet" label="Sujet"></part-input>
              <part-input v-model="form" name="note" label="Note"></part-input>
            </div>
            <div class="row">
              <div class="col-md-6">
                <div v-bind:class="[ form.errors.get('contact_id') ? 'has-error' : '', 'form-group']">
                  <label for="Contacts" class="control-label mb-10">Contact</label>
                  <select class="form-control" name="contact_id" v-model="form['contact_id']">
                    <option v-for="contact in contacts" :value="contact.id">{{ contact.name }}</option>
                  </select>
                  <div class="help-block" v-if="form.errors.has('contact_id')" v-text="form.errors.get('contact_id')"></div>
                </div>
              </div>
              <div class="col-md-6">
                <div v-bind:class="[ form.errors.get('state') ? 'has-error' : '', 'form-group']">
                  <label for="Actions" class="control-label mb-10">Action</label>
                  <select class="form-control" name="action_id" v-model="form['action_id']">
                    <option v-for="action in actions" :value="action.value">{{ action.text }}</option>
                  </select>
                  <div class="help-block" v-if="form.errors.has('action_id')" v-text="form.errors.get('action_id')"></div>
                </div>
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
              reference: '',
              date:'',
              sujet:'',
              state:'',
              note:'',
              contact_id:'',
              action_id:'',
            }),
            contacts:'',
            states: [{value:'1',text:'Fermé'},{value:'2',text:'En cours'},{value:'3',text:'Ouvert'}],
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
          }
        },
        created(){
          if (this.clientId) {
            this.form.reference = this.guid+'-'+this.clientId;
            this.form.client_id = this.clientId;
          }

          if (this.clientId) {
            axios.get('/clients/'+this.clientId)
              .then(response => {
                this.contacts = response.data.contacts;
            });
          }

          if (this.ticketId) {
            axios.get('/tickets/'+this.ticketId)
              .then(response => {
                this.form.load(response.data);
            });
          }
        },

        methods: {
          onSubmit(){
            if (this.form.id == '') {
              this.form.post('/tickets')
                .then(data => {
                  Event.$emit('publish-success-message', data.message);
                  this.goback();
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

          goback(){
              this.$router.go(-1);
          }
        }
    }
</script>

<style lang="css">
</style>
