<template lang="html">
  <div class="row">
    <div class="col-md-6 col-md-offset-2">
      <part-panel-noheading>
        <div class="row" slot="body">
          <div class="col-md-4"></div>
          <div class="col-md-4">
            <button class="btn btn-block btn-success" @click="$router.push({ path: `/typeclients/add` })"><i class="fa fa-plus fa-3x"></i>&nbsp;&nbsp;Nouveau Type Entreprise</button>
          </div>
        </div>
      </part-panel-noheading>
    </div>
    <div class="col-md-6 col-md-offset-2">
      <list-typeclients></list-typeclients>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="css">
</style>
