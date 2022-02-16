import { api } from 'boot/axios'
const state = () => ({
  profiles: [],
  searchResult: [],
  dataForPaginations: {},
  lockingPage: 0,
  singleProfile: {}
})

const actions = {
  async getDataByPageNumber ({commit}, page) {
    commit('lockPage')
    const { data } = await api.get(`/users?page=${page}`)
    commit('initializeProfiles', data)
    commit('unlockPage')
  },
  async deleteProfile ({commit}, profileId) {
    commit('deleteProfile', profileId)
  },
  async createProfile ({commit}, {firstName, lastName, email}) {
    const profile = {
      firstName, lastName, email
    }
    commit('createProfile', profile)
  },
  async searchProfile ({commit}, searchValue) {
    commit('searchProfile', searchValue)
  },

  async getProfileById ({commit}, profileId) {
    const { data: {
      data
    } } = await api.get(`/users/${profileId}`)
    commit('initializeSingleProfile', data)
  },
}

const mutations = {

  lockPage: state => state.lockingPage++,
  unlockPage: state => state.lockingPage--,

  initializeProfiles( state, dataFromServer) {
    const { data, ...other} = dataFromServer
    state.profiles = data
    state.dataForPaginations = other
  },

  deleteProfile (state, profileId) {
    state.profiles = state.profiles.filter(item => item.id !== profileId)
  },

  searchProfile (state, searchValue) {
    state.searchResult = state.profiles.filter(item => item.first_name.toLowerCase().includes(searchValue.toLowerCase()) || item.last_name.toLowerCase().includes(searchValue.toLowerCase()))
  },

  createProfile (state, profile) {
    state.profiles.push({
      first_name: profile.firstName,
      last_name: profile.lastName,
      email: profile.email,
      id: state.profiles.length + 1
    })
  },
  initializeSingleProfile (state, data) {
    state.singleProfile = data
  }
}

const getters = {
  isPageLocked: state => state.lockingPage > 0,
  totalPages: state => state.dataForPaginations.totalPages,
  profile: state => state.singleProfile
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}