<template lang="html">
  <div class="fixed-last">
    <slot name="content"></slot>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">

.fixed-last {
    /* background-color: rgba(180, 179, 179, 0.2); */
    position: fixed;
    top: 66px;
    left: 80.5%;
    width: 19.5%;
    margin-left: 0;
    bottom: 0;
    z-index: 100;
    border-right: 1px solid #dedede;
    -webkit-transition: all 0.4s ease;
    -moz-transition: all 0.4s ease;
    transition: all 0.4s ease;
}

</style>
