import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./secondaryNav.css";

export default class SecondaryNav extends React.Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" expand="lg">
          <Container>
            <Navbar.Collapse
              id="basic-navbar-nav"
              className="d-flex justify-content-between"
            >
              <Nav>
                <Nav.Link
                  onClick={this.props.handleNewsBox}
                  className="secondary-nav-link"
                >
                  News Box
                </Nav.Link>
                <Nav.Link
                  onClick={this.props.handleSport}
                  className="secondary-nav-link"
                >
                  Sport
                </Nav.Link>
                <Nav.Link
                  onClick={this.props.handleTechnology}
                  className="secondary-nav-link"
                >
                  Technology
                </Nav.Link>
                <Nav.Link
                  onClick={this.props.handleEntertainment}
                  className="secondary-nav-link"
                >
                  Entertainment
                </Nav.Link>
                <Nav.Link
                  onClick={this.props.handleBusiness}
                  className="secondary-nav-link"
                >
                  Business
                </Nav.Link>
                <Nav.Link
                  onClick={this.props.handleHealth}
                  className="secondary-nav-link"
                >
                  Health
                </Nav.Link>
                <Nav.Link
                  onClick={this.props.handleScience}
                  className="secondary-nav-link"
                >
                  Science
                </Nav.Link>
              </Nav>
              <div className="search d-flex gap-2">
                <form
                  className="d-flex gap-3"
                  onSubmit={this.props.handleSearch}
                >
                  <input
                    type="text"
                    placeholder="Search"
                    className="search-input pe-5 ps-3"
                    id="inputValue"
                  />
                  <button type="submit" className="btn btn-light search-btn">
                    Search
                  </button>
                </form>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}
