<template lang="html">
  <div class="row">
    <div class="table-responsive">
      <table class="table">
          <tbody>
              <tr v-for="typeclient in typeclients">
                  <td>{{ typeclient.text }}</td>
                  <td>
                    <button class="btn btn-outline-info" @click="editTypeclient(typeclient)"><i class="fa fa-pencil"></i></button>
                    <button class="btn btn-outline-info" @click="deleteThis(typeclient.value)"><i class="fa fa-trash"></i></button>
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
    typeclients: function(){
      return this.$store.state.typeclients;
    },
  },

  methods:{
    editTypeclient(typeclient){
      Event.$emit('edit-typeclient', {
        id: typeclient.value,
        value: typeclient.text
      });
    },
    deleteThis(id){
      this.$swal({
        title: 'Etes vous sur de vouloir supprimer ce type client?',
        text: 'En supprimant ce type client vous allez supprimer tous ses données!',
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
      axios.delete('/typeclients/'+id)
        .then(response => {
          this.$store.dispatch('LOAD_TYPECLIENTS_LIST')
          this.$swal(
            'Bien Supprimé!',
            'Type client #ID '+id+' supprimé',
            'success'
          )
        })
    }
  }
}
</script>

<style lang="css">
</style>
