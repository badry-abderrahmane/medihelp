<template lang="html">
  <div class="chat-right-aside">
      <div class="chat-main-header">
          <div class="p-20 b-b">
              <h3 class="box-title">{{ ticket.sujet }}</h3>
          </div>
      </div>
      <div class="chat-rbox">
          <ul class="chat-list p-20">
              <!--chat Row -->
              <li>
                  <div class="chat-img"><img src="assets/images/users/1.jpg" alt="user" /></div>
                  <div class="chat-content">
                      <h5>James Anderson</h5>
                      <div class="box bg-light-info">Lorem Ipsum is sisssmply dummy text of the printing & type setting industry.</div>
                  </div>
                  <div class="chat-time">10:56 am</div>
              </li>
              <!--chat Row -->
              <li>
                  <div class="chat-img"><img src="assets/images/users/2.jpg" alt="user" /></div>
                  <div class="chat-content">
                      <h5>Bianca Doe</h5>
                      <div class="box bg-light-success">It’s Great opportunity to work.</div>
                  </div>
                  <div class="chat-time">10:57 am</div>
              </li>
              <!--chat Row -->
              <li class="reverse">
                  <div class="chat-time">10:57 am</div>
                  <div class="chat-content">
                      <h5>Steave Doe</h5>
                      <div class="box bg-light-inverse">It’s Great opportunity to work.</div>
                  </div>
                  <div class="chat-img"><img src="assets/images/users/5.jpg" alt="user" /></div>
              </li>
              <!--chat Row -->
              <li class="reverse">
                  <div class="chat-time">10:57 am</div>
                  <div class="chat-content">
                      <h5>Steave Doe</h5>
                      <div class="box bg-light-inverse">It’s Great opportunity to work.</div>
                  </div>
                  <div class="chat-img"><img src="assets/images/users/5.jpg" alt="user" /></div>
              </li>
              <!--chat Row -->
              <li>
                  <div class="chat-img"><img src="assets/images/users/3.jpg" alt="user" /></div>
                  <div class="chat-content">
                      <h5>Angelina Rhodes</h5>
                      <div class="box bg-light-primary">Well we have good budget for the project</div>
                  </div>
                  <div class="chat-time">11:00 am</div>
              </li>
              <!--chat Row -->
          </ul>
      </div>
      <div class="card-body b-t">
          <div class="row">
              <div class="col-8">
                  <textarea placeholder="Type your message here" class="form-control b-0"></textarea>
              </div>
              <div class="col-4 text-right">
                  <button type="button" class="btn btn-info btn-circle btn-lg"><i class="fa fa-paper-plane-o"></i> </button>
              </div>
          </div>
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
