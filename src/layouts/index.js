import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/Header'
import styled from 'styled-components'
import { Colors } from './colors'
import './index.css'
import 'prismjs/themes/prism-solarizedlight.css'

const Container = styled.div``
const Paper = styled.div`
  background-color: white;
  max-width: 900px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07);
  margin: 0 auto;
  padding: 1rem 4rem 2rem;
`
const TemplateWrapper = ({ children }) => {
  return (
    <Container>
      <Helmet
        title="Gatsby Default Starter"
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' }
        ]}
      />
      <Header />
      <Paper>{children()}</Paper>
    </Container>
  )
}

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper
