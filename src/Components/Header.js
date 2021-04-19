import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button';




const Header = () => {

    return (
    <div className="navbar">
        <Navbar fixed="top" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <div className="ld-mode">
            <Button variant="light">Light mode</Button> <Button variant="dark">Dark mode</Button>
        </div>
        </Navbar>
        
    </div>
    )
}

export default Header
