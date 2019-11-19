import React from 'react';
import axios from 'axios';
import '../App.css';

class Register extends React.Component {

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

    handleSubmit(e) {
        alert(this.state.Email + "      " + this.state.Username
            + "       " + this.state.Password + "       " + this.state.Avatar);
        e.preventDefault();

        const newUser = {
            email: this.state.Email,
            username: this.state.Username,
            password: this.state.Password,
            avatar: this.state.Avatar
        };
        axios.post('http://localhost:4000/api/users', newUser)
            .then()
            .catch();

        this.setState({
            Email: '',
            Username: '',
            Password: '',
            Avatar: ''
        });
    }

    render() {
        return (
            <div className="App-header">
                <h1 style={{ color: "red" }}>BETUNFAIR REGISTRATION</h1>
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
                            type='text' textarea
                            className='form-control'
                            value={this.state.Username}
                            onChange={this.handleUsernameChange}
                        ></input>
                    </div>
                    <div className='form-group'>
                        <label>Password:</label>
                        <input
                            style={{ width: '300px' }}
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
                            value="Create Account">
                        </input>
                    </div>
                </form>
            </div>
        );
    }
}

export default Register;