<template lang="html">
  <div>
    <div class="col-md-12">
      <part-panel :color="color">
        <div slot="heading">
          <span v-if="!editing">Nouveau appel</span>
          <span v-else>Mise à jour appel</span>
        </div>
        <form v-on:submit.prevent="onSubmit" @keydown="form.errors.clear($event.target.name)" slot="body">
          <div class="row">
            <part-input-warper name="reference" label="Référence ticket" :form="form" vclass="col-md-6">
              <input  class="form-control" v-model="reference" slot="input" disabled>
            </part-input-warper>
            <part-input-warper name="contact" label="Contact" :form="form" vclass="col-md-6">
              <input  class="form-control" v-model="contact" slot="input" disabled>
            </part-input-warper>
          </div>
          <div class="row">
            <part-input v-model="form" name="sujet" label="Sujet"></part-input>
            <part-input-warper name="date" label="Date" :form="form" vclass="col-md-4">
              <flat-pickr v-model="form.date" class="form-control" slot="input"></flat-pickr>
            </part-input-warper>
            <part-input-warper name="typecomm_id" label="Type de communication" :form="form" vclass="col-md-4">
              <select class="form-control" name="typecomm_id" v-model="form['typecomm_id']" slot="input">
                <option v-for="typecomm in typecomms" :value="typecomm.value">{{ typecomm.text }}</option>
              </select>
            </part-input-warper>
          </div>
          <div class="row">
            <part-input-warper name="message" label="Message" :form="form" vclass="col-md-12">
              <textarea name="message" rows="8" class="form-control" v-model="form['message']" slot="input"></textarea>
            </part-input-warper>
          </div>
          <div class="row">
            <part-input-warper name="duree" label="Durée" :form="form" vclass="col-md-4">
              <input slot="input" id="tch1" type="text" name="tch1" data-bts-button-down-class="btn btn-secondary btn-outline" data-bts-button-up-class="btn btn-secondary btn-outline">
            </part-input-warper>
            <part-input-warper name="etat_id" label="Etat" :form="form" vclass="col-md-4">
              <select class="form-control" name="etat_id" v-model="form['etat_id']" slot="input">
                <option v-for="etat in etats" :value="etat.value">{{ etat.text }}</option>
              </select>
            </part-input-warper>
            <part-input-warper name="action_id" label="Action à faire" :form="form" vclass="col-md-4">
              <select class="form-control" name="action_id" v-model="form['action_id']" slot="input">
                <option v-for="action in actions" :value="action.value">{{ action.text }}</option>
              </select>
            </part-input-warper>

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
    import flatPickr from 'vue-flatpickr-component';
    import 'flatpickr/dist/flatpickr.css';
    export default {
        components: {
          ModelSelect,
          flatPickr
        },
        data(){
          return{
            form : new Form({
              id:'',
              date: '',
              sujet: '',
              message: '',
              duree: '',
              typecomm_id: '',
              action_id: '',
              etat_id: '',
              ticket_id: '',
            }),
            reference:'',
            contact:'',
            ticket:'',
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
          ticketId: function(){
            return this.$route.params.ticketid
          },
          appelId: function(){
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
                this.ticket = response.data;
            });
          }

          if (this.appelId) {
            axios.get('/appels/'+this.appelId)
              .then(response => {
                this.form.load(response.data);
            });
          }
        },
        mounted(){
          $("input[name='tch1']").TouchSpin({
              min: 0,
              max: 100,
              step: 0.1,
              decimals: 2,
              boostat: 5,
              maxboostedstep: 10,
              postfix: 'min.sec'
          });
        },
        methods: {
          onSubmit(){
            this.form.duree = $('#tch1').val();
            if (this.form.id == '') {
              this.form.post('/appels')
                .then(data => {
                  Event.$emit('publish-success-message', data.message);
                  this.$router.push({ path: '/tickets/chat/show/'+this.ticketId })
                })
                .catch(errors =>{
                  console.log(errors);
                });
            }else{
              this.form.put('/appels')
                .then(data => {
                  Event.$emit('publish-success-message', data.message);
                  this.$router.push({ path: '/tickets/chat/show/'+this.ticketId })
                })
                .catch(errors => {
                  console.log(errors);
                });
            }
          },
        }
    }
</script>

<style lang="css">
</style>
