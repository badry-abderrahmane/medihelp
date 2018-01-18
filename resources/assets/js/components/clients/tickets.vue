<template lang="html">
  <datatable-buttons>
    <tr slot="thead">
      <th>#ID</th>
      <th>Référence</th>
      <th>Date</th>
      <th>Sujet</th>
      <th>Action</th>
      <!-- <th>Communication</th> -->
      <th></th>
    </tr>
    <tr slot="tbody" v-for="ticket in tickets">
      <td>{{ ticket.id }}</td>
      <td>{{ ticket.reference }}</td>
      <td>{{ ticket.date }}</td>
      <td>{{ ticket.sujet }}</td>
      <td>{{ ticket.action }}</td>
      <!-- <td>{{ ticket.communication.length }}</td> -->
      <td>
        <button class="btn btn-outline-info" @click="$router.push({ path: `/tickets/chat/show/`+ticket.id })"><i class="fa fa-eye"></i></button>
        <button class="btn btn-outline-info" @click="$router.push({ path: `/clients/tickets/edit/`+clientid+`/`+ticket.id })"><i class="fa fa-pencil"></i></button>
        <button class="btn btn-outline-info" @click="deleteThis(ticket.id)"><i class="fa fa-trash"></i></button>
      </td>
    </tr>
  </datatable-buttons>
</template>

<script>
export default {
  props:["tickets","clientid"],
  methods:{
    deleteThis(id){
      this.$swal({
        title: 'Etes vous sur de vouloir supprimer ce ticket?',
        text: 'En supprimant ce ticket vous allez supprimer tous ses conversations',
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
      axios.delete('/tickets/'+id)
        .then(response => {
          this.$swal(
            'Bien Supprimé!',
            'Ticket #ID '+id+' supprimé',
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
