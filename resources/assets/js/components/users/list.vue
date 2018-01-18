<template lang="html">
  <table-warper>
    <div slot="heading">
      Liste des utilisateurs
    </div>
    <div class="table-responsive" slot="content">
      <datatable-buttons>
        <tr slot="thead">
          <th>#ID</th>
          <th>Nom</th>
          <th>Email</th>
          <th>Role</th>
          <th>Date de création</th>
          <th></th>
        </tr>
        <tr slot="tbody" v-for="user in users">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>
            <span class="label label-info" v-for="role in user.roles">{{ role.name }}</span>
          </td>
          <td>{{ user.created_at }}</td>
          <td>
            <button class="btn btn-outline-info" @click="$router.push({ path: `/users/show/`+user.id })"><i class="fa fa-eye"></i></button>
            <button class="btn btn-outline-info" @click="$router.push({ path: `/users/edit/`+user.id })"><i class="fa fa-pencil"></i></button>
            <button class="btn btn-outline-info" @click="deleteThis(user.id)"><i class="fa fa-trash"></i></button>
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
      users:  [],
    }
  },
  created(){
    this.getUsers()
  },
  methods:{
    getUsers(){
      axios.get('/users')
        .then(response => {
          this.users = response.data;
          Vue.nextTick(function () {
            Event.$emit('init-datatable', 'tableAdd');
          })
      });
    },
    deleteThis(id){
      this.$swal({
        title: 'Etes vous sur de vouloir supprimer cet utilisateur?',
        text: 'En supprimant cet utilisateur vous allez supprimer tous ses données!',
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
      axios.delete('/users/'+id)
        .then(response => {
          this.getUsers();
          this.$swal(
            'Bien Supprimé!',
            'Utilisateur #ID '+id+' supprimé',
            'success'
          )
        })
    }
  }
}
</script>

<style lang="css">
</style>
