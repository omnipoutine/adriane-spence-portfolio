import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components'

const FooterDiv = styled.footer`
--margin-bottom: 1rem;
--list-width: 66%;
@media only screen and (min-width:768px){
    --margin-bottom: 2rem;
    --list-width: 50%;
}
@media only screen and (min-width:1200px){
    --margin-bottom: 2rem;
    --list-width: 30%;
    
}
margin-left: var(--nav-spacing);
ul{
    
    padding-left:0;
    li{
        margin-bottom:var(--margin-bottom);
    }
}
#listDiv{
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    width:var(--list-width);
}
`

const Footer = () => {
    return(
        <FooterDiv id="footer">
            <h1>Get in Touch</h1>
            <div id='listDiv'>
                <ul>
                    <li><a href='https://instagram.com'>instagram</a></li>
                    <li><a href='https://instagram.com'>spotify</a></li>
                    <li><a href='https://instagram.com'>linkedin</a></li>
                </ul>
                <ul>
                    <li><a href='https://instagram.com'>email@email.com</a></li>
                    <li><a href='https://instagram.com'>contact page</a></li> 
                </ul>
            </div>
        </FooterDiv>
    )
}
export default Footer;
