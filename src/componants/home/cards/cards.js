import { Card, Col, Container, Row } from "react-bootstrap";
import { HiArrowNarrowRight } from "react-icons/hi";
import noImageLarge from "../assets/noImageLarge.png";
import noImageSmall from "../assets/noImageSmall.png";
import React from 'react'
import { useParams } from 'react-router-dom'
import "./cards.css";
 function CardsComponant(props){
  const {id}=useParams();
  

    return (
      <Container>
        <div className="cards-container mb-5">
          <Row xs={1} className="g-4">
            {props.news !== [] &&
              props.news.map((news, idx) => {
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
                            <div className="d-flex justify-content-around card-subheading-box">
                              <span className="text-capitalize fw-bold card-subheading-1">
                                {news.category}
                              </span>
                              <p className="mb-2 fw-bold text-capitalize card-subheading-2">
                                {news.author}
                              </p>
                              <span className="fw-bold card-subheading-1">
                                {news.published_at.slice(0, 10)}
                              </span>
                            </div>
                            <h3 className="fw-bold">{news.title}</h3>
                            <p className="fs-5">
                              {news.description.slice(0, 200)} ...
                              {!news.url &&
                              <a
                                className="text-decoration-none p-2 news-link"
                               
                                href={`more/${news._id}`}
                                                              >
                                More <HiArrowNarrowRight />
                              </a>
                              
                              }  

                               {news.url &&
                              <a
                                className="text-decoration-none p-2 news-link"
                               
                                href={news.url}
                                                              >
                                More <HiArrowNarrowRight />
                              </a>
                              
                              }   

                            </p>

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
                            <div className="d-flex justify-content-around card-subheading-box">
                              <span className="text-capitalize fw-bold card-subheading-1">
                                {news.category}
                              </span>
                              <p className="mb-2 fw-bold text-capitalize card-subheading-2">
                                {news.author}
                              </p>
                              <span className="fw-bold card-subheading-1">
                                {news.published_at.slice(0, 10)}
                              </span>
                            </div>
                            <h3 className="fw-bold">{news.title}</h3>
                            <p className="fs-5">
                              {news.description.slice(0, 80)} ...
                              {!news.url &&
                              <a
                                className="text-decoration-none p-2 news-link"
                               
                                href={`more/${news._id}`}
                                                              >
                                More <HiArrowNarrowRight />
                              </a>
                              
                              }   
                                {news.url &&
                              <a
                                className="text-decoration-none p-2 news-link"
                               
                                href={news.url}
                                                              >
                                More <HiArrowNarrowRight />
                              </a>
                              
                              }   
                            </p>
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

export default CardsComponant;
