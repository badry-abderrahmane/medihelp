<template lang="html">
  <table-warper>
    <div slot="heading">
      Liste des rôles
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
        <tr slot="tbody" v-for="role in roles">
          <td>{{ role.id }}</td>
          <td>{{ role.name }}</td>
          <td>{{ role.display_name }}</td>
          <td>{{ role.description }}</td>
          <td>{{ role.created_at }}</td>
          <td>
            <button class="btn btn-outline-info" @click="$router.push({ path: `/roles/show/`+role.id })"><i class="fa fa-eye"></i></button>
            <button class="btn btn-outline-info" @click="$router.push({ path: `/roles/edit/`+role.id })"><i class="fa fa-pencil"></i></button>
            <button class="btn btn-outline-info" @click="deleteThis(role.id)"><i class="fa fa-trash"></i></button>
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
      roles:  [],
    }
  },
  created(){
    this.getRoles()
  },
  methods:{
    getRoles(){
      axios.get('/roles')
        .then(response => {
          this.roles = response.data;
          Vue.nextTick(function () {
            Event.$emit('init-datatable', 'tableAdd');
          })
      });
    },
    deleteThis(id){
      this.$swal({
        title: 'Etes vous sur de vouloir supprimer cet role?',
        text: 'En supprimant cet role vous allez supprimer tous ses données!',
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
      axios.delete('/roles/'+id)
        .then(response => {
          this.getRoles();
          this.$swal(
            'Bien Supprimé!',
            'Role #ID '+id+' supprimé',
            'success'
          )
        })
    }
  }
}
</script>

<style lang="css">
</style>
