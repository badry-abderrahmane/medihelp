<template lang="html">
  <div class="row">
    <div class="col-lg-2 col-md-12 col-sm-12 col-xs-12">
      <part-panel-default>
        <div slot="heading">
          Liens Utiles
        </div>
        <div class="row m-b-10" slot="body">
          <div v-if="$route.name != 'Utilisateurs'" class="col-md-12 col-lg-12 col-sm-4 col-xs-4 m-b-10">
            <button @click="$router.push({ path: `/users` })" type="button" class="btn btn-block waves-effect waves-light btn-success" >Liste utilisateur</button>
          </div>
          <div v-if="$route.name != 'Ajout Utilisateur'" class="col-md-12 col-lg-12 col-sm-4 col-xs-4 m-b-10">
            <button @click="$router.push({ path: `/users/add` })" type="button" class="btn btn-block waves-effect waves-light btn-success" >Nouveau utilisateur</button>
          </div>
          <div v-if="$route.name != 'Ajout Role'" class="col-md-12 col-lg-12 col-sm-4 col-xs-4 m-b-10">
            <button @click="$router.push({ path: `/users/roles/add` })" type="button" class="btn btn-block waves-effect waves-light btn-success" >Nouveau role</button>
          </div>
          <div v-if="$route.name != 'Ajout Permission'" class="col-md-12 col-lg-12 col-sm-4 col-xs-4 m-b-10">
            <button @click="$router.push({ path: `/users/permissions/add` })" type="button" class="btn btn-block waves-effect waves-light btn-success" >Nouvelle permission</button>
          </div>
        </div>
      </part-panel-default>

      <part-panel-default>
        <div slot="heading">
          Chiffres clés
        </div>
        <div class="row" slot="body">
          <div class="col-md-12 m-b-10">
            <div class="d-flex flex-row">
                <div class="round round-lg align-self-center round-info"><i class="mdi mdi-account-multiple"></i></div>
                <div class="m-l-10 align-self-center">
                    <h3 class="m-b-0 font-light">{{ $store.state.users.length }}</h3>
                    <h5 class="text-muted m-b-0">Total Utilisateurs</h5></div>
            </div>
          </div>
          <div class="col-md-12 m-b-10">
            <div class="d-flex flex-row">
                <div class="round round-lg align-self-center round-info"><i class="mdi mdi-security"></i></div>
                <div class="m-l-10 align-self-center">
                    <h3 class="m-b-0 font-light">{{ $store.state.roles.length }}</h3>
                    <h5 class="text-muted m-b-0">Total Roles</h5></div>
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
