import React, { Component } from 'react';
import "../App.css";

class Background extends Component {
    
    constructor(){
        super();
        this.state = {
            pictures: [],
        };
    }

    componentDidMount(){
        fetch('https://randomuser.me/api/?results=100')
        .then(results => {
            return results.json();
        }).then(data => {
            let pictures = data.results.map((pic) => {
                return(
                    <div key={pic.results}>
                        <img src={pic.picture.medium} alt="pictures"/>
                    </div>
                )
            })
            this.setState({pictures: pictures});
            console.log("state", this.state.pictures);
        })
    }

    render(){
        return(
            <div className="Center">
                <div className="Center">
                    {this.state.pictures}
                </div>
            </div>
        )
    }
}

export default Background;