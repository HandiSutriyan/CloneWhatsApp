
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers'
import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'

import reducers from './rootReducers'

const middleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav,
)

const store = createStore(
  reducers,
  applyMiddleware(middleware,logger),
);

export default store
