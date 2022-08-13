import axios from "axios";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CardsComponant from "../cards/cards";
import CarouselComponant from "../carousel/carousel";
import "./secondaryNav.css";

export default class SecondaryNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
    };
  }

  async componentDidMount() {
    const result = await axios.get(
      "https://news-box-project.herokuapp.com/news"
    );
    
    this.setState({
      news: result.data,
    });
  }

  handleChange = async (category) => {
    const result = await axios.get(
      `https://news-box-project.herokuapp.com/category?categories=${category}`
    );
   
    this.setState({
      news: result.data,
    });
  };

  handleSearch = async(e) => {
    e.preventDefault();
    const keyword=e.target.inputValue.value;
    const url=`https://news-box-project.herokuapp.com/apinews?keywords=${keyword}`;
    const newsData= await axios.get(url);
    this.setState({
      news:newsData.data
    })
  };

  handleNewsBox = () => {
    this.componentDidMount();
  };

  handleSport = () => {
    this.handleChange("sports");
  };

  handleHealth = () => {
    this.handleChange("health");
  };

  handleBusiness = () => {
    this.handleChange("business");
  };

  handleEntertainment = () => {
    this.handleChange("entertainment");
  };

  handleScience = () => {
    this.handleChange("science");
  };

  handleTechnology = () => {
    this.handleChange("technology");
  };

  render() {
    return (
      <div>
        <Navbar bg="dark" expand="lg">
          <Container>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav>
                <Nav.Link
                  onClick={this.handleNewsBox}
                  className="secondary-nav-link"
                >
                  News Box
                </Nav.Link>
                <Nav.Link
                  onClick={this.handleSport}
                  className="secondary-nav-link"
                >
                  Sport
                </Nav.Link>
                <Nav.Link
                  onClick={this.handleTechnology}
                  className="secondary-nav-link"
                >
                  Technology
                </Nav.Link>
                <Nav.Link
                  onClick={this.handleEntertainment}
                  className="secondary-nav-link"
                >
                  Entertainment
                </Nav.Link>
                <Nav.Link
                  onClick={this.handleBusiness}
                  className="secondary-nav-link"
                >
                  Business
                </Nav.Link>
                <Nav.Link
                  onClick={this.handleHealth}
                  className="secondary-nav-link"
                >
                  Health
                </Nav.Link>
                <Nav.Link
                  onClick={this.handleScience}
                  className="secondary-nav-link"
                >
                  Science
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <div className="search d-flex gap-2">
              <form className="d-flex gap-3" onSubmit={this.handleSearch}>
                <input
                  type="text"
                  placeholder="Search"
                  className="search-input"
                  id="inputValue"
                />
                <button type="submit" className="btn btn-light">
                  Search
                </button>
              </form>
            </div>
          </Container>
        </Navbar>
        <CarouselComponant news={this.state.news} />
        <CardsComponant news={this.state.news} />
      </div>
    );
  }
}
