<template lang="html">
  <div class="row">
    <div class="table-responsive">
      <table class="table">
          <tbody>
              <tr v-for="action in actions">
                  <td>{{ action.text }}</td>
                  <td>
                    <button class="btn btn-outline-info" @click="editAction(action)"><i class="fa fa-pencil"></i></button>
                    <button class="btn btn-outline-info" @click="deleteThis(action.value)"><i class="fa fa-trash"></i></button>
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
    actions: function(){
      return this.$store.state.actions;
    },
  },
  methods:{
    editAction(action){
      Event.$emit('edit-action', {
        id: action.value,
        value: action.text
      });
    },
    deleteThis(id){
      this.$swal({
        title: 'Etes vous sur de vouloir supprimer cet action?',
        text: 'En supprimant cet action vous allez supprimer tous ses données!',
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
      axios.delete('/actions/'+id)
        .then(response => {
          this.$store.dispatch('LOAD_ACTIONS_LIST')
          this.$swal(
            'Bien Supprimé!',
            'Action #ID '+id+' supprimé',
            'success'
          )
        })
    }
  }
}
</script>

<style lang="css">
</style>
