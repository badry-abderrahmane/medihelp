<template lang="html">
  <aside class="left-sidebar">
      <!-- Sidebar scroll-->
      <div class="scroll-sidebar">
          <!-- User profile -->
          <!-- <div class="user-profile" style="background: url(assets/images/background/user-info.jpg) no-repeat;">

              <div class="profile-img"> <img src="assets/images/users/profile.png" alt="user" /> </div>

              <div class="profile-text"> <a href="#" class="dropdown-toggle u-dropdown" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true">Markarn Doe</a>
                  <div class="dropdown-menu animated flipInY">
                      <a href="#" class="dropdown-item"><i class="ti-user"></i> My Profile</a>
                      <a href="#" class="dropdown-item"><i class="ti-wallet"></i> My Balance</a>
                      <a href="#" class="dropdown-item"><i class="ti-email"></i> Inbox</a>
                      <div class="dropdown-divider"></div> <a href="#" class="dropdown-item"><i class="ti-settings"></i> Account Setting</a>
                      <div class="dropdown-divider"></div> <a href="login.html" class="dropdown-item"><i class="fa fa-power-off"></i> Logout</a>
                  </div>
              </div>
          </div> -->
          <!-- End User profile text-->
          <!-- Sidebar navigation-->
          <nav class="sidebar-nav">
              <ul id="sidebarnav">
                  <li class="nav-small-cap">Navigation</li>
                  <li>
                      <a class="has-arrow waves-effect waves-dark" @click="$router.push({ path: `/` })" :class="$route.name == 'Tableau de bord' ? 'active':'' " aria-expanded="false"><i class="mdi mdi-gauge"></i><span class="hide-menu">Tableau de bord</span></a>
                  </li>
                  <li>
                    <a class="has-arrow waves-effect waves-dark" @click="$router.push({ path: `/clients` })" :class="$route.name == 'Clients' ? 'active':'' " aria-expanded="false"><i class="mdi mdi-laptop-windows"></i><span class="hide-menu">Clients</span></a>
                      <ul aria-expanded="false" class="collapse">
                          <li><a href="../material-rtl/index.html">Nouveau client</a></li>
                          <li><a href="../horizontal/index2.html">Liste clients</a></li>
                          <li><a href="../dark/index3.html">Status clients</a></li>
                          <li><a href="../material/index4.html">Responsables clients</a></li>
                      </ul>
                  </li>
                  <li>
                      <a class="has-arrow waves-effect waves-dark" @click="$router.push({ path: `/tickets` })" :class="$route.name == 'Tickets' ? 'active':'' " aria-expanded="false"><i class="mdi mdi-bullseye"></i><span class="hide-menu">Tickets Manager</span></a>
                  </li>
                  <li>
                      <a class="has-arrow waves-effect waves-dark" href="#" aria-expanded="false"><i class="mdi mdi-email"></i><span class="hide-menu">Boîte de messagerie</span></a>
                      <ul aria-expanded="false" class="collapse">
                          <li><a href="app-email.html">Nouveau courier</a></li>
                          <li><a href="app-email-detail.html">Boîte de réception</a></li>
                      </ul>
                  </li>
                  <li>
                      <a class="has-arrow waves-effect waves-dark" href="#" aria-expanded="false"><i class="mdi mdi-chart-bubble"></i><span class="hide-menu">Paramètres système</span></a>
                      <ul aria-expanded="false" class="collapse">
                          <li><a href="ui-cards.html">Utilisateurs</a></li>
                          <li><a href="ui-user-card.html">Gestion des rôles</a></li>
                          <li><a href="ui-buttons.html">Gestion de types</a></li>
                          <li><a href="ui-buttons.html">Export/Import</a></li>
                          <li><a href="ui-buttons.html">Rapports</a></li>
                          <li><a href="ui-modals.html">Divers</a></li>
                      </ul>
                  </li>
              </ul>
          </nav>
          <!-- End Sidebar navigation -->
      </div>
      <!-- End Sidebar scroll-->
      <!-- Bottom points-->
      <div class="sidebar-footer">
          <!-- item-->
          <a href="" class="link" data-toggle="tooltip" title="Settings"><i class="ti-settings"></i></a>
          <!-- item-->
          <a href="" class="link" data-toggle="tooltip" title="Email"><i class="mdi mdi-gmail"></i></a>
          <!-- item-->
          <a href="" class="link" data-toggle="tooltip" title="Logout"><i class="mdi mdi-power"></i></a>
      </div>
      <!-- End Bottom points-->
  </aside>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
