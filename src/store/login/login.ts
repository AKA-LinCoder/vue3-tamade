import { Module } from 'vuex'
import { ILoginState } from './type'
import { IRootState } from '../type'
import { accountLoginRequest } from '@/service/login/login'
import { IAccount } from '@/service/login/type'
import { localCache } from '@/utils/cache'

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {}
    }
  },
  mutations: {
    changeToken(state, token: string) {
      state.token = token
    }
  },
  getters: {},
  actions: {
    async accountLoginAction({ commit }, payload: IAccount) {
      console.log('联网登录 ', payload)
      //1.实现登录逻辑
      const loginRequest = await accountLoginRequest(payload)
      console.log(loginRequest.data.token)
      const { id, token } = loginRequest.data
      commit('changeToken', token)
      localCache.setCache('taoken', token)
      //2.请求用户信息
    }
  }
}
export default loginModule
