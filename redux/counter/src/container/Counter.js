import React from 'react';
import {connect} from 'react-redux';
import {ADD, MINUS} from '../action';
const Counter = ({count, dispatch}) => {
  const {value} = count;
  return (
    <div>
      <span>{value}</span>
      <button onClick={() => dispatch({type: ADD})}>+</button>
      <button onClick={() => dispatch({type: MINUS})}>-</button>
    </div>
  );
};

const mapStatesToProps = (state) => ({
  count: state.count
});

export default connect(mapStatesToProps)(Counter);
