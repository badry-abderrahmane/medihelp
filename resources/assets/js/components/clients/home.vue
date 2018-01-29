<template lang="html">
  <div class="row">
    <div class="col-lg-2 col-md-12 col-sm-12 col-xs-12">
      <part-panel-default>
        <div slot="heading">
          Liens Utiles
        </div>
        <div v-if="$route.name == 'Clients'" class="row m-b-10" slot="body">
          <div class="col-md-12 col-lg-12 col-sm-4 col-xs-4">
            <button @click="$router.push({ path: `/clients/add` })" type="button" class="btn btn-block waves-effect waves-light btn-success" >Nouveau client</button>
          </div>
        </div>
        <div v-if="$route.name == 'Nouveau Client' || $route.name == 'Modification Client'" class="row m-b-10" slot="body">
          <div class="col-md-12 col-lg-12 col-sm-4 col-xs-4">
            <button @click="$router.push({ path: `/clients` })" type="button" class="btn btn-block waves-effect waves-light btn-success" >Liste clients</button>
          </div>
        </div>
        <div v-if="$route.name == 'Détail Client'" slot="body">
          <div class="col-md-12 col-lg-12 col-sm-4 col-xs-4 m-b-10">
            <button @click="$router.push({ path: `/clients` })" type="button" class="btn btn-block waves-effect waves-light btn-success" >Liste clients</button>
          </div>
          <div class="col-md-12 col-lg-12 col-sm-4 col-xs-4 m-b-10">
            <button @click="$router.push({ path: `/clients/contacts/add/`+$route.params.id })" type="button" class="btn btn-block waves-effect waves-light btn-success" >Nouveau contact</button>
          </div>
          <div class="col-md-12 col-lg-12 col-sm-4 col-xs-4 m-b-10">
            <button @click="$router.push({ path: `/clients/adresses/add/`+$route.params.id })" type="button" class="btn btn-block waves-effect waves-light btn-success" >Nouvelle adresse</button>
          </div>
          <div class="col-md-12 col-lg-12 col-sm-4 col-xs-4 m-b-10">
            <button v-if="$store.state.role < 4" @click="$router.push({ path: `/clients/tickets/add/`+$route.params.id })" type="button" class="btn btn-block waves-effect waves-light btn-success" >Nouveau ticket</button>
          </div>
        </div>
        <div v-if="$route.name == 'Nouvelle Adresse'" slot="body">
          <div class="col-md-12 col-lg-12 col-sm-4 col-xs-4 m-b-10">
            <button @click="$router.push({ path: `/clients` })" type="button" class="btn btn-block waves-effect waves-light btn-success" >Liste clients</button>
          </div>
          <div class="col-md-12 col-lg-12 col-sm-4 col-xs-4 m-b-10">
            <button @click="$router.push({ path: `/clients/contacts/add/`+$route.params.id })" type="button" class="btn btn-block waves-effect waves-light btn-success" >Nouveau contact</button>
          </div>
          <div class="col-md-12 col-lg-12 col-sm-4 col-xs-4 m-b-10">
            <button v-if="$store.state.role < 4" @click="$router.push({ path: `/clients/tickets/add/`+$route.params.id })" type="button" class="btn btn-block waves-effect waves-light btn-success" >Nouveau ticket</button>
          </div>
        </div>
        <div v-if="$route.name == 'Nouveau Contact'" slot="body">
          <div class="col-md-12 col-lg-12 col-sm-4 col-xs-4 m-b-10">
            <button @click="$router.push({ path: `/clients` })" type="button" class="btn btn-block waves-effect waves-light btn-success" >Liste clients</button>
          </div>
          <div class="col-md-12 col-lg-12 col-sm-4 col-xs-4 m-b-10">
            <button @click="$router.push({ path: `/clients/adresses/add/`+$route.params.id })" type="button" class="btn btn-block waves-effect waves-light btn-success" >Nouvelle adresse</button>
          </div>
          <div class="col-md-12 col-lg-12 col-sm-4 col-xs-4 m-b-10">
            <button v-if="$store.state.role < 4" @click="$router.push({ path: `/clients/tickets/add/`+$route.params.id })" type="button" class="btn btn-block waves-effect waves-light btn-success" >Nouveau ticket</button>
          </div>
        </div>
        <div v-if="$route.name == 'Nouveau Ticket' || $route.name == 'Modification Ticket'" slot="body">
          <div class="col-md-12 col-lg-12 col-sm-4 col-xs-4 m-b-10">
            <button @click="$router.push({ path: `/clients` })" type="button" class="btn btn-block waves-effect waves-light btn-success" >Liste clients</button>
          </div>
          <div class="col-md-12 col-lg-12 col-sm-4 col-xs-4 m-b-10">
            <button  v-if="$store.state.role < 4" @click="$router.push({ path: `/tickets` })" type="button" class="btn btn-block waves-effect waves-light btn-success" >Liste tickets</button>
          </div>
          <div class="col-md-12 col-lg-12 col-sm-4 col-xs-4 m-b-10">
            <button v-if="$store.state.role < 4" @click="$router.push({ path: `/tickets/chat` })" type="button" class="btn btn-block waves-effect waves-light btn-success" >Chat tickets</button>
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
                <div class="round round-lg align-self-center round-info"><i class="mdi mdi-contacts"></i></div>
                <div class="m-l-10 align-self-center">
                    <h3 class="m-b-0 font-light">{{ $store.state.clients.length }}</h3>
                    <h5 class="text-muted m-b-0">Total Clients</h5></div>
            </div>
          </div>

        </div>
      </part-panel-default>
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
