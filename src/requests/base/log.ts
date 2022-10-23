import instance from '../request'

export const RequestUrlLog = (
  objs: Array<{ user_id: string; url: string }>
): any => {
  return async (): Promise<any> => {
    return await instance.post('/base/urls_info/url', objs)
  }
}
