import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BsSearch } from "react-icons/bs";
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
              <div>
                <form onSubmit={this.props.handleSearch}>
                  <div className="wrap">
                    <div className="search">
                      <input
                        type="text"
                        className="searchTerm"
                        placeholder="What are you looking for?"
                        id="inputValue"
                      />
                      <button type="submit" className="searchButton">
                        <i className="fa fa-search"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

{
  /* <input
  type="text"
  placeholder="Search"
  className="search-input pe-5 ps-1 py-1"
  id="inputValue"
/>
<BsSearch className="text-white my-auto fs-4" /> */
}
