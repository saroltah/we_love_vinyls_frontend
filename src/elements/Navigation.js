import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div className="Navigation">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <NavLink to="/">We ❤️ Vinyls</NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <NavLink to="/markets">Markets</NavLink>
          </Nav>
          <Nav>
            <NavLink to="/profile"> Profile</NavLink>
            <NavLink to="/login">Log in</NavLink>
            <NavLink to="/signup">Sign up</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;
