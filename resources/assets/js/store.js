
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    typeclients: [],
    clients: [],
    actions: [],
    typecomms: [],
    etats: [],
    users: [],
    roles: [],
  },
  mutations: {
    SET_TYPECLIENTS_LIST: (state, { list }) => {
      let array = [];
      //var empty = {};empty['text'] = '';empty['value'] = '';array.push(empty);
      for (var prop in list) {let item = {};item['text'] = list[prop];item['value'] = prop;array.push(item);}
      state.typeclients = array
    },
    SET_CLIENTS_LIST: (state, { list }) => {
      let array = [];
      // var empty = {};empty['text'] = '';empty['value'] = '';array.push(empty);
      for (var prop in list) {let item = {};item['text'] = list[prop];item['value'] = prop;array.push(item);}
      state.clients = array
    },
    SET_ACTIONS_LIST: (state, { list }) => {
      let array = [];
      //var empty = {};empty['text'] = '';empty['value'] = '';array.push(empty);
      for (var prop in list) {let item = {};item['text'] = list[prop];item['value'] = prop;array.push(item);}
      state.actions = array
    },
    SET_TYPECOMMS_LIST: (state, { list }) => {
      let array = [];
      //var empty = {};empty['text'] = '';empty['value'] = '';array.push(empty);
      for (var prop in list) {let item = {};item['text'] = list[prop];item['value'] = prop;array.push(item);}
      state.typecomms = array
    },
    SET_ETATS_LIST: (state, { list }) => {
      let array = [];
      //var empty = {};empty['text'] = '';empty['value'] = '';array.push(empty);
      for (var prop in list) {let item = {};item['text'] = list[prop];item['value'] = prop;array.push(item);}
      state.etats = array
    },
    SET_USERS_LIST: (state, { list }) => {
      let array = [];
      //var empty = {};empty['text'] = '';empty['value'] = '';array.push(empty);
      for (var prop in list) {let item = {};item['text'] = list[prop];item['value'] = prop;array.push(item);}
      state.users = array
    },
    SET_ROLES_LIST: (state, { list }) => {
      let array = [];
      //var empty = {};empty['text'] = '';empty['value'] = '';array.push(empty);
      for (var prop in list) {let item = {};item['text'] = list[prop];item['value'] = prop;array.push(item);}
      state.roles = array
    },
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

    LOAD_TYPECOMMS_LIST: function ({ commit }) {
      axios.get('list/typecomms').then((response) => {
        commit('SET_TYPECOMMS_LIST', { list: response.data })
      }, (err) => {
        console.log(err)
      })
    },

    LOAD_ETATS_LIST: function ({ commit }) {
      axios.get('list/etats').then((response) => {
        commit('SET_ETATS_LIST', { list: response.data })
      }, (err) => {
        console.log(err)
      })
    },

    LOAD_USERS_LIST: function ({ commit }) {
      axios.get('list/users').then((response) => {
        commit('SET_USERS_LIST', { list: response.data })
      }, (err) => {
        console.log(err)
      })
    },

    LOAD_ROLES_LIST: function ({ commit }) {
      axios.get('list/roles').then((response) => {
        commit('SET_ROLES_LIST', { list: response.data })
      }, (err) => {
        console.log(err)
      })
    }

  }
});
