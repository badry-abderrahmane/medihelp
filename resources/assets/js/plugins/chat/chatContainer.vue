<template lang="html">
  <div class="row">
    <div class="col-md-12">
      <div class="panel panel-default border-panel card-view pa-0">
        <div class="panel-wrapper collapse in">
          <div class="panel-body pa-0">
            <div class="chat-cmplt-wrap chat-for-widgets-1">
              <div class="chat-box-wrap">
                <slot name="list"></slot>
                <!-- chat list -->
              </div>
              <div class="recent-chat-box-wrap">
                <div class="recent-chat-wrap">
                  <div class="row">
                    <slot name="content"></slot>
                    <!-- chat Content -->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {

}
</script>

<style lang="css">
.chat-for-widgets-1{
  height: 696px !important;
}
</style>
