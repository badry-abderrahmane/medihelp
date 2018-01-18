<template lang="html">
  <table-warper>
    <div slot="heading">
      Liste des permissions
    </div>
    <div class="table-responsive" slot="content">
      <datatable-buttons>
        <tr slot="thead">
          <th>#ID</th>
          <th>Nom</th>
          <th>Display</th>
          <th>Description</th>
          <th>Date de création</th>
          <th></th>
        </tr>
        <tr slot="tbody" v-for="permission in permissions">
          <td>{{ permission.id }}</td>
          <td>{{ permission.name }}</td>
          <td>{{ permission.display_name }}</td>
          <td>{{ permission.description }}</td>
          <td>{{ permission.created_at }}</td>
          <td>
            <button class="btn btn-outline-info" @click="$router.push({ path: `/permissions/show/`+permission.id })"><i class="fa fa-eye"></i></button>
            <button class="btn btn-outline-info" @click="$router.push({ path: `/permissions/edit/`+permission.id })"><i class="fa fa-pencil"></i></button>
            <button class="btn btn-outline-info" @click="deleteThis(permission.id)"><i class="fa fa-trash"></i></button>
          </td>
        </tr>
      </datatable-buttons>
    </div>
  </table-warper>
</template>

<script>
export default {
  data(){
    return {
      permissions:  [],
    }
  },
  created(){
    this.getPermissions()
  },
  methods:{
    getPermissions(){
      axios.get('/permissions')
        .then(response => {
          this.permissions = response.data;
          Vue.nextTick(function () {
            Event.$emit('init-datatable', 'tableAdd');
          })
      });
    },
    deleteThis(id){
      this.$swal({
        title: 'Etes vous sur de vouloir supprimer cet permission?',
        text: 'En supprimant cet permission vous allez supprimer tous ses données!',
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
      axios.delete('/permissions/'+id)
        .then(response => {
          this.getPermissions();
          this.$swal(
            'Bien Supprimé!',
            'Permission #ID '+id+' supprimé',
            'success'
          )
        })
    }
  }
}
</script>

<style lang="css">
</style>
