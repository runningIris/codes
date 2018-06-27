import {connect} from 'react-redux';
import List from '../components/List'
import {TOGGLE_TODO, FILTERS} from '../action';

const filterTodos = (todos, filter) => {
  console.log(filter);
  switch (filter) {
    case FILTERS.SHOW_ACTIVE.filter:
      return todos.filter(todo => !todo.completed);
    case FILTERS.SHOW_COMPLETED.filter:
      return todos.filter(todo => todo.completed);
    case FILTERS.SHOW_ALL.filter:
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
