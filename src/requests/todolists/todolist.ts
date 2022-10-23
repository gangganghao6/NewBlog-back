import { List, Todolist } from '../../utils/types'
import instance from '../request'

export const RequestTodolistList = ({ size, page, sort, type }: List): any => {
  return async (): Promise<Todolist[]> => {
    return await instance.get('/todolists/list', {
      params: {
        size,
        page,
        sort,
        type
      }
    })
  }
}
