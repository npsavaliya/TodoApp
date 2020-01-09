import {SELECT_REDUCER} from '../types';

const INITIAL_STATE = {
  isReduxSauce: false,
};

export const selectReducerRedux = (state = INITIAL_STATE, action) => {
  const {type, isReduxSauce} = action;
  switch (type) {
    case SELECT_REDUCER:
      return {...state, isReduxSauce};
    default:
      return state;
  }
};
