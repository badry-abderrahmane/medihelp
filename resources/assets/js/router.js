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
      { name:'Ajout Contact', path: '/contacts/add', component: require('./components/contacts/form.vue')},
      // { name:'Modification Entreprise', path: '/entreprises/edit/:id', component: require('./components/entreprises/form.vue')},
      // { name:'Suppression Entreprise', path: '/entreprises/delete/:id', component: require('./components/entreprises/delete.vue')},

      /**
      **    Adresses routes
      **/
      // { name:'List Entreprises', path: '/entreprises', component: require('./components/entreprises/home.vue')},
      // { name:'Détail Entreprise', path: '/entreprises/show/:id', component: require('./components/entreprises/show.vue')},
      { name:'Ajout Adresse', path: '/adresses/add', component: require('./components/adresses/form.vue')},
      { name:'Modification Adresse', path: '/adresses/edit/:id', component: require('./components/adresses/form.vue')},
      // { name:'Suppression Entreprise', path: '/entreprises/delete/:id', component: require('./components/entreprises/delete.vue')},

      /**
      **    Adresses routes
      **/
      // { name:'List Entreprises', path: '/entreprises', component: require('./components/entreprises/home.vue')},
      // { name:'Détail Entreprise', path: '/entreprises/show/:id', component: require('./components/entreprises/show.vue')},
      { name:'Ajout Incident', path: '/incidents/add', component: require('./components/incidents/form.vue')},
      // { name:'Modification Entreprise', path: '/entreprises/edit/:id', component: require('./components/entreprises/form.vue')},
      // { name:'Suppression Entreprise', path: '/entreprises/delete/:id', component: require('./components/entreprises/delete.vue')},
    ]
  }
