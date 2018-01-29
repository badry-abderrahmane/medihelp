
import Vue from 'vue'
import VueRouter from 'vue-router'
import { store } from './store.js'

Vue.use(VueRouter)

//define routes
const routes = [
        { name:'Tableau de bord', path: '/', component: require('./components/dashboard.vue')},
        /**
        **    general routes
        **/
        { path: '/apropos', component: require('./components/apropos.vue')},
        { path: '/support', component: require('./components/support.vue')},

        /**
        **    Clients routes
        **/
        { path: '/clients', component: require('./components/clients/home.vue'),
            children: [
              { name:'Clients', path: '', component: require('./components/clients/list.vue')},
              { name:'Détail Client', path: 'show/:id', component: require('./components/clients/show.vue')},
              { name:'Nouveau Client',  path: 'add', component: require('./components/clients/form.vue')},
              { name:'Modification Client', path: 'edit/:id', component: require('./components/clients/form.vue')},

              { name:'Nouveau Contact', path: 'contacts/add/:clientid', component: require('./components/contacts/form.vue')},
              { name:'Modification Contact', path: 'contacts/edit/:clientid/:id', component: require('./components/contacts/form.vue')},

              { name:'Nouvelle Adresse', path: 'adresses/add/:clientid', component: require('./components/adresses/form.vue')},
              { name:'Modification Adresse', path: 'adresses/edit/:clientid/:id', component: require('./components/adresses/form.vue')},

              { name:'Nouveau Ticket', path: 'tickets/add/:clientid', component: require('./components/tickets/form.vue')},
              { name:'Modification Ticket', path: 'tickets/edit/:clientid/:id', component: require('./components/tickets/form.vue')},
            ]
        },

        /**
        **    Users routes
        **/
        { path: '/users', component: require('./components/users/home.vue'),
            children: [
              { name:'Utilisateurs', path: '', component: require('./components/users/list.vue')},
              { name:'Détail Utilisateur', path: 'show/:id', component: require('./components/users/show.vue')},
              { name:'Ajout Utilisateur', path: 'add', component: require('./components/users/form.vue')},
              { name:'Modification Utilisateur', path: 'edit/:id', component: require('./components/users/form.vue')},

              { name:'Liste Roles', path: 'roles', component: require('./components/roles/list.vue')},
              { name:'Ajout Role', path: 'roles/add', component: require('./components/roles/form.vue')},
              { name:'Modification Role', path: 'roles/edit/:id', component: require('./components/roles/form.vue')},


              { name:'Liste Permissions', path: 'permissions', component: require('./components/permissions/list.vue')},
              { name:'Ajout Permission', path: 'permissions/add', component: require('./components/permissions/form.vue')},
              { name:'Modification Permission', path: 'permissions/edit/:id', component: require('./components/permissions/form.vue')},


            ]
        },

        /**
        **    Tickets routes
        **/
        {
           path: '/tickets', component: require('./components/tickets/home.vue'),
           children: [
              { name:'Liste Tickets',  path: '', component: require('./components/tickets/list.vue') },
              { name:'Nouveau Ticket Générale',  path: 'add', component: require('./components/tickets/form.vue')},
              { path: 'chat', component: require('./components/tickets/chat.vue'),
                children: [
                  { name:'Chat Tickets', path: '', component: require('./components/tickets/holder.vue') },
                  { name:'Chat Tickets - Détails', path: 'show/:ticketid', component: require('./components/tickets/chatMsgs.vue') },
                 ]
              },

              { name:'Tickets - Nouveau Appel', path: 'appels/add/:ticketid', component: require('./components/appels/form.vue')},
              { name:'Tickets - Nouveau Email', path: 'emails/add/:ticketid', component: require('./components/emails/form.vue')},
            ]
        },

        /**
        **    Parametres routes
        **/
        {
           path: '/parametres', component: require('./components/parametres/home.vue'),
           children: [
              // { name:'Paramètres générales',  path: '', component: require('./components/parametres/form.vue') },
              { name:'Gestion des types',  path: 'types', component: require('./components/parametres/types.vue') },
              { name:'Import/Export',  path: 'imports', component: require('./components/parametres/imports.vue')},
              { name:'Rapports',  path: 'rapports', component: require('./components/parametres/rapports.vue')},
              { name:'Paramètres Divers',  path: 'divers', component: require('./components/parametres/divers.vue')},
            ]
        },
    ]


  export const router = new VueRouter({ routes });



  export default router
