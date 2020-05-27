import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/layout/layout'
import SEO from '../components/seo'

const IndexPage = () => {

  const data = graphql`
  query homeQuery {
    site {
      siteMetadata {
        title,
        description
      }
    }
  }
  `

  return (
    <Layout>
      <SEO title={data.node.title} description={doc.node.description} />
    </Layout>
  )
}

IndexPage.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string
}

IndexPage.defaultProps = {
  description: '',
  title: ''
}

export default IndexPage
