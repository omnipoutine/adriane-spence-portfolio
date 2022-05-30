import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import { graphql } from "gatsby"
import Layout from '../components/layout'
import styled from 'styled-components';
import {flexColumnCenterCenter} from '../components/layout'
const AboutDiv = styled.div`
padding-top:var(--content-page-top);

padding-bottom:var(--content-page-bottom);

h1,#contentDiv{
    width:var(--layout-percentage);
    
}
p, #textDiv ,h1{
    margin-bottom:var(--paragraph-margin);

    animation: anim-lineUp 1s ease-out;
}
p{
    width:var(--paragraph-width);
}


${flexColumnCenterCenter}

@media only screen and (min-width:768px){

    #textDiv{
    
        margin-bottom:var(--content-page-bottom);

}
}


@media only screen and (min-width:1200px){
    #textDiv{
        p{
            max-width:800px;
         }
    }


    #imgDiv{

        width:100%;
    
        display:flex;
    
        flex-direction: row;

        justify-content:center;

        align-items:start;

    }

    .spacer{
    
        width:50%;

    }

    img{
    
    
        width:700px;
    
        height:750px;
    

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


const About = ({data}) => {
    const { markdownRemark } = data // data.markdownRemark holds your post data
    const { frontmatter, html } = markdownRemark
    return(
        <Layout>
            <AboutDiv>
            <h1>About Me</h1>

                <div id="contentDiv">
                    <div id="textDiv" dangerouslySetInnerHTML={{__html: html}}></div>
                    <div id="imgDiv">
                    <span className='spacer'></span>
                    <GatsbyImage image={getImage(frontmatter.aboutimage)}></GatsbyImage>
                    </div>
                </div>
                
            </AboutDiv>
        </Layout>
    )
}

export default About;

export const aboutquery = graphql`
  {
    markdownRemark(frontmatter: {name: {eq: "about"}}) {
      html
      frontmatter {
        aboutimage {
            childImageSharp {
              gatsbyImageData
            }
          }
        description
        name
      }
    }
  }
`