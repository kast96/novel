import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import savesReducer from './reducer-saves';
import scenariesReducer from './reducer-scenaries';
import storyReducer from './reducer-story';
import settingsReducer from './reducer-settings';

let redusers = combineReducers({
    scenaries: scenariesReducer,
    story: storyReducer,
    saves: savesReducer,
    settings: settingsReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(redusers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;