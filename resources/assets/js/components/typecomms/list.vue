<template lang="html">
  <div class="row">
    <div class="table-responsive">
      <table class="table">
          <tbody>
              <tr v-for="typecomm in typecomms">
                  <td>{{ typecomm.text }}</td>
                  <td>
                    <button class="btn btn-outline-info" @click="editTypecomm(typecomm)"><i class="fa fa-pencil"></i></button>
                    <button class="btn btn-outline-info" @click="deleteThis(typecomm.value)"><i class="fa fa-trash"></i></button>
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
    typecomms: function(){
      return this.$store.state.typecomms;
    },
  },
  methods:{
    editTypecomm(typecomm){
      Event.$emit('edit-typecomm', {
        id: typecomm.value,
        value: typecomm.text
      });
    },
    deleteThis(id){
      this.$swal({
        title: 'Etes vous sur de vouloir supprimer ce type communication?',
        text: 'En supprimant ce type communication vous allez supprimer tous ses données!',
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
      axios.delete('/typecomms/'+id)
        .then(response => {
          this.$store.dispatch('LOAD_TYPECOMMS_LIST')
          this.$swal(
            'Bien Supprimé!',
            'Type communication #ID '+id+' supprimé',
            'success'
          )
        })
    }
  }
}
</script>

<style lang="css">
</style>
