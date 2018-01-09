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
      { name:'Clients', path: '/clients', component: require('./components/clients/home.vue')},
      { name:'Détail Client', path: '/clients/show/:id', component: require('./components/clients/show.vue')},
      { name:'Ajout Client', path: '/clients/add', component: require('./components/clients/form.vue')},
      { name:'Modification Client', path: '/clients/edit/:id', component: require('./components/clients/form.vue')},
      { name:'Suppression Client', path: '/clients/delete/:id', component: require('./components/clients/delete.vue')},

      /**
      **    Contact routes
      **/
      // { name:'List Entreprises', path: '/entreprises', component: require('./components/entreprises/home.vue')},
      // { name:'Détail Entreprise', path: '/entreprises/show/:id', component: require('./components/entreprises/show.vue')},
      { name:'Ajout Contact', path: '/contacts/add/:clientid', component: require('./components/contacts/form.vue')},
      { name:'Modification Contact', path: '/contacts/edit/:clientid/:id', component: require('./components/contacts/form.vue')},
      { name:'Suppression Contact', path: '/contacts/delete/:id', component: require('./components/contacts/delete.vue')},

      /**
      **    Adresses routes
      **/
      // { name:'List Entreprises', path: '/entreprises', component: require('./components/entreprises/home.vue')},
      // { name:'Détail Entreprise', path: '/entreprises/show/:id', component: require('./components/entreprises/show.vue')},
      { name:'Ajout Adresse', path: '/adresses/add/:clientid', component: require('./components/adresses/form.vue')},
      { name:'Modification Adresse', path: '/adresses/edit/:clientid/:id', component: require('./components/adresses/form.vue')},
      { name:'Suppression Adresse', path: '/adresses/delete/:id', component: require('./components/adresses/delete.vue')},

      /**
      **    Tickets routes
      **/
      {
         name:'Tickets', path: '/tickets', component: require('./components/tickets/home.vue'),
         children: [
            { path: 'show/:id', component: require('./components/tickets/chatShow.vue') },
          ]
      },
      { name:'Détail Ticket', path: '/tickets/show/:id', component: require('./components/tickets/show.vue')},
      { name:'Ajout Ticket', path: '/tickets/add/:clientid', component: require('./components/tickets/form.vue')},
      { name:'Modification Ticket', path: '/tickets/edit/:clientid/:id', component: require('./components/tickets/form.vue')},
      { name:'Suppression Ticket', path: '/tickets/delete/:id', component: require('./components/tickets/delete.vue')},
    ]
  }
