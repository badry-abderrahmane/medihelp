<template lang="html">
  <div class="panel-heading ma-0 pt-15">
    <div class="goto-back">
      <a  id="goto_back_widget_1" href="javascript:void(0)" class="inline-block txt-grey">
        <i class="zmdi zmdi-account-add"></i>
      </a>
      <span class="inline-block txt-dark">{{ ticket.contact.name }}</span>
      <a href="javascript:void(0)" class="inline-block text-right txt-grey"><i class="zmdi zmdi-more"></i></a>
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
export default {
  props:["ticket"]
}
</script>

<style lang="css">
</style>
