import linRequest from '../../index'
import LinRequest from '../../index'
import { IDataType } from '@/service/types'

enum DashboardAPI {
  categoryGoodsCount = 'goods/category/count',
  categoryGoodsSale = 'goods/category/sale',
  categoryGoodsFavor = 'goods/category/favor',
  addrssGoodsSale = 'goods/address/sale'
}

export function getCategoryGoodCount() {
  return linRequest.get<IDataType>({
    url: DashboardAPI.categoryGoodsCount
  })
}

export function getCategoryGoodSale() {
  return linRequest.get<IDataType>({
    url: DashboardAPI.categoryGoodsSale
  })
}

export function getCategoryGoodFavor() {
  return linRequest.get<IDataType>({
    url: DashboardAPI.categoryGoodsFavor
  })
}

export function getAddressGoodsSale() {
  return linRequest.get<IDataType>({
    url: DashboardAPI.addrssGoodsSale
  })
}
