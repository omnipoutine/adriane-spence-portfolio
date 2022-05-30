import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"



const SEO = ({ data }) => {

    const {
        title,
        titleTemplate,
        description,
        siteUrl,
        icon,
        
      } = data.site.siteMetadata
    
    
      const seo = {
        title: title || title,
        description: description || description,
        icon: `${siteUrl}${icon || icon}`,
        url: `${siteUrl}${pathname}`,
      }



    const { pathname } = useLocation()
    const { site } = useStaticQuery(query)
  return (
    <Helmet title={seo.title} titleTemplate={titleTemplate}>
    <meta name="description" content={seo.description} />
    <meta name="image" content={seo.image} />
    {seo.url && <meta property="og:url" content={seo.url} />}
    
    {seo.title && <meta property="og:title" content={seo.title} />}
    {seo.description && (
      <meta property="og:description" content={seo.description} />
    )}
    {seo.image && <meta property="og:image" content={seo.image} />}
    <meta name="twitter:card" content="summary_large_image" />
    
    {seo.title && <meta name="twitter:title" content={seo.title} />}
    {seo.description && (
      <meta name="twitter:description" content={seo.description} />
    )}
    {seo.image && <meta name="twitter:image" content={seo.image} />}
  </Helmet>
  )
}
export default SEO
SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  article: PropTypes.bool,
}
SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  article: false,
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        description
        icon
        siteUrl
        title
        titleTemplate
      }
    }
  }
`