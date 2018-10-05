// Packages
import React from 'react'
import { Link } from 'gatsby'

// Components
import Layout from '../components/layout'
import Data from '../pages/data'

const IndexPage = () => {
  return (
    <Layout>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Link to="/page-2/">Go to page 2</Link>
      <Data />
    </Layout>
  )
}

export default IndexPage
