import React from "react"
import { graphql } from "gatsby"

import { Layout } from '../components';

export default ({ data: { title } }) => (
  <Layout>
    <h1>{title}</h1>
  </Layout>
)

export const pageQuery = graphql`
  query($slug: String!) {
    contentfulContent(slug: { eq: $slug }) {
      title
    }
  }
`
