<template lang="html">
  <div class="col-md-12">
    <div v-if="ticket != ''" >
        <small class="text-muted">Ticket #Ref:</small><h6>{{ ticket.reference }}</h6>
        <small class="text-muted">Sujet:</small><h6>{{ ticket.sujet }}</h6>
        <small class="text-muted">Client:</small><h6>{{ ticket.client.name }}</h6>
        <small class="text-muted">Date d'incident:</small><h6>{{ ticket.date }}</h6>
        <small class="text-muted">Appels:</small><h6>{{ countAppels }}</h6>
        <small class="text-muted">Emails:</small><h6>{{ countEmails }}</h6>
        <small class="text-muted">Responsable:</small><h6>walid</h6>
        <small class="text-muted">Status:</small>
        <h6>
          <button v-if="ticket.state == 1" class="btn waves-effect waves-light btn-danger btn-sm" @click="$router.push({ path: '/clients/tickets/edit/'+ticket.client.id+'/'+ticket.id })">
            <i class="fa fa-pencil m-r-10"></i>
            <span class="btn-text">FERME</span>
          </button>
          <button v-if="ticket.state == 2" class="btn waves-effect waves-light btn-sm btn-warning" @click="$router.push({ path: '/clients/tickets/edit/'+ticket.client.id+'/'+ticket.id })">
            <i class="fa fa-pencil m-r-10"></i>
            <span class="btn-text">EN COURS</span>
          </button>
          <button v-if="ticket.state == 3" class="btn waves-effect waves-light btn-sm btn-success" @click="$router.push({ path: '/clients/tickets/edit/'+ticket.client.id+'/'+ticket.id })">
            <i class="fa fa-pencil m-r-10"></i>
            <span class="btn-text">OUVERT</span>
          </button>
        </h6>
        <small class="text-muted">Action:</small>
        <h6>
          <button class="btn btn-sm btn-outline-primary" @click="$router.push({ path: '/clients/tickets/edit/'+ticket.client.id+'/'+ticket.id })">
            <i class="fa fa-pencil m-r-10"></i>
            <span class="btn-text">{{ ticket.action.value }}</span>
          </button>
        </h6>
        <small class="text-muted">Note:</small><h6>{{ ticket.note }}</h6>
    </div>
    <div v-else>
      <small class="text-muted"><i class="fa fa-info-circle m-r-10"></i>Veuillez séléctionner un ticket</small></h6>
    </div>
  </div>

</template>

<script>
export default {
  data(){
    return {
      ticket:'',
    }
  },
  computed:{
    ticketId: function(){
      return this.$route.params.ticketid
    },
    countAppels: function(){
      return this.ticket.appels.length
    },
    countEmails: function(){
      return this.ticket.emails.length
    },
  },
  watch:{
    '$route':'getTicket'
  },
  created(){
    this.getTicket()
  },
  methods:{
    getTicket(){
      this.ticket = ''
      if (this.ticketId) {
        axios.get('/tickets/'+this.ticketId)
          .then(response => {
            this.ticket = response.data
        });
      }
    }
  }
}
</script>

<style lang="css">
</style>
