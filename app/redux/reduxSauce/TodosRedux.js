import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import { onUpdateTodo, onDeleteTodo } from '../../services/todoService'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  addTodo: ['todo'],
  updateTodo: ['todo'],
  deleteTodo: ['id']
})

export const TodosTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  todos: []
})


/* ------------- Reducers ------------- */

export const addTodo = (state, { todo }) => {
  const todos = [...state.todos, todo]
  state.merge({ todos })
}

export const updateTodo = (state, { todo }) => {
  const todos = [...state.todos]
  if(todo) todos = onUpdateTodo(state.todos, todo)
  state.merge({ todos })
}

// successful avatar lookup
export const deleteTodo = (state, {id}) => {
  const todos = onDeleteTodo(state.todos, id)
  state.merge({ todos })
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.ADD_TODO]: updateTodo,
  [Types.UPDATE_TODO]: updateTodo,
  [Types.DELETE_TODO]: deleteTodo,
})
