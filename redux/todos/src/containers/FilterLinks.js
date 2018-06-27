import React from 'react';
import {connect} from 'react-redux';
import {FILTERS} from '../action';

const Link = ({onClick, children}) => {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  );
};

const FilterLinks = ({dispatch}) => {
  return (
    <div>
      <Link onClick={() => dispatch(FILTERS.SHOW_ALL)}>All</Link>
      <Link onClick={() => dispatch(FILTERS.SHOW_ACTIVE)}>Active</Link>
      <Link onClick={() => dispatch(FILTERS.SHOW_COMPLETED)}>Completed</Link>
    </div>
  );
};

export default connect()(FilterLinks);
