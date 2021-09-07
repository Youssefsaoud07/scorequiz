import React from 'react'
import * as ReactBootStrap from "react-bootstrap";

const Header = () => {
    return (
      <div className="App">
    <ReactBootStrap.Navbar collapseOnSelect expand="xl" bg="light"  >
  <ReactBootStrap.Navbar.Brand href="#home" style={{color:'black', marginLeft:30,fontWeight:'bold'}}>ScoreQuiz</ReactBootStrap.Navbar.Brand>
  <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav" style={{justifyContent:'flex-end',padding:2}}>
    <ReactBootStrap.Nav className="mr-auto"> 
    
    <ReactBootStrap.Nav.Link href="#features">Pricing</ReactBootStrap.Nav.Link>
    
    
    <ReactBootStrap.Nav.Link href="#pricing">About US</ReactBootStrap.Nav.Link>
    <ReactBootStrap.Nav.Link href="#pricing">Blog</ReactBootStrap.Nav.Link>
    <ReactBootStrap.Nav.Link href="#pricing">Login</ReactBootStrap.Nav.Link>
    
     
    </ReactBootStrap.Nav>
    <ReactBootStrap.Nav>
    
    
    
    <ReactBootStrap.Nav.Link eventKey={2} href="#memes"  style={{backgroundColor:'gray',color:'#fff'}}>
        Start Free Now
      </ReactBootStrap.Nav.Link>
   
    </ReactBootStrap.Nav>
  </ReactBootStrap.Navbar.Collapse>
</ReactBootStrap.Navbar>
        </div>
    )
}

export default Header
