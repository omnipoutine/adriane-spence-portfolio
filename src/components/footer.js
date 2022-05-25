import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components'

const FooterDiv = styled.footer`

margin-left: var(--nav-mobile-spacing);
ul{
    list-style:none;
    padding-left:0;
    li{
        margin-bottom:0.5rem;
    }
}
#listDiv{
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    width:66%;
}
`

const Footer = () => {
    return(
        <FooterDiv>
            <h3>Get in Touch</h3>
            <div id='listDiv'>
                <ul>
                    <li>instagram</li>
                    <li>spotify</li>
                    <li>linkedin</li>
                </ul>
                <ul>
                    <li>email@email.com</li>
                    <li>contact page</li> 
                </ul>
            </div>
        </FooterDiv>
    )
}
export default Footer;
