import React from 'react'
import styled from 'styled-components'
import { graphql, Link } from "gatsby"
import Layout from '../components/layout'

const ProjectPage = styled.div`
--width-percentage : 90%;

@media only screen and (min-width:1200px){
  --width-percentage : 40%;
}
@keyframes anim-lineUp {
  0% {
    opacity: 0;
    transform: translateY(80%);
  }
  20% {
    opacity: 0;
  }
  50% {
    opacity: 1;
    transform: translateY(0%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
}


animation: anim-lineUp 1s ease-out;




padding-top:var(--content-page-top);
padding-bottom:7rem;

display:flex;
flex-direction:column;
align-items:center;
justify-content:center;

div{
  width:90%;
  display:flex;
flex-direction:column;
align-items:start;
justify-content:center;
}
p{
  width:var(--width-percentage);
  margin-bottom:var(--paragraph-margin);
  
}

`

const Project = ({data}) => { 
    const { markdownRemark } = data // data.markdownRemark holds your post data
    const { frontmatter, html } = markdownRemark
    return(
    <Layout>
      <ProjectPage>
        <div dangerouslySetInnerHTML={{ __html : html }}></div>
      </ProjectPage>
    </Layout>)


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