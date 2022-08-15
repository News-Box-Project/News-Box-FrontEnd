import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import "./contact.css";
export default class Contact extends React.Component {
  render() {
    return (
      <Container>
        <div class="heading-box">
          <h1 className="display-4 mb-4 mx-auto contact-heading">Contact Us</h1>
        </div>
        <Row className="contact-row">
          <Col lg="5" className="mb-5">
            <p className="py-4 fs-1">Get in touch</p>
            <address>
              <strong className="fs-5">Email : </strong>
              <p className=" fs-5">newsbox001@gmail.com</p>
              <strong className="py-4 fs-5 ">Phone :</strong>
              <p className="fs-5">+ 962 795 6783 04</p>
            </address>
            <p className="fs-5">
              We're always happy to hear from our guests!
              <br />
              If you have any questions, comments or topics
              <br />
              that you'd like to share with us. Please fill out the form.
              <br />
              We'll be sure to get back to you as quickly and <br />
              courteously as we can.
            </p>
          </Col>
          <Col lg="5" className="d-flex align-items-center gap-5">
            <Form className="contact-form w-100">
              <FloatingLabel
                controlId="floatingInput"
                label="Email address"
                className="mb-3"
              >
                <Form.Control type="email" placeholder="name@example.com" />
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingInput"
                label="Phone Number"
                className="mb-3"
              >
                <Form.Control type="Phone" placeholder="00962*****" />
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingInput"
                label="Your massage"
                className="mb-3"
              >
                <Form.Control
                  as="textarea"
                  rows={5}
                  type="text"
                  placeholder="Hello..."
                  style={{ height: "150px" }}
                />
                <Form.Text className="text-muted">
                  We'll never share your information with anyone else.
                </Form.Text>
              </FloatingLabel>

              <Button variant="primary" type="submit" size="lg">
                Send
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}
