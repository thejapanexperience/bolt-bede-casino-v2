import React from 'react'
import { Provider } from 'react-redux'
import store from './src/redux/store'
import { getData } from './src/config/config.js'

export const wrapRootElement = ({ element }) => {
  const ConnectedRootElement = <Provider store={store}>{element}</Provider>
  getData(store)
  return ConnectedRootElement
}
