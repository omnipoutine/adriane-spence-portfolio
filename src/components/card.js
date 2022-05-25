import React from 'react';
import styled from 'styled-components'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby';

const CardContainer = styled.div`
    max-width:500px;
    div{
        display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    }
    img{
        max-width:500px;
        max-height:500px;
    }
    p{
        width:50%;
        text-align:right;
    }
    @media only screen and (min-width:1200px){
        a{
            color:rgba(0,0,0,0);
            transition: color 100ms ease-out;
        }
        a:hover{
            color:var(--primary-text-color);
        }
        a:active{
            color:rgba(0,0,0,0);
        }
    }
`

const Card = ( props ) => {
return(
    <CardContainer>
        <Link to={props.link}><GatsbyImage image={props.placeholder} alt={props.placeholderalt}></GatsbyImage>
        <div id="text">
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </div>
        </Link>
    </CardContainer>
)
}

export default Card