<template lang="html">
  <div>
    <div class="chat-cmplt-wrap chat-for-widgets-1">
      <div class="chat-box-wrap">
        <global-unite-first>
          <div class="col-md-12" slot="content">
            <div class="panel panel-default card-view">
							<div class="panel-wrapper">
                <div class="panel-body sm-data-box-1">
									<chat-list ></chat-list>
								</div>
              </div>
            </div>
          </div>
        </global-unite-first>
        <!-- chat list -->
      </div>
      <div class="recent-chat-box-wrap">
        <div class="recent-chat-wrap">
          <div class="row">
            <global-unite-middle>
              <router-view slot="content"></router-view>
            </global-unite-middle>
            <!-- chat Content -->
          </div>
        </div>
      </div>
    </div>

  </div>

  <!-- <chat-container>
    <div slot="list">
      <chat-list></chat-list>
    </div>
    <router-view slot="content"></router-view>
  </chat-container> -->
</template>

<script>
export default {
  mounted(){

  }
}
</script>

<style lang="css">
</style>
