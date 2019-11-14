import React, { Component } from 'react';
import "../App.css";

let i;
let pictures = [];
let increment = 1;
let margin = 1;

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
            pictures = data.results.map((pic) => {
                return(
                    <div key={pic.results}>
                        <img src={pic.picture.medium} style={{paddingLeft : {margin} + 'px'}} alt="pictures"/>
                    </div>
                )
            })
            this.setState({pictures: pictures});
            console.log("state", this.state.pictures);
        })
    }

    render(){
        
        for(i = 0; i < 100; i++){
            increment += i;
            return(
            <div className="Center">
                {this.state.pictures[i]}
            </div>
            )
        }    
    }
}

export default Background;