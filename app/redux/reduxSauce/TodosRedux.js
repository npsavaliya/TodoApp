import {createReducer, createActions} from 'reduxsauce';
// import Immutable from 'seamless-immutable';
import {onUpdateTodo, onDeleteTodo} from '../../services/todoService';

/* ------------- Types and Action Creators ------------- */

const {Types, Creators} = createActions({
  addReduxSauceTodo: ['todo'],
  updateReduxSauceTodo: ['todo'],
  deleteReduxSauceTodo: ['id'],
});

export const TodosTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = {
  todos: [],
};

/* ------------- Reducers ------------- */

export const addTodo = (state, {todo}) => {
  const todos = [...state.todos, todo];
  return {...state, todos};
};

export const updateTodo = (state, {todo}) => {
  let todos = [...state.todos];
  if (todo) {
    todos = onUpdateTodo(state.todos, todo);
  }
  return {...state, todos};
};

// successful avatar lookup
export const deleteTodo = (state, {id}) => {
  let todos = [...state.todos];
  if (id) {
    todos = onDeleteTodo(state.todos, id);
  }
  return {...state, todos};
};

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.ADD_REDUX_SAUCE_TODO]: updateTodo,
  [Types.UPDATE_REDUX_SAUCE_TODO]: updateTodo,
  [Types.DELETE_REDUX_SAUCE_TODO]: deleteTodo,
});
