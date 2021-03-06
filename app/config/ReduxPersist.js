import {AsyncStorage} from 'react-native';

// More info here:  https://shift.infinite.red/shipping-persistant-reducers-7341691232b1
const REDUX_PERSIST = {
  storeConfig: {
    key: 'root',
    storage: AsyncStorage,
    // Reducer keys that you do NOT want stored to persistence here.
    blacklist: [],
    // Optionally, just specify the keys you DO want stored to persistence.
    // An empty array means 'don't store any reducers' -> infinitered/ignite#409
    whitelist: ['regularReduxTodos', 'reduxSauceTodos'],
  },
};

export default REDUX_PERSIST;
