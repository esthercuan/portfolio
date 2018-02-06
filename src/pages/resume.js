import React from 'react'
import Link from 'gatsby-link'

const Resume = ({ data }) => {
  const { html } = data.allMarkdownRemark.edges[1].node
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  )
}

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          html
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`
export default Resume
