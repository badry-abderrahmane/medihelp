<template lang="html">
  <table-warper>
    <div slot="heading">
      Liste des clients
    </div>
    <div class="table-responsive" slot="content">
      <datatable-buttons>
        <tr slot="thead">
          <th>#ID</th>
          <th>Nom</th>
          <th>Type</th>
          <th>Tel</th>
          <th>Secteur</th>
          <th>Responsable</th>
          <th></th>
        </tr>
        <tr slot="tbody" v-for="client in clients">
          <td>{{ client.id }}</td>
          <td>{{ client.name }}</td>
          <td>{{ client.typeclient.value }}</td>
          <td>{{ client.phone }}</td>
          <td>{{ client.secteur }}</td>
          <td>
            <span class="label label-inverse m-r-5" v-for="user in client.users"><i class="fa fa-user m-r-5"></i>{{ user.name }}</span>
          </td>
          <td>
            <button class="btn btn-outline-info" @click="$router.push({ path: `/clients/show/`+client.id })"><i class="fa fa-eye"></i></button>
            <button class="btn btn-outline-info" @click="$router.push({ path: `/clients/edit/`+client.id })"><i class="fa fa-pencil"></i></button>
            <button v-if="$store.state.role < 3" class="btn btn-outline-info" @click="deleteThis(client.id)"><i class="fa fa-trash"></i></button>
          </td>
        </tr>
      </datatable-buttons>
      <button @click="$router.push({ path: '/clients/add' })" class="right-side-toggle waves-effect waves-light btn-success btn btn-circle btn-sm pull-right m-l-10">
        <i class="ti ti-plus text-white"></i>
      </button>
    </div>
  </table-warper>
</template>

<script>
export default {
  data(){
    return {
      clients:  [],
    }
  },

  created(){
    this.getClients()
  },
  methods:{
    getClients(){
      axios.get('/clients')
        .then(response => {
          this.clients = response.data;
          Vue.nextTick(function () {
            Event.$emit('init-datatable', 'tableAdd');

          })
      });
    },
    deleteThis(id){
      this.$swal({
        title: 'Etes vous sur de vouloir supprimer ce client?',
        text: 'En supprimant ce client vous allez supprimer tous ses contacts, adresses et tickets!',
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Supprimer',
        cancelButtonText: 'Annuler'
      }).then((result) => {
        if (result.value) {
          this.persistDelete(id);
        }
      })
    },
    persistDelete(id){
      Event.$emit('destroy-datatable', 'tableAdd');
      axios.delete('/clients/'+id)
        .then(response => {
          this.getClients();
          this.$swal(
            'Bien Supprimé!',
            'Client #ID '+id+' supprimé',
            'success'
          )
        })
        .catch(function(err){

        });
    }
  }
}
</script>

<style lang="css">
</style>
