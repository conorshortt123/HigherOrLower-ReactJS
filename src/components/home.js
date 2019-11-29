import React from 'react';
import '../App.css';
import Background from '../images/background.PNG';

class Home extends React.Component {

    constuctor() {
        this.routeChange = this.routeChange.bind(this);
    }

    routeChange() {
        let path = "/login";
        this.history.push(path);
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h1 style={{ color: "red" }}>Welcome To BetUnfair</h1>
                    <h2>{new Date().toLocaleTimeString()}.</h2>
                    <img src={Background} alt="Background"></img>
                    <div>
                        <a href="/login" className="btn btn-danger active" role="button">Login</a>
                        <a href="/register" className="btn btn-info active" role="button">Register</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;