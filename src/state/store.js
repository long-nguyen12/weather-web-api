import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
// import {  } from "module";

const middlewares = [thunk];

const store = createStore(
    rootReducer,
    applyMiddleware(...middlewares)
)

export default store;