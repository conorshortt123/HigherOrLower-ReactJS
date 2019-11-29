import React from 'react';
import axios from 'axios';
import '../App.css';

class Edit extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            Email: '',
            Username: '',
            Password: '',
            Avatar: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleAvatarChange = this.handleAvatarChange.bind(this);
    }

    handleEmailChange(e) {
        this.setState({ Email: e.target.value });
    }

    handleUsernameChange(e) {
        this.setState({ Username: e.target.value });
    }

    handlePasswordChange(e) {
        this.setState({ Password: e.target.value });
    }

    handleAvatarChange(e) {
        this.setState({ Avatar: e.target.value });
    }

    componentDidMount() {
        axios.get('http://localhost:4000/api/users/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    _id: response.data._id,
                    Email: response.data.email,
                    Username: response.data.username,
                    Password: response.data.password,
                    Avatar: response.data.avatar
                });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(`button clicked
        ${this.state.Email},
        ${this.state.Username},
        ${this.state.Password},
        ${this.state.Avatar}`);

        const newUser = {
            email: this.state.Email,
            username: this.state.Username,
            password: this.state.Password,
            avatar: this.state.Avatar
        };

        axios.put('http://localhost:4000/api/users/' + this.state._id, newUser)
            .then(res => console.log(res.data))
            .catch(console.log(e));

        this.setState({
            Email: '',
            Username: '',
            Password: '',
            Avatar: ''
        })
        
        alert("User " + this.state.Username + " updated! Press OK to return to users page (hit reload once on page).");
        this.props.history.push('/users');
    }

    render() {
        return (
            <div className="App-header">
                <h1 style={{ color: "red" }}>EDIT USER</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className='form-group'>
                        <label>Email:</label>
                        <input
                            style={{ width: '300px' }}
                            type='text'
                            className='form-control'
                            value={this.state.Email}
                            onChange={this.handleEmailChange}
                        ></input>
                    </div>
                    <div className='form-group'>
                        <label>Username:</label>
                        <input
                            style={{ width: '300px' }}
                            type='text'
                            className='form-control'
                            value={this.state.Username}
                            onChange={this.handleUsernameChange}
                        ></input>
                    </div>
                    <div className='form-group'>
                        <label>Password:</label>
                        <input
                            style={{ width: '300px' }}
                            type='text'
                            className='form-control'
                            value={this.state.Password}
                            onChange={this.handlePasswordChange}
                        ></input>
                    </div>
                    <div className='form-group'>
                        <label>User Avatar URL:</label>
                        <textarea
                            style={{ width: '300px' }}
                            type='text'
                            className='form-control'
                            value={this.state.Avatar}
                            onChange={this.handleAvatarChange}
                        ></textarea>
                    </div>
                    <div>
                        <input
                            type="submit"
                            value="Edit Account"
                            className="btn btn-primary">
                        </input>
                    </div>
                </form>
            </div>
        );
    }
}

export default Edit;