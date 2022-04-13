import React, { useContext, useEffect } from 'react';
import { LetterRoundContext } from '../../contexts/LetterRoundContext';
import { useNavigate } from 'react-router-dom';

const NewLetterRoundForm = ({
	gameLetters,
	allLetterRoundUserWords,
	setMessage,
	timeLimit,
	setGameLetters,
	setAllLetterRoundUserWords,
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

	const handleSave = () => {
		playButton();
		dispatch({
			type: 'ADD_GAME',
			game: {
				date: new Date().toLocaleDateString(),
				letterSet: gameLetters,
				allWords: allLetterRoundUserWords,
				timeLimit: timeLimit,
			},
		});
		setGameLetters([]);
		setAllLetterRoundUserWords([]);
		setTimeout(() => {
			navigate('/');
		}, 100);
	};

	return (
		<button
			onClick={() => {
				setMessage('play again?');
				handleSave();
			}}
		>
			Continue
		</button>
	);
};

export default NewLetterRoundForm;
