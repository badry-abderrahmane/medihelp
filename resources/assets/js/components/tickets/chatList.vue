<template lang="html">
  <div class="chat-body">
    <a @click="$router.push({ path: '/tickets/show/'+ticket.id })" v-for="ticket in tickets">
      <div class="chat-data">
        <img class="user-img img-circle" src="dist/img/user3.png" alt="user">
        <div class="user-data">
          <span class="name block capitalize-font">{{ ticket.sujet }}</span>
          <span class="time block truncate txt-grey">{{ ticket.client.name }}</span>
        </div>
        <div class="status online"></div>
        <div class="clearfix"></div>
      </div>
    </a>
    <a @click="$router.push({ path: '/tickets/show/'+ticket.id })">
      <div class="chat-data">
        <img class="user-img img-circle" src="dist/img/user4.png" alt="user">
        <div class="user-data">
          <span class="name block capitalize-font">Linda Stack</span>
          <span class="time block truncate txt-grey">Our patience will achieve more than our force.</span>
        </div>
        <div class="status away"></div>
        <div class="clearfix"></div>
      </div>
    </a>
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
  }
}
</script>

<style lang="css">
</style>
