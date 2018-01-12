<template lang="html">
  <div>
    <div class="col-md-3"></div>
    <div class="col-md-6">
      <part-panel-danger>
        <h6 class="panel-title txt-light" slot="heading">Suppression Action</h6>
        <div slot="body">
          <h4 class="text-danger text-center">Etes vous sur de vouloir supprimer cet action?</h4>
          <div class="row"><br><br>
            <div class="col-md-2"></div>
            <div class="col-md-4">
              <button class="btn btn-danger btn-block" @click="deleteMe">Supprimer&nbsp;&nbsp;</button>
            </div>
            <div class="col-md-4">
              <button class="btn btn-default btn-block" @click="$router.push({ path: `/actions`})">Annuler</button>
            </div>
          </div>
        </div>
      </part-panel-danger>
    </div>
  </div>
</template>

<script>
export default {
  computed:{
    actionId: function(){
      return this.$route.params.id
    },
  },
  methods:{
    deleteMe(){
      axios.delete('/actions/'+this.actionId)
      .then(response => {
        Event.$emit('publish-success-message', data.message);
        this.$store.dispatch('LOAD_ACTIONS_LIST')
      })
      .catch(function(err){
        this.$store.dispatch('LOAD_ACTIONS_LIST')
        console.log(err);
      });
      this.$router.push({ path: `/actions`})
    }
  }
}
</script>

<style lang="css">
</style>
