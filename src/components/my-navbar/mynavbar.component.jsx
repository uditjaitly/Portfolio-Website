import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Logo from '../../assets/icons/logow.webp'
import "./mynavbar.style.css"
const MyNavbar = () => {
    return (
        <>
            <Navbar fixed='top' collapseOnSelect expand="md"  variant="dark" className="animate-navbar nav-theme justify-content-between">
        <Navbar.Brand href="#home">
        <img href="#home" className="logo" src={Logo} alt='mylogo'></img>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#experience">Experience</Nav.Link>
            <Nav.Link href="#project">Project</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link href="#resume">Resume</Nav.Link>


            
            </Nav>
            
        </Navbar.Collapse>
        </Navbar>
        </>
    )
}

export default MyNavbar