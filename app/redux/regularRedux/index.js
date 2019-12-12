import {combineReducers, createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist'
import ReduxPersist from '../../config/ReduxPersist'
import {todosRedux} from './TodosRedux';
import {selectReducerRedux} from '../selectReducer/SelectReducerRedux';

/* ------------- Assemble The Reducers ------------- */
export const reducers = combineReducers({
  selectReducer: selectReducerRedux,
  regularReduxTodos: todosRedux,
  reduxSauceTodos: require('../reduxSauce/TodosRedux').reducer,
});

export default () => {
  const persistConfig = ReduxPersist.storeConfig;
  const persistedReducer = persistReducer(persistConfig, reducers);
  const store = createStore(
    persistedReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
  );
  const persistor = persistStore(store);

  return {store, persistor};
};
