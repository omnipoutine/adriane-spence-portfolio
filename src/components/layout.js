import React from 'react';
import styled,{createGlobalStyle} from 'styled-components'
import Navbar from './navbar';
import Footer from './footer';
import './layout.css'

export const flexColumnCenterCenter = `
display:flex;
flex-direction: column;
justify-content:center;
align-items:center;

`
export const flexColumnCenterStart = `
display:flex;
flex-direction: column;
justify-content:center;
align-items:start;

`


export const flexRowBetweenCenter = `
display:flex;
flex-direction: row;
justify-content:space-between;
align-items:center;

`
export const flexRowAroundCenter = `
display:flex;
flex-direction: row;
justify-content:space-around;
align-items:center;

`



const Global = createGlobalStyle`
:root{
//Variable Declerations for all view sizes
//colors
 --main-bg: #FFFFFF;
 --primary-text-color: #292929;
 --transparent-color : rgba(0,0,0,0);
 //font sizes
 --text-nav: 1.3rem;
 --text-nav: 1.5rem;
 --text-menu: 3rem;

 --text-mainhead : 2rem;
 --text-secondary : 1.75rem;
 --text-paragraph : 1.2rem;

 //Image sizes
 --img-size: 500px;

 //Spacing
 --card-margin: 10rem;
 --paragraph-margin: 5rem;
 --nav-spacing: 1rem;
 --layout-percentage : 90%;
 

 //About and project write up page spacing.
 --content-page-top : 15rem;
 --content-page-bottom : 7.5rem;
 --paragraph-width: 100%;


//Tablet View
@media only screen and (min-width:768px){
    
    //Font Sizes
    --text-paragraph : 1.4rem;
    --text-mainhead : 4rem;
    --text-menu: 5rem;
    --text-nav: 1.5rem;

    //Image Size
    --img-size: 900px;

    //Spacing
    --card-margin: 10rem;
    --paragraph-width: 70%;
    --nav-spacing: 1.5rem;

}
//Desktop View
@media only screen and (min-width:1200px){
    //Image Size
    --img-size: 475px;

    //Spacing
     --card-margin: 2rem;
     --nav-spacing: 4rem;
     --paragraph-width: 35%;

     --text-paragraph: 1.2rem;
}

}


:root{
    // Font Website https://www.fontshare.com/fonts/cabinet-grotesk
    font-family: 'CabinetGrotesk-Variable', Arial, Sans-serif;

    //Colour Scheme Definitions
    background : var(--main-bg);
    color:var(--primary-text-color);

    margin:0;

    h1{
        font-weight:400;
        font-size: var(--text-mainhead);
    }

    a{
        color:var(--primary-text-color);
        text-decoration:none;
    }
    
    h2{
        font-weight:400;
        font-size:var( --text-secondary);
    }

    P{
        font-size: var( --text-paragraph);
    }
    ul{
        list-style:none;
    }

}

body{
    margin:0;
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