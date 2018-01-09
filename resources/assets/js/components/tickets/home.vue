<template lang="html">
  <chat>
    <!-- *
    * List
    * -->
    <li class="chat-list" slot="list">
      <list-tickets-chat/>
    </li>


    <!-- *
    * Content
    * -->
    <router-view slot="content"></router-view>


  </chat>
</template>

<script>
export default {

}
</script>

<style lang="css">
</style>
