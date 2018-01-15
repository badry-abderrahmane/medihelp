<template lang="html">
  <div class="fixed-first">
    <slot name="content"></slot>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">

.fixed-first {
    background-color: #ffff;
    position: fixed;
    top: 66px;
    left: 66px;
    width: 20%;
    margin-left: 0;
    bottom: 0;
    z-index: 100;
    border-right: 1px solid #dedede;
    -webkit-transition: all 0.4s ease;
    -moz-transition: all 0.4s ease;
    transition: all 0.4s ease;
}

</style>
