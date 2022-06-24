import { createStore } from 'vuex'

import login from './login/login'
import { IRootState } from './type'
const store = createStore<IRootState>({
  state() {
    return {
      name: 'lsaac',
      age: '18'
    }
  },
  modules: {
    login
  }
})

export default store
