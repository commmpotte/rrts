import React, { Dispatch } from 'react'
import { UserAction, UserActionTypes } from '../../types/users'
import axios from 'axios'
import { TodoAction, TodoActionsTypes } from '../../types/todo'

export const fetchTodos = (page = 1, limit = 10): any => {
  return async (dispatch: Dispatch<TodoAction>) => {
    try {
      dispatch({ type: TodoActionsTypes.FETCH_TODOS })
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/todos',
        { params: { _page: page, _limit: limit } }
      )
      setTimeout(() => {
        dispatch({
          type: TodoActionsTypes.FETCH_TODOS_SUCCESS,
          payload: response.data,
        })
      }, 500)
    } catch (error) {
      dispatch({
        type: TodoActionsTypes.FETCH_TODOS_ERROR,
        payload: 'Error is here during todos loading!',
      })
    }
  }
}

export function setTodoPage(page: number): TodoAction {
  return { type: TodoActionsTypes.SET_TODO_PAGE, payload: page }
}
