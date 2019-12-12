import { combineReducers, createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import ReduxPersist from '../../config/ReduxPersist'

/* ------------- Assemble The Reducers ------------- */
export const reducers = combineReducers({
  todos: require('./TodosRedux').reducer
})

export default () => {
  let finalReducers = reducers
  const persistConfig = ReduxPersist.storeConfig
  persistedReducer = persistReducer(persistConfig, reducers)
  const store = createStore(persistedReducer)
  const persistor = persistStore(store)

  return { store, persistor }
}
