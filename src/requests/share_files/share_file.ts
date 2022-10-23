import instance from '../request'
import { List, ShareFile } from '../../utils/types'

export const RequestShareFileList = ({ size, page, sort, type }: List): any => {
  return async (): Promise<ShareFile[]> => {
    return await instance.get('/share_files/list', {
      params: {
        size,
        page,
        sort,
        type
      }
    })
  }
}
export const RequestShareFileDownload = ({ id }: { id: string }): any => {
  return async (): Promise<null> => {
    return await instance.get(`/share_files/download/${id}`)
  }
}
