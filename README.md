# Random Flashcard App: A demonstration for ATHN

## Structure

This app loads in three components from its standard, root App.js file:

	- *Game*: The only component immediately rendered by App.js, and the parent component of the other two.  A stateful but propless component with five state variables:
		* `points`: an integer showing how many questions the user has gotten right this session.
		* `cards`: an array with the currently loaded flashcard data (questions, answers, categories)
		* `unanswered`: an array tracking the indices of entries in `cards` that have already been asked.  This allows a new, non-repeat index to be randomly selected in constant time, instead of the time complexity growing.
		* `deckMode`: an integer independently tracking the option selected in SourceOptions, so Game can fetch more questions independently when `unanswered` is empty.
		* `selected`: an integer represented the position of the selection in the `cards` array.  Used to access the data each time Flashcard is rendered, and also to prune an option from `unanswered`.
	  In addition to , also renders a message showing the current score.
	
	- *Flashcard*: Shows, as specified, a category, a question and an answer.  The answer is on the back, alongside the "yes" and "no" buttons for the user.
	  Performs most of the logic for formatting and rephrasing questions.
	  Is passed three props on render: the `flashcard` Object with the data; the `aff` function for when the user says they got the question wrong, and the `neg` function for when the user says they got it wrong.
	  State tracks only one property, the boolean `flip`.

	- *SourceOptions*: A piece of the UI that allows the user to switch the source for the Flashcards' data.  When altered, triggers and subsequent re-render of 	Game.
	  Set up for three options: a hard-coded set of sample data, random questions from the Open Trivia Database, and user file upload.  As of writing this, the third option is currently disabled in the interest of time.
	  Takes in one prop, `trigger`, a function to signal Game that the source has changed and to force a state change and rerender. 

## Notes from the author (Wesley Shiflet)

To avoid having to come up with a large pool of my own questions to test with, I based samples on a free list from trivia website QuizBreaker (https://www.quizbreaker.com/trivia-questions). 

In the interest of scalability, I tailored my data standards for flashcards to be compatible with Open Trivia DB. (https://opentdb.com/)  The fields for Open TDb are as follows:
	* category
	* question
	* correct_answer
	* incorrect_answers: Array(String)
	* difficulty: "easy","medium", or "hard"

The only two fields that aren't shared by the requirements were "difficulty" and "incorrect_answers."  Retaining the "difficulty" field for my own data was a no-brainer for the sake of the next step; the recognition of difficulty levels is essential to Jeopardy, as the lowest-value questions are supposed to be the easiest.

While I originally had plans to abandon the "incorrect_answers" field entirely (after initially planning to demo the option to switch between the simple "Yes"/"No" and multiple choice questions), I found that certain multiple-choice questions in the database would not make sense without displaying options.  To this end, I've written in a primative check to see if each new question is formatted with a prompt such as "Which of the following...?", and if so shuffle the answers together and prints them out formatted like a question.
Under the current implementation, the incorrect answers are never referenced otherwise-- but since most of them have incorrect answers associated with them, the option to restore the incorrect answers and have the user pick between them is still possible.

The app also peeks at the answer to determine whether it's a True or False question, so it can add a "True or False?" lead-in to phrase the prompt as a question.  While obviously ensuring phrasing as a question would not be a priority for Jeopardy anyway, for Jeopardy we should use the query parameter "type=multiple" to prune T/F questions from OpenTDB API requests entirely.

Thanks to OnlineWebFonts for making the Jeopardy fonts freely available!

#########################################
# Default message from Create React App #
#########################################

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
