
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
// import VueRouter from 'vue-router';
import { store } from './store';
import Vue2Filters from 'vue2-filters'



Vue.use(Vue2Filters)
// Vue.use(VueRouter);

require('./plugins/sweet-alert-plugin');

require('./global');
require('./parts');
require('./plugins');

require('./lists');
require('./infos');
// require('./sides');
require('./modals');
require('./charts');
require('./lasts');

window.Event = new Vue();

import { router } from './router.js';
// const router = new VueRouter({ routes });

Vue.component('full-app', require('./components/home.vue'));

const app = new Vue({
  store,
  router,
  data(){
    return {
      table: '',
    }
  },
  mounted(){
    this.$store.dispatch('LOAD_TYPECLIENTS_LIST')
    this.$store.dispatch('LOAD_CLIENTS_LIST')
    this.$store.dispatch('LOAD_ACTIONS_LIST')
    this.$store.dispatch('LOAD_TYPECOMMS_LIST')
    this.$store.dispatch('LOAD_ETATS_LIST')
    this.$store.dispatch('LOAD_USERS_LIST')
    this.$store.dispatch('LOAD_ROLES_LIST')
    this.$store.dispatch('LOAD_TICKETS_LIST')

    this.$store.dispatch('LOAD_ROLE')
    this.$store.dispatch('LOAD_USER')
    this.$store.dispatch('LOAD_TICKETS')

    // MAILBOX
    this.$store.dispatch('LOAD_MAILBOX_FOLDERS')
    //this.$store.dispatch('LOAD_MAILBOX_MAILS')
  },
  created(){
    Event.$on('init-datatable', (tableid) => {
      this.datatableThis(tableid);
    });
    Event.$on('destroy-datatable', (tableid) => {
      this.destroyThis(tableid);
    });
    // Event.$on('init-slimscroll-list', () => {
    //   this.slimThisList();
    // });
    Event.$on('init-slimscroll-chat', () => {
      this.slimThisChat();
    });

    Event.$on('init-tooltip-all', () => {
      this.tooltipAll();
    });

    Event.$on('publish-success-message', (message) => {
      this.notifSuccess(message);
    });
    Event.$on('publish-info-message', (message) => {
      this.notifInfo(message);
    });
    Event.$on('publish-warning-message', (message) => {
      this.notifWarning(message);
    });
    Event.$on('publish-danger-message', (message) => {
      this.notifDanger(message);
    });

  },
  methods:{
    /**
    * Notif Functions
    *
    **/
    notifSuccess(message){
      $.toast({
       heading: message,
       text: '',
       position: 'bottom-center',
       loaderBg:'#ff6849',
       icon: 'success',
       hideAfter: 3500,
       stack: 6
     });
    },
    notifWarning(message){
      $.toast({
       heading: message,
       text: '',
       position: 'bottom-center',
       loaderBg:'#ff6849',
       icon: 'warning',
       hideAfter: 3500,
       stack: 6
     });
    },
    notifInfo(message){
      $.toast({
       heading: message,
       text: '',
       position: 'bottom-center',
       loaderBg:'#ff6849',
       icon: 'info',
       hideAfter: 3000,
       stack: 6
     });
    },
    notifDanger(message){
      $.toast({
       heading: message,
       text: '',
       position: 'bottom-center',
       loaderBg:'#ff6849',
       icon: 'error',
       hideAfter: 3500,
       stack: 6,
     });
    },
    /**
    * Slimscroll Functions
    *
    **/
    slimThisChat(){
      $('.chat-left-inner > .chatonline').slimScroll({
          height: '100%',
          position: 'right',
          size: "5px",
          color: '#dcdcdc',
          start: 'bottom',
      });
      $('.chat-list').slimScroll({
          position: 'right',
          size: "5px",
          height: '100%',
          color: '#dcdcdc',
          start: 'bottom',
       });

      var cht = function () {
              var topOffset = 445;
              var height = ((window.innerHeight > 0) ? window.innerHeight : this.screen.height) - 1;
              height = height - topOffset;
              $(".chat-list").css("height", (height) + "px");
      };
      $(window).ready(cht);
      $(window).on("resize", cht);
      // this is for the left-aside-fix in content area with scroll
      var chtin = function () {
              var topOffset = 270;
              var height = ((window.innerHeight > 0) ? window.innerHeight : this.screen.height) - 1;
              height = height - topOffset;
              $(".chat-left-inner").css("height", (height) + "px");
      };
      $(window).ready(chtin);
      $(window).on("resize", chtin);

      $(".open-panel").on("click", function () {
          $(".chat-left-aside").toggleClass("open-pnl");
          $(".open-panel i").toggleClass("ti-angle-left");
      });
    },
    // slimThisChat(){
    // 	$('.chatapp-chat-nicescroll-bar').slimscroll({height:'683px',size: '4px',color: '#878787',disableFadeOut : true,borderRadius:0,start: 'bottom'});
    // },
    /**
    * DataTables Functions
    *
    **/
    destroyThis(tableid){
      this.table.destroy();
    },
    datatableThis(tableid){
      this.table = $('table.display').DataTable({
        "bDestroy": true,
        dom: 'Bfrtip',
        buttons: [
           'excel', 'pdf',
           // { extend: 'pageLength', text:'Nombre de lignes'},
           { extend: 'print', text:'<i class="fa fa-print"></i>'}
        ],
        "language": {
              "lengthMenu": "Afficher _MENU_ lignes par page",
              "sSearch":         "Recherche&nbsp;:",
              "zeroRecords": "Aucun enregistrement pour le moment. ",
              "info": "Page _PAGE_ de _PAGES_",
              "infoEmpty": "Pas d'enregistrement.",
              "infoFiltered": "( _MAX_ enregistrements filtrés)",
              "oPaginate": {
                  "sFirst":      "Premier",
                  "sPrevious":   "Pr&eacute;c&eacute;dent",
                  "sNext":       "Suivant",
                  "sLast":       "Dernier"
              },
          }
      });
      //this.loadTooltips();
    },
    tooltipAll(){
      $('[data-toggle="tooltip"]').tooltip()
    }
  }
}).$mount('#app');
