import { ReactElement, useState, Suspense, useEffect } from 'react'
import './App.css'
import { CreateChatChannel } from './requests/chats/chat'
import { v4 } from 'uuid'
import dayjs from 'dayjs'
import Test from './Test'
import { RequestTodolistList } from './requests/todolists/todolist'
import DataFetcher from './utils/DataFetcher'

let channel: WebSocket
const userId = v4()
const sendMessage = (userId: string): any => {
  return () => {
    channel.send(
      JSON.stringify({
        type: 'send_message',
        user_id: userId,
        media_class: 'text',
        content: dayjs()
      })
    )
  }
}

function App(): ReactElement {
  const [newMessage, setNewMessage] = useState()
  useEffect(() => {
    void CreateChatChannel(setNewMessage, userId).then((res) => {
      channel = res
    })
  }, [])
  return (
    <div className="App">
      <button type="button" className="btn btn" onClick={sendMessage(userId)}>
        send
      </button>
      <div>{JSON.stringify(newMessage)}</div>
      <Suspense fallback={'loading...'}>
        <Test
          data={DataFetcher(
            RequestTodolistList({
              page: 1,
              size: 10,
              sort: 'desc'
            })
          )}
        />
      </Suspense>
    </div>
  )
}

export default App
