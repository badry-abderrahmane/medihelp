<template lang="html">
  <div class="col-xlg-10 col-lg-8 col-md-8">
      <div class="card-body">
          <div class="btn-group m-b-10 m-r-10" role="group" aria-label="Button group with nested dropdown">
              <button v-show="!allSelected" type="button" class="btn btn-secondary font-18 text-dark" @click="selectAll">
                <i class="mdi mdi-select-all"></i>
              </button>
              <button v-show="allSelected" type="button" class="btn btn-secondary font-18 text-dark" @click="unselectAll">
                <i class="mdi mdi-select-inverse"></i>
              </button>
              <!-- <button type="button" class="btn btn-secondary font-18 text-dark"><i class="mdi mdi-alert-octagon"></i></button> -->
              <button type="button" class="btn btn-secondary font-18 text-dark" @click="deleteThis"><i class="mdi mdi-delete"></i></button>
          </div>
          <div class="btn-group m-b-10 m-r-10" role="group" aria-label="Button group with nested dropdown">
              <div class="btn-group" role="group">
                  <button id="btnGroupDrop1" type="button" class="btn btn-secondary text-dark dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i class="mdi mdi-folder font-18 "></i> </button>
                  <div class="dropdown-menu" aria-labelledby="btnGroupDrop1"> <a class="dropdown-item" @click="spamThis" >Marquer comme Spam</a></div>
              </div>
              <div class="btn-group " role="group">
                  <button id="btnGroupDrop1" type="button" class="btn text-dark btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i class="mdi mdi-label font-18"></i> </button>
                  <div class="dropdown-menu" aria-labelledby="btnGroupDrop1"> <a class="dropdown-item" @click="attachTicket">Attacher un ticket</a> <a class="dropdown-item" @click="transferThis">Transférer</a>  </div>
              </div>
          </div>
          <button type="button " class="btn btn-secondary m-r-10 m-b-10 text-dark" @click="getMail"><i class="mdi mdi-reload font-18"></i></button>
          <!-- <div class="btn-group m-b-10" role="group">
              <button id="btnGroupDrop1" type="button" class="btn m-b-10 text-dark btn-secondary p-10 dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Plus </button>
              <div class="dropdown-menu" aria-labelledby="btnGroupDrop1"> <a class="dropdown-item" @click="unreadThis">Marquer comme non lu</a> <a class="dropdown-item" @click="nonImportantThis">Marquer comme non important</a> </div>
          </div> -->
      </div>
      <div class="card-body p-t-0">
          <div class="card b-all shadow-none">
              <div class="inbox-center table-responsive">
                  <table class="table table-hover no-wrap">
                      <div>
                        <ul>
                          <li v-if="loading">
                            <div class="chat-content" style="display:flex;justify-content:center;align-items:center;width:100%;">
                              <center>
                              <img src="assets/images/loader.gif" width="50%"/><br>
                              <span>Chargement des données...</span>
                              <h5 class=""></h5>
                              </center>
                            </div>
                          </li>
                          <li v-if="!mails.length && !loading">
                            <div class="chat-content" style="display:flex;justify-content:center;align-items:center;width:100%;">
                              <center>
                              <i class="fa fa-battery-empty fa-5x"></i><br><br><br>
                              <span >Pas de nouveaux emails.</span>
                              </center>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <tbody v-if="!loading">
                          <tr class="unread" v-for="mail in mails">
                              <td style="width:40px">
                                  <div class="checkbox">
                                      <input type="checkbox" :id="'checkbox'+mail.nb" v-model="selected[mail.nb]">
                                      <label :for="'checkbox'+mail.nb"></label>
                                  </div>
                              </td>
                              <td style="width:40px" class="hidden-xs-down"><i class="fa fa-star-o"></i></td>
                              <td class="hidden-xs-down">{{ mail.fromName }}</td>
                              <td class="max-texts pull-left"> <a href="app-email-detail.html" />
                                <!-- <span class="label label-info m-r-10">Work</span> -->
                                {{ mail.subject }}
                              </td>
                              <td class="hidden-xs-down"><i class="fa fa-paperclip"></i></td>
                              <td class="text-right"> {{ mail.date }} </td>
                          </tr>
                      </tbody>
                  </table>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      mails: [],
      loading: true,
      selected: [],
      allSelected: false,
    }
  },
  created(){
    this.getMail()
  },
  methods:{
    getMail(){
      this.loading = true
      axios.get('/mail/get')
        .then(response => {
          console.log(response.data);
          this.mails = response.data
          this.loading = false
      });
    },
    selectAll(){
      this.allSelected = true
      this.mails.map((value,key) => {
        this.selected[value.nb] = true
        Vue.nextTick( function() {
          $("#checkbox"+value.nb ).prop( "checked", true );
        })
      })
    },
    unselectAll(){
      this.allSelected = false
      this.mails.map((value,key) => {
        this.selected[value.nb] = false
        Vue.nextTick( function() {
          $("#checkbox"+value.nb ).prop( "checked", false );
        })
      })
    },
    deleteThis(){
      axios.post('/mail/toTrash', {
        selected: this.selected,
      })
      .then((response) => {
        this.getMail()
      })
    },
    spamThis(){
      axios.post('/mail/toSpam', {
        selected: this.selected,
      })
      .then((response) => {
        this.getMail()
      })
    },
    attachTicket(){
      axios.post('/mail/attachTicket', {
        selected: this.selected,
      })
      .then(function (response) {
        console.log(response);
      })
    },
    transferThis(){
      axios.post('/mail/transfer', {
        selected: this.selected,
      })
      .then(function (response) {
        console.log(response);
      })
    },
    unreadThis(){
      axios.post('/mail/unread', {
        selected: this.selected,
      })
      .then(function (response) {
        console.log(response);
      })
    },

  }
}
</script>

<style lang="css">
</style>
