import React, {useState} from 'react';
function decode(str){
	return str.replaceAll("&#039;","'").replaceAll("&quot;",'"')
	.replaceAll("&ldquo;",'"').replaceAll("&rdquo;",'"').replaceAll("&amp;","&")
	.replaceAll("&eacute;","é").replaceAll("&deg;","°");
}
function shuffle(array) {
  let currentIndex = array.length, randomIndex;
  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}

function listChoices(card){
	console.log("Old:",card.incorrect_answers);
	let newArray = [...card.incorrect_answers];
	newArray.push(card.correct_answer);
	newArray = shuffle(newArray);
	console.log("New:",newArray);
	let newString = newArray.slice(0,newArray.length-1).join(", ");
	return "  "+decode(newString) + " or " + newArray[newArray.length-1] +"?";
}

const Flashcard = ({ flashcard, aff, neg }) => {
	const [flip,setFlip] = useState(false);
	return (
		<div className={`entry lg-entry card ${flip ? 'flip' : ''}`} onClick={()=>setFlip(!flip)}>
			<div className = "front">
				<div className = "category">Category: {flashcard.category}<br/>
				Difficulty: {flashcard.difficulty[0].toUpperCase() + flashcard.difficulty.slice(1)}</div>
				{(flashcard.correct_answer === "True")||(flashcard.correct_answer === "False")?"True or False?: "+decode(flashcard.question):decode(flashcard.question)}
				<div className="multichoice">{flashcard.question.includes("hich of the following")||flashcard.question.includes("hich of these")?listChoices(flashcard):""}</div>
			</div>
			<div className = "back">
				{decode(flashcard.correct_answer)}
				<div id="asking">Was this your final answer?</div>
				<div className = "responses">
					<button id="yes" type="button" onClick={aff}>Yes</button>
					<button id="no" type="button" onClick={neg}>No</button>
				</div>
			</div>
		</div>
	);
}

export default Flashcard;
