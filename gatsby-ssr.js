/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

import React from 'react'
import { Provider } from 'react-redux'
import { renderToString } from 'react-dom/server'
import { store } from '@bedegaming/tlob-library'

export const replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => {
  console.log('replacerenderer')
  const ConnectedBody = () => <Provider store={store}>{bodyComponent}</Provider>
  replaceBodyHTMLString(renderToString(<ConnectedBody />))
}
