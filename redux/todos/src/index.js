import React, {Component} from 'react';
import {render} from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './reducers';
import TodosList from './containers/TodosList';
import AddTodo from './containers/AddTodo';
import FilterLinks from './containers/FilterLinks';
const store = createStore(rootReducer);

class Root extends Component {
  render(){
    return (
      <Provider store={store}>
        <div>
          <h3>Hello, Redux!</h3>
          <AddTodo />
          <TodosList />
          <FilterLinks />
        </div>
      </Provider>
    )
  }
}

render(<Root />, document.getElementById('root'));


registerServiceWorker();
