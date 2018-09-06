import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './Reducers/index';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
 reducers,
 composeEnhancers(applyMiddleware())
)


ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>
, document.getElementById('root'));
registerServiceWorker();
