import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./carousel.css";

export default class CarouselComponant extends Component {
  render() {
    return (
      <div className="mb-5">
        <Carousel>
          {this.props.news !== [] &&
            this.props.news.map((news, idx) => {
              if (idx < 4) {
                return (
                  <Carousel.Item key={idx}>
                    <img
                      className="d-block mx-auto carousel-img w-100"
                      src={news.image}
                      alt="First slide"
                    />
                    <Carousel.Caption className="carousel-text-box">
                      <h3>{news.title}</h3>
                      <div className="d-flex justify-content-around">
                        <span>{news.category}</span>
                        <span>{news.published_at.slice(0, 10)}</span>
                      </div>
                      <p>{news.author}</p>
                      <p>{news.description}</p>
                      <a
                        className="text-decoration-none text-white"
                        href={news.url}
                      >
                        Read More <FontAwesomeIcon icon="arrow-right" />
                      </a>
                    </Carousel.Caption>
                  </Carousel.Item>
                );
              }
            })}
        </Carousel>
      </div>
    );
  }
}
