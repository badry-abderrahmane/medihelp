<template lang="html">
  <table-warper>
    <div slot="heading">
      Liste des tickets
    </div>
    <div class="table-responsive" slot="content">
      <datatable-buttons>
        <tr slot="thead">
          <th>#ID</th>
          <th>Date</th>
          <th>Sujet</th>
          <th>Status</th>
          <th>Responsable</th>
          <th></th>
        </tr>
        <tr slot="tbody" v-for="ticket in tickets">
          <td>{{ ticket.id }}</td>
          <td>{{ ticket.date }}</td>
          <td>{{ ticket.sujet }}</td>
          <td>
            <span v-if="ticket.state == 1" class="label label-danger">Ouvert</span>
            <span v-if="ticket.state == 2" class="label label-warning">En cours</span>
            <span v-if="ticket.state == 3" class="label label-success">Fermé</span>
          </td>
          <td>{{ ticket.contact.name }}</td>
          <td>
            <button class="btn btn-default btn-icon-anim btn-circle" @click="$router.push({ path: `/tickets/show/`+ticket.id })"><i class="fa fa-eye"></i></button>
            <button class="btn btn-default btn-icon-anim btn-circle" @click="$router.push({ path: `/tickets/edit/`+ticket.id })"><i class="fa fa-pencil"></i></button>
            <button class="btn btn-default btn-icon-anim btn-circle" @click="$router.push({ path: `/tickets/delete/`+ticket.id })"><i class="fa fa-trash"></i></button>
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
      tickets:  [],
    }
  },

  created(){
    axios.get('/tickets')
      .then(response => {
        this.tickets = response.data;
        Vue.nextTick(function () {
          Event.$emit('init-datatable', 'tableAdd');
        })
    });
  }
}
</script>

<style lang="css">
</style>
