import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import scenariesReducer from './reducer-scenaries.js';

let redusers = combineReducers({
    scenaries: scenariesReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(redusers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;