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
            <div v-for="role in user.roles">
              <span class="label label-info">{{ role.name }}</span>&nbsp;
              <button @click="changeRole(user.id,role.id)" type="button" class="btn btn-sm btn-outline-success"><i class="fa fa-retweet"></i> </button>

              &nbsp;
              <!-- <button @click="showPermissions(role.id)" type="button" class="btn btn-sm btn-outline-success"><i class="fa fa-shield"></i> </button> -->
            </div>
            <div v-if="user.roles.length < 1">
              <button @click="addRole(user.id)" type="button" class="btn btn-sm btn-outline-success"><i class="fa fa-plus"></i> Assigner</button>
            </div>
          </td>
          <td>{{ user.created_at }}</td>
          <td>
            <!-- <button class="btn btn-outline-info" @click="$router.push({ path: `/users/show/`+user.id })"><i class="fa fa-eye"></i></button> -->
            <button class="btn btn-outline-info" @click="$router.push({ path: `/users/edit/`+user.id })"><i class="fa fa-pencil"></i></button>
            <button class="btn btn-outline-info" @click="deleteThis(user.id)"><i class="fa fa-trash"></i></button>
          </td>
        </tr>
      </datatable-buttons>
      <!-- use the modal component, pass in the prop -->
      <modal v-if="showModal" @close="showModal = false">
        <h3 slot="header">Role utilisateur</h3>
        <form-user-role :userid="userid" :roleid="roleid" slot="body"></form-user-role>
      </modal>
      <modal-large v-if="showModalP" @close="showModalP = false">
        <h3 slot="header">Permissions utilisateur</h3>
        <show-user-permissions :roleid="roleid" slot="body"></show-user-permissions>
      </modal-large>
    </div>
  </table-warper>
</template>

<script>
export default {
  data(){
    return {
      users:  [],
      userid: '',
      roleid: '',
      showModal: false,
      showModalP: false,
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
    addRole(id){
      this.userid = id;
      this.roleid = false;
      Vue.nextTick( () => {
        this.showModal = true
      })
    },
    changeRole(user_id,role_id){
      this.userid = user_id;
      this.roleid = role_id;
      Vue.nextTick( () => {
        this.showModal = true
      })
    },
    showPermissions(id){
      this.roleid = id;
      Vue.nextTick( () => {
        this.showModalP = true
      })
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
