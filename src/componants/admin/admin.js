import React from "react";
import "./admin.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import axios from "axios";
import DataNews from "./DataNews";
import AddNews from "./AddNews";


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      news: [],
      showEnptyNews: false,

    }

  }
  handleShow = () => {
    this.setState({ show: true });

  }
  handleClose = () => {
    this.setState({ show: false });
  }

  // get data from database form CRUD method
  getNews = async () => {
    const allnews = await axios.get('https://news-box-project.herokuapp.com/news');
    if (allnews.data.length === 0) {
      this.setState({
        showEnptyNews: true
      })
    } else {
      this.setState({
        news: allnews.data
      })
      console.log(allnews.data);
    }
  }
  // to give data when open page 
  componentDidMount() {
    this.getNews();
  }
  // delete news 
  handleDelete = async (id) => {

    await axios.delete(`https://news-box-project.herokuapp.com/news/${id}`)
    this.getNews();
  }
  // 



  render() {
    return (
      <>
        <div class="container ">
          <div className="crud shadow-lg p-3 mb-5 mt-5 bg-body rounded">
            <div class="row ">

              <div
                class="col-sm-8 offset-sm-2 mt-5 mb-4 text-gred"
                style={{ color: "black" }}
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
                      <th>Index</th>
                      <th>Title </th>
                      <th>Author</th>
                      <th>Date</th>

                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      this.state.news.map((ele, index) => {
                        return (
                          <>
                            <DataNews data={ele}
                              index={index}
                              getNews={this.getNews}
                              handleDelete={this.handleDelete}
                            />
                          </>
                        )
                      })
                    }
                  </tbody>
                </table>


              </div>
              <div class="col-sm-15 offset-sm-5  mt-5 mb-4 text-gred">
                <Button variant="primary" onClick={this.handleShow}>
                  Add  New Post
                </Button>
              </div>
            </div>

          </div>
        </div>
        <AddNews
          show={this.state.show}
          handleClose={this.handleClose}
          getNews={this.getNews}
        />
      </>
    );
  }
}

export default Home;
