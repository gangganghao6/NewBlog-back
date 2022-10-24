import instance from '../request'
import { Image, List, ShareFile, Video, File } from '../../utils/types'

export const RequestShareFileList = ({ size, page, sort, type }: List): any => {
  return async (): Promise<ShareFileReturn[]> => {
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

export interface ShareFileReturn {
  share_file: ShareFile
  file: Image | Video | File
}
