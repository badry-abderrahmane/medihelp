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
          Filter
        </div>
        <div class="row" slot="body">
          <div class="col-md-12">
            <div class="form-group">
              <input type="text" class="form-control">
            </div>
          </div>

        </div>
      </part-panel-default>

      <part-panel-default>
        <div slot="heading">
          Statistiques
        </div>
        <div class="row" slot="body">
          <div class="col-md-12">
            <div class="d-flex flex-row">
                <div class="col-md-4">
                  <center>
                  <div class="round align-self-center round-info"><i class="ti-user"></i></div>
                  <div class="m-l-10 align-self-center">
                    <h3 class="m-b-0">2690</h3>
                    <h5 class="text-muted m-b-0">Clients</h5>
                  </div>
                </center>
                </div>
                <div class="col-md-4">
                  <center>
                  <div class="round align-self-center round-info"><i class="ti-user"></i></div>
                  <div class="m-l-10 align-self-center">
                    <h3 class="m-b-0">112</h3>
                    <h5 class="text-muted m-b-0">Contacts</h5>
                  </div>
                  </center>
                </div>
                <div class="col-md-4">
                  <center>
                  <div class="round align-self-center round-info"><i class="ti-user"></i></div>
                  <div class="m-l-10 align-self-center">
                    <h3 class="m-b-0">56</h3>
                    <h5 class="text-muted m-b-0">Tickets</h5>
                  </div>
                  </center>
                </div>
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
