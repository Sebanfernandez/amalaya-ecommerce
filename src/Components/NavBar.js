import React from 'react';
import { Navbar, NavbarBrand, NavbarToggler,Collapse, Nav,  NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
    return (
<div>
  <Navbar
    color="dark"
    dark
    expand="md"
    light
  >
    <NavbarBrand href="/">
      AMALAYA
    </NavbarBrand>
    <NavbarToggler onClick={function noRefCheck(){}} />
    <Collapse navbar>
      <Nav
        className="me-auto"
        navbar
      >
        <NavItem>
          <NavLink href="/components/">
            Amalaya
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="https://www.instagram.com/amalayatiendagourmet/">
            Instagram
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="https://www.instagram.com/amalayatiendagourmet/">
            Facebook
          </NavLink>
        </NavItem>

        <UncontrolledDropdown
          inNavbar
          nav
        >
          <DropdownToggle
            caret
            nav
          >
            Productos
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem>
              Aceite de Oliva
            </DropdownItem>
            <DropdownItem>
              Garrapiñadas
            </DropdownItem>
            <DropdownItem />
          </DropdownMenu>
        </UncontrolledDropdown>
      </Nav>
      <NavbarText>
      <div>
  <Button
    color="danger"
  >
    Comprar
  </Button>
</div>
      </NavbarText>
    </Collapse>
  </Navbar>
</div>        )
}

export default NavBar
