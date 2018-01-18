<template lang="html">
  <div class="card card-outline-info">
      <div class="card-header">
          <h4 class="m-b-0 text-white"><slot name="heading"></slot></h4></div>
      <div class="card-body">
          <slot name="body"></slot>
      </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
