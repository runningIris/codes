import React from 'react';
import {connect} from 'react-redux';
import List from '../components/List'
import {TOGGLE_TODO, FILTERS} from '../action';

const filterTodos = (todos, filter) => {
  console.log(filter);
  switch (filter) {
    case FILTERS.SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed);
    case FILTERS.SHOW_COMPLETED:
      return todos.filter(todo => todo.completed);
    case FILTERS.SHOW_ALL:
    default:
    return todos;
  }
}


const mapStatesToProps = (state) => ({
  todos: filterTodos(state.todos, state.visibilityFilters)
});

const mapDispatchToProps = (dispatch) => ({
  onClick: function(id){
    dispatch(TOGGLE_TODO(id));
  }
});

export default connect(mapStatesToProps, mapDispatchToProps)(List);
