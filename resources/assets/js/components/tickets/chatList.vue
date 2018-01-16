<template lang="html">
  <div class="chat-left-aside">
      <div class="open-panel"><i class="ti-angle-right"></i></div>
      <div class="chat-left-inner">
          <div class="form-material">
              <input class="form-control p-20" type="text" placeholder="Recherche">
          </div>
          <ul class="chatonline style-none ">
              <li v-for="ticket in tickets">
                  <a @click="$router.push({ path: '/tickets/chat/show/'+ticket.id })">
                    <span>
                      <h6>
                        <button v-if="ticket.state == 1" class="btn btn-danger btn-xs m-r-10">F</button>
                        <button v-if="ticket.state == 2" class="btn btn-warning btn-xs m-r-10">E</button>
                        <button v-if="ticket.state == 3" class="btn btn-success btn-xs m-r-10">O</button>
                        {{ tiketTitle(ticket.sujet) }}
                      </h6>
                    </span>
                  </a>
              </li>

              <li class="p-20"></li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      tickets:'',
    }
  },
  computed:{

  },
  created(){
    axios.get('/tickets')
      .then(response => {
        this.tickets = response.data
    });
  },
  methods:{
    tiketTitle: (title) => {
      return title.substring(0, '16') + '...'
    }
  }
}
</script>

<style lang="css">
</style>
