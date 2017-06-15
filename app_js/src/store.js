import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import reducer from './reducers';

const middlewares = [
  thunk
]

const enhancers = [
  applyMiddleware(...middlewares),
];

const composeEnhancers =
  (/^production$/.test(process.env.NODE_ENV) && compose) ||
  (window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose);

export default createStore(reducer, {}, composeEnhancers(...enhancers));
