import React from 'react'
import * as ReactBootStrap from "react-bootstrap";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
      <div className="App">
    <ReactBootStrap.Navbar collapseOnSelect expand="xl" bg="light"  >
  <ReactBootStrap.Navbar.Brand href="#home" style={{color:'black', marginLeft:30,fontWeight:'bold',display:'flex'}}>Core <div style={{color:'#F3105F'}}>Quiz</div></ReactBootStrap.Navbar.Brand>
  <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav" style={{justifyContent:'flex-end',padding:2}}>
    <ReactBootStrap.Nav className="mr-auto"> 
    
    <ReactBootStrap.Nav.Link href="#features">Pricing</ReactBootStrap.Nav.Link>
    
    
    <ReactBootStrap.Nav.Link href="#AboutUs">About US</ReactBootStrap.Nav.Link>
    <ReactBootStrap.Nav.Link href="#Blog">Blog</ReactBootStrap.Nav.Link>
    <ReactBootStrap.Nav.Link href="/login">Login</ReactBootStrap.Nav.Link>
    
     
    </ReactBootStrap.Nav>
    <ReactBootStrap.Nav>
    
    
    
    <ReactBootStrap.Nav.Link  className='button button5' eventKey={2} href="#"  style={{backgroundColor:'#F3105F',color:'#fff'}} component={Link}
          to="#">
        Start Free Now
      </ReactBootStrap.Nav.Link>
   
    </ReactBootStrap.Nav>
  </ReactBootStrap.Navbar.Collapse>
</ReactBootStrap.Navbar>
        </div>
    )
}

export default Header
