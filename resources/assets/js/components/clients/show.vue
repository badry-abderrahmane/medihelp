<template lang="html">
  <div class="col-md-12" >
    <part-panel-tabs :tabs="tabs">
      <div slot="heading1">
        <center><span class="label label-warning" style="border-radius: 4px 0px 0px 4px;"><h4 class="text-light">Client :</h4></span><span class="label label-inverse" style="border-radius: 0px 4px 4px 0px;"><h4 class="text-light">{{ client.name }}</h4></span></center>
      </div>
      <div slot="heading2">
        <!-- <span class="label label-inverse">{{ client.name }}</span> -->
      </div>
      <div slot="1" class="text-center"><br>
        <infos-client :client="client"></infos-client>
      </div>
      <div slot="2">
        <infos-client-contacts :contacts="client.contacts" :clientid="client.id"></infos-client-contacts>
      </div>
      <div slot="3">
        <infos-client-adresses :adresses="client.adresses" :clientid="client.id"></infos-client-adresses>
      </div>
      <div slot="4">
        <infos-client-tickets :tickets="client.tickets" :clientid="client.id"></infos-client-tickets>
      </div>
    </part-panel-tabs>
  </div>
</template>

<script>
export default {
  data(){
    return {
      tabs: [{id: '1', name: 'Informations'},{id: '2', name: 'Contacts'},{id: '3', name: 'Adresses'},{id: '4', name: 'Tickets'}],
      client: { typeclient:{ value:'' }},
    }
  },

  computed:{
    clientId: function(){
      return this.$route.params.id
    },
    countContacts: function(){
      if (this.client.contacts) {
        return this.client.contacts.length
      }else{
        return 0
      }
    },
    countTickets: function(){
      if (this.client.tickets) {
        return this.client.tickets.length
      }else{
        return 0
      }
    },
  },
  created(){
    axios.get('/clients/'+this.clientId)
      .then(response => {
        this.client = response.data;
        Vue.nextTick(function () {
          Event.$emit('init-datatable', 'tableAdd');
        })
    });
  }
}
</script>

<style lang="css">
</style>
