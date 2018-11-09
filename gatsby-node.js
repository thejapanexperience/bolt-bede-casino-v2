/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require('path')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const contentTemplate = path.resolve(`src/templates/contentTemplate.js`)

  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            allContentfulContent(filter: {node_locale: {regex: "/en-GB/"}}) {
              edges {
                node {
                  slug
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        result.data.allContentfulContent.edges.forEach(({ node }) => {
          createPage({
            path: node.slug,
            component: contentTemplate,
            context: {
              slug: node.slug
            }, // additional data can be passed via context
          })
        })
      })
    )
  })
}
