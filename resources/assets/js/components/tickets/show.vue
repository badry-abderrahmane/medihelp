<template lang="html">
  <div>
    <global-unite-middle>
      <div class="col-md-12 pr-0" slot="content">
        <chat-title :ticket="ticket"></chat-title>
        <chat-msgs :ticket="ticket"></chat-msgs>
      </div>
    </global-unite-middle>
    <!-- chat Content -->
    <global-unite-last>
      <div class="col-md-12" slot="content">
        <chat-infos :ticket="ticket"></chat-infos>
      </div>
    </global-unite-last>


  </div>
</template>

<script>
export default {
  data(){
    return {
      ticket: { client:{ name:''}, action:{ value:''}, contact:{ name:''}},
      //comms:[],
    }
  },

  beforeRouteEnter (to, from, next) {
    axios.get('/tickets/'+to.params.id)
      .then(response => {
        next(vm => vm.setTicket(response.data))
    });
    // axios.get('/tickets/communications/'+to.params.id)
    //   .then(response => {
    //     next(vm => vm.setComms(response.data))
    // });
  },
  beforeRouteUpdate (to, from, next) {
    this.ticket = { client:{ name:''}, action:{ value:''}, contact:{ name:''}}
    this.comms = []
    axios.get('/tickets/'+to.params.id)
      .then(response => {
        this.setTicket(response.data)
        next()
    });
    // axios.get('/tickets/communications/'+to.params.id)
    //   .then(response => {
    //     this.setComms(response.data)
    //     next()
    // });
  },
  methods:{
    setTicket(ticket){
      this.ticket = ticket;
    },
    // setComms(comms){
    //   this.comms = comms;
    // }
  }
}
</script>

<style lang="css">
</style>
