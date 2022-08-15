import React from "react";
import UpdateNews from "./UpdateNews";
export default class DataNews extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showUpdate: false,
        }
    }
    handleUpdate = () => {
        this.setState({ showUpdate: true });
    }

    handleCloseUpdate = () => {
        this.setState({ showUpdate: false });
    }
    render() {
        return (
            <>

                <tr>
                    <td>{this.props.index + 1}</td>
                    <td>{this.props.data.title}</td>
                    <td>{this.props.data.author}</td>

                    <td>{this.props.data.published_at}</td>

                    <td>

                        <a href="#" class="edit" title="Edit" data-toggle="tooltip" onClick={() => this.handleUpdate()} >

                            <i class="material-icons">&#xE254;</i>
                        </a>
                        <a
                            href="#"
                            class="delete"
                            title="Delete"
                            data-toggle="tooltip"
                            style={{ color: "red" }}
                            onClick={() => this.props.handleDelete(this.props.data._id)}
                        >
                            <i class="material-icons">&#xE872;</i>
                        </a>
                    </td>
                </tr>
                <UpdateNews
                    showUpdate={this.state.showUpdate}
                    handleCloseUpdate={this.handleCloseUpdate}
                    getNews={this.props.getNews}
                    id={this.props.data._id}
                />
            </>

        )
    }
};