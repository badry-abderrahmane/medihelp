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
        <button class="btn btn-default btn-icon-anim btn-circle" @click="$router.push({ path: `/tickets/show/`+ticket.id })"><i class="fa fa-eye"></i></button>
        <button class="btn btn-default btn-icon-anim btn-circle" @click="$router.push({ path: `/tickets/edit/`+clientid+`/`+ticket.id })"><i class="fa fa-pencil"></i></button>
        <button class="btn btn-default btn-icon-anim btn-circle" @click="$router.push({ path: `/tickets/delete/`+ticket.id })"><i class="fa fa-trash"></i></button>
      </td>
    </tr>
  </datatable-buttons>
</template>

<script>
export default {
  props:["tickets","clientid"],
}
</script>

<style lang="css">
</style>
