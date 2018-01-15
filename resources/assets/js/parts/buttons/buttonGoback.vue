<template lang="html">
  <div class="col-sm-offset-3 col-sm-2">
    <!-- <label class="label">&nbsp;</label> --><br>
    <button class="btn btn-primary btn-block btn-outline btn-icon " @click="goback"><i class="fa fa-arrow-left"></i><span>Retour</span>  </button>
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
