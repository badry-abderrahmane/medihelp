<template lang="html">
  <datatable-buttons>
    <tr slot="thead">
      <th>#ID</th>
      <th>Libélé</th>
      <th>Adresse</th>
      <th>Tel</th>
      <th>Action</th>
    </tr>
    <tr slot="tbody" v-for="adresse in adresses">
      <td>{{ adresse.id }}</td>
      <td>{{ adresse.libele }}</td>
      <td>{{ adresse.value }}</td>
      <td>{{ adresse.phone }}</td>
      <td>
        <button class="btn btn-default btn-icon-anim btn-circle" @click="$router.push({ path: `/adresses/show/`+adresse.id })"><i class="fa fa-eye"></i></button>
        <button class="btn btn-default btn-icon-anim btn-circle" @click="$router.push({ path: `/adresses/edit/`+adresse.id })"><i class="fa fa-pencil"></i></button>
        <button class="btn btn-default btn-icon-anim btn-circle" @click="$router.push({ path: `/adresses/delete/`+adresse.id })"><i class="fa fa-trash"></i></button>
      </td>
    </tr>
  </datatable-buttons>
</template>

<script>
export default {
  props:["adresses"]
}
</script>

<style lang="css">
</style>
