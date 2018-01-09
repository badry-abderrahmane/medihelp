<template lang="html">
  <div class="recent-chat-wrap">
    <div class="row">
      <div class="col-md-9">
        <div class="panel-heading ma-0 pt-15">
          <div class="goto-back">
            <a id="goto_back_widget_1" href="javascript:void(0)" class="inline-block txt-grey">
              <i class="zmdi zmdi-account-add"></i>
            </a>
            <span class="inline-block txt-dark">{{ ticket.contact.name }}</span>
            <a href="javascript:void(0)" class="inline-block text-right txt-grey"><i class="zmdi zmdi-more"></i></a>
            <div class="clearfix"></div>
          </div>
        </div>
        <div class="panel-wrapper collapse in">
          <div class="panel-body pa-0">
            <div class="chat-content">
              <div class="slimScrollDiv" style="position: relative; overflow: hidden; width: auto; height: 483px;"><ul class="chatapp-chat-nicescroll-bar pt-20" style="overflow: hidden; width: auto; height: 483px;">
                <li class="friend">
                  <div class="friend-msg-wrap">
                    <i class="fa fa-call"></i>
                    <img class="user-img img-circle block pull-left" src="dist/img/user.png" alt="user">
                    <div class="msg pull-left">
                      <p>Type: APPEL</p>
                      <p>Hello Jason, how are you, it's been a long time since we last met?</p>
                      <div class="msg-per-detail text-right">
                        <span class="msg-time txt-grey">2:30 PM</span>
                      </div>
                    </div>
                    <div class="clearfix"></div>
                  </div>
                </li>
                <li class="self mb-10">
                  <div class="self-msg-wrap">
                    <div class="msg block pull-right"> Oh, hi Sarah I'm have got a new job now and is going great.
                      <div class="msg-per-detail text-right">
                        <span class="msg-time txt-grey">2:31 pm</span>
                      </div>
                    </div>
                    <div class="clearfix"></div>
                  </div>
                </li>
                <li class="self">
                  <div class="self-msg-wrap">
                    <div class="msg block pull-right">  How about you?
                      <div class="msg-per-detail text-right">
                        <span class="msg-time txt-grey">2:31 pm</span>
                      </div>
                    </div>
                    <div class="clearfix"></div>
                  </div>
                </li>
                <li class="friend">
                  <div class="friend-msg-wrap">
                    <img class="user-img img-circle block pull-left" src="dist/img/user.png" alt="user">
                    <div class="msg pull-left">
                      <p>Not too bad.</p>
                      <div class="msg-per-detail  text-right">
                        <span class="msg-time txt-grey">2:35 pm</span>
                      </div>
                    </div>
                    <div class="clearfix"></div>
                  </div>
                </li>
              </ul><div class="slimScrollBar" style="background: rgb(135, 135, 135); width: 4px; position: absolute; top: 0px; opacity: 0.4; display: none; border-radius: 0px; z-index: 99; right: 1px; height: 483px;"></div><div class="slimScrollRail" style="width: 4px; height: 100%; position: absolute; top: 0px; display: none; border-radius: 7px; background: rgb(51, 51, 51); opacity: 0.2; z-index: 90; right: 1px;"></div></div>
            </div>
            <add-ticket-chat ></add-ticket-chat>
          </div>
        </div>
      </div>
      <div class="col-md-3" style="border-left: solid 0.1px;border-color: lightgrey">
        <div class="panel panel-primary contact-card card-view">
								<div class="panel-wrapper collapse in">
									<div class="panel-body row">
										<div class="user-others-details pl-15 pr-15">
											<div class="mb-15">
												<i class="zmdi zmdi-account inline-block mr-10"></i>
												<span class="inline-block txt-dark">{{ ticket.client.name }}</span>
											</div>
											<div class="mb-15">
												<i class="zmdi zmdi-ticket-star inline-block mr-10"></i>
												<span class="inline-block txt-dark">{{ ticket.sujet }}</span>
											</div>
											<div class="mb-15">
												<i class="fa fa-barcode inline-block mr-10"></i>
												<span class="inline-block txt-dark">{{ ticket.reference }}</span>
											</div>
											<div>
												<i class="fa fa-calendar-o inline-block mr-10"></i>
												<span class="inline-block txt-dark">{{ ticket.created_at }}</span>
											</div>
										</div>
										<hr class="light-grey-hr mt-20 mb-20">
										<div class="emp-detail pl-15 pr-15">
											<center><div class="mb-5">
												<span class="inline-block capitalize-font mr-5">Dérnière communication:</span><br>
												<span class="txt-dark">12-10-2016</span><br>
											</div><br>
											<div>
												<span class="inline-block capitalize-font mr-5">Responsable:</span><br>
												<span class="txt-dark">Walid</span><br>
											</div><br>
                      <div>
												<span class="inline-block capitalize-font mr-5">Status:</span><br>
                        <button v-if="ticket.state == 1" class="btn btn-danger btn-sm  btn-anim">
                          <i class="fa fa-pencil"></i>
                          <span class="btn-text">FERME</span>
                        </button>
                        <button v-if="ticket.state == 2" class="btn btn-warning btn-sm  btn-anim">
                          <i class="fa fa-pencil"></i>
                          <span class="btn-text">EN COURS</span>
                        </button>
                        <button v-if="ticket.state == 3" class="btn btn-success btn-sm  btn-anim">
                          <i class="fa fa-pencil"></i>
                          <span class="btn-text">OUVERT</span>
                        </button>
											</div><br>
                      <div>
												<span class="inline-block capitalize-font mr-5">Action:</span><br>
                        <button class="btn btn-info btn-sm btn-outline btn-anim">
                          <i class="fa fa-pencil"></i>
                          <span class="btn-text">{{ ticket.action.value }}</span>
                        </button>
											</div>
                      </center>
										</div>
									</div>
								</div>
							</div>
      </div>
    </div>

  </div>

</template>

<script>
export default {
  data(){
    return {
      ticket: '',
    }
  },
  // computed:{
  //   ticketId: function(){
  //     return this.$route.params.id
  //   }
  // },
  beforeRouteEnter (to, from, next) {
    axios.get('/tickets/'+to.params.id)
      .then(response => {
        next(vm => vm.setTicket(response.data))
    });
  },
  beforeRouteUpdate (to, from, next) {
    this.ticket = ''
    axios.get('/tickets/'+to.params.id)
      .then(response => {
        this.setTicket(response.data)
        next()
    });
  },
  methods:{
    setTicket(ticket){
      this.ticket = ticket;
    }
  }
}
</script>

<style lang="css">
</style>
