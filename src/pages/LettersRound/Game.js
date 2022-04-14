import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import CurrentWordDisplay from '../../components/LettersRound/CurrentWordDisplay';
import NewDigitalTimer from '../../components/LettersRound/NewDigitalTimer';
import UserLetterCards from '../../components/LettersRound/UserLetterCards';
import UserAllWordsDisplay from '../../components/LettersRound/UserWordsDisplay';
import LetterRoundContextProvider from '../../contexts/LetterRoundContext';

const LetterRoundGame = ({
	gameLetters,
	dictionary,
	setLetterRoundData,
	letterRoundData,
	setGotNineLetterWord,
	setLetterRoundLongestWord,
	letterRoundLongestWord,
	allLetterRoundUserWords,
	setAllLetterRoundUserWords,
	setCurrentLetterRoundWord,
	currentLetterRoundWord,
	setMessage,
	setPageTitle,
}) => {
	const tileAudio = () => {
		new Audio('/audio/tile.mp3').play();
	};
	const playClear = () => {
		new Audio('/audio/negative.mp3').play();
	};
	const playCorrect = () => {
		new Audio('/audio/correct.mp3').play();
	};
	const playButton = () => {
		new Audio('/audio/button.mp3').play();
	};
	useEffect(() => {
		console.log('lr game render');
		setPageTitle('letter round');
	}, [setPageTitle]);

	const [isTimerActive, setIsTimerActive] = useState(false);

	const handleLetterRoundStart = (e) => {
		playButton();
		setMessage('good luck!');
		e.preventDefault();
		setIsTimerActive(true);
		document.querySelectorAll('.btn-timer').forEach((btn) => {
			btn.classList.add('visible');
		});
		document.querySelectorAll('.button').forEach((btn) => {
			btn.classList.add('visible');
		});
		document.querySelectorAll('.card').forEach((card) => {
			card.classList.add('visible');
		});
	};

	const handleReset = (e) => {
		playClear();
		e.preventDefault();
		setCurrentLetterRoundWord('');
		const tiles = document.querySelectorAll('.card-front');
		tiles.forEach((tile) => {
			tile.classList.remove('active');
			tile.style.pointerEvents = 'initial';
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (currentLetterRoundWord.length < 3)
			return setMessage('use 3 letters or more!');
		checkWord();
		// reset tiles
		const tiles = document.querySelectorAll('.card-front');
		tiles.forEach((tile) => {
			tile.classList.remove('active');
			tile.style.pointerEvents = 'initial';
		});
		setCurrentLetterRoundWord('');
	};

	const handleLetter = (e) => {
		tileAudio();
		e.preventDefault();
		if (e.target.classList.contains('active')) {
			e.target.classList.remove('active');
			e.target.style.pointerEvents = 'initial';
		} else {
			e.target.classList.add('active');
			setCurrentLetterRoundWord(
				(currentLetterRoundWord += e.target.textContent)
			);
			// setCurrentAnagramWord(currentAnagramWord + e.target.textContent);
			e.target.style.pointerEvents = 'none';
		}
	};
	// clears letters from ui
	const resetWord = () => {
		console.log('reset word - check states');
		const currentTileElement = document.querySelectorAll('.card-front');
		currentTileElement.forEach((tile) => {
			tile.classList.remove('active');
			tile.style.pointerEvents = 'initial';
		});
	};
	const checkWord = () => {
		console.log('current word', currentLetterRoundWord);
		if (!dictionary.includes(currentLetterRoundWord.toLowerCase())) {
			const wrongWordMessages = [
				"that's not a word!",
				"I don't think so!",
				'you what?',
				'incorrect!',
				'worth a try!',
			];
			setMessage(
				wrongWordMessages[Math.floor(Math.random() * wrongWordMessages.length)]
			);
			const currentWordPoints = parseInt('-' + getWordScore());
			setAllLetterRoundUserWords([
				...allLetterRoundUserWords,
				{
					word: currentLetterRoundWord,
					score: currentWordPoints,
					isCorrect: false,
				},
			]);
		}
		if (dictionary.includes(currentLetterRoundWord.toLowerCase())) {
			playCorrect();
			const correctWordMessages = [
				"that's a good one!",
				'correct!',
				'too easy!',
				'right, you are!',
			];
			setMessage(
				correctWordMessages[
					Math.floor(Math.random() * correctWordMessages.length)
				]
			);
			const currentWordPoints = getWordScore();
			setAllLetterRoundUserWords([
				...allLetterRoundUserWords,
				{
					word: currentLetterRoundWord,
					score: currentWordPoints,
					isCorrect: true,
				},
			]);
		}
		resetWord();
	};
	const getWordScore = () => {
		let newWordScore = 0;
		switch (currentLetterRoundWord.length) {
			case 9:
				newWordScore = 20;
				break;
			case 8:
				newWordScore = 13;
				break;
			case 7:
				newWordScore = 10;
				break;
			case 6:
				newWordScore = 7;
				break;
			case 5:
				newWordScore = 5;
				break;
			case 4:
				newWordScore = 3;
				break;
			case 3:
				newWordScore = 1;
				break;
			default:
				break;
		}
		return newWordScore;
	};

	return (
		<StyledGame>
			<LetterRoundContextProvider>
				<UserAllWordsDisplay
					currentLetterRoundWord={currentLetterRoundWord}
					setCurrentLetterRoundWord={setCurrentLetterRoundWord}
					allLetterRoundUserWords={allLetterRoundUserWords}
					setAllLetterRoundUserWords={setAllLetterRoundUserWords}
				/>
			</LetterRoundContextProvider>
			<NewDigitalTimer
				isTimerActive={isTimerActive}
				setIsTimerActive={setIsTimerActive}
				handleLetterRoundStart={handleLetterRoundStart}
				setMessage={setMessage}
			/>
			<CurrentWordDisplay currentLetterRoundWord={currentLetterRoundWord} />
			<UserLetterCards
				currentLetterRoundWord={currentLetterRoundWord}
				setCurrentLetterRoundWord={setCurrentLetterRoundWord}
				dictionary={dictionary}
				setAllLetterRoundUserWords={setAllLetterRoundUserWords}
				allLetterRoundUserWords={allLetterRoundUserWords}
				setGotNineLetterWord={setGotNineLetterWord}
				setLetterRoundLongestWord={setLetterRoundLongestWord}
				letterRoundLongestWord={letterRoundLongestWord}
				gameLetters={gameLetters}
				setLetterRoundData={setLetterRoundData}
				letterRoundData={letterRoundData}
				handleLetter={handleLetter}
				handleReset={handleReset}
				handleSubmit={handleSubmit}
			/>
		</StyledGame>
	);
};
const StyledGame = styled.section`
	padding: 0;
	flex-direction: column;
	word-wrap: wrap;
	display: flex;
	flex: 1;
	position: relative;
	row-gap: 1rem;
`;
export default LetterRoundGame;
