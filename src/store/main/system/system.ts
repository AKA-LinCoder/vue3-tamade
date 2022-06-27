import { Module } from 'vuex'
import { IRootState } from '@/store/type'
import { ISystemState } from './types'

import { getPageListData } from '@/service/main/system/system'

const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      usersList: [],
      usersCount: 0,
      roleList: [],
      roleCount: 0
    }
  },
  mutations: {
    changeUserList(state, userList: any[]) {
      state.usersList = userList
    },
    changeUserCount(state, userCount: number) {
      state.usersCount = userCount
    },
    changeRoleList(state, roleList: any[]) {
      state.roleList = roleList
    },
    changeRoleCount(state, roleCount: number) {
      state.roleCount = roleCount
    }
  },
  actions: {
    async getPageListAction({ commit }, payload: any) {
      const pageName: string = payload.pageName
      let pageUrl = ''
      switch (pageName) {
        case 'user':
          pageUrl = 'users/list'
          break
        case 'role':
          pageUrl = 'role/list'
          break
      }

      // 1.对页面发送请求
      const pageResult = await getPageListData(pageUrl, payload.queryInfo)
      //3.将数据存储进state中
      const { list, totalCount } = pageResult.data

      switch (pageName) {
        case 'user':
          commit(`changeUserList`, list)
          commit(`changeUserCount`, totalCount)
          break
        case 'role':
          commit(`change${pageName.toUpperCase()}List`, list)
          commit(`change${pageName.toUpperCase()}Count`, totalCount)
          break
      }
    }
  }
}

export default systemModule
