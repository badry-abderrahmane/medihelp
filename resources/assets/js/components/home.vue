<template lang="html">
  <!-- ============================================================== -->
  <!-- Main wrapper - style you can find in pages.scss -->
  <!-- ============================================================== -->
  <div id="main-wrapper">
    <div v-if="status">
      <!-- ============================================================== -->
      <!-- Topbar header - style you can find in pages.scss -->
      <!-- ============================================================== -->
      <global-topbar :user="user"></global-topbar>
      <!-- ============================================================== -->
      <!-- End Topbar header -->
      <!-- ============================================================== -->

      <!-- ============================================================== -->
      <!-- Left Sidebar - style you can find in sidebar.scss  -->
      <!-- ============================================================== -->
      <global-left-sidebar></global-left-sidebar>
      <!-- ============================================================== -->
      <!-- End Left Sidebar - style you can find in sidebar.scss  -->
      <!-- ============================================================== -->

      <!-- ============================================================== -->
      <!-- Page wrapper  -->
      <!-- ============================================================== -->
      <div class="page-wrapper">
          <!-- ============================================================== -->
          <!-- Container fluid  -->
          <!-- ============================================================== -->
          <div class="container-fluid">
              <!-- ============================================================== -->
              <!-- Bread crumb and right sidebar toggle -->
              <!-- ============================================================== -->
              <global-bread-crump></global-bread-crump>
              <!-- ============================================================== -->
              <!-- End Bread crumb and right sidebar toggle -->
              <!-- ============================================================== -->

              <!-- ============================================================== -->
              <!-- Start Page Content -->
              <!-- ============================================================== -->
              <!-- <div class="row">
                  <div class="col-12">
                      <div class="card">
                          <div class="card-body">
                              This is some text within a card block.
                          </div>
                      </div>
                  </div>
              </div> -->
              <router-view></router-view>
              <!-- ============================================================== -->
              <!-- End PAge Content -->
              <!-- ============================================================== -->


              <!-- ============================================================== -->
              <!-- Right sidebar -->
              <!-- ============================================================== -->
              <!-- .right-sidebar -->
              <global-right-sidebar></global-right-sidebar>
              <!-- ============================================================== -->
              <!-- End Right sidebar -->
              <!-- ============================================================== -->


          </div>
          <!-- ============================================================== -->
          <!-- End Container fluid  -->
          <!-- ============================================================== -->
          <!-- ============================================================== -->
          <!-- footer -->
          <!-- ============================================================== -->
          <footer class="footer">
              © 2018 Material HelpDesk v1.8
          </footer>
          <!-- ============================================================== -->
          <!-- End footer -->
          <!-- ============================================================== -->
      </div>
    </div>
    <!-- Only renders when the device is offline -->
    <div v-else>
      <section id="wrapper" class="error-page">
          <div class="error-box">
              <div class="error-body text-center">
                  <h1><i class="mdi mdi-emoticon-sad"></i></h1>
                  <h3 class="text-uppercase m-t-30">Aucune connexion Internet</h3>
                  <!-- <p class="text-muted m-t-30 m-b-30">L'aautomatiquement une fois connecté</p>
                  <a @click="reload" class="btn btn-info btn-rounded waves-effect waves-light m-b-40 text-light">Réessayer</a>  -->
                </div>
              <footer class="footer text-center">© 2018 STG HelpDesk.</footer>
          </div>
      </section>
    </div>

    <!-- @detected-condition fires when the connectivity status of the device changes -->
    <offline @detected-condition="handleConnectivityChange">
      <!-- Only renders when the device is online -->

    </offline>

      <!-- ============================================================== -->
      <!-- End Page wrapper  -->
      <!-- ============================================================== -->
  </div>
</template>

<script>
import offline from 'v-offline';
export default {
  components: {
    offline
  },
  data(){
    return {
      user:'',
      status: true
    }
  },
  created(){
    axios.get('/wayway')
      .then(response => {
        this.user = response.data;
    });
  },
  methods: {
    handleConnectivityChange(status) {
      this.status = status
    },
    reload(){
      this.$router.go({ path: '/' })
    }
  }
}
</script>
<style lang="css">
</style>
