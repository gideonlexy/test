import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { reducer } from '../reducer/reducer';

const middleware = [logger, thunk];

// const rootReducer = combineReducers({ reducer });

export const store = createStore(
	reducer,

	applyMiddleware(...middleware)
);
