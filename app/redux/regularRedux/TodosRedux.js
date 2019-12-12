import { ADD_TODO, UPDATE_TODO, DELETE_TODO } from "../types"
import { onUpdateTodo, onDeleteTodo } from "../../services/todoService"


const INITIAL_STATE = {
  todos: []
}

export const todosRedux = (state = INITIAL_STATE, action) => {
  const { type, todo, id } = action
  let todos = [...state.todos]
  
  switch(type){
    case ADD_TODO:
      todos = [...todos, todo]
      return {...todos}
    case UPDATE_TODO:
      todos = onUpdateTodo(todos, todo)
      return {...todos}
    case DELETE_TODO:
      todos = onDeleteTodo(todos, id)
      return {...todos}
    default:
      return state
  }
}