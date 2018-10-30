import React from 'react'
import { Provider } from 'react-redux'
import { store } from '@bedegaming/bolt-v2'
import { getData } from './src/config/initialise.js'

export const wrapRootElement = ({ element }) => {
  const ConnectedRootElement = <Provider store={store}>{element}</Provider>
  getData(store)
  return ConnectedRootElement
}
