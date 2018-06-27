// containers/visibleTodoList.js

import { connect } from 'react-redux';


const TodoList = ({todos, onTodoClick}) => (
    <ul>
        {todos.map((todo, index) => <Todo key={index} {...todo} onClick={() => onTodoClick(index)} />)}
    </ul>
);

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            completed: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired,
        }).isRequired
    }).isRequired,
    onTodoClick: PropTypes.func.isRequired
};

const getVisibleTodos = (todos, filter) => {

    switch (filter) {
        case 'SHOW_COMPLETED':
            return todos.filter(t => t.completed);
        case 'SHOW_ACTIVE':
            return todos.filter(t => !t.completed);
        case 'SHOW_ALL':
        default:
            return todos;
    }
};

const mapStateToProps = state => ({
    todos: geVisibleTodos(state.todos, state.visibilityFilter)
});


const mapDispatchToProps = dispatch => ({
    onTodoClick: id => dispatch(toggleTodo(id))
});


const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList)

export default VisibleTodoList;

// containers/addtodo.js

let AddTodo = ({dispatch}) => {
    let input;
    return (
        <div>
            <form
                onSubmit={e=>{
                    e.preventDefault()
                    if (!input.value.trim()){
                        return
                    }
                    dispatch(addTodo(input.value))
                    input.value = ''
                }}
            >
                <input ref={node => input=node} />
                <button type="submit">Add Todo</button>
            </form>
        </div>
    )
}

AddTodo = connect()(AddTodo);

export default AddTodo;

