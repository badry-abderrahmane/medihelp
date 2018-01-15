<template lang="html">
  <div class="fixed-side">
    <ul>
      <li class="pl-2"><i class="fa fa-tachometer fa-3x "></i></li>
    </ul>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">

.fixed-side {
    background: #2a3e4c;
    border-bottom: 1px solid #2a3e4c;
    position: fixed;
    top: 0;
    left: 0;
    width: 3%;
    margin-left: 0;
    bottom: 0;
    z-index: 100;
    border-right: 1px solid #dedede;
    -webkit-transition: all 0.4s ease;
    -moz-transition: all 0.4s ease;
    transition: all 0.4s ease;
}

</style>
