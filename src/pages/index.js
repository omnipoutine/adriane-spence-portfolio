import * as React from "react"
import Layout from "../components/layout"
import styled from 'styled-components'
import { graphql } from 'gatsby'
import { getImage,StaticImage } from 'gatsby-plugin-image'
import Card from "../components/card"
const IndexContainer = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
 
 
 
 
 #mainHeaderDiv{
  padding-top:15rem;
   min-height:90vh;
   h1{
     text-align:center;
   }
   img{
     max-width:800px;
   }
 }
 #projects{
   width:90%;
 }
 .cardDiv{
   margin-bottom:10rem;
 }
 #projectHeaderDiv{
   width:100%;
   h1{
     text-align:left;
   }
 }
@media only screen and (min-width:1200px){
  #cardSection{
    display:flex;
    flex-direction:row;
    justify-content: space-between;
    align-items:start;
    flex-wrap:wrap;
    width:90%;
  }
}
`


// markup
const IndexPage = ({data}) => {
  return (
    <div>
      <Layout>
        <IndexContainer>
          <div id="mainHeaderDiv"><h1>I'm an Industrial Design graduate based in Toronto. </h1><StaticImage src="../images/store the one.png" alt="A stat"></StaticImage></div>
          
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
  allMarkdownRemark{
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
                width : 500
                height: 500
                placeholder: BLURRED
                formats : [AUTO,WEBP,AVIF]
              )
            }
          }
        }
      }
    }
  }
}

`