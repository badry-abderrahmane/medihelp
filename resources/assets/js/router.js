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
      **    Entreprises routes
      **/
      { path: '/clients', component: require('./components/clients/home.vue'),
          children: [
            { name:'Clients', path: '', component: require('./components/clients/list.vue')},
            { name:'Détail Client', path: 'show/:id', component: require('./components/clients/show.vue')},
            { name:'Nouveau Client',  path: 'add', component: require('./components/clients/form.vue')},
            { name:'Modification Client', path: 'edit/:id', component: require('./components/clients/form.vue')},
            { name:'Suppression Client', path: 'delete/:id', component: require('./components/clients/delete.vue')},

            { name:'Nouveau Contact', path: 'contacts/add/:clientid', component: require('./components/contacts/form.vue')},
            { name:'Modification Contact', path: 'contacts/edit/:clientid/:id', component: require('./components/contacts/form.vue')},
            { name:'Suppression Contact', path: 'contacts/delete/:id', component: require('./components/contacts/delete.vue')},

            { name:'Nouvelle Adresse', path: 'adresses/add/:clientid', component: require('./components/adresses/form.vue')},
            { name:'Modification Adresse', path: 'adresses/edit/:clientid/:id', component: require('./components/adresses/form.vue')},
            { name:'Suppression Adresse', path: 'adresses/delete/:id', component: require('./components/adresses/delete.vue')},

            { name:'Nouveau Ticket', path: 'tickets/add/:clientid', component: require('./components/tickets/form.vue')},
            { name:'Modification Ticket', path: 'tickets/edit/:clientid/:id', component: require('./components/tickets/form.vue')},
            { name:'Suppression Ticket', path: 'tickets/delete/:id', component: require('./components/tickets/delete.vue')},
          ]
      },

      // { name:'Détail Client', path: '/clients/show/:id', component: require('./components/clients/show.vue')},
      // { name:'Ajout Client', path: '/clients/add', component: require('./components/clients/form.vue')},
      // { name:'Modification Client', path: '/clients/edit/:id', component: require('./components/clients/form.vue')},
      // { name:'Suppression Client', path: '/clients/delete/:id', component: require('./components/clients/delete.vue')},

      /**
      **    Contact routes
      **/
      // { name:'List Entreprises', path: '/entreprises', component: require('./components/entreprises/home.vue')},
      // { name:'Détail Entreprise', path: '/entreprises/show/:id', component: require('./components/entreprises/show.vue')},
      // { name:'Ajout Contact', path: '/contacts/add/:clientid', component: require('./components/contacts/form.vue')},
      // { name:'Modification Contact', path: '/contacts/edit/:clientid/:id', component: require('./components/contacts/form.vue')},
      // { name:'Suppression Contact', path: '/contacts/delete/:id', component: require('./components/contacts/delete.vue')},

      /**
      **    Adresses routes
      **/
      // { name:'List Entreprises', path: '/entreprises', component: require('./components/entreprises/home.vue')},
      // { name:'Détail Entreprise', path: '/entreprises/show/:id', component: require('./components/entreprises/show.vue')},
      // { name:'Ajout Adresse', path: '/adresses/add/:clientid', component: require('./components/adresses/form.vue')},
      // { name:'Modification Adresse', path: '/adresses/edit/:clientid/:id', component: require('./components/adresses/form.vue')},
      // { name:'Suppression Adresse', path: '/adresses/delete/:id', component: require('./components/adresses/delete.vue')},

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
      // { name:'Détail Ticket', path: '/tickets/show/:id', component: require('./components/tickets/show.vue')},
      // { name:'Ajout Ticket', path: '/tickets/add/:clientid', component: require('./components/tickets/form.vue')},
      // { name:'Modification Ticket', path: '/tickets/edit/:clientid/:id', component: require('./components/tickets/form.vue')},
      // { name:'Suppression Ticket', path: '/tickets/delete/:id', component: require('./components/tickets/delete.vue')},


      /**
      **    Appels routes
      **/
      { name:'List Appels', path: '/appels', component: require('./components/appels/home.vue')},
      { name:'Détail Appel', path: '/appels/show/:id', component: require('./components/appels/show.vue')},
      { name:'Ajout Appel', path: '/appels/add/:ticketid', component: require('./components/appels/form.vue')},
      { name:'Modification Appel', path: '/appels/edit/:ticketid/:id', component: require('./components/appels/form.vue')},
      { name:'Suppression Appel', path: '/appels/delete/:id', component: require('./components/appels/delete.vue')},

      /**
      **    Emails routes
      **/
      { name:'List Emails', path: '/emails', component: require('./components/emails/home.vue')},
      { name:'Détail Email', path: '/emails/show/:id', component: require('./components/emails/show.vue')},
      { name:'Ajout Email', path: '/emails/add/:ticketid', component: require('./components/emails/form.vue')},
      { name:'Modification Email', path: '/emails/edit/:ticketid/:id', component: require('./components/emails/form.vue')},
      { name:'Suppression Email', path: '/emails/delete/:id', component: require('./components/emails/delete.vue')},

      {
         path: '/instances', component: require('./components/instances/home.vue'),
         // children: [
         //    { name:'Tickets',  path: '', component: require('./components/tickets/holder.vue') },
         //    { name:'Tickets Manager', path: 'show/:id', component: require('./components/tickets/show.vue') },
         //  ]
      },
    ]
  }
