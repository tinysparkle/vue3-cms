import { Module } from 'vuex'
import { IRootState } from '../types'
import { ILoginState } from './type'

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
