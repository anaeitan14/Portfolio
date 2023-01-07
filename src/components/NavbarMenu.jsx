import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

export default function NavbarMenu() {
  return (
    <Navbar
      bg="dark"
      collapseOnSelect
      expand="lg"
      className="p-3"
      variant="dark"
      activeKey="/home"
    >
      <Container>
        <Navbar.Brand>Eitan Lichtensztein</Navbar.Brand>
        <Nav className="mr-auto">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav.Link>
              <Link to="/home" className="text-decoration-none text-white">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/Projects" className="text-decoration-none text-white">
                Projects
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/Contact" className="text-decoration-none text-white">
                Contact Me
              </Link>
            </Nav.Link>
          </Navbar.Collapse>
        </Nav>
      </Container>
    </Navbar>
  );
}
