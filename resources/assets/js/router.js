module.exports = {
    routes: [
      { name:'Tableau de bord', path: '/', component: require('./components/dashboard.vue')},
      /**
      **    general routes
      **/
      { path: '/apropos', component: require('./components/apropos.vue')},
      { path: '/support', component: require('./components/support.vue')},

      /**
      **    Typeclient routes
      **/
      { name:'List Types Client', path: '/typeclients', component: require('./components/typeclients/home.vue')},
      { name:'Ajout Type Client', path: '/typeclients/add', component: require('./components/typeclients/form.vue')},
      { name:'Modification Type Client', path: '/typeclients/edit/:id', component: require('./components/typeclients/form.vue')},
      { name:'Suppression Type Client', path: '/typeclients/delete/:id', component: require('./components/typeclients/delete.vue')},

      /**
      **    Typecomm routes
      **/
      { name:'List Types Comm', path: '/typecomms', component: require('./components/typecomms/home.vue')},
      { name:'Ajout Type Comm', path: '/typecomms/add', component: require('./components/typecomms/form.vue')},
      { name:'Modification Type Comm', path: '/typecomms/edit/:id', component: require('./components/typecomms/form.vue')},
      { name:'Suppression Type Comm', path: '/typecomms/delete/:id', component: require('./components/typecomms/delete.vue')},

      /**
      **    Actions routes
      **/
      { name:'List Actions', path: '/actions', component: require('./components/actions/home.vue')},
      { name:'Ajout Action', path: '/actions/add', component: require('./components/actions/form.vue')},
      { name:'Modification Action', path: '/actions/edit/:id', component: require('./components/actions/form.vue')},
      { name:'Suppression Action', path: '/actions/delete/:id', component: require('./components/actions/delete.vue')},

      /**
      **    Etats routes
      **/
      { name:'List Etats', path: '/etats', component: require('./components/etats/home.vue')},
      { name:'Ajout Etat', path: '/etats/add', component: require('./components/etats/form.vue')},
      { name:'Modification Etat', path: '/etats/edit/:id', component: require('./components/etats/form.vue')},
      { name:'Suppression Etat', path: '/etats/delete/:id', component: require('./components/etats/delete.vue')},

      /**
      **    Clients routes
      **/
      { path: '/clients', component: require('./components/clients/home.vue'),
          children: [
            { name:'Clients', path: '', component: require('./components/clients/list.vue')},
            { name:'Détail Client', path: 'show/:id', component: require('./components/clients/show.vue')},
            { name:'Nouveau Client',  path: 'add', component: require('./components/clients/form.vue')},
            { name:'Modification Client', path: 'edit/:id', component: require('./components/clients/form.vue')},
            // { name:'Suppression Client', path: 'delete/:id', component: require('./components/clients/delete.vue')},

            { name:'Nouveau Contact', path: 'contacts/add/:clientid', component: require('./components/contacts/form.vue')},
            { name:'Modification Contact', path: 'contacts/edit/:clientid/:id', component: require('./components/contacts/form.vue')},
            // { name:'Suppression Contact', path: 'contacts/delete/:id', component: require('./components/contacts/delete.vue')},

            { name:'Nouvelle Adresse', path: 'adresses/add/:clientid', component: require('./components/adresses/form.vue')},
            { name:'Modification Adresse', path: 'adresses/edit/:clientid/:id', component: require('./components/adresses/form.vue')},
            // { name:'Suppression Adresse', path: 'adresses/delete/:id', component: require('./components/adresses/delete.vue')},

            { name:'Nouveau Ticket', path: 'tickets/add/:clientid', component: require('./components/tickets/form.vue')},
            { name:'Modification Ticket', path: 'tickets/edit/:clientid/:id', component: require('./components/tickets/form.vue')},
            // { name:'Suppression Ticket', path: 'tickets/delete/:id', component: require('./components/tickets/delete.vue')},
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

    ]
  }
