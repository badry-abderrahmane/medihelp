<template lang="html">
  <div class="col-md-6">
    <div class="pull-left">
      <button class="btn btn-inverse waves-effect waves-light" @click="goback">
        <i class="fa fa-arrow-left m-r-10"></i><span>Annuler</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    goback(){
        window.history.back();
    }
  }
}
</script>

<style lang="css">
</style>
