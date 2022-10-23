import { List, Shuoshuo } from '../../utils/types'
import instance from '../request'

export const RequestShuoshuoList = ({ size, page, sort, type }: List): any => {
  return async (): Promise<Shuoshuo[]> => {
    return await instance.get('/shuoshuos/list', {
      params: {
        size,
        page,
        sort,
        type
      }
    })
  }
}
export const RequestShuoshuoDetail = ({ id }: { id: string }): any => {
  return async (): Promise<Shuoshuo> => {
    return await instance.get(`/shuoshuos/shuoshuo/${id}`)
  }
}
