import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux';
import combinedReducer from './reducer';
import {Provider} from 'react-redux';
import Container from './container';


const store = createStore(combinedReducer);

function App(props){
  return (
    <Provider store={store}>
      <Container />
    </Provider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
