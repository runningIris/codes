import React from 'react';
import {connect} from 'react-redux';
import {ADD_TODO} from '../action';


const AddTodo = ({submitClick}) => {
  let input;
  return (
    <div>
      <input ref={node => input = node}/>
      <button onClick={() => {
        if (input.value !== ''){
          submitClick(input.value);
        }
        input.value = '';
      }}>Add Todo</button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  submitClick: function (text) {
    dispatch(ADD_TODO(text));
  }
});

export default connect(() => ({}), mapDispatchToProps)(AddTodo);
