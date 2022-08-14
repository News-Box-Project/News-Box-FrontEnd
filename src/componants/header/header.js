import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./header.css";
import logo from "./logo/logo.png";
export default class Header extends React.Component {
  render() {
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
                  href="/contact"
                >
                  Contact Us
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}
