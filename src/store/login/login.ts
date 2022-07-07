import { Module } from 'vuex'

import { ILoginState } from './type'
import { IRootState } from '../type'

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state: {
    user: '',
    token: '',
  },
  mutations: {},
  actions: {
    accountLoginAction({ commit }, payload) {
      console.log('accountLoginAction', payload)
    },
  },
  getters: {},
}

export default loginModule
