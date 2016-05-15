import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/app'
import configureStore from './store/configureStore'
import { getFour } from './lib/game'
import initData from './data'

const store = configureStore(initData)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
