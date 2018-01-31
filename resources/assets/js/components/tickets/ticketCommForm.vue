<template lang="html">
  <div>
    <div class="row">
      <div class="col-md-12">
        <div class="jumbotron p-1">
          <center>
            <label for="one" class="font-weight-bold">Choix Support :</label>
            <input type="radio" id="one" value="1" v-model="commtype">
            <label for="one">Téléphone</label>
            <input type="radio" id="two" value="2" v-model="commtype">
            <label for="two">Courier électronique</label>
          </center>
        </div>
      </div>
    </div>
    <!-- FORM -->
    <form v-on:submit.prevent="onSubmit" @keydown="form.errors.clear($event.target.name)" slot="body">
        <div class="row">
          <part-input-warper name="typecomm_id" label="Type de comm" :form="form" vclass="col-md-6">
            <select class="form-control" name="typecomm_id" v-model="form['typecomm_id']" slot="input">
              <option v-for="typecomm in typecomms" :value="typecomm.value">{{ typecomm.text }}</option>
            </select>
          </part-input-warper>
          <part-input-warper name="etat_id" label="Etat" :form="form" vclass="col-md-6">
            <select class="form-control" name="etat_id" v-model="form['etat_id']" slot="input">
              <option v-for="etat in etats" :value="etat.value">{{ etat.text }}</option>
            </select>
          </part-input-warper>
          <part-input-warper name="action_id" label="Action à faire" :form="form" vclass="col-md-6">
            <select class="form-control" name="action_id" v-model="form['action_id']" slot="input">
              <option v-for="action in actions" :value="action.value">{{ action.text }}</option>
            </select>
          </part-input-warper>
          <part-input-warper v-show="commtype == 1" name="duree" label="Durée" :form="form" vclass="col-md-6">
            <input slot="input" id="tch1" type="text" name="tch1" data-bts-button-down-class="btn btn-secondary btn-outline" data-bts-button-up-class="btn btn-secondary btn-outline">
          </part-input-warper>
        </div>
        <div class="row">
          <part-input-warper name="message" label="Message" :form="form" vclass="col-md-12">
            <textarea name="message" rows="8" class="form-control" v-model="form['message']" slot="input"></textarea>
          </part-input-warper>
        </div>
        <div class="row">
          <part-button-submit :editing="false"></part-button-submit>
        </div>
    </form>
  </div>
</template>

<script>
import { ModelSelect } from 'vue-search-select'
import { Form } from './../../api/form.js';

export default {
  components: {
    ModelSelect,
  },
  props:["ticket"],
  data(){
    return {
      form : new Form({
        date: '',
        sujet: '',
        message: '',
        duree: '',
        typecomm_id: '',
        action_id: '',
        etat_id: '',
        ticket_id: '',
      }),
      commtype: 1,
    }
  },
  computed:{
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
    this.loadTicket();
  },
  mounted(){
    this.initTouchSpin()
  },
  methods:{
    onSubmit(){
      this.form.duree = $('#tch1').val();
      var ticketID = this.form.ticket_id;
      if (this.commtype == 1) {
        this.form.post('/appels')
          .then(data => {
            Event.$emit('publish-success-message', data.message);
            this.$router.push({ path: '/tickets/chat/show/'+ticketID })
          })
          .catch(errors =>{
            console.log(errors);
          });
      }else{
        this.form.post('/emails')
          .then(data => {
            Event.$emit('publish-success-message', data.message);
            this.$router.push({ path: '/tickets/chat/show/'+ticketID })
          })
          .catch(errors =>{
            console.log(errors);
          });
      }
    },
    loadTicket(){
      this.form.date = this.ticket.date
      this.form.sujet = this.ticket.sujet
      this.form.ticket_id = this.ticket.id
    },
    initTouchSpin(){
      $("input[name='tch1']").TouchSpin({
          min: 0,
          max: 100,
          step: 0.1,
          decimals: 2,
          boostat: 5,
          maxboostedstep: 10,
          postfix: 'min.sec'
      });
    }
  }
}
</script>

<style lang="css">
</style>
