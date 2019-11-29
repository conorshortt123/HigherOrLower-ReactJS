import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Link } from 'react-router-dom';

class UserCard extends React.Component {

    constructor(props) {
        super(props);
        this.DeleteUser = this.DeleteUser.bind(this);
    }

    DeleteUser(e) {
        console.log("Delete Clicked");
        axios.delete("http://localhost:4000/api/users/" + this.props.user._id)
            .then(respnse => {
                window.location.reload();
            })
            .catch();
    }

    render() {
        return (
            <div>
                <Card border="primary" style={{ width: '28rem' }}>
                    <Card.Header style={{color: "black"}}><b>Email:</b> {this.props.user.email}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <img src={this.props.user.avatar} alt="avatar"></img>
                            <footer style={{color: "black"}}>
                                <b>Username:</b> {this.props.user.username}<br/>
                                <b>Password:</b> {this.props.user.password}
                            </footer>
                        </blockquote>
                    </Card.Body>
                    <Button variant="danger" onClick={this.DeleteUser}><strong>Delete</strong></Button>
                    <Link to={"/edit/" + this.props.user._id} className="btn btn-primary"><strong>Edit</strong></Link>
                </Card>
                <br/>
            </div>
        )
        window.location.reload();
    }
}
export default UserCard;