import react, { Component } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./secondaryNav.css";

export default class SecondaryNav extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" expand="lg">
          <Container>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav>
                <Nav.Link className="secondary-nav-link">News Box</Nav.Link>
                <Nav.Link className="secondary-nav-link">Sport</Nav.Link>
                <Nav.Link className="secondary-nav-link">Health</Nav.Link>
                <Nav.Link className="secondary-nav-link">General</Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <div className="search d-flex gap-2">
              <input
                type="text"
                placeholder="Search"
                className="search-input"
              />
              <button className="btn btn-light">Search</button>
            </div>
          </Container>
        </Navbar>
      </div>
    );
  }
}
