import instance from '../request'
import { Personal } from '../../utils/types'

export const RequestPersonalInfo = (): any => {
  return async (): Promise<Personal> => {
    return await instance.get('/personal/info')
  }
}
