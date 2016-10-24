import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import reducer from './reducers'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';

// const store = createStore(rootReducer, applyMiddleware(thunk))

const composeEnhancers =
   process.env.NODE_ENV !== 'production' &&
   typeof window === 'object' &&
   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
       // Specify here name, actionsBlacklist, actionsCreators and other options
     }) : compose;

 const enhancer = composeEnhancers(
   applyMiddleware(thunk)
 );
 const store = createStore(reducer, enhancer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
