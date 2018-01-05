<template lang="html">
  <datatable-buttons>
    <tr slot="thead">
      <th>#ID</th>
      <th>Date</th>
      <th>Sujet</th>
      <th>Action</th>
      <th>Etat</th>
      <th>Communication</th>
      <th>Action</th>
    </tr>
    <tr slot="tbody" v-for="incident in incidents">
      <td>{{ incident.id }}</td>
      <td>{{ incident.date }}</td>
      <td>{{ incident.sujet }}</td>
      <td>{{ incident.action }}</td>
      <td>{{ incident.etat }}</td>
      <td>{{ incident.communication.length }}</td>
      <td>
        <button class="btn btn-default btn-icon-anim btn-circle" @click="$router.push({ path: `/incidents/show/`+incident.id })"><i class="fa fa-eye"></i></button>
        <button class="btn btn-default btn-icon-anim btn-circle" @click="$router.push({ path: `/incidents/edit/`+incident.id })"><i class="fa fa-pencil"></i></button>
        <button class="btn btn-default btn-icon-anim btn-circle" @click="$router.push({ path: `/incidents/delete/`+incident.id })"><i class="fa fa-trash"></i></button>
      </td>
    </tr>
  </datatable-buttons>
</template>

<script>
export default {
  props:["incidents"]
}
</script>

<style lang="css">
</style>
