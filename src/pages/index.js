// Packages
import React from 'react'
import { Link } from 'gatsby'

// Components
import Layout from '../components/layout'
import Games from '../pages/games'

const IndexPage = () => {
  return (
    <Layout>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Link to="/page-2/">Go to page 2</Link>
      <Games />
    </Layout>
  )
}

export default IndexPage
