import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Button } from "react-bootstrap";
import AddNews from "./addNews";
import "./admin.css";
import DataNews from "./dataNews";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      news: [],
      showEnptyNews: false,
    };
  }
  handleShow = () => {
    this.setState({ show: true });
  };
  handleClose = () => {
    this.setState({ show: false });
  };

  // get data from database form CRUD method
  getNews = async () => {
    const allnews = await axios.get(
      "https://news-box-project.herokuapp.com/news"
    );
    if (allnews.data.length === 0) {
      this.setState({
        showEnptyNews: true,
      });
    } else {
      this.setState({
        news: allnews.data,
      });
    }
  };
  // to give data when open page
  componentDidMount() {
    this.getNews();
  }
  // delete news
  handleDelete = async (id) => {
    await axios.delete(`https://news-box-project.herokuapp.com/news/${id}`);
    this.getNews();
  };

  render() {
    return (
      <div className="mainAdmin">
        <div className="container ">
          <div className="crud shadow-lg p-3 mb-5 mt-5 bg-body rounded">
            <div className="mt-5 mb-4 text-dark">
              <h2>
                <b>News Database</b>
              </h2>
            </div>
            <div className="table-responsive ">
              <table className="table table-striped table-hover table-bordered">
                <thead>
                  <tr>
                    <th>Index</th>
                    <th>Title </th>
                    <th>Author</th>
                    <th>Date</th>

                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.news.map((ele, index) => {
                    return (
                      <DataNews
                        key={index}
                        data={ele}
                        index={index}
                        getNews={this.getNews}
                        handleDelete={this.handleDelete}
                      />
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="offset-sm-10  mt-5 mb-4 text-gred">
              <Button
                className="admin-btn"
                variant="primary"
                onClick={this.handleShow}
              >
                Add New Post
              </Button>
            </div>
          </div>
        </div>
        <AddNews
          show={this.state.show}
          handleClose={this.handleClose}
          getNews={this.getNews}
        />
      </div>
    );
  }
}

export default Home;
