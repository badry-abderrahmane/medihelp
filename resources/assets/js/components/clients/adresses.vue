<template lang="html">
  <datatable-buttons>
    <tr slot="thead">
      <th>#ID</th>
      <th>Libélé</th>
      <th>Adresse</th>
      <th>Tel</th>
      <th></th>
    </tr>
    <tr slot="tbody" v-for="adresse in adresses">
      <td>{{ adresse.id }}</td>
      <td>{{ adresse.libele }}</td>
      <td>{{ adresse.adress }}</td>
      <td>{{ adresse.phone }}</td>
      <td>
        <!-- <button class="btn btn-default btn-icon-anim btn-circle" @click="$router.push({ path: `/adresses/show/`+adresse.id })"><i class="fa fa-eye"></i></button> -->
        <button class="btn btn-outline-info" @click="$router.push({ path: `/clients/adresses/edit/`+clientid+`/`+adresse.id })"><i class="fa fa-pencil"></i></button>
        <button v-if="$store.state.role < 3" class="btn btn-outline-info" @click="deleteThis(adresse.id)"><i class="fa fa-trash"></i></button>
      </td>
    </tr>
  </datatable-buttons>
</template>

<script>
export default {
  props:["adresses","clientid"],
  methods:{
    deleteThis(id){
      this.$swal({
        title: 'Etes vous sur de vouloir supprimer cet adresse?',
        text: '',
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
      axios.delete('/adresses/'+id)
        .then(response => {
          this.$swal(
            'Bien Supprimé!',
            'Adresse #ID '+id+' supprimé',
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
