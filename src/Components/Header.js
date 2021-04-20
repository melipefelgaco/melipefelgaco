import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button';





const Header = () => {
    return (
<div className="navbar-container">
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Brand href="#home">Felipe Melgaço Magesty Silveira</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
    </Nav>
    </Navbar.Collapse>
    <Button variant="light">Light mode</Button><Button variant="dark">Dark mode</Button>
</Navbar>
</div>
    )
}

export default Header
