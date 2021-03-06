import React from 'react';
import axios from 'axios';

let loggedIn = false;

class Login extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            Email: '',
            Password: '',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    handleEmailChange(e) {
        this.setState({ Email: e.target.value });
    }

    handlePasswordChange(e) {
        this.setState({ Password: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();

        const userLogin = {
            email: this.state.Email,
            password: this.state.Password
        };

        if (loggedIn === false) {
            axios.get('http://localhost:4000/api/users')
                .then((response) => {
                    this.setState({ users: response.data.users })
                    for (var i = 0; i < this.state.users.length; i++) {
                        if (userLogin.email === this.state.users[i].email) {
                            if (userLogin.password === this.state.users[i].password) {
                                alert("Login succesful");
                                loggedIn = true;
                                this.props.history.push('/game');
                            } else {
                                alert("Email or Password incorrect, please try again! (check users page for login details)");
                            }
                        }
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        } else {
            alert("Already logged in!");
        }
    }

    render() {
        return (
            <div className="App-header">
                <h1 style={{ color: "red" }}>BETUNFAIR LOGIN</h1>
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
                        <label>Password:</label>
                        <input
                            style={{ width: '300px' }}
                            className='form-control'
                            value={this.state.Password}
                            onChange={this.handlePasswordChange}
                        ></input>
                    </div>
                    <div>
                        <input
                            type="submit"
                            value="Login">
                        </input>
                    </div>
                </form>
            </div>
        )
    }
}

export default Login;