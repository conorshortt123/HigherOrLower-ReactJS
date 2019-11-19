import React from 'react'
import Users from './users';
import axios from 'axios';


class UserList extends React.Component {

    state = {
        users: []
    };

    componentDidMount() {
        axios.get('http://localhost:4000/api/users')
            .then((response) => {
                this.setState({ users: response.data.users })
                console.log(this.state.users);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        return (
            <div className="App">
                <h1 style={{ color: "red" }}>User Accounts:</h1>
                <div className="App-header">
                    <Users myUsers={this.state.users}></Users>
                </div>
            </div>
        );
    }
}
export default UserList;