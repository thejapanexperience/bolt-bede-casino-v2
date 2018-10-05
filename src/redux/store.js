import { createStore, compose, applyMiddleware, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'

import * as reducers from './indexReducers'
import { feedsSaga, gamesSaga } from './indexSagas'

const rootReducer = combineReducers(reducers)

const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middleware),
    typeof window === 'object' &&
    typeof window.devToolsExtension !== 'undefined'
      ? window.devToolsExtension()
      : f => f
  )
)

if (module.hot) {
  console.log('module.hot')
  // Enable Webpack hot module replacement for reducers
  module.hot.accept(reducers, () => {
    store.replaceReducer(rootReducer)
  })
}

export default store

sagaMiddleware.run(feedsSaga)
sagaMiddleware.run(gamesSaga)
