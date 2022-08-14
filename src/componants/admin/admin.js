import React from "react";
import "./admin.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import { useState } from "react";
import { Button, Modal, Input } from "react-bootstrap";



class Home extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    }
      
  } 

  handleShow = () => {
    this.setState({ show: true });

  }
  handleClose = () => {
    this.setState({ show: false });
  }
  render() {
   

  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);


  // const handleShow = () => setShow(true);
  return (
      
    <div class="container ">
      <div className="crud shadow-lg p-3 mb-5 mt-5 bg-body rounded">
        <div class="row ">
         
          <div
            class="col-sm-8 offset-sm-2 mt-5 mb-4 text-gred"
            style={{ color: "green" }}
          >
            <h2>
              <b>Admin page</b>
            </h2>
          </div>
          
        </div>
        <div class="row">
          <div class="table-responsive ">
            <table class="table table-striped table-hover table-bordered">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Title </th>
                  <th>Author</th>
                  <th>Date</th>
                 
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Rual Octo</td>
                  <td>Deban Steet</td>
                  
                  <td>Deban Steet</td>
                  
                  <td>
                    
                    <a href="#" class="edit" title="Edit" data-toggle="tooltip" onClick={this.handleShow}>
                      <i class="material-icons">&#xE254;</i>
                    </a>
                    <a
                      href="#"
                      class="delete"
                      title="Delete"
                      data-toggle="tooltip"
                      style={{ color: "red" }}
                    >
                      <i class="material-icons">&#xE872;</i>
                    </a>
                  </td>
                </tr>
                
              </tbody>
            </table>
           {console.log(this.state.show)}

          </div>
          <div class="col-sm-16 offset-sm-5  mt-5 mb-4 text-gred">
            <Button variant="primary" onClick={this.handleShow}>
              Add  New Post
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
}}

export default Home;
