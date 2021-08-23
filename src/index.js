import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import logger from 'redux-logger';

//Redux stuff
import {
    createStore,
    combineReducers,
    applyMiddleware
} from 'redux';
import {
    Provider
} from 'react-redux';

const FeelingReducer = (state = [], action) => {
    if (action.type === 'ADD_FEELING') {
        return [...state, action.payload]
    }
    return state;
}

const UnderstandingReducer = (state = [], action) => {
    if (action.type === 'ADD_UNDERSTANDING') {
        return [...state, action.payload]
    }
    return state;
}

const SupportReducer = (state = [], action) => {
    if (action.type === 'ADD_SUPPORT') {
        return [...state, action.payload]
    }
    return state;
}

const CommentsReducer = (state = [], action) => {
    if (action.type === 'ADD_COMMENTS') {
        return [...state, action.payload]
    }
    return state;
}

const storeInstance = createStore(
    combineReducers({

        FeelingReducer,
        UnderstandingReducer,
        SupportReducer,
        CommentsReducer
    }),
    applyMiddleware(logger)
);

ReactDOM.render(<Provider store={storeInstance}>< App /></Provider>, document.getElementById('root'));