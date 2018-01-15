<template lang="html">
  <div class="row">
    <global-unite-first>
      <div class="col-md-12" slot="content">
        <part-panel-default>
          <div slot="heading">
            Liens utiles
          </div>
          <div class="row" slot="body">
            <div class="col-md-8 col-md-offset-2">
              <button class="btn btn-success btn-block btn-lable-wrap left-label" @click="$router.push({ path: `/clients/add` })">
                <span class="btn-label"><i class="fa fa-plus"></i></span>
                <span class="btn-text">Nouveau client</span>
              </button>
            </div>
          </div>
        </part-panel-default>
        <part-panel-default>
          <div slot="heading">
            Statistiques
          </div>
          <div class="row" slot="body">
            <div class="col-md-12">
              <div class="sm-data-box">
  							<div class="container-fluid">
  								<div class="row">
                    <div class="col-xs-6 text-center  pl-0 pr-0 data-wrap-right">
  										<i class="icon-user-following data-right-rep-icon txt-light-grey"></i>
  									</div>
  									<div class="col-xs-6 text-center pl-0 pr-0 data-wrap-left">
  										<span class="txt-dark block counter"><span class="counter-anim">2245</span></span>
  										<span class="weight-500 uppercase-font block font-13">Clients</span>
  									</div>
  								</div>
  							</div>
  						</div>
            </div>
          </div>
        </part-panel-default>
      </div>
    </global-unite-first>


    <global-unite-middle>
      <div class="col-md-12" slot="content">
        <list-clients></list-clients>
      </div>
    </global-unite-middle>
    <global-unite-last>
      <div class="col-md-12" slot="content">
        <part-panel-default>
          <div slot="heading">
            Filter
          </div>
          <div class="row" slot="body">
            <div class="col-md-12">
              <div class="form-group">
                <input type="text" class="form-control">
              </div>
            </div>

          </div>
        </part-panel-default>
      </div>
    </global-unite-last>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="css">
</style>
