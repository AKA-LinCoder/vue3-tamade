import { createStore, Store, useStore as useVuexStore } from 'vuex'

import login from './login/login'
import system from './main/system/system'
import { IRootState, IStoreType } from './type'
import dashboard from './analysis/dashboard'
import { getPageListData } from '@/service/main/system/system'
const store = createStore<IRootState>({
  state() {
    return {
      name: 'lsaac',
      age: 18,
      entireDepartment: [],
      entireRole: [],
      entireMenu: []
    }
  },
  mutations: {
    changeEntireRole(state, list) {
      state.entireRole = list
    },
    changeEntireDepartment(state, list) {
      state.entireDepartment = list
    },
    changeEntireMenu(state, list) {
      state.entireMenu = list
    }
  },
  actions: {
    async getInitialDataAction({ commit }) {
      //1.请求部门数据
      const departmentResponse = await getPageListData('/department/list', {
        offset: 1,
        size: 1000
      })
      const { list: departmentList } = departmentResponse.data
      //2.请求角色
      const roleResponse = await getPageListData('role/list', {
        offset: 1,
        size: 1000
      })
      const { list: roleList } = roleResponse.data
      const menuResponse = await getPageListData('menu/list', {})
      const { list: menuList } = menuResponse.data

      //3.保存数据
      commit('changeEntireDepartment', departmentList)
      commit('changeEntireRole', roleList)
      commit('changeEntireMenu', menuList)
    }
  },
  modules: {
    login,
    system,
    dashboard
  }
})

export function setupStore() {
  store.dispatch('login/loadLocalLogin')
}
export function useStore(): Store<IStoreType> {
  return useVuexStore()
}
export default store
