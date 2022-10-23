import instance from '../request'
import { Blog, List } from '../../utils/types'

export const RequestBlogDetail = ({ id }: { id: string }): any => {
  return async (): Promise<Blog> => {
    return await instance.get(`/blogs/blog/${id}`)
  }
}
export const RequestBlogList = ({ size, page, type, sort }: List): any => {
  return async (): Promise<Blog[]> => {
    return await instance.get(`/blogs/list`, {
      params: {
        size,
        page,
        type,
        sort
      }
    })
  }
}
