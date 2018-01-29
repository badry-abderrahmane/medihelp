<template lang="html">
  <div class="row">
    <div v-if="$route.name != 'Chat Tickets' && $route.name != 'Chat Tickets - Détails'" class="col-lg-2 col-md-12 col-sm-12 col-xs-12">
      <part-panel-default>
        <div slot="heading">
          Liens Utiles
        </div>
        <div v-if="$route.name == 'Liste Tickets'" class="row m-b-10" slot="body">
          <div class="col-md-12 col-lg-12 col-sm-4 col-xs-4">
            <button @click="$router.push({ path: `/tickets/add` })" type="button" class="btn btn-block waves-effect waves-light btn-success" >Nouveau ticket</button>
          </div>
        </div>
        <div v-if="$route.name == 'Nouveau Ticket Générale' || $route.name == 'Tickets - Nouveau Email' || $route.name == 'Tickets - Nouveau Appel'" class="row m-b-10" slot="body">
          <div class="col-md-12 col-lg-12 col-sm-4 col-xs-4">
            <button @click="$router.push({ path: `/tickets` })" type="button" class="btn btn-block waves-effect waves-light btn-success" >Liste tickets</button>
          </div>
        </div>
        <div v-if="$route.name == 'Tickets - Nouveau Email' || $route.name == 'Tickets - Nouveau Appel'" class="row m-b-10" slot="body">
          <div class="col-md-12 col-lg-12 col-sm-4 col-xs-4">
            <button @click="$router.go(-1)" type="button" class="btn btn-block waves-effect waves-light btn-inverse" >Retour au ticket</button>
          </div>
        </div>
      </part-panel-default>

      <part-panel-default>
        <div slot="heading">
          Chiffres clés
        </div>
        <div class="row" slot="body">
          <div class="col-md-12">
            <div class="d-flex flex-row">
                <div class="round round-lg align-self-center round-info"><i class="mdi mdi-ticket"></i></div>
                <div class="m-l-10 align-self-center">
                    <h3 class="m-b-0 font-light">{{ $store.state.tickets.length }}</h3>
                    <h5 class="text-muted m-b-0">Total Tickets</h5></div>
            </div>
          </div>

        </div>
      </part-panel-default>
    </div>
    <div v-else class="col-lg-2 col-md-12 col-sm-12 col-xs-12">
      <part-panel-default-center>
        <div slot="heading">
          Infomations Générales
        </div>
        <div class="row" slot="body">
          <infos-ticket></infos-ticket>
        </div>
      </part-panel-default-center>
    </div>
    <div class="col-lg-10 col-md-12 col-sm-12 col-xs-12" >
      <router-view></router-view>
    </div>

  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
