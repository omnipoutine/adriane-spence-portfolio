import * as React from "react"
import { Link } from "gatsby"
import Layout,{flexColumnCenterCenter} from "../components/layout"
import styled from "styled-components"
import '../components/layout.css'
const Container = styled.div`
body{
  margin:0;
}
height:100vh;
${flexColumnCenterCenter}
font-family: 'CabinetGrotesk-Variable', Arial, Sans-serif;
h1{
  font-size:5rem;
  font-weight:300;
}
`
// markup
const NotFoundPage = () => {
  return (
    
      <Container>
        <h1>Page not Found</h1>
        <Link to="/">Return home.</Link>
      </Container>
    
  )
}

export default NotFoundPage
