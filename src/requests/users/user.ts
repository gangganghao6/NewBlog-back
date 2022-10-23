import instance from '../request'

export const RequestUserLogin = ({ email }: { email: string }): any => {
  return async (): Promise<UserLoginReturn> => {
    return await instance.post('/users/login', {
      email
    })
  }
}

export const RequestUserRegist = ({
  email,
  name
}: {
  email: string
  name: string
}): any => {
  return async (): Promise<UserLoginReturn> => {
    return await instance.post('/users/regist', {
      email,
      name
    })
  }
}
export const RequestUserPut = ({ id, name, isSubscribed }: PutUser): any => {
  return async (): Promise<UserLoginReturn> => {
    return await instance.put(`/users/user/${id}`, {
      is_subscribed: isSubscribed,
      name
    })
  }
}
export const RequestUserPayCreate = ({
  userId,
  type,
  blogId,
  money,
  payType
}: CreatePayOrder): any => {
  return async (): Promise<UserLoginReturn> => {
    return await instance.post('/users/pay/create', {
      user_id: userId,
      type,
      blog_id: blogId,
      money,
      pay_type: payType
    })
  }
}
export const RequestUserPayConfirm = ({
  outTradeNo
}: {
  outTradeNo: string
}): any => {
  return async (): Promise<UserLoginReturn> => {
    return await instance.get('/users/pay/confirm', {
      params: {
        out_trade_no: outTradeNo
      }
    })
  }
}

export interface UserLoginReturn {
  id: string
  name: string
  email: string
  is_subscribed: boolean
  is_banned: boolean
}

export interface PutUser {
  id: string
  name?: string
  isSubscribed?: boolean
}

export interface CreatePayOrder {
  userId: string
  type: 'blog' | 'personal'
  blogId?: string
  money: number
  payType: 'alipay' | 'wechat'
}
