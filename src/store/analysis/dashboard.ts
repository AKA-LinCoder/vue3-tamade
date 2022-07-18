import { Module } from 'vuex'
import {
  getAddressGoodsSale,
  getCategoryGoodCount,
  getCategoryGoodFavor,
  getCategoryGoodSale
} from '@/service/main/analysis/dashboard'

import { IDashboardState } from './types'
import { IRootState } from '../type'
const dashboardModule: Module<IDashboardState, IRootState> = {
  namespaced: true,
  state() {
    return {
      categoryGoodsCount: [],
      categoryGoodsFavor: [],
      categoryGoodsSale: [],
      addressGoodsSale: []
    }
  },
  mutations: {
    changeCategoryGoodsCount(state, list: any[]) {
      state.categoryGoodsCount = list
    },
    changeCategoryGoodsSale(state, list: any[]) {
      state.categoryGoodsSale = list
    },
    changeCategoryGoodsFavor(state, list: any[]) {
      state.categoryGoodsFavor = list
    },
    changeAddressGoodsSale(state, list: any[]) {
      state.addressGoodsSale = list
    }
  },
  actions: {
    async getDashboardDataAction({ commit }) {
      const categoryCountResult = await getCategoryGoodCount()
      commit('changeCategoryGoodsCount', categoryCountResult.data)
      const categorySaleResult = await getCategoryGoodSale()
      commit('categoryGoodsSale', categorySaleResult.data)
      const categoryFavorResult = await getCategoryGoodFavor()
      commit('changeCategoryGoodsFavor', categoryFavorResult.data)
      const addressGoodsSaleResult = await getAddressGoodsSale()
      commit('changeAddressGoodsSale', addressGoodsSaleResult.data)
    }
  }
}

export default dashboardModule
