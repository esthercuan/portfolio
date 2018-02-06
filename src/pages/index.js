import React from 'react'
import Link from 'gatsby-link'
import styled, { keyframes } from 'styled-components'
import { Colors } from '../layouts/colors'
import Me from '../img/me.png'

const hovering = keyframes`
  0% {
    transform: translateY(-5px);
  }

  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(-5px);
  }
`

const Boo = styled.img`
  max-width: 30px;
  animation: ${hovering} 2s linear infinite;
  margin-right: 1.2em;
  margin-bottom: 0;
  float: left;
`

const Welcome = styled.div`
  & h1 {
    color: ${Colors.darkblue};
  }
`

const IndexPage = ({ data }) => {
  const { html, headings } = data.allMarkdownRemark.edges[0].node
  return (
    <div>
      <Boo src={Me} />
      <Welcome dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  )
}
export const query = graphql`
  query HomeQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          html
          headings {
            depth
            value
          }
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

export default IndexPage
