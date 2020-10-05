import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
    return(
        <Navbar bg="dark" variant="dark">
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand>Awesome App</Navbar.Brand>
                </LinkContainer>

                <Nav className="mr-auto">
                    <LinkContainer to="/contact">
                        <Nav.Link>Contact</Nav.Link>
                    </LinkContainer>
                </Nav>

            </Container>
        </Navbar>
    )
}

export default Header;
