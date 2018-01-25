<template lang="html">
  <div class="row">
    <div class="table-responsive">
      <table class="table">
          <tbody>
              <tr v-for="etat in etats">
                  <td>{{ etat.text }}</td>
                  <td>
                    <button class="btn btn-outline-info" @click="editEtat(etat)"><i class="fa fa-pencil"></i></button>
                    <button class="btn btn-outline-info" @click="deleteThis(etat.value)"><i class="fa fa-trash"></i></button>
                  </td>
              </tr>
          </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  computed:{
    etats: function(){
      return this.$store.state.etats;
    },
  },

  methods:{
    editEtat(etat){
      Event.$emit('edit-etat', {
        id: etat.value,
        value: etat.text
      });
    },
    deleteThis(id){
      this.$swal({
        title: 'Etes vous sur de vouloir supprimer cet etat?',
        text: 'En supprimant cet etat vous allez supprimer tous ses données!',
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
      axios.delete('/etats/'+id)
        .then(response => {
          this.$store.dispatch('LOAD_ETATS_LIST')
          this.$swal(
            'Bien Supprimé!',
            'Etat #ID '+id+' supprimé',
            'success'
          )
        })
    }
  }
}
</script>

<style lang="css">
</style>
