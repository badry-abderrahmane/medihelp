<template lang="html">
  <div class="panel-wrapper collapse in">
    <div class="panel-body pa-0">
      <div class="chat-content">
        <ul class="chatapp-chat-nicescroll-bar pt-20">
          <li v-if="loading">
            <div class="col-md-8" style="display:flex;justify-content:center;align-items:center;width:100%;height:583px;">
              <center>
              <img src="images/loader.gif"/><br>
              <span class="inline-block capitalize-font mr-5">Chargement des données...</span>
              <h5 class=""></h5>
              </center>
            </div>
          </li>
          <li v-if="nothing">
            <div class="col-md-8" style="display:flex;justify-content:center;align-items:center;width:100%;height:583px;">
              <center>
              <i class="fa fa-battery-empty fa-5x"></i><br><br><br>
              <span class="inline-block capitalize-font mr-5">Historique de communication vide.</span>
              <h5 class=""></h5>
              </center>
            </div>
          </li>
          <li v-for="comm in comms" class=""v-bind:class="[ comm.typecomm.value == 'Recus' ? 'friend' : 'self', '']">

            <!-- Case : Recu -->
            <div v-if="comm.typecomm.value == 'Recus'" class="friend-msg-wrap" >
              <i class="fa fa-call"></i>
              <div class="msg pull-left">
                <p v-bind:class="[ comm.duree ? 'text-success' : 'text-danger', 'mb-10']">
                  <i v-bind:class="[ comm.duree ? 'fa-phone-square' : 'fa-envelope-o', 'fa']"></i>
                  <span v-text="comm.duree ? 'Appel téléphonique' : 'Courier Electronique'"></span>
                </p>
                <p class="h6">
                  <i class="ml-30">Durée: </i><strong class="ml-10" v-text="comm.duree ? comm.duree : 'Async'"></strong>
                  <i class="ml-30">Etat: </i><strong class="ml-10">{{ comm.etat.value}}</strong>
                  <i class="ml-30">Action: </i><strong class="ml-10">{{ comm.action.value}}</strong>
                  <i class="ml-30">Date: </i><strong class="ml-10">{{ comm.created_at }}</strong>
                </p><br>
                <p class="">{{ comm.message }}</p>
                <div class="msg-per-detail text-right">
                  <span class="msg-time txt-grey">{{ comm.created_at }}</span>
                </div>
              </div>
              <div class="clearfix"></div>
            </div>

            <!-- Case : Emis -->
            <div v-else class="self-msg-wrap">
              <div class="msg block pull-right">
                <p v-bind:class="[ comm.duree ? 'text-success' : 'text-danger', 'mb-10']" >
                  <i v-bind:class="[ comm.duree ? 'fa-phone-square' : 'fa-envelope-o', 'fa']"></i>
                  <span v-text="comm.duree ? 'Appel téléphonique' : 'Courier Electronique'"></span>
                </p>
                <p class="h6">
                  <i class="ml-30">Durée: </i><strong class="ml-10" v-text="comm.duree ? comm.duree : 'Async'"></strong>
                  <i class="ml-30">Etat: </i><strong class="ml-10">{{ comm.etat.value}}</strong>
                  <i class="ml-30">Action: </i><strong class="ml-10">{{ comm.action.value}}</strong>
                  <i class="ml-30">Date: </i><strong class="ml-10">{{ comm.created_at }}</strong>
                </p><br>
                <p class="">{{ comm.message }}</p>
                <div class="msg-per-detail text-right">
                  <span class="msg-time txt-grey">{{ comm.created_at }}</span>
                </div>
              </div>
              <div class="clearfix"></div>
            </div>
          </li>



          <!-- <li class="friend">
            <div class="friend-msg-wrap">
              <i class="fa fa-call"></i>
              <div class="msg pull-left">
                <p class="text-danger mb-10"><i class="fa fa-envelope-o mr-10"></i>Courier Electronique</p>
                <p class="h6">
                  <i class="ml-30">Durée: </i><strong class="ml-10">Async</strong>
                  <i class="ml-30">Etat: </i><strong class="ml-10">Traité</strong>
                  <i class="ml-30">Action: </i><strong class="ml-10">Envoyer un email</strong>
                  <i class="ml-30">Date: </i><strong class="ml-10">{{ ticket.created_at }}</strong>
                </p><br>
                <p class="">Bla bla kola la fourni la missi de kola houma wahed affaire de koloma noulk ikoulm barbara hafidBla bla kola la fourni la missi de kola houma wahed affaire de koloma noulk ikoulm barbara hafidBla bla kola la fourni la missi de kola houma wahed affaire de koloma noulk ikoulm barbara hafid</strong></p>
                <div class="msg-per-detail text-right">
                  <span class="msg-time txt-grey">{{ ticket.created_at }}</span>
                </div>
              </div>
              <div class="clearfix"></div>
            </div>
          </li>
          <li class="self">
            <div class="self-msg-wrap">
              <div class="msg block pull-right">
                <p class="text-danger mb-10"><i class="fa fa-envelope-o mr-10"></i>Courier Electronique</p>
                <p class="h6">
                  <i class="ml-30">Durée: </i><strong class="ml-10">Async</strong>
                  <i class="ml-30">Etat: </i><strong class="ml-10">Traité</strong>
                  <i class="ml-30">Action: </i><strong class="ml-10">Envoyer un email</strong>
                  <i class="ml-30">Date: </i><strong class="ml-10">{{ ticket.created_at }}</strong>
                </p><br>
                <p class="">Bla bla kola la fourni la missi de kola houma wahed affaire de koloma noulk ikoulm barbara hafidBla bla kola la fourni la missi de kola houma wahed affaire de koloma noulk ikoulm barbara hafidBla bla kola la fourni la missi de kola houma wahed affaire de koloma noulk ikoulm barbara hafid</strong></p>
                <div class="msg-per-detail text-right">
                  <span class="msg-time txt-grey">{{ ticket.created_at }}</span>
                </div>
              </div>
              <div class="clearfix"></div>
            </div>
          </li> -->
        </ul>
      </div>
      <div class="row " >
        <div class="col-md-2">

        </div>
        <div class="col-md-3 chatBtns">
          <button class="btn btn-block btn-sm btn-default" @click="$router.push({ path: '/tickets/appels/add/'+ticket.id })"><i class="fa fa-phone-square mr-10"></i>Nouveau appel</button>
        </div>
        <div class="col-md-3 chatBtns">
          <button class="btn btn-block btn-sm btn-default" @click="$router.push({ path: '/tickets/emails/add/'+ticket.id })"><i class="fa fa-envelope-o mr-10"></i>Nouveau Email</button>
        </div>
        <div class="col-md-3 chatBtns">
          <button class="btn btn-block btn-sm btn-default" @click="$router.push({ path: '/tickets/edit/'+ticket.client.id+'/'+ticket.id })"><i class="fa fa-edit mr-10"></i>Modifier ticket</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  //props:["ticket"],
  data(){
    return {
      loading: true,
      nothing: false,
      comms: [],
      ticket:'',
    }
  },
  computed:{
    commid: function(){
      return this.$route.params.id
    }
  },
  created(){
    this.getComms();
    this.getTicket();
    // console.log(this.ticket.id);
    // if (this.ticket.id) {
    //   console.log(this.ticket.id);
    //   axios.get('/tickets/communications/'+this.ticket.id)
    //     .then(response => {
    //       console.log(response.data);
    //       this.comms = response.data;
    //   });
    // }
  },
  watch: {
    // call again the method if the route changes
    '$route': 'getComms'
  },
  methods:{
    getComms(){
      this.comms = [];
      axios.get('/tickets/communications/'+this.commid)
        .then(response => {
          this.comms = response.data;
          if (this.comms.length == 0) {
            this.nothing = true;
          }else{
            this.nothing = false;
          }
          Vue.nextTick(function () {
            Event.$emit('init-slimscroll-chat');
          })
          this.loading = false;
      });
    },
    getTicket(){
      axios.get('/tickets/'+this.commid)
        .then(response => {
          console.log(response.data);
          this.ticket = response.data;
      });
    }
  },
  mounted(){

  }
}
</script>

<style lang="css">
.chatBtns{
  padding-top:  10px;
}
</style>
