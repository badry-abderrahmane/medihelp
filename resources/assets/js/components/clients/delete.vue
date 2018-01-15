<template lang="html">
  <div>
    <div class="col-md-3"></div>
    <div class="col-md-6">
      <part-panel-danger>
        <h6 class="panel-title txt-light" slot="heading">Suppression Entreprise</h6>
        <div slot="body">
          <h4 class="text-danger text-center">Etes vous sur de vouloir supprimer cet entreprise?</h4>
          <div class="row"><br><br>
            <div class="col-md-2"></div>
            <div class="col-md-4">
              <button class="btn btn-danger btn-block" @click="deleteMe">Supprimer&nbsp;&nbsp;</button>
            </div>
            <div class="col-md-4">
              <button class="btn btn-default btn-block" @click="goback">Annuler</button>
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
    entrepriseId: function(){
      return this.$route.params.id
    },
  },
  methods:{
    deleteMe(){
      axios.delete('/entreprises/'+this.entrepriseId)
      .then(response => {
        Event.$emit('publish-success-message', data.message);
      })
      .catch(function(err){
        console.log(err);
      });
      this.goback()
    },
    goback(){
        this.$router.go(-1);
    }
  }
}
</script>

<style lang="css">
</style>
