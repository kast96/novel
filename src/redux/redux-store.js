import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import savesReducer from './reducer-saves.js';
import scenariesReducer from './reducer-scenaries.js';
import storyReducer from './reducer-story.js';

let redusers = combineReducers({
    scenaries: scenariesReducer,
    story: storyReducer,
    saves: savesReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(redusers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;