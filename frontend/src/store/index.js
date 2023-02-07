import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import mySaga from './sagas';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);

window.store = store;

sagaMiddleware.run(mySaga);

export default store;
