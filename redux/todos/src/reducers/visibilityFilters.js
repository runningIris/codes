import {FILTERS} from '../action';

const visibilityFilters = (state = FILTERS.SHOW_ALL.filter, action) => {
  switch (action.type) {
    case 'SET_VISIBILITY':
      return action.filter;
    default:
      return state;
  }
};

export default visibilityFilters;
