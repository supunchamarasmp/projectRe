import {createStore, applyMiddleware, combineReducers} from 'redux';
import createSagaMiddleware from 'redux-saga';

import {donetionReducer, donetionRootSaga} from '../models/donetionModel';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  combineReducers({
    donetion: donetionReducer,
    
  }),
  applyMiddleware(sagaMiddleware),
);

// then run the saga
const rootSagas = [
  donetionRootSaga,
 
];
rootSagas.forEach(sagaMiddleware.run);

export default store;
