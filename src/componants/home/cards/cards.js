import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { HiArrowNarrowRight } from "react-icons/hi";
import noImageLarge from "../assets/noImageLarge.png";
import noImageSmall from "../assets/noImageSmall.png";
import "./cards.css";

export default class CardsComponant extends React.Component {
  render() {
    return (
      <Container>
        <div className="cards-container mb-5">
          <Row xs={1} className="g-4">
            {this.props.news !== [] &&
              this.props.news.map((news, idx) => {
                if (idx >= 4 && idx < 18) {
                  if (
                    idx === 4 ||
                    idx === 7 ||
                    idx === 8 ||
                    idx === 11 ||
                    idx === 12 ||
                    idx === 15 ||
                    idx === 16
                  ) {
                    return (
                      <Col key={idx} className="col-md-8">
                        <Card className="cards h-100 card-css">
                          <Card.Img
                            variant="top"
                            src={news.image ? news.image : noImageLarge}
                            className="card-img-1"
                          />
                          <Card.Body>
                            <h3>{news.title}</h3>
                            <div className="d-flex justify-content-around">
                              <span>{news.category}</span>
                              <span>{news.published_at.slice(0, 10)}</span>
                            </div>
                            <p>{news.author}</p>
                            <p>{news.description}</p>
                            <a
                              className="text-decoration-none bg-dark text-white p-2"
                              href={news.url}
                            >
                              Read More <HiArrowNarrowRight />
                            </a>
                          </Card.Body>
                        </Card>
                      </Col>
                    );
                  } else {
                    return (
                      <Col key={idx} className="col-md-4">
                        <Card className="cards h-100 card-css">
                          <Card.Img
                            variant="top"
                            src={news.image ? news.image : noImageSmall}
                            className="card-img-2"
                          />
                          <Card.Body>
                            <h3>{news.title}</h3>
                            <div className="d-flex justify-content-around">
                              <span>{news.category}</span>
                              <span>{news.published_at.slice(0, 10)}</span>
                            </div>
                            <p>{news.author}</p>
                            <p>{news.description}</p>
                            <a
                              className="text-decoration-none bg-dark text-white p-2"
                              href={news.url}
                            >
                              Read More <HiArrowNarrowRight />
                            </a>
                          </Card.Body>
                        </Card>
                      </Col>
                    );
                  }
                }
              })}
          </Row>
        </div>
      </Container>
    );
  }
}
