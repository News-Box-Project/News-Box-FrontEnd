import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./header.css";
import logo from "./logo/logo.png";
import LogoutButton from "../admin/logout";
import { useAuth0 } from '@auth0/auth0-react';

function Header() {
  const {
    isAuthenticated
  } = useAuth0();


  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand
            className="d-flex gap-3 align-items-center fs-2 text-uppercase"
            href="/"
          >
            <img className="logo-img" src={logo} alt="logo" />
            News Box
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="ml-auto justify-content-end"
          >
            <Nav>
              <Nav.Link className="fs-5 text-uppercase px-3 fw-bold" href="/">
                Home
              </Nav.Link>
              <Nav.Link
                className="fs-5 text-uppercase px-3 fw-bold"
                href="/about"
              >
                About
              </Nav.Link>
              <Nav.Link
                className="fs-5 text-uppercase px-3 fw-bold"
                href="/contact-us"
              >
                Contact Us
              </Nav.Link>
              {isAuthenticated &&
                <Nav.Link
                  className="fs-5 text-uppercase px-3 fw-bold"
                  href="/admin"
                >
                  Admin
                </Nav.Link>
              }
              {isAuthenticated &&
                <Nav.Link
                  className="fs-5 text-uppercase px-3 fw-bold"
                  href="/"
                >
                  <LogoutButton />
                </Nav.Link>
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
export default Header;