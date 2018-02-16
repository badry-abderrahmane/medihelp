
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
    tickets: [],

    ticketsAll: [],
    user: [],
    role: 4,

    // MAILBOX
    folders:[],
    mails: [],
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
    SET_TICKETS_LIST: (state, { list }) => {
      let array = [];
      //var empty = {};empty['text'] = '';empty['value'] = '';array.push(empty);
      for (var prop in list) {let item = {};item['text'] = list[prop];item['value'] = prop;array.push(item);}
      state.tickets = array
    },
    SET_TICKETS: (state, { list }) => {
      state.ticketsAll = list
    },
    SET_USER: (state, { user }) => {
      state.user = user
    },
    SET_MAILBOX_FOLDERS: (state, { folders }) => {
      state.folders = folders
    },
    SET_MAILBOX_MAILS: (state, { mails }) => {
      state.mails = mails
    },
    SET_ROLE: (state, { role }) => {
      switch (role) {
        case 'SYSADMIN':
          state.role = 1
          break;
        case 'ADMIN':
          state.role = 2
          break;
        case 'SUPPORT':
          state.role = 3
          break;
        case 'CLIENTS':
          state.role = 4
          break;
        default: state.role = 4
      }
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
    },

    LOAD_TICKETS_LIST: function ({ commit }) {
      axios.get('list/tickets').then((response) => {
        commit('SET_TICKETS_LIST', { list: response.data })
      }, (err) => {
        console.log(err)
      })
    },

    LOAD_TICKETS: function ({ commit }) {
      axios.get('tickets').then((response) => {
        commit('SET_TICKETS', { list: response.data })
      }, (err) => {
        console.log(err)
      })
    },

    LOAD_USER: function ({ commit }) {
      axios.get('islogged').then((response) => {
        commit('SET_USER', { user: response.data })
      }, (err) => {
        console.log(err)
      })
    },

    LOAD_ROLE: function ({ commit }) {
      commit('SET_ROLE', { role: document.head.querySelector('meta[name="role"]').content })
    },

    LOAD_MAILBOX_FOLDERS: function ({ commit }) {
      axios.get('mail/folders').then((response) => {
        commit('SET_MAILBOX_FOLDERS', { folders: response.data })
      }, (err) => {
        console.log(err)
      })
    },

    LOAD_MAILBOX_MAILS: function ({ commit }) {
      axios.get('mail/get').then((response) => {
        commit('SET_MAILBOX_MAILS', { mails: response.data })
      }, (err) => {
        console.log(err)
      })
    },
  }
});
