import {combineReducers} from 'redux';

const count = (state = {value: 0}, action) => {
  const {value} = state;
  switch (action.type) {
    case 'ADD':
      return {...state, value: value+1};
    case 'MINUS':
      return {...state, value: value-1};
    default:
      return state;
  }
};

export default combineReducers({count});
