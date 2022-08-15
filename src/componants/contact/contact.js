import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import "./contact.css";
import Screenshot_118 from "./Screenshot_118.png";
export default class Contact extends React.Component {
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
          <div className="wrap-contact100">
            <form className="contact100-form validate-form">
              <span className="contact100-form-title">Send Us A Message</span>
              <label className="label-input100" htmlFor="first-name">
                Tell us your name *
              </label>
              <div
                className="wrap-input100 rs1-wrap-input100 validate-input"
                data-validate="Type first name"
              >
                <input
                  id="first-name"
                  className="input100"
                  type="text"
                  name="first-name"
                  placeholder="First name"
                />
                <span className="focus-input100"></span>
              </div>
              <div
                className="wrap-input100 rs2-wrap-input100 validate-input"
                data-validate="Type last name"
              >
                <input
                  className="input100"
                  type="text"
                  name="last-name"
                  placeholder="Last name"
                />
                <span className="focus-input100"></span>
              </div>
              <label className="label-input100" htmlFor="email">
                Enter your email *
              </label>
              <div
                className="wrap-input100 validate-input"
                data-validate="Valid email is required: ex@abc.xyz"
              >
                <input
                  id="email"
                  className="input100"
                  type="text"
                  name="email"
                  placeholder="Eg. example@email.com"
                />
                <span className="focus-input100"></span>
              </div>
              <label className="label-input100" htmlFor="phone">
                Enter phone number
              </label>
              <div className="wrap-input100">
                <input
                  id="phone"
                  className="input100"
                  type="text"
                  name="phone"
                  placeholder="Eg. +1 800 000000"
                />
                <span className="focus-input100"></span>
              </div>
              <label className="label-input100" htmlFor="message">
                Message *
              </label>
              <div
                className="wrap-input100 validate-input"
                data-validate="Message is required"
              >
                <textarea
                  id="message"
                  className="input100"
                  name="message"
                  placeholder="Write us a message"
                ></textarea>
                <span className="focus-input100"></span>
              </div>
              <div className="container-contact100-form-btn">
                <button className="contact100-form-btn">Send Message</button>
              </div>
            </form>
            <div
              className="contact100-more flex-col-c-m"
              style={{
                backgroundImage: `url(${Screenshot_118})`,
              }}
            >
              <div className="d-flex flex-column align-items-center contact-text-box">
                <div className="flex-w size1 p-b-47">
                  <div className="txt1 p-r-25">
                    <span className="lnr lnr-map-marker"></span>
                  </div>
                  <div className="flex-col">
                    <span className="txt1 p-b-20">Address</span>
                    <span className="txt2">
                      Mada Center 8th floor, 379 Hudson St, New York, NY 10018
                      US
                    </span>
                  </div>
                </div>
                <div className="dis-flex size1 p-b-47">
                  <div className="txt1 p-r-25">
                    <span className="lnr lnr-phone-handset"></span>
                  </div>
                  <div className="flex-col">
                    <span className="txt1 p-b-20">Lets Talk</span>
                    <span className="txt3">+1 800 1236879</span>
                  </div>
                </div>
                <div className="dis-flex size1 p-b-47">
                  <div className="txt1 p-r-25">
                    <span className="lnr lnr-envelope"></span>
                  </div>
                  <div className="flex-col">
                    <span className="txt1 p-b-20">General Support</span>
                    <span className="txt3">contact@example.com</span>
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
