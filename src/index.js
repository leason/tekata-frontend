import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { combineReducers, createStore } from 'redux';
import { setupCognito, cognito } from 'react-cognito';
import config from './config.json';
import { Provider } from 'react-redux'

const reducers = combineReducers({
    cognito,
});

let accountStore = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// config.group = 'admins'; // Uncomment this to require users to be in a group 'admins'
setupCognito(accountStore, config);

ReactDOM.render(<Provider store={accountStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
