import React, { useContext, useEffect } from 'react';
import { LetterRoundContext } from '../../contexts/LetterRoundContext';
import { useNavigate } from 'react-router-dom';

const NewLetterRoundForm = ({
	gameLetters,
	allLetterRoundUserWords,
	setMessage,
	timeLimit,
	url,
}) => {
	const playButton = () => {
		new Audio('/audio/button.mp3').play();
	};
	useEffect(() => {
		console.log(
			'new lr form initial render',
			gameLetters,
			allLetterRoundUserWords
		);
	}, [gameLetters, allLetterRoundUserWords]);
	let navigate = useNavigate();
	const { dispatch } = useContext(LetterRoundContext);
	// const [date, setDate] = useState('');
	// const [level, setLevel] = useState(0);
	// const [wordOfTheDay, setWordOfTheDay] = useState('');
	// const [isCorrect, setIsCorrect] = useState(false);

	const handleSave = () => {
		playButton();
		// e.preventDefault();
		dispatch({
			type: 'ADD_GAME',
			// conundrum: { date, level, wordOfTheDay, isCorrect },
			game: {
				date: new Date().toLocaleDateString(),
				letterSet: gameLetters,
				allWords: allLetterRoundUserWords,
				timeLimit: timeLimit,
				// date: new Date().toLocaleDateString(),
				// letterSet: action.game.letterSet,
				// allWords: action.game.allWords,
				// timeLimit: action.game.timeLimit,
			},
		});
		// setDate('');
		// setLevel('');
		// setWordOfTheDay('');
		// setIsCorrect(false);
		setTimeout(() => {
			// setMessage('play another?');
			navigate('/');
		}, 100);
	};

	return (
		<button
			onClick={() => {
				setMessage('play again?');
				// setDate(new Date().toLocaleDateString());
				// setLevel(conundrumGameMode);
				// setWordOfTheDay(conundrum);
				// setIsCorrect(isConundrumCorrect);
				handleSave();
			}}
		>
			Save Data
		</button>
		// <form onSubmit={handleSubmit}>
		//   <input type="text" placeholder="book title" value={title}
		//     onChange={(e) => setTitle(e.target.value)} required />
		//   <input type="text" placeholder="author name" value={author}
		//     onChange={(e) => setAuthor(e.target.value)} required />
		//   <input type="submit" value="add book" />
		// </form>
	);
};

export default NewLetterRoundForm;
