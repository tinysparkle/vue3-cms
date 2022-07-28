import { createStore } from 'vuex'
import login from './login/login'
import state from './states'
import actions from './actions'
import mutations from './mutations'
import { IRootState } from './types'

export default createStore <IRootState>({
  state,
  mutations,
  actions,
  modules: {
    login
  },
})
