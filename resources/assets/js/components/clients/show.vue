<template lang="html">
  <div>
    <global-unite-first>
      <div class="col-md-12" slot="content">
        <part-panel-profile title="Entreprise" :name="client.name">
          <div slot="count1">
            <span class="counts block head-font"><span>{{ countContacts }}</span></span>
            <span class="counts-text block">Contacts</span>
          </div>
          <div slot="count2">
            <span class="counts block head-font"><span>{{ countTickets }}</span></span>
            <span class="counts-text block">Tickets</span>
          </div>
          <div slot="links">
            <br><br>
              <div class="col-md-8 col-md-offset-2">
                <button class="btn btn-warning btn-block btn-lable-wrap left-label" @click="$router.push({ path: `/clients/edit/`+client.id })">
                   <span class="btn-label"><i class="fa fa-edit"></i> </span>
                   <span class="btn-text">Modifier client</span>
                </button>
                <button class="btn btn-success btn-block btn-lable-wrap left-label" @click="$router.push({ path: `/contacts/add/`+client.id })">
                   <span class="btn-label"><i class="fa fa-plus"></i> </span>
                   <span class="btn-text">Nouveau contact</span>
                </button>
                <button class="btn btn-success btn-block btn-lable-wrap left-label" @click="$router.push({ path: `/adresses/add/`+client.id })">
                   <span class="btn-label"><i class="fa fa-plus"></i> </span>
                   <span class="btn-text">Nouvelle adresse</span>
                </button>
                <button class="btn btn-success btn-block btn-lable-wrap left-label" @click="$router.push({ path: `/tickets/add/`+client.id })">
                   <span class="btn-label"><i class="fa fa-plus"></i> </span>
                   <span class="btn-text">Nouveau ticket</span>
                </button>
              </div>
          </div>
        </part-panel-profile>
      </div>
    </global-unite-first>
    <global-unite-middle>
      <div class="col-md-12" slot="content">
        <part-panel-tabs :tabs="tabs">
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
    </global-unite-middle>
    <!-- chat Content -->
    <global-unite-last>

    </global-unite-last>


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
