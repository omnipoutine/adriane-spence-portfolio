import React from 'react';
import styled,{createGlobalStyle} from 'styled-components'
import Navbar from './navbar';
import Footer from './footer';
import './layout.css'
const Global = createGlobalStyle`
:root{
//colors
 --main-bg: #FFFFFF;
 --primary-text-color: #292929;

 //font sizes
 --text-nav-mobile: 1.3rem;
 --text-nav-tablet: 2rem;
 --text-mobile-menu: 3rem;
 --text-tablet-menu: 5rem;
 --text-mobile-mainhead : 2rem;
 --text-mobile-sectionhead : 2rem;

 //Margin and Padding
--nav-desktop-spacing: 2rem;
--nav-mobile-spacing: 1rem;



}


body,html,:root{
    font-family: 'CabinetGrotesk-Variable';
    background : var(--main-bg);
    color:var(--primary-text-color);
    margin:0;
    h1{
        font-weight:400;
        font-size: var(--text-mobile-mainhead);
        width:100%;

    }
    a{
        color:var(--primary-text-color);
        text-decoration:none;
    }
    h3{
        font-size: var(--text-mobile-sectionhead);
        font-weight:500;
    }
    h2{
        font-weight:400;
        font-size:1.75rem;
    }

}
`
const Layout = ({children}) => {
    return(
        
        <div>
            <Global/>
            <Navbar></Navbar>
            {children}
            <Footer></Footer>
        </div>
    )
}
export default Layout 