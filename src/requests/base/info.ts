import instance from '../request'
import { BaseInfo } from '../../utils/types'

export const RequestBaseInfo = (): any => {
  return async (): Promise<BaseInfo> => {
    return await instance.get('/base/info')
  }
}
