import { createStore, applyMiddleware, Middleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import reducers from './reducers';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

const setupMiddleware = (): Middleware[] => {
  const middlewares = [];
  middlewares.push(sagaMiddleware);
  return middlewares;
};

const store = createStore(reducers, composeWithDevTools(applyMiddleware(...setupMiddleware())));

sagaMiddleware.run(sagas);

export default store;
