import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AnagramContext } from '../../contexts/AnagramContext';

const NewAnagramForm = ({
	anagramGameMode,
	setMessage,
	allAnagramUserWords,
	setAllAnagramUserWords,
}) => {
	const playButton = () => {
		new Audio('/audio/button.mp3').play();
	};
	useEffect(() => {
		console.log(
			'new anagram form initial render',
			allAnagramUserWords,
			anagramGameMode
		);
	}, [anagramGameMode, allAnagramUserWords]);
	let navigate = useNavigate();
	const { dispatch } = useContext(AnagramContext);

	const handleSave = () => {
		playButton();
		dispatch({
			type: 'ADD_GAME',
			game: {
				date: new Date().toLocaleDateString(),
				level: anagramGameMode,
				allAnagramWords: allAnagramUserWords,
			},
		});
		setAllAnagramUserWords([]);
		setTimeout(() => {
			navigate('/');
		}, 100);
	};

	return (
		<button
			onClick={() => {
				setMessage('one more game?');
				handleSave();
			}}
		>
			Save Data
		</button>
	);
};

export default NewAnagramForm;
