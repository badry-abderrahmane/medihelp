<template lang="html">
  <div class="col-md-6">
    <button class="btn btn-inverse waves-effect waves-light" @click="goback">
      <i class="fa fa-arrow-left m-r-10"></i><span>Annuler</span>
    </button>
  </div>
</template>

<script>
export default {
  methods:{
    goback(){
        this.$router.go(-1);
    }
  }
}
</script>

<style lang="css">
</style>
