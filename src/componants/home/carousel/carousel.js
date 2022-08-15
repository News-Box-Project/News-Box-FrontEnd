import { HiArrowNarrowRight } from "react-icons/hi";
import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import noImageLarge from "../assets/noImageLarge.png";
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
                      src={news.image ? news.image : noImageLarge}
                      alt="First slide"
                    />
                    <Carousel.Caption className="carousel-text-box mb-4">
                      <h3>{news.title}</h3>
                      <div className="d-flex justify-content-around">
                        <span>{news.category}</span>
                        <span>{news.published_at.slice(0, 10)}</span>
                      </div>
                      <p>{news.author}</p>
                      <p className="mb-4">{news.description}</p>
                      <a
                        className="text-decoration-none bg-white text-dark p-2"
                        href={news.url}
                      >
                        Read More <HiArrowNarrowRight />
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
