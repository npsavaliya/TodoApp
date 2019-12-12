import { combineReducers, createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import ReduxPersist from '../../config/ReduxPersist'
import { todosRedux } from './TodosRedux'

/* ------------- Assemble The Reducers ------------- */
export const reducers = combineReducers({
  todos: todosRedux
})

export default () => {
  const persistConfig = ReduxPersist.storeConfig
  persistedReducer = persistReducer(persistConfig, reducers)
  const store = createStore(persistedReducer)
  const persistor = persistStore(store)

  return { store, persistor }
}
