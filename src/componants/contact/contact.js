import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import "./contact.css";
import Screenshot_118 from "./Screenshot_118.png";
export default class Contact extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <>
        <div className="contact-heading">
          <h1 className="text-center text-uppercase mt-5">
            Let's get in touch
          </h1>
        </div>
        <p className="text-center fs-5 mb-5">
          We're open for any suggestion or just to have a chat.
        </p>
        <Container className="contact-container d-flex justify-content-center align-items-center mb-5">
          <div className="wrap-contact">
            <form
              className="contact-form validate-form"
              onSubmit={this.handleSubmit}
            >
              <span className="contact-form-title">Send us a message</span>
              <div
                className="wrap-input rs1-wrap-input validate-input input-box"
                data-validate="Type first name"
              >
                <input
                  id="first-name"
                  className="contact-input"
                  type="text"
                  name="first-name"
                  placeholder="First name"
                />
                <span className="focus-input"></span>
              </div>
              <div
                className="wrap-input rs2-wrap-input validate-input input-box"
                data-validate="Type last name"
              >
                <input
                  className="contact-input"
                  type="text"
                  name="last-name"
                  placeholder="Last name"
                />
                <span className="focus-input"></span>
              </div>
              <div
                className="wrap-input validate-input input-box"
                data-validate="Valid email is required: ex@abc.xyz"
              >
                <input
                  id="email"
                  className="contact-input"
                  type="text"
                  name="email"
                  placeholder="Eg. example@email.com"
                />
                <span className="focus-input"></span>
              </div>
              <div className="wrap-input input-box">
                <input
                  id="phone"
                  className="contact-input"
                  type="text"
                  name="phone"
                  placeholder="Eg. +1 800 000000"
                />
                <span className="focus-input"></span>
              </div>
              <div
                className="wrap-input validate-input input-box"
                data-validate="Message is required"
              >
                <textarea
                  id="message"
                  className="contact-input border-0"
                  name="message"
                  placeholder="Write us a message"
                ></textarea>
                <span className="focus-input"></span>
              </div>
              <div className="container-contact-form-btn">
                <button className="contact-form-btn">Send Message</button>
              </div>
            </form>
            <div
              className="contact-more flex-col-c-m"
              style={{
                backgroundImage: `url(${Screenshot_118})`,
              }}
            >
              <div className="d-flex flex-column align-items-center contact-text-box">
                <div className="flex-w size1">
                  <div className="fs-4 text-white pe-2">
                    <span className="lnr lnr-map-marker"></span>
                  </div>
                  <div className="flex-col">
                    <span className="fs-4 text-white pe-2">Address</span>
                    <span className="contact-text1">
                      Mada Center 8th floor, 379 Hudson St, New York, NY 10018
                      US
                    </span>
                  </div>
                </div>
                <div className="dis-flex size1">
                  <div className="fs-4 text-white pe-2">
                    <span className="lnr lnr-phone-handset"></span>
                  </div>
                  <div className="flex-col">
                    <span className="fs-4 text-white pe-2">Lets Talk</span>
                    <span className="contact-text2">+1 800 1236879</span>
                  </div>
                </div>
                <div className="dis-flex size1">
                  <div className="fs-4 text-white pe-2">
                    <span className="lnr lnr-envelope"></span>
                  </div>
                  <div className="flex-col">
                    <span className="fs-4 text-white pe-2">
                      General Support
                    </span>
                    <span className="contact-text2">contact@example.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </>
    );
  }
}
