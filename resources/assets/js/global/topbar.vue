<template lang="html">
  <header class="topbar">
      <nav class="navbar top-navbar navbar-expand-md navbar-light">
          <!-- ============================================================== -->
          <!-- Logo -->
          <!-- ============================================================== -->
          <div class="navbar-header">
              <a class="navbar-brand" href="index.html">
                  <!-- Logo icon -->
                  <b>
                      <!--You can put here icon as well // <i class="wi wi-sunset"></i> //-->
                      <!-- Dark Logo icon -->
                      <img src="assets/images/logo-icon.png" alt="homepage" class="dark-logo" />
                      <!-- Light Logo icon -->
                      <img src="assets/images/logo-light-icon.png" alt="homepage" class="light-logo" />
                  </b>
                  <!--End Logo icon -->
                  <!-- Logo text -->
                  <span>
                   <!-- dark Logo text -->
                   <!-- <img src="assets/images/logo-text.png" alt="homepage" class="dark-logo" /> -->
                   <!-- Light Logo text -->
                   <!-- <img src="assets/images/logo-light-text.png" class="light-logo" alt="homepage" /> -->
                 </span> </a>
          </div>
          <!-- ============================================================== -->
          <!-- End Logo -->
          <!-- ============================================================== -->
          <div class="navbar-collapse">
              <!-- ============================================================== -->
              <!-- toggle and nav items -->
              <!-- ============================================================== -->
              <ul class="navbar-nav mr-auto mt-md-0">
                  <!-- This is  -->
                  <li class="nav-item"> <a class="nav-link nav-toggler hidden-md-up text-muted waves-effect waves-dark" href="javascript:void(0)"><i class="mdi mdi-menu"></i></a> </li>
                  <li class="nav-item"> <a class="nav-link sidebartoggler hidden-sm-down text-muted waves-effect waves-dark" href="javascript:void(0)"><i class="ti-menu"></i></a> </li>
              </ul>
              <!-- ============================================================== -->
              <!-- User profile and search -->
              <!-- ============================================================== -->
              <ul class="navbar-nav my-lg-0">
                  <!-- ============================================================== -->
                  <!-- End Messages -->
                  <!-- ============================================================== -->
                  <!-- ============================================================== -->
                  <!-- Profile -->
                  <!-- ============================================================== -->
                  <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle text-muted waves-effect waves-dark" href="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <!-- <img src="assets/images/users/1.jpg" alt="user" class="profile-pic" /> -->
                        <!-- <i class="fa fa-user m-r-10"></i><i class="fa fa-angle-down"></i> -->
                        {{ user.name.toUpperCase() }}<span class="m-l-10 round round-success"><i class="fa fa-user"></i></span><i class="fa fa-angle-down m-l-10"></i>
                      </a>
                      <div class="dropdown-menu dropdown-menu-right scale-up">
                          <ul class="dropdown-user">
                              <li>
                                  <div class="dw-user-box">
                                      <!-- <div class="u-img"><img src="assets/images/users/1.jpg" alt="user"></div> -->
                                      <div class="u-text">
                                          <h4>{{ user.name }}</h4>
                                          <p class="text-muted">{{ user.email }}</p>
                                          <a @click="$router.push({ path:'/change/password' })" class="btn waves-effect waves-light btn-danger">Changer Mot de passe</a></div>
                                  </div>
                              </li>
                              <!-- <li role="separator" class="divider"></li> -->
                              <!-- <li><a href="#"><i class="ti-user"></i> Mon Profile</a></li> -->
                              <!-- <li><a href="#"><i class="ti-wallet"></i> My Balance</a></li> -->
                              <!-- <li><a href="#"><i class="ti-email"></i> Boîte de messagerie</a></li>
                              <li role="separator" class="divider"></li>
                              <li><a href="#"><i class="ti-settings"></i> Paramètre de compte</a></li> -->
                              <li role="separator" class="divider"></li>
                              <li><a href="/logout"><i class="fa fa-power-off"></i> Déconnexion</a></li>
                          </ul>
                      </div>
                  </li>
                  <!-- ============================================================== -->
                  <!-- Language -->
                  <!-- ============================================================== -->
                  <!-- <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle text-muted waves-effect waves-dark" href="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i class="flag-icon flag-icon-us"></i></a>
                      <div class="dropdown-menu dropdown-menu-right scale-up"> <a class="dropdown-item" href="#"><i class="flag-icon flag-icon-in"></i> India</a> <a class="dropdown-item" href="#"><i class="flag-icon flag-icon-fr"></i> French</a> <a class="dropdown-item" href="#"><i class="flag-icon flag-icon-cn"></i> China</a> <a class="dropdown-item" href="#"><i class="flag-icon flag-icon-de"></i> Dutch</a> </div>
                  </li> -->
              </ul>
          </div>
      </nav>
  </header>
</template>

<script>
export default {
  props:["user"]
}
</script>

<style lang="css">
</style>
