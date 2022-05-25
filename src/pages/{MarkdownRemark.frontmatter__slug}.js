import React from 'react'
import styled from 'styled-components'
import { graphql, Link } from "gatsby"
import Layout from '../components/layout'

const Project = ({data}) => { 
    const { markdownRemark } = data // data.markdownRemark holds your post data
    const { frontmatter, html } = markdownRemark
    return(<div>we did it boys</div>)
}
export default Project
export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        slug
        name
        description
      }
    }
  }
`