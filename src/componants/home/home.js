import axios from "axios";
import React, { Component } from "react";
import CardsComponant from "./cards/cards";
import CarouselComponant from "./carousel/carousel";
import SecondaryNav from "./secondaryNavbar/secondaryNav";
import Footer from "../footer/footer";
export default class Home extends Component {
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
    const filteredNews = result.data.filter((item) => {
      return item.image !== null;
    });

    this.setState({
      news: filteredNews,
    });
  };

  handleSearch = async (e) => {
    e.preventDefault();
    const keyword = e.target.inputValue.value;
    const url = `https://news-box-project.herokuapp.com/apinews?keywords=${keyword}`;
    const newsData = await axios.get(url);
    const filteredNews = newsData.data.filter((item) => {
      return item.image !== null;
    });
    this.setState({
      news: filteredNews,
    });
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
        <SecondaryNav
          handleSearch={this.handleSearch}
          handleNewsBox={this.handleNewsBox}
          handleSport={this.handleSport}
          handleHealth={this.handleHealth}
          handleBusiness={this.handleBusiness}
          handleEntertainment={this.handleEntertainment}
          handleScience={this.handleScience}
          handleTechnology={this.handleTechnology}
        />
        <CarouselComponant news={this.state.news} />
        <CardsComponant news={this.state.news} />
      </div>
    );
  }
}
