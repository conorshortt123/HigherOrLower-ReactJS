import React from 'react';

class Game extends React.Component {

    constructor() {
        super();
        this.state = {
            deck: []
        };
    }

    componentDidMount() {
        fetch('https://deckofcardsapi.com/api/deck/16rimouccmgy/draw/?count=2')
            .then((response) => {
                return response.json();
            }).then(data =>{
                let deck = data.response.map((d) => {
                    console.log(d.response);
                })
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        return (
            <div className="App-header">
                <h1>Higher/Lower Card Game</h1>
            </div>
        )
    }
}

export default Game;