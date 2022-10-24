import { Chat, List } from '../../utils/types'
import instance from '../request'

export const RequestChatList = ({
  size,
  page,
  sort,
  userId
}: List & { userId?: string }): any => {
  return async (): Promise<Chat[]> => {
    return await instance.get(`/chats/list`, {
      params: { size, page, sort, user_id: userId }
    })
  }
}
export const CreateChatChannel = async (
  setNewMessage: any,
  userId: string
): Promise<WebSocket> => {
  return await new Promise((resolve, reject) => {
    const url: string = import.meta.env.VITE_PUBLIC_URL.replace('http', 'ws')
    const port = parseInt(import.meta.env.VITE_BACKEND_PORT)
    const socket = new WebSocket(`${url}:${port}/api/chats?user_id=${userId}`)
    socket.onopen = () => {
      setInterval(
        () =>
          socket.send(JSON.stringify({ type: 'heart_beat', user_id: userId })),
        30 * 1000
      )
      console.log('connection established')
      resolve(socket)
    }
    socket.onmessage = (data) => {
      const obj = JSON.parse(data.data.toString())
      if (obj.data.type !== 'message_confirm' && obj.data.user_id !== userId) {
        setNewMessage(obj.data)
      }
    }
    socket.onerror = (err) => {
      reject(err)
    }
  })
}
