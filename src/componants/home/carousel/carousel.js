import React from "react";
import Carousel from "react-bootstrap/Carousel";
import noImageLarge from "../assets/noImageLarge.png";
import "./carousel.css";

export default class CarouselComponant extends React.Component {
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
                    {news.url && (
                      <a href={news.url} target="_blank" rel="noreferrer">
                        <Carousel.Caption className="carousel-text-box mb-4">
                          <h3>{news.title}</h3>
                          <div className="d-flex justify-content-around">
                            <span>{news.category}</span>
                            <p>{news.author}</p>
                            <span>{news.published_at.slice(0, 10)}</span>
                          </div>
                          <p className="mb-4 px-5">{news.description}</p>
                        </Carousel.Caption>
                      </a>
                    )}
                    {!news.url && (
                      <a
                        href={`more/${news._id}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Carousel.Caption className="carousel-text-box mb-4">
                          <h3>{news.title}</h3>
                          <div className="d-flex justify-content-around">
                            <span>{news.category}</span>
                            <p>{news.author}</p>
                            <span>{news.published_at.slice(0, 10)}</span>
                          </div>
                          <p className="mb-4 px-5">{news.description}</p>
                        </Carousel.Caption>
                      </a>
                    )}
                  </Carousel.Item>
                );
              }
            })}
        </Carousel>
      </div>
    );
  }
}
