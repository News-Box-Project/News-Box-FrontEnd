import "./Contact.css";
import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

export default class Contact extends React.Component {
    render(){
        return(
             <>
             <Form>
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

      <Button variant="primary" type="submit">
        Send   
      </Button>
    </Form>
             </>
        )
    }
}