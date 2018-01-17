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
        <button class="btn btn-outline-info" @click="$router.push({ path: `/contacts/edit/`+clientid+`/`+contact.id })"><i class="fa fa-pencil"></i></button>
        <button class="btn btn-outline-info" @click="deleteThis(contact.id)"><i class="fa fa-trash"></i></button>
      </td>
    </tr>
  </datatable-buttons>
</template>

<script>
export default {
  props:["contacts","clientid"],
  created(){
    console.log($vm);
  }
}
</script>

<style lang="css">
</style>
