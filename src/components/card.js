import React from 'react';
import styled from 'styled-components'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby';
import { flexRowBetweenCenter } from './layout';
const CardContainer = styled.div`
    max-width:var(--img-size);

    div{
        ${flexRowBetweenCenter}
    }
    img{
        max-width:var(--img-size);
        max-height:var(--img-size);
        
    }
    p{
        width:50%;
        text-align:right;
    }

    @media only screen and (min-width:1200px){
        
        a{
            color:var(--transparent-color)
            transition: color 100ms ease-out;
            img{
                
            }
            img:hover{
                transform: scale(0.9);
                transition: transform 50ms ease-in;
            }
        }
        
        
        a:hover{
            
            h2,p{
                animation: appear 100ms;
                animation-fill-mode:forwards; 
            }
        }
        
        
        h2,p{
            margin-bottom:0;
            color:var(--transparent-color)
        }
        
        
    }

    @keyframes appear{
        from{color: var(--transparent-color)}
        to{color:var(--primary-text-color)}
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