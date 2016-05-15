import { createStore, compose, applyMiddleware } from 'redux'
import rootReducer from '../reducers'

const enhancer = compose(
  // applyMiddleware(),
  window.devToolsExtension ? window.devToolsExtension() : f => f,
);

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, enhancer)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers')
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
