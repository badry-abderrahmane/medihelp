<template lang="html">
  <div class="fixed-sidebar-left">
    <ul class="nav navbar-nav side-nav nicescroll-bar">
      <li class="navigation-header">
        <span>Principale</span>
        <i class="zmdi zmdi-more"></i>
      </li>
      <li>
        <a style="cursor:pointer;" @click="$router.push({ path: `/` })" :class="$route.name == 'Tableau de bord' ? 'active':'' ">
          <div class="pull-left">
            <i class="zmdi zmdi-landscape mr-20"></i>
            <span class="right-nav-text">Tableau de bord</span>
          </div>
          <div class="clearfix"></div>
        </a>
      </li>
      <li class="navigation-header">
        <span>Clients</span>
        <i class="zmdi zmdi-more"></i>
      </li>
      <li>
        <a style="cursor:pointer;" @click="$router.push({ path: `/clients` })" :class="$route.name == 'Clients' ? 'active':'' ">
          <div class="pull-left">
            <i class="fa fa-building mr-20"></i>
            <span class="right-nav-text">Clients</span>
          </div>
          <div class="clearfix"></div>
        </a>
      </li>
      <li>
        <a style="cursor:pointer;" @click="$router.push({ path: `/tickets` })" :class="$route.name == 'Tickets' ? 'active':'' ">
          <div class="pull-left">
            <i class="fa fa-ticket mr-20"></i>
            <span class="right-nav-text">Tickets</span>
          </div>
          <div class="clearfix"></div>
        </a>
      </li>
      <li>
        <a style="cursor:pointer;" @click="$router.push({ path: `/appels` })" :class="$route.name == 'Appels' ? 'active':'' ">
          <div class="pull-left">
            <i class="fa fa-phone mr-20"></i>
            <span class="right-nav-text">Appels</span>
          </div>
          <div class="clearfix"></div>
        </a>
      </li>
      <li>
        <a style="cursor:pointer;" @click="$router.push({ path: `/emails` })" :class="$route.name == 'Emails' ? 'active':'' ">
          <div class="pull-left">
            <i class="fa fa-envelope-o mr-20"></i>
            <span class="right-nav-text">Emails</span>
          </div>
          <div class="clearfix"></div>
        </a>
      </li>
      <li class="navigation-header">
        <span>Paramètres Système</span>
        <i class="zmdi zmdi-more"></i>
      </li>
      <li>
        <a style="cursor:pointer;" @click="$router.push({ path: `/typeclients` })" :class="$route.name == 'List Types Client' ? 'active':'' ">
          <div class="pull-left">
            <i class="fa fa-wrench mr-20"></i>
            <span class="right-nav-text">Types clients</span>
          </div>
          <div class="clearfix"></div>
        </a>
      </li>
      <li>
        <a style="cursor:pointer;" @click="$router.push({ path: `/typecomms` })" :class="$route.name == 'List Types Comm' ? 'active':'' ">
          <div class="pull-left">
            <i class="fa fa-wrench mr-20"></i>
            <span class="right-nav-text">Types Comm</span>
          </div>
          <div class="clearfix"></div>
        </a>
      </li>
      <li>
        <a style="cursor:pointer;" @click="$router.push({ path: `/etats` })" :class="$route.name == 'List Etats' ? 'active':'' ">
          <div class="pull-left">
            <i class="fa fa-wrench mr-20"></i>
            <span class="right-nav-text">Types Etat</span>
          </div>
          <div class="clearfix"></div>
        </a>
      </li>
      <li>
        <a style="cursor:pointer;" @click="$router.push({ path: `/actions` })" :class="$route.name == 'List Actions' ? 'active':'' ">
          <div class="pull-left">
            <i class="fa fa-wrench mr-20"></i>
            <span class="right-nav-text">Types actions</span>
          </div>
          <div class="clearfix"></div>
        </a>
      </li>
      <li>
        <a style="cursor:pointer;" @click="$router.push({ path: `/parametres` })" :class="$route.name == 'Paramètres' ? 'active':'' ">
          <div class="pull-left">
            <i class="fa fa-cogs mr-20"></i>
            <span class="right-nav-text">Paramètres</span>
          </div>
          <div class="clearfix"></div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
