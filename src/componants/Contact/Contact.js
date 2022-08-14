  import "./Contact.css";
  import React from "react";
  import Button from 'react-bootstrap/Button';
  import Form from 'react-bootstrap/Form';
  import FloatingLabel from 'react-bootstrap/FloatingLabel';
  import "bootstrap/dist/css/bootstrap.min.css";
  import {Container, Row, Col} from "react-bootstrap";

  export default class Contact extends React.Component {
          render(){
              return(
                  <>
      <Container>
      <Row className="mb-5 mt-3"> 
      <Col lg='8'>
        <h1 className="display-4 mb-4 ">Contact Us</h1>
      </Col>
      </Row>
      <Row className="sec-sp">
      <Col lg ='5' className="mb-5" >
      <p className="py-4 fs-1">Get in touch</p>
      <address>
      <strong className="fs-5">Email : </strong>
      <p className=" fs-5">newsbox001@gmail.com</p>
      <strong className="py-4 fs-5 ">Phone :</strong>
      <p className="fs-5">+ 962 795 6783 04</p>
      </address>
      <p className="fs-5">We're always happy to hear from our guests!<br/>
        If you have any questions, comments or topics<br/>
        that you'd like to share with us. Please fill out the form.<br/>
        We'll be sure to get back to you as quickly and <br/>
        courteously as we can.
      </p>

      </Col>
      <Col lg ='10' className="d-flex align-items-end">
        <Form className="contact__form w-100">
          <Row>
            <Col lg='6' className="form-group">
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
              <Form.Control type="Phone"  placeholder="00962*****" />
            </FloatingLabel>
              
            <FloatingLabel
              controlId="floatingInput"
              label="Your massage"
              className="mb-3"
            >
                  
              <Form.Control as="textarea" rows={5} type="text" placeholder="Hello..."style={{ height: '150px' }}/>
              <Form.Text className="text-muted">
                We'll never share your information with anyone else.
              </Form.Text>
            </FloatingLabel>

            <Button variant="primary" type="submit" size="lg">
              Send   
            </Button>
            </Col>
          </Row>    
            
          </Form>
      </Col>
      </Row>
      </Container>
                  </>
              )
          }
      }

    
