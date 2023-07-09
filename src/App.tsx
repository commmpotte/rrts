import React from 'react'
import { Provider } from 'react-redux'
import { store } from './store'
import UserList from './components/UserList'
import TodoList from './components/TodoList'

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <div className="row align-items-md-stretch">
          <div className="col-md-6">
            <UserList />
          </div>
          <div className="col-md-6">
            <TodoList />
          </div>
        </div>
      </div>
    </Provider>
  )
}

export default App
