const todos = (state = [], action) => {
  switch (action.type){
    case 'ADD_TODO':
      const {id, text, completed} = action;
      return [...state, {id, text, completed}];
    case 'TOGGLE_TODO':
      return state.map(todo => todo.id === action.id ? {...todo, completed: !todo.completed} : todo);
    default:
      return state;
  }
}

export default todos;
