import React from 'react';
import { Navbar, Container, NavbarBrand, NavItem, NavLink, NavbarToggler, Nav, Collapse } from 'reactstrap'

const Header = () => {
  return (

    <div>

    
      <Container>
        <Navbar
            color="light"
            expand="md"
            light
        >
            <NavbarBrand href="/">
                RESORT
            </NavbarBrand>
            <NavbarToggler onClick={function noRefCheck(){}} />
            <Collapse navbar>
            <Nav
                className="me-auto"
                navbar
            >
                <NavItem>
                    <NavLink href="/components/">
                        Home
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="https://github.com/reactstrap/reactstrap">
                        Rooms
                    </NavLink>
                </NavItem>
            </Nav>
            </Collapse>
            </Navbar>
        </Container>
    </div>
  )
};

export default Header;
