import React from 'react';
import ReactDOM from 'react-dom';
//import { configureStore } from './store';
import {createStore} from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './reducers/rootReducer';
import RecipeApp from './containers/RecipeApp';
import './style/index.css';
import registerServiceWorker from './registerServiceWorker';

let store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


ReactDOM.render(
  <Provider store={store}>
    <RecipeApp />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
