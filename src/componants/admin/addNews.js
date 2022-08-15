import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from "axios";

export default class AddNews extends React.Component {

    getNews = () => {
        this.props.getNews();
    }

    handleCreatNews = async (e) => {
        e.preventDefault();
        const newsAdd = {
            author: e.target.author.value,
            title: e.target.titleNews.value,
            description: e.target.description.value,
            url: e.target.author.value,
            image: e.target.imgUrl.value,
            category: e.target.linkPage.value,
            published_at: e.target.date.value,
        }
        await axios.post(`https://news-box-project.herokuapp.com/news`, { newsAdd });
        this.getNews();
    }
    render() {
        return (
            <>
                <Modal show={this.props.show} onHide={() => this.props.handleClose()}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add New Post</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={this.handleCreatNews}>
                            <fieldset >
                                <Form.Group className="mb-3">
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
                                    <Form.Control id="date" pattern="\d{1,2}/\d{1,2}/\d{4}" placeholder="mm/dd/yyyy" />
                                </Form.Group>
                                <Button type="submit" >Submit</Button>
                            </fieldset>
                        </Form>
                    </Modal.Body>
                </Modal>
            </>
        )
    }
}