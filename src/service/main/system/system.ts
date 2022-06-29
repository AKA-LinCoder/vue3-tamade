import hyRequest from '../../index'

import { IDataType } from '@/service/types'

export function getPageListData(url: string, queryInfo: any) {
  return hyRequest.post<IDataType>({
    url: url,
    data: queryInfo
  })
}

//url: /users/id
export function deletePageData(url: string) {
  return hyRequest.delete<IDataType>({
    url: url
  })
}
