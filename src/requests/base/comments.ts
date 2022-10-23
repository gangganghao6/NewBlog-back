import instance from '../request'

export const RequestPostComments = ({
  comment,
  userId,
  blogId,
  shuoshuoId,
  personalId
}: CommentsCreate): any => {
  return async (): Promise<CommentsCreate> => {
    return await instance.post('/base/comments', {
      comment,
      user_id: userId,
      blog_id: blogId,
      shuoshuo_id: shuoshuoId,
      personal_id: personalId
    })
  }
}

export interface CommentsCreate {
  comment: string
  userId: string
  blogId?: string
  shuoshuoId?: string
  personalId?: string // 只要不是null和undefined就行
}
