import React,{useState} from 'react';
import styled from 'styled-components'
import { Link } from "gatsby"



 const flexColumnCenterCenter = `
display:flex;
flex-direction: column;
justify-content:center;
align-items:center;

`
 const flexColumnCenterStart = `
display:flex;
flex-direction: column;
justify-content:center;
align-items:start;

`


 const flexRowBetweenCenter = `
display:flex;
flex-direction: row;
justify-content:space-between;
align-items:center;

`
 const flexRowAroundCenter = `
display:flex;
flex-direction: row;
justify-content:space-around;
align-items:center;

`






const MenuIcon = styled.button`
font-family: 'CabinetGrotesk-Variable', arial, sans-serif;

//Flexbox Center for button text

${flexColumnCenterCenter}
border:none;
transition: background 150ms linear;
background: var(--transparent-color);
z-index: 5;

//Button Text styling
p{
    color:var(--primary-text-color);
    font-size:var(--text-nav);
    padding:var(--nav-spacing);
    text-decoration:underline;
}

`

//Styling for container holding entire nav
const Container = styled.div`
    background: var(--main-bg);
    postion:relative;

    //Styling for mobile nav header
    #navHead{
        font-size:var(--text-nav);
        ${flexColumnCenterCenter}
        padding:var(--nav-spacing);
    }

    #desktopMenu{
        display:none;
        z-index:5;
        a{
            transition: 100ms ease-in
        }

        a:hover{
            font-weight:500;
            text-decoration:underline;
        }
    }

    //Styling for mobile navbar container
    #mobileMenu{
        background:var(--main-bg);
        position:fixed;
        top:0rem;
        z-index:5;
        ${flexRowBetweenCenter}
        width:100%;
    }
    @media only screen and (min-width:768px){
        #navHead{
            font-size:var(--text-nav-tablet);
        }
    }
    @media only screen and (min-width: 1200px){
        
        #mobileMenu{
            display:none;
        }
        #desktopMenu{
            width:100%;
            position:fixed;
            background: var(--main-bg);
            ${flexRowBetweenCenter}

            #headerLink{
                margin-left:var(--nav-spacing);
            }

            ul{
            ${flexRowAroundCenter}
            
            
            }
            li{
                margin-right:var(--nav-spacing);
            }
        }
    }
`

//Styling for mobile nav menu offscreen.
const MenuLink = styled.nav`
background:var(--main-bg);
${flexColumnCenterStart}
text-align:left;
height:100vh;
width:100%;
position:fixed;
top:0;
right:0;
z-index: 4;
transform: ${({nav}) => nav ? "translateX(0)": "translateX(100%)"};
transition: transform 150ms linear;

ul{
    
    font-size:var(--text-menu);
    padding-left:var(--nav-spacing);
    li{
        margin-bottom:var(--nav-spacing);
        a{transition: 100ms ease-in}
        a:hover{
            font-weight:500;
            text-decoration:underline;
        }
    }
}

`

const Navbar = () => {

    const[menuText, setMenuText] = useState(true);
    const[nav, showNav] = useState(false)
   
       
    let menuButton;   
    if(nav){
         menuButton = <p>exit</p>
    }else{
         menuButton = <p>menu</p>
    }
    return ( 
        <Container>
            <div id="desktopMenu">
                <Link to='/' id="headerLink">adriane spence</Link>
                <div>
                    <ul>
                        <li><Link to='/#projects'>work</Link></li>
                        <li><Link to='#footer'>contact</Link></li>
                        <li><Link to='/about'>about</Link></li>
                    </ul>
                </div>
            </div>
            <div id="mobileMenu">
            <div id="navHead"><Link to="/">adriane spence</Link></div>
            <MenuIcon nav={nav}
            onClick ={() => {showNav(!nav);}}>
                {menuButton}
                
            </MenuIcon>
            </div>
            <MenuLink nav={nav}>
            
                <ul>
                    <li><Link to="/" onClick ={() => {showNav(!nav);}}>Home</Link>
                    
                    </li>
                    
                    <li><Link to="/about" onClick ={() => {showNav(!nav);}}>About</Link>
                    
                    </li>
                    
                    <li><Link to="/#projects" onClick ={() => {showNav(!nav);}}>Projects</Link>
                    
                    </li>
                    
                    <li><Link to="#footer" onClick ={() => {showNav(!nav);}} >Contact</Link>
                    

                    </li>
                    
                </ul>
            </MenuLink>
        </Container>
    )}

export default Navbar