import React, { useEffect } from 'react'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { useActions } from '../hooks/useActions'

const TodoList: React.FC = () => {
  const { page, error, loading, todos, limit } = useTypedSelector(
    (state) => state.todo
  )
  const { fetchTodos, setTodoPage } = useActions()

  const pages = [1, 2, 3, 4, 5]

  useEffect(() => {
    fetchTodos(page, limit)
  }, [page])

  if (loading) {
    return <h1>Loading...</h1>
  }

  if (error) {
    return <h1>{error}</h1>
  }

  return (
    <>
      <h1>Todo List</h1>
      <ul className="list-group text-left">
        {todos.map((todo) => (
          <li key={todo.id} className="list-group-item m-0">
            {todo.id} - {todo.title}
          </li>
        ))}
      </ul>
      <div style={{ display: 'flex' }} className="d-flex">
        {pages.map((p) => (
          <li
            className="list-group-item p-2 m-2"
            key={p}
            onClick={() => setTodoPage(p)}
            style={{
              cursor: 'pointer',
              background: p === page ? 'blue' : 'green',
              color: 'white',
            }}
          >
            {p}
          </li>
        ))}
      </div>
    </>
  )
}

export default TodoList
