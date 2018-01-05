module.exports = {
    routes: [
      { name:'Tableau de bord', path: '/', component: require('./components/dashboard.vue')},
      /**
      **    general routes
      **/
      { path: '/apropos', component: require('./components/apropos.vue')},
      { path: '/support', component: require('./components/support.vue')},

      /**
      **    Entreprises routes
      **/
      { name:'List Entreprises', path: '/entreprises', component: require('./components/entreprises/home.vue')},
      { name:'Détail Entreprise', path: '/entreprises/show/:id', component: require('./components/entreprises/show.vue')},
      { name:'Ajout Entreprise', path: '/entreprises/add', component: require('./components/entreprises/form.vue')},
      { name:'Modification Entreprise', path: '/entreprises/edit/:id', component: require('./components/entreprises/form.vue')},
      { name:'Suppression Entreprise', path: '/entreprises/delete/:id', component: require('./components/entreprises/delete.vue')},

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
      // { name:'Modification Entreprise', path: '/entreprises/edit/:id', component: require('./components/entreprises/form.vue')},
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
