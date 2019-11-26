import React from 'react';
import Button from 'react-bootstrap/Button';
import Slider from 'react-input-slider';

let url = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";
let deckUrl = "https://deckofcardsapi.com/api/deck/";

let isLoading = true;
let num = 0;
let points = 20;
let highScore = 20;

class Game extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            deckid: '',
            cards: [],
            count: 0,
            x: 10,
            max: points,
            min: 1,
            prevCardVal: 0,
            curCardVal: 0,
            higherClicked: false,
            showimg: "none",
            hidebtn: "block",
            showCorrect: "none",
            showIncorrect: "none"
        };
        this.changeCard = this.changeCard.bind(this);
        this.higherClicked = this.higherClicked.bind(this);
        this.checkVal = this.checkVal.bind(this);
        this.startGame = this.startGame.bind(this);
        this.checkIfCorrect = this.checkIfCorrect.bind(this);
        this.endGame = this.endGame.bind(this);
    }

    componentDidMount() {
        fetch(url)
            .then(res => res.json())
            .then((data) => {
                this.setState({ deckid: data.deck_id })
                deckUrl += this.state.deckid + "/draw/?count=52";

                fetch(deckUrl)
                    .then(res => res.json())
                    .then((data) => {
                        this.setState({ cards: data.cards })
                        console.log(this.state.cards);
                    })
                    .catch((error) => {
                        console.log(error);
                    });
                this.isLoading = false;
            })
            .catch((error) => {
                console.log(error);
            });
    }

    changeCard() {
        this.state.count++;
        if (this.state.count > 52) {
            this.state.count = 0;
        }
        this.forceUpdate();
        this.state.prevCardVal = this.state.curCardVal;
        this.checkVal();
    }

    higherClicked() {
        this.state.higherClicked = true;
        this.changeCard();
    }

    checkVal() {
        let valstr = this.state.cards[this.state.count].value;
        let valint;
        if (valstr === "ACE") {
            valint = 1;
        } else if (valstr === "2") {
            valint = 2;
        } else if (valstr === "3") {
            valint = 3;
        } else if (valstr === "4") {
            valint = 4;
        } else if (valstr === "5") {
            valint = 5;
        } else if (valstr === "6") {
            valint = 6;
        } else if (valstr === "7") {
            valint = 7;
        } else if (valstr === "8") {
            valint = 8;
        } else if (valstr === "9") {
            valint = 9;
        } else if (valstr === "10") {
            valint = 10;
        } else if (valstr === "JACK") {
            valint = 11;
        } else if (valstr === "QUEEN") {
            valint = 12;
        } else if (valstr === "KING") {
            valint = 13;
        }
        this.state.curCardVal = valint;
        console.log("Prev card value = " + this.state.prevCardVal);
        console.log("Current card value = " + this.state.curCardVal);

        if (this.state.prevCardVal != 0) {
            this.checkIfCorrect();
        }
        this.state.max = points;
    }

    checkIfCorrect() {
        if (this.state.higherClicked === true) {
            if (this.state.curCardVal > this.state.prevCardVal) {
                points += this.state.x;
                alert("Correct! Card was higher! " + this.state.x + " points added to your account!");
                this.state.showCorrect = "block";
            } else if (this.state.curCardVal === this.state.prevCardVal) {
                alert("Cards were equal! No points added or taken from your account!");
            } else {
                alert("Incorrect! Card was lower! " + this.state.x + " points were taken from your account!");
                points -= this.state.x;
                this.state.showCorrect = "none";
                this.state.showIncorrect = "block";
            }
        }
        else {
            if (this.state.curCardVal < this.state.prevCardVal) {
                points += this.state.x;
                alert("Correct! Card was lower! " + this.state.x + " points added to your account!");
                this.state.showCorrect = "block";
                this.state.showIncorrect = "none";
            } else if (this.state.curCardVal === this.state.prevCardVal) {
                alert("Cards were equal! No points added or taken from your account!");
            } else {
                alert("Incorrect! Card was higher! " + this.state.x + " points were taken from your account!");
                points -= this.state.x;
                this.state.showCorrect = "none";
                this.state.showIncorrect = "block";
            }
        }
        this.checkHighscore();
        this.checkIfPointsNull();
    }

    checkHighscore() {
        if (highScore < points) {
            highScore = points;
        }
    }

    startGame() {
        this.setState({ showimg: "block", hidebtn: "none" });
        this.forceUpdate();
        this.checkVal();
    }

    checkIfPointsNull() {
        if (points <= 0) {
            alert("Unlucky! You lost all of your points! Starting a new game....");
            this.endGame();
        }
    }

    endGame() {
        this.componentDidMount();
        points = 20;
        this.state.showIncorrect = "none";
    }

    render() {
        if (this.isLoading === false) {
            return (
                <div className="App">
                    <div>
                        <h4 style={{ float: "right", marginRight:"20px", color:"white"}}>Highscore: {highScore}</h4>
                        <h1 style={{ color: "red", marginLeft: "190px"}}>Higher Or Lower Card Game</h1>
                    </div>
                    <h2 style={{ color: "white" }}>Points: {points}</h2>
                    <h2 style={{ color: "green", display: this.state.showCorrect }}>Correct! {this.state.x} points added!</h2>
                    <h2 style={{ color: "red", display: this.state.showIncorrect }}>Incorrect! {this.state.x} points taken!</h2>
                    <div className="App-header">
                        <img src={this.state.cards[this.state.count].image} style={{ display: this.state.showimg }} alt="Card"></img>
                        <div style={{ display: this.state.showimg }}>
                            <Button variant="primary" style={{ marginRight: "5px" }} onClick={this.higherClicked}>Higher</Button>
                            <Button variant="dark" style={{ marginLeft: "5px" }} onClick={this.changeCard}>Lower</Button>
                        </div>
                        <Button variant="danger" onClick={this.startGame} style={{ display: this.state.hidebtn }}>Start</Button>
                        <Slider
                            axis="x"
                            x={this.state.x}
                            xmax={this.state.max}
                            xmin={this.state.min}
                            onChange={({ x }) => this.setState(state => ({ state, x }))}
                            style={{ marginTop: "20px", display: this.state.showimg }}
                        />
                        <div>{this.state.x}</div>
                    </div>
                </div>
            )
        } else {
            return null;
        }
    }
}
export default Game;