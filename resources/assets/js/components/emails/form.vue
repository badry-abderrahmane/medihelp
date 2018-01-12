<template lang="html">
  <div>
    <part-panel>
      <div slot="heading">
        Nouveau email
      </div>
      <form v-on:submit.prevent="onSubmit" @keydown="form.errors.clear($event.target.name)" slot="body">
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label for="Contacts" class="control-label mb-10">Référence ticket</label>
              <input  class="form-control" v-model="reference" disabled>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label for="Contacts" class="control-label mb-10">Contact</label>
              <input  class="form-control" v-model="contact" disabled>
            </div>
          </div>

        </div>
        <div class="row">
          <part-input v-model="form" name="date" label="Date et heure"></part-input>
          <part-input v-model="form" name="sujet" label="Sujet"></part-input>

        </div>
        <div class="row">
          <div class="col-md-6">
            <div v-bind:class="[ form.errors.get('message') ? 'has-error' : '', 'form-group']">
              <label for="Message" class="control-label mb-10">Message</label>
              <textarea name="name" rows="8" class="form-control" v-model="form['message']"></textarea>
              <div class="help-block" v-if="form.errors.has('message')" v-text="form.errors.get('message')"></div>
            </div>
          </div>
          <div class="col-md-6">
            <div v-bind:class="[ form.errors.get('typecomm_id') ? 'has-error' : '', 'form-group']">
              <label for="typecomm_id" class="control-label mb-10">Type de communication</label>
              <select class="form-control" name="typecomm_id" v-model="form['typecomm_id']">
                <option v-for="typecomm in typecomms" :value="typecomm.value">{{ typecomm.text }}</option>
              </select>
              <div class="help-block" v-if="form.errors.has('typecomm_id')" v-text="form.errors.get('typecomm_id')"></div>
            </div>
          </div>

        </div>
        <div class="row">
          <div class="col-md-6">
            <div v-bind:class="[ form.errors.get('etat_id') ? 'has-error' : '', 'form-group']">
              <label for="etat_id" class="control-label mb-10">Etat</label>
              <select class="form-control" name="etat_id" v-model="form['etat_id']">
                <option v-for="etat in etats" :value="etat.value">{{ etat.text }}</option>
              </select>
              <div class="help-block" v-if="form.errors.has('etat_id')" v-text="form.errors.get('etat_id')"></div>
            </div>
          </div>
          <div class="col-md-6">
            <div v-bind:class="[ form.errors.get('action_id') ? 'has-error' : '', 'form-group']">
              <label for="Actions" class="control-label mb-10">Action</label>
              <select class="form-control" name="action_id" v-model="form['action_id']">
                <option v-for="action in actions" :value="action.value">{{ action.text }}</option>
              </select>
              <div class="help-block" v-if="form.errors.has('action_id')" v-text="form.errors.get('action_id')"></div>
            </div>
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
              date: '',
              sujet: '',
              message: '',
              typecomm_id: '',
              action_id: '',
              etat_id: '',
              ticket_id: '',
            }),
            reference:'',
            contact:'',
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
            return this.$route.params.ticketid
          },
          emailId: function(){
            return this.$route.params.id
          },
          typecomms: function(){
            return this.$store.state.typecomms
          },
          actions: function(){
            return this.$store.state.actions
          },
          etats: function(){
            return this.$store.state.etats
          },
        },
        created(){
          if (this.ticketId) {
            axios.get('/tickets/'+this.ticketId)
              .then(response => {
                this.form.ticket_id = this.ticketId;
                this.reference = response.data.reference;
                this.contact = response.data.contact.name;
            });
          }

          if (this.emailid) {
            axios.get('/emails/'+this.emailid)
              .then(response => {
                this.form.load(response.data);
            });
          }
        },

        methods: {
          onSubmit(){
            if (this.form.id == '') {
              this.form.post('/emails')
                .then(data => {
                  Event.$emit('publish-success-message', data.message);
                  this.goback();
                })
                .catch(errors =>{
                  console.log(errors);
                });
            }else{
              this.form.put('/emails')
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
