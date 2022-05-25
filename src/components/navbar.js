import React,{useState} from 'react';
import styled from 'styled-components'
import { Link } from "gatsby"

const MenuIcon = styled.button`
font-family: 'CabinetGrotesk-Variable', arial, sans-serif;

//Flexbox Center for button text

display:flex;
justify-content: center;
align-items:center;
border:none;
transition: background 150ms linear;
background: rgba(0,0,0,0);
z-index: 5;

//Button Text styling
p{
    color:#000000;
    font-size:var(--text-nav-mobile);
    padding:1rem;
    text-decoration:underline;
}
@media only screen and (min-width:768px){
   p{ font-size:var(--text-nav-tablet); }
}
`

//Styling for container holding entire nav
const Container = styled.div`
    background: #d4d4d4;
    postion:relative;

    //Styling for mobile nav header
    #navHead{
        font-size:var(--text-nav-mobile);
        display:flex;
        justify-content: center;
        align-items:center;
        padding:1rem;
       p{
        
       }
    }
    #desktopMenu{
        display:none;
    }

    //Styling for mobile navbar container
    #mobileMenu{
        background:var(--main-bg);
        position:fixed;
        top:0rem;
        z-index:5;
        display:flex;
        flex-direction:row;
        justify-content:space-between;
        align-items:center;
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
            display:flex;
            flex-direction:row;
            align-items:center;
            justify-content:space-between;

            #headerLink{
                margin-left:var(--nav-desktop-spacing);
            }

            ul{
                display:flex;
            flex-direction:row;
            align-items:center;
            justify-content:space-around;
            list-style:none;
            
            }
            li{
                margin-right:var(--nav-desktop-spacing);
            }
        }
    }
`

//Styling for mobile nav menu offscreen.
const MenuLink = styled.nav`
background:var(--main-bg);
display:flex;
flex-direction: column;
justify-content:center;
align-items: start;
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
    list-style:none;
    font-size:var(--text-mobile-menu);
    padding-left:var(--nav-mobile-spacing);
    li{
        margin-bottom:var(--nav-mobile-spacing);
    }
}
@media only screen and (min-width:768px){
    a{font-size:var(--text-tablet-menu);}
    
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
                        <li><Link to='/'>work</Link></li>
                        <li><Link to='/'>contact</Link></li>
                        <li><Link to='/'>about</Link></li>
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
                    
                    <li><Link to="/#work" onClick ={() => {showNav(!nav);}}>About</Link>
                    
                    </li>
                    
                    <li><Link to="/contact" onClick ={() => {showNav(!nav);}}>Projects</Link>
                    
                    </li>
                    
                    <li><Link to="/about" onClick ={() => {showNav(!nav);}} >Contact</Link>
                    

                    </li>
                    
                </ul>
            </MenuLink>
        </Container>
    )}

export default Navbar