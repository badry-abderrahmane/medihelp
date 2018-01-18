<template lang="html">
  <datatable-buttons>
    <tr slot="thead">
      <th>#ID</th>
      <th>Nom</th>
      <th>Civilité</th>
      <th>Adresse</th>
      <th>Tel</th>
      <th>Email</th>
      <th>Fonction</th>
      <th></th>
    </tr>
    <tr slot="tbody" v-for="contact in contacts">
      <td>{{ contact.id }}</td>
      <td>{{ contact.name }}</td>
      <td>{{ contact.civilite }}</td>
      <td>{{ contact.adress }}</td>
      <td>{{ contact.phone }}</td>
      <td>{{ contact.email }}</td>
      <td>{{ contact.fonction }}</td>
      <td>
        <!-- <button class="btn btn-default btn-icon-anim btn-circle" @click="$router.push({ path: `/contacts/show/`+contact.id })"><i class="fa fa-eye"></i></button> -->
        <button class="btn btn-outline-info" @click="$router.push({ path: `/clients/contacts/edit/`+clientid+`/`+contact.id })"><i class="fa fa-pencil"></i></button>
        <button class="btn btn-outline-info" @click="deleteThis(contact.id)"><i class="fa fa-trash"></i></button>
      </td>
    </tr>
  </datatable-buttons>
</template>

<script>
export default {
  props:["contacts","clientid"],
  methods:{
    deleteThis(id){
      this.$swal({
        title: 'Etes vous sur de vouloir supprimer ce contact?',
        text: 'En supprimant ce contact vous allez supprimer tous ses tickets!',
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
      axios.delete('/contacts/'+id)
        .then(response => {
          this.$swal(
            'Bien Supprimé!',
            'Contact #ID '+id+' supprimé',
            'success'
          )
          this.$router.push({ path: `/clients` })
        })
        .catch(function(err){

        });
    }
  }
}
</script>

<style lang="css">
</style>
