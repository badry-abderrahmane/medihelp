<template lang="html">
  <div class="fixed-middle">
    <slot name="content"></slot>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">

.fixed-middle {
    background-color: #ffff;
    position: fixed;
    top: 66px;
    left: 23.5%;
    width: 57%;
    margin-left: 0;
    bottom: 0;
    z-index: 100;
    border-right: 1px solid #dedede;
    -webkit-transition: all 0.4s ease;
    -moz-transition: all 0.4s ease;
    transition: all 0.4s ease;
}

</style>
