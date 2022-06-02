import * as React from "react"
import Layout from "../components/layout"
import styled from 'styled-components'
import { graphql } from 'gatsby'
import { getImage,StaticImage } from 'gatsby-plugin-image'
import Card from "../components/card"
import Meta from "../components/helmet"
const IndexContainer = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
 
 
 
 
 
 #mainHeaderDiv{
  
   display:flex;
   flex-direction:column;
   align-items:center;
   justify-content:center;
    padding-top:7rem;
   min-height:100vh;
   
   h1{
     text-align:center;
     margin-bottom: 5rem;
     width:100%;
     animation: 1s anim-lineUp ease-out 1;
     overflow: hidden;
   }
   img{
     max-width:90%;
     margin-left:auto;
     margin-right:auto;
     
     
   }
   
 }

 

 #projects{
   width:90%;
   margin-bottom:10rem;

 }
 .cardDiv{
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
   margin-top:var(--card-margin);
   margin-bottom:var(--card-margin);
   padding:1rem;
 }
 #projectHeaderDiv{
   
   width:100%;
   h1{
     text-align:left;
     margin-bottom: 10rem;
   }
   
 }

 

@media only screen and (min-width:768px){
  #cardSection{
    
    
  }
  .cardDiv{
    
  }
  
}

@media only screen and (min-width:1200px){
  #mainHeaderDiv{
    width:70%;
    min-height:200vh;
    img{
      margin-top: 5rem;
      margin-bottom: 5rem;
    }
  }
  #cardSection{
    display:flex;
    flex-direction:row;
    justify-content: space-around;
    align-items:start;
    flex-wrap:wrap;
    
  }
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
`


// markup
const IndexPage = ({data}) => {
  return (
    <div>
      <Meta title={data.site.siteMetadata.title} description={data.site.siteMetadata.description} link={data.site.siteMetadata.siteUrl}></Meta>
      <Layout>
        <IndexContainer>
          <div id="mainHeaderDiv"><h1>I'm an Industrial Designer based in Toronto. </h1><div><StaticImage src="../images/exploded.png" alt="A stat" id="mainImg" loading="eager"></StaticImage></div></div>
          
          <section id="projects">
            <div id="projectHeaderDiv">
            <h1>Selected Works</h1>
            </div>
            
          
          <div id="cardSection">
            {data.allMarkdownRemark.edges.map((item, i) => (item.node.frontmatter ? (
              <div className="cardDiv">
                <Card title={item.node.frontmatter.name} placeholder={getImage(item.node.frontmatter.placeholder)} placeholderalt={item.node.frontmatter.placeholder} link={item.node.frontmatter.slug} description={item.node.frontmatter.description}></Card>
              </div>) : <div></div>))}
          </div>
          </section>
        </IndexContainer>
      </Layout>
    </div>
  )
}

export default IndexPage

export const query = graphql`
{
  allMarkdownRemark(filter: {frontmatter: {name: {ne: "about"}}}){
    edges{
      node{
        frontmatter{
          slug
          name
          description
          placeholderalt
          placeholder{
            childImageSharp {
              gatsbyImageData(
                width : 800
                height: 800
                placeholder: BLURRED
                formats : [AUTO,WEBP,AVIF]
              )
            }
          }
        }
      }
    }
  }
  site {
    siteMetadata {
      description
      siteUrl
      title
      titleTemplate
    }
  }
}

`