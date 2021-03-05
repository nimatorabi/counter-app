import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const state = {
    counters: []
}

export const mutations = {
    ADD_STEP(state, payload) {
        state.counters.push(payload)
    }
}

export default {
    namespaced: true,
    state,
    mutations
}