import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import rootReducer from './reducers/reducers';
import App from './containers/App'
import './index.css';

const store = createStore(rootReducer, applyMiddleware(logger));

ReactDOM.render(
    <Provider store={store}>
            <App/>
    </Provider>, document.getElementById('root')
);
