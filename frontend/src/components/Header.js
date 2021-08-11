import React from 'react'
import {Navbar, Container} from 'react-bootstrap'

const navbarStyle = {
    backgroundColor: 'lightblue',
}

const Header = (props) => {
    return (
        <Navbar variant="light" style={navbarStyle}>
            <Container>
                <Navbar.Brand href="/">{props.title}</Navbar.Brand>
            </Container>
            
                
        </Navbar>
    )
};

export default Header;