import { ReactElement, useState, Suspense } from 'react'
import './App.css'
import Test from './Test'
import DataFetcher from './utils/DataFetcher'
import { RequestTodolistList } from './requests/todolists/todolist'

function App(): ReactElement {
  const [, setCount] = useState('00 ')
  return (
    <div className="App">
      <Suspense fallback={'loading...'}>
        <Test
          data={DataFetcher(
            RequestTodolistList({
              page: 1,
              size: 10,
              sort: 'desc'
            })
          )}
          setCount={setCount}
        />
      </Suspense>
    </div>
  )
}

export default App
