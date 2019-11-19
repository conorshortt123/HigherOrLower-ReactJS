import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Link } from 'react-router-dom';


class UserCard extends React.Component {

    constructor() {
        super();
        this.DeleteUser = this.DeleteUser.bind(this);
    }

    DeleteUser(e) {
        console.log("Delete Clicked");
        axios.delete("http://localhost:4000/api/users/" + this.props.user._id)
            .then()
            .catch();
    }

    render() {
        return (
            <div>
                <Card border="primary" style={{ width: '28rem' }}>
                    <Card.Header>{this.props.user.email}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <img src={this.props.user.avatar} alt="avatar"></img>
                            <footer>
                                {this.props.user.username}
                            </footer>
                        </blockquote>
                    </Card.Body>
                    <Button variant="danger" onClick={this.DeleteUser}>Delete</Button>
                    <Link to={"/edit/" + this.props.user._id} className="btn btn-primary">Edit</Link>
                </Card>
            </div>
        )
    }
}
export default UserCard;