<template lang="html">
  <div>
    <table-warper>
      <div slot="heading">
        Dérniers tickets ajoutés
      </div>
      <div class="table-responsive" slot="content">
        <datatable-buttons>
          <tr slot="thead">
            <th>Sujet</th>
            <th>Client</th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
          <tr slot="tbody" v-for="ticket in tickets">
            <td>{{ ticket.sujet }}</td>
            <td>{{ ticket.client.name }}</td>
            <td>({{ ticket.appels.length }}) Appels</td>
            <td>({{ ticket.emails.length }}) Emails</td>
            <td>
              <span v-if="ticket.state == 1" class="label label-danger">Ouvert</span>
              <span v-if="ticket.state == 2" class="label label-warning">En cours</span>
              <span v-if="ticket.state == 3" class="label label-success">Fermé</span>
            </td>
            <td>
              <button class="btn btn-outline-info" @click="$router.push({ path: `/tickets/chat/show/`+ticket.id })"><i class="fa fa-eye"></i></button>
            </td>
          </tr>
        </datatable-buttons>
      </div>
    </table-warper>
  </div>
</template>

<script>
export default {
  computed:{
    tickets: function(){
      return this.$store.state.ticketsAll.slice(0, 10)
    },
  }
}
</script>

<style lang="css">
</style>
