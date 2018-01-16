<template lang="html">
  <div class="wrapper theme-1-active pimary-color-green slide-nav-toggle">
	  <global-navbar :user="user"></global-navbar>
	  <global-sidebar></global-sidebar>
	  <!-- <global-optionbar></global-optionbar> -->
    <!-- <div class="right-sidebar-backdrop"></div> -->
	  <div class="page-wrapper pl-0 pr-0">
      <div class="container-fluid pa-1">
        <!-- <global-pagetitle></global-pagetitle> -->
        <router-view></router-view>
      </div>
      <!-- <global-footer></global-footer> -->
    </div>
</div>
</template>

<script>
export default {
  data(){
    return {
      user:'',
    }
  },
  created(){
    axios.get('/wayway')
      .then(response => {
        this.user = response.data;
    });
  }
}
</script>

<style lang="css">
.page-wrapper{
  background: #ffffff !important;
}


</style>
