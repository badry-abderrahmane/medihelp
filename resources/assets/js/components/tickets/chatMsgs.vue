<template lang="html">
  <div class="chat-right-aside">
      <div class="chat-main-header">
          <div class="p-20 b-b">
              <h3 class="box-title">{{ ticket.sujet }}</h3>
          </div>
      </div>
      <div class="chat-rbox">
          <ul class="chat-list p-20 p-t-10">
              <li v-if="loading">
                <div class="chat-content" style="display:flex;justify-content:center;align-items:center;width:100%;">
                  <center>
                  <img src="assets/images/loader.gif" width="50%"/><br>
                  <span>Chargement des données...</span>
                  <h5 class=""></h5>
                  </center>
                </div>
              </li>
              <li v-if="nothing && !loading">
                <div class="chat-content" style="display:flex;justify-content:center;align-items:center;width:100%;">
                  <center>
                  <i class="fa fa-battery-empty fa-5x"></i><br><br><br>
                  <span >Historique de communication vide.</span>
                  </center>
                </div>
              </li>
              <!--chat Row -->
              <li v-for="comm in comms" v-bind:class="[ comm.typecomm.value == 'Recus' ? '' : 'reverse', '']">
                  <div v-bind:class="[ comm.typecomm.value == 'Recus' ? '' : 'pull-right', 'chat-img']">
                    <i v-bind:class="[ comm.duree ? 'fa-phone text-success' : 'fa-envelope-o text-danger', 'fa fa-2x']"></i>
                  </div>
                  <div class="chat-content p-0">
                      <h5 v-if="comm.typecomm.value == 'Recus'" v-bind:class="[ comm.duree ? 'text-success' : 'text-danger', '']">{{ ticket.contact.name }}</h5>
                      <div v-if="comm.typecomm.value == 'Recus'" class="box bg-light-inverse">
                        <p class="card-subtitle">
                          <small><i class="m-l-30">Durée: </i><span class="text-info m-l-10" v-text="comm.duree ? comm.duree : 'Async'"></span>
                          <i class="m-l-30">Etat: </i><span class="text-info m-l-10">{{ comm.etat.value}}</span>
                          <i class="m-l-30">Action: </i><span class="text-info m-l-10">{{ comm.action.value}}</span>
                          <i class="m-l-30">Date: </i><span class="text-info m-l-10">{{ comm.created_at }}</span>
                          <i class="m-l-30">Responsable: </i><span class="text-info m-l-10">{{ comm.user.name }}</span></small>
                        </p><br>
                        <p class="text-inverse">{{ comm.message }}</p>
                      </div>
                      <div v-else class="box bg-light-success">
                        <p class="card-subtitle pull-left">
                          <small><i class="m-l-30">Durée: </i><span class="text-info m-l-10" v-text="comm.duree ? comm.duree : 'Async'"></span>
                          <i class="m-l-30">Etat: </i><span class="text-info m-l-10">{{ comm.etat.value}}</span>
                          <i class="m-l-30">Action: </i><span class="text-info m-l-10">{{ comm.action.value}}</span>
                          <i class="m-l-30">Date: </i><span class="text-info m-l-10">{{ comm.created_at }}</span>
                          <i class="m-l-30">Responsable: </i><span class="text-info m-l-10">{{ comm.user.name }}</span></small>
                        </p><br>
                        <p class="text-inverse pull-left" >{{ comm.message }}</p>
                      </div>
                  </div>
              </li>
          </ul>
      </div>
      <div class="card-body b-t">
        <div class="row " >
          <div class="col-md-2">

          </div>
          <div class="col-md-3 chatBtns">
            <button class="btn btn-block btn-outline-info" @click="$router.push({ path: '/tickets/appels/add/'+ticket.id })"><i class="fa fa-phone-square m-r-10"></i>Nouveau appel</button>
          </div>
          <div class="col-md-3 chatBtns">
            <button class="btn btn-block btn-outline-info" @click="$router.push({ path: '/tickets/emails/add/'+ticket.id })"><i class="fa fa-envelope-o m-r-10"></i>Nouveau Email</button>
          </div>
          <div class="col-md-3 chatBtns">
            <button class="btn btn-block btn-outline-info" @click="$router.push({ path: '/clients/tickets/edit/'+ticket.client.id+'/'+ticket.id })"><i class="fa fa-edit m-r-10"></i>Modifier ticket</button>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      loading: true,
      nothing: false,
      comms: [],
      ticket:'',
    }
  },
  computed:{
    ticketId: function(){
      return this.$route.params.ticketid
    },
  },
  watch:{
    '$route':  function (){
      this.getTicket()
      this.getComms()
    }
  },
  created(){
    this.getTicket()
    this.getComms()
  },
  methods:{
    getComms(){
      this.comms = []
      this.loading = true
      axios.get('/tickets/communications/'+this.ticketId)
        .then(response => {
          this.comms = response.data;
          if (this.comms.length == 0) {
            this.loading = false
            this.nothing = true;
          }else{
            this.nothing = false;
          }
          Vue.nextTick(function () {
            Event.$emit('init-slimscroll-chat');
          })
          this.loading = false
      });
    },
    getTicket(){
      this.ticket = ''
      this.loading = true
      if (this.ticketId) {
        axios.get('/tickets/'+this.ticketId)
          .then(response => {
            this.ticket = response.data
            this.loading = false
        });
      }
    }
  }
}
</script>

<style lang="css">
.chatBtns{
  padding-top:  10px;
}
</style>
