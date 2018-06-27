import React, {Component} from 'react';

export default class List extends Component {
  render(){
    const {todos, onClick} = this.props;
    console.log(todos)
    return (
      <ul>
        {todos.map(todo => {
          const style = {
            textDecoration: todo.completed ? 'line-through' : 'none',
            listStyle: 'none'
          }
          return <li key={todo.id} style={style} onClick={() => onClick(todo.id)}>{todo.text}</li>
        })}
      </ul>
    );
  }
}
