<template lang="html">
  <div>
    <form role="search" class="chat-search">
      <div class="input-group">
        <input id="example-input1-group21" name="example-input1-group2" class="form-control" placeholder="Recherche" type="text">
        <span class="input-group-btn">
        <button type="button" class="btn  btn-default"><i class="zmdi zmdi-search"></i></button>
        </span>
      </div>
    </form>
    <div class="chatapp-nicescroll-bar">
      <ul class="chat-list-wrap">
        <li class="chat-list">
          <div class="chat-body">
            <a @click="$router.push({ path: '/tickets/show/'+ticket.id })" v-for="ticket in tickets">
              <div class="chat-data">
                <div class="col-md-2 mr-0 pr-0">
                  <button v-if="ticket.state == 1" class="btn btn-danger btn-xs">F</button>
                  <button v-if="ticket.state == 2" class="btn btn-warning btn-xs">E</button>
                  <button v-if="ticket.state == 3" class="btn btn-success btn-xs">O</button>
                </div>
                <div class="user-data col-md-9" style="cursor:pointer;">
                  <span class="name block capitalize-font">{{ ticket.sujet }}</span>
                  <span class="time block truncate txt-grey">{{ ticket.client.name }}</span>
                </div>
                <div class="clearfix"></div>
              </div>
            </a>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      tickets: '',
    }
  },
  created(){
    axios.get('/tickets')
      .then(response => {
        this.tickets = response.data;
    });
  },
  mounted(){
    Vue.nextTick(function () {
      Event.$emit('init-slimscroll-list');
    })
  }
}
</script>

<style lang="css">
</style>
