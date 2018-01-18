<template lang="html">
  <div class="col-12">
      <div class="card m-b-0">
          <!-- .chat-row -->
          <div class="chat-main-box">
              <!-- .chat-left-panel -->
              <chat-list></chat-list>
              <!-- .chat-left-panel -->
              <!-- .chat-right-panel -->
              <router-view></router-view>
              <!-- .chat-right-panel -->
          </div>
          <!-- /.chat-row -->
      </div>
  </div>
</template>

<script>
export default {
  mounted(){
    Vue.nextTick(function () {
      Event.$emit('init-slimscroll-chat');
    })
  }
}
</script>

<style lang="css">
</style>
