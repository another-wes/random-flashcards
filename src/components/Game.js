import Flashcard from './Flashcard';
import SourceOptions from './SourceOptions';
import SAMPLE_CARDS from './DefaultSample';
import {Component} from 'react';



class Game  extends Component {
    constructor(props) {
        super(props);
        this.state = {
        	points: 0, //user score
        	cards:SAMPLE_CARDS, //default sample
        	unanswered:[...Array(SAMPLE_CARDS.length).keys()], //answered indices are tracked this way for better performance when most of the cards have been answered 
        	deckMode:0, //only used so it knows how to request more cards or reset the deck
        	selected: Math.floor(Math.random() * SAMPLE_CARDS.length)
        };
    }
    showMessage = () => {
    	console.log(this.state.unanswered.length,"left to answer!");
        return(
                <div className="counter">
                    <p><span className="num">{`${this.state.points} `}</span>  question{this.state.points===1?``:`s`} answered correctly</p>
                </div>
        
        );
    }
    switchDeck = (deckValue) => {
    	console.log("Deck switching to",["default","TriviaDB","custom"][deckValue]);
        let newState = this.state;
        newState.deckMode = deckValue;
        if (deckValue===0){
        	newState.cards = SAMPLE_CARDS;
		newState.unanswered = [...Array(SAMPLE_CARDS.length).keys()];
		newState.selected = Math.floor(Math.random() * newState.cards.length);
		this.setState(newState);
       }
        else if (deckValue===1){
        	fetch("https://opentdb.com/api.php?amount=10")
		    .then((res) => res.json())
		    .then((json) => {
			//console.log("json received:",json);
			newState.cards = json.results;
			newState.unanswered = [...Array(newState.cards.length).keys()];
			newState.selected = Math.floor(Math.random() * newState.cards.length);
			this.setState(newState);
            		}
            	)
        }else if (deckValue===2){ //will never reach this for now
        	const fileSelector = document.createElement('input');
  		fileSelector.setAttribute('type', 'file');
  		fileSelector.click();
        }
    }
    gotItWrong = () => {
        let newState = this.state;
        //newState.points--; //this line can be reused for any sort of penalty
        if (this.state.unanswered.length > 1) {
		newState.unanswered.splice(newState.unanswered.indexOf(this.state.selected), 1);
		newState.selected = newState.unanswered[Math.floor(Math.random() * newState.unanswered.length)];
		this.setState(newState);
        }
	else this.switchDeck(this.state.deckMode);
    }
    gotItRight = () => {
        let newState = this.state;
        newState.points++;
	
        if (this.state.unanswered.length > 1) {
	  	newState.unanswered.splice(newState.unanswered.indexOf(this.state.selected), 1);
		newState.selected = newState.unanswered[Math.floor(Math.random() * newState.unanswered.length)];
		this.setState(newState);
        }
	 else this.switchDeck(this.state.deckMode);
        this.showMessage();
    }
    render() {
        return(
	    <div className="App">
	      <Flashcard flashcard={this.state.cards[this.state.selected]} key={this.state.cards[this.state.selected].id} aff={this.gotItRight.bind(this)} neg={this.gotItWrong.bind(this)}/>
		<div className="bottom-bar">
	      { this.showMessage() }
		<SourceOptions trigger={this.switchDeck.bind(this)}/>
		</div>
	    </div>
        )
    }
}

export default Game;
