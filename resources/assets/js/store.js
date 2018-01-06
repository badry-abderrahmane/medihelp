
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    typeclients: [],
    clients: [],
    actions: [],
    // categories: [],
    // produits: [],
    // produitsprix: [],
  },
  mutations: {
    SET_TYPECLIENTS_LIST: (state, { list }) => {
      let array = [];var empty = {};empty['text'] = '';empty['value'] = '';array.push(empty);
      for (var prop in list) {let item = {};item['text'] = list[prop];item['value'] = prop;array.push(item);}
      state.typeclients = array
    },
    SET_CLIENTS_LIST: (state, { list }) => {
      let array = [];var empty = {};empty['text'] = '';empty['value'] = '';array.push(empty);
      for (var prop in list) {let item = {};item['text'] = list[prop];item['value'] = prop;array.push(item);}
      state.clients = array
    },
    SET_ACTIONS_LIST: (state, { list }) => {
      let array = [];var empty = {};empty['text'] = '';empty['value'] = '';array.push(empty);
      for (var prop in list) {let item = {};item['text'] = list[prop];item['value'] = prop;array.push(item);}
      state.actions = array
    },
    // SET_CATEGORY_LIST: (state, { list }) => {
    //   let array = [];var empty = {};empty['text'] = '';empty['value'] = '';array.push(empty);
    //   for (var prop in list) {let item = {};item['text'] = list[prop];item['value'] = prop;array.push(item);}
    //   state.categories = array
    // },
    // SET_PRODUIT_LIST: (state, { list }) => {
    //   let array = [];var empty = {};empty['text'] = '';empty['value'] = '';array.push(empty);
    //   for (var prop in list) {let item = {};item['text'] = list[prop];item['value'] = prop;array.push(item);}
    //   state.produits = array
    // },
    // SET_PRODUIT_PRIX: (state, { list }) => {
    //   let array = [];var empty = {};empty['text'] = '';empty['value'] = '';array.push(empty);
    //   for (var prop in list) {let item = {};item['text'] = list[prop];item['value'] = prop;array.push(item);}
    //   state.produitsprix = array
    // }
  },
  actions: {
    LOAD_TYPECLIENTS_LIST: function ({ commit }) {
      axios.get('list/typeclients').then((response) => {
        commit('SET_TYPECLIENTS_LIST', { list: response.data })
      }, (err) => {
        console.log(err)
      })
    },

    LOAD_CLIENTS_LIST: function ({ commit }) {
      axios.get('list/clients').then((response) => {
        commit('SET_CLIENTS_LIST', { list: response.data })
      }, (err) => {
        console.log(err)
      })
    },

    LOAD_ACTIONS_LIST: function ({ commit }) {
      axios.get('list/actions').then((response) => {
        commit('SET_ACTIONS_LIST', { list: response.data })
      }, (err) => {
        console.log(err)
      })
    },

    // LOAD_CATEGORY_LIST: function ({ commit }) {
    //   axios.get('list/categories').then((response) => {
    //     commit('SET_CATEGORY_LIST', { list: response.data })
    //   }, (err) => {
    //     console.log(err)
    //   })
    // },
    //
    // LOAD_PRODUIT_LIST: function ({ commit }) {
    //   axios.get('list/produits').then((response) => {
    //     commit('SET_PRODUIT_LIST', { list: response.data })
    //   }, (err) => {
    //     console.log(err)
    //   })
    // },
    //
    // LOAD_PRODUIT_PRIX: function ({ commit }) {
    //   axios.get('prix/produits').then((response) => {
    //     commit('SET_PRODUIT_PRIX', { list: response.data })
    //   }, (err) => {
    //     console.log(err)
    //   })
    // }
  }
});
