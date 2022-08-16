import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import axios from "axios";
import "./admin.css";
export default class UpdateNews extends React.Component {
  getNews = () => {
    this.props.getNews();
  };

  handleUdateNews = async (e) => {
    e.preventDefault();
    const updata = {
      author: e.target.author.value,
      title: e.target.titleNews.value,
      description: e.target.description.value,
      url: e.target.author.value,
      image: e.target.imgUrl.value,
      category: e.target.linkPage.value,
      published_at: e.target.date.value,
    };
    await axios.put(
      `https://news-box-project.herokuapp.com/news/${this.props.id}`,
      { updata }
    );
    this.getNews();
  };

  render() {
    return (
      <>
        <Modal
          show={this.props.showUpdate}
          onHide={() => this.props.handleCloseUpdate()}
        >
          <Modal.Header closeButton>
            <Modal.Title>Update Newst</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.handleUdateNews} className="inputtext">
              <fieldset>
                <Form.Group className="formText mb-3">
                  <Form.Label>Name author</Form.Label>
                  <Form.Control id="author" pattern="^[a-zA-Z ]*$" />
                  <Form.Label>Title News</Form.Label>
                  <Form.Control name="titleNews" pattern="^[a-zA-Z ]*$" />
                  <Form.Label>Description</Form.Label>
                  <Form.Control id="description" />
                  <Form.Label>Image</Form.Label>
                  <Form.Control id="imgUrl" />
                  <Form.Label>Link</Form.Label>
                  <Form.Control id="linkPage" />
                  <Form.Label>Date</Form.Label>
                  <Form.Control
                    id="date"
                    pattern="\d{1,2}/\d{1,2}/\d{4}"
                    placeholder="mm/dd/yyyy"
                  />
                </Form.Group>
                <Button className="admin-btn" type="submit">
                  Submit
                </Button>
              </fieldset>
            </Form>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}
