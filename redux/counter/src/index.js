import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './reducer';
import Counter from './container/Counter';

const store = createStore(rootReducer);

const Root = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
