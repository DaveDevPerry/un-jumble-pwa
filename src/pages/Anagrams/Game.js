import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import GamePanel from '../../components/Anagrams/GamePanel';
import UserLetterCards from '../../components/Anagrams/UserLetterCards';
import UserWordsDisplay from '../../components/Anagrams/UserWordsDisplay';
import NewDigitalTimer from '../../components/Anagrams/NewDigitalTimer';

const AnagramRoundGame = ({
	gameLetters,
	setGameLetters,
	dictionary,
	setLetterRoundData,
	letterRoundData,
	allSixLetterWords,
	allFiveLetterWords,
	allFourLetterWords,
	allAnagramUserWords,
	setAllAnagramUserWords,
	anagramGameMode,
}) => {
	useEffect(() => {
		console.log('anagram game render');
	}, []);

	const [currentTargetWord, setCurrentTargetWord] = useState('');
	const [allCurrentTargetWords, setAllCurrentTargetWords] = useState('');
	const [currentShuffledTargetWord, setCurrentShuffledTargetWord] = useState([
		'a',
		'v',
		'd',
		'd',
		'i',
	]);
	const [shuffledTiles, setShuffledTiles] = useState(null);
	const [currentAnagramWord, setCurrentAnagramWord] = useState('');
	const [isTimerActive, setIsTimerActive] = useState(false);
	const [numberOfGuessTilesToRender, setNumberOfGuessTilesToRender] =
		useState(0);

	useEffect(() => {
		console.log('anagram switch');
		console.log(anagramGameMode, 'ag mode');
		switch (anagramGameMode) {
			case 4:
				setCurrentTargetWord(
					allFourLetterWords[
						Math.floor(Math.random() * allFourLetterWords.length)
					]
				);
				setAllCurrentTargetWords(allFourLetterWords);
				break;
			case 5:
				setCurrentTargetWord(
					allFiveLetterWords[
						Math.floor(Math.random() * allFiveLetterWords.length)
					]
				);
				setAllCurrentTargetWords(allFiveLetterWords);
				break;
			case 6:
				setCurrentTargetWord(
					allSixLetterWords[
						Math.floor(Math.random() * allSixLetterWords.length)
					]
				);
				setAllCurrentTargetWords(allSixLetterWords);
				break;
			default:
				console.log('error in switch');
		}
	}, [
		anagramGameMode,
		allFourLetterWords,
		allFiveLetterWords,
		allSixLetterWords,
	]);

	const handleAnagramStart = (e) => {
		e.preventDefault();
		setIsTimerActive(true);
		// get current target word
		getNewWord();
		const gameLetterTiles = document.querySelectorAll('.guess');
		gameLetterTiles.forEach((tile) => {
			tile.classList.add('visible');
		});
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

	const getNewWord = () => {
		console.log('get new word', currentTargetWord, allCurrentTargetWords);
		setCurrentTargetWord(
			allCurrentTargetWords[
				Math.floor(Math.random() * allCurrentTargetWords.length)
			]
		);

		const currentShuffledTargetWord = currentTargetWord
			.split('')
			.sort(() => Math.random() - 0.5);
		console.log(currentShuffledTargetWord);
		setShuffledTiles(currentShuffledTargetWord);
	};

	useEffect(() => {
		console.log(currentTargetWord);
		setCurrentShuffledTargetWord(
			currentTargetWord.split('').sort(() => Math.random() - 0.5)
		);
	}, [currentTargetWord]);

	const tileAudio = () => {
		const audio = new Audio('/audio/tile.mp3');
		audio.play();
	};
	const playClear = () => {
		const audio = new Audio('/audio/negative.mp3');
		audio.play();
	};

	const handleReset = (e) => {
		playClear();
		e.preventDefault();
		console.log('reset tiles');
		setCurrentAnagramWord([]);
		const tiles = document.querySelectorAll('.card-front');
		tiles.forEach((tile) => {
			tile.classList.remove('active');
			tile.style.pointerEvents = 'initial';
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (currentAnagramWord.length !== anagramGameMode) return;
		checkWord();
		// reset tiles
		const tiles = document.querySelectorAll('.card-front');
		tiles.forEach((tile) => {
			tile.classList.remove('active');
			tile.style.pointerEvents = 'initial';
		});
		setCurrentAnagramWord([]);
	};

	const handleLetter = (e) => {
		tileAudio();
		e.preventDefault();
		console.log(e.target.textContent, 'e');
		if (e.target.classList.contains('active')) {
			e.target.classList.remove('active');
			e.target.style.pointerEvents = 'initial';
		} else {
			e.target.classList.add('active');
			setCurrentAnagramWord(currentAnagramWord + e.target.textContent);
			e.target.style.pointerEvents = 'none';
		}
	};

	const handleSkip = (e) => {
		e.preventDefault();
		console.log('reset tiles');
		setAllAnagramUserWords([
			...allAnagramUserWords,
			{
				word: currentTargetWord,
				score: -1,
				isCorrect: false,
			},
		]);
		setCurrentAnagramWord('');
		getNewWord();
		const tiles = document.querySelectorAll('.card-front');
		tiles.forEach((tile) => {
			tile.classList.remove('active');
			tile.style.pointerEvents = 'initial';
		});
	};

	// clears letters from ui
	const resetWord = () => {
		console.log('reset word - check states');
		const currentTileElement = document.querySelectorAll('.card-front');
		currentTileElement.forEach((tile) => {
			tile.classList.remove('active');
			tile.textContent = '\u00A0';
			tile.style.pointerEvents = 'initial';
		});
	};

	// checks validity of word and displays relative msg
	const checkWord = () => {
		console.log('current word', currentAnagramWord);
		if (!dictionary.includes(currentAnagramWord)) {
			console.log('wrong');
			setAllAnagramUserWords([
				...allAnagramUserWords,
				{
					word: currentTargetWord,
					score: -1,
					isCorrect: false,
				},
			]);
		}
		if (dictionary.includes(currentAnagramWord)) {
			console.log('right');
			setAllAnagramUserWords([
				...allAnagramUserWords,
				{
					word: currentAnagramWord,
					score: 1,
					isCorrect: true,
				},
			]);
		}
		resetWord();
		getNewWord();
	};
	// updates ui with letter chosen by user
	useEffect(() => {
		const lettersElem = document.querySelectorAll('.guess-tile');
		// clear ui upon delete letter
		lettersElem.forEach((elem) => {
			elem.firstElementChild.classList.remove('reveal');
			elem.firstElementChild.textContent = '\u00a0';
		});
		for (let i = 0; i < currentAnagramWord.length; i++) {
			console.log(currentAnagramWord[i]);
			lettersElem[i].firstElementChild.classList.add('reveal');
			lettersElem[i].firstElementChild.textContent = currentAnagramWord[i];
		}
	}, [currentAnagramWord]);

	return (
		<StyledGame>
			<UserWordsDisplay
				allAnagramUserWords={allAnagramUserWords}
				setAllAnagramUserWords={setAllAnagramUserWords}
			/>
			<NewDigitalTimer
				isTimerActive={isTimerActive}
				setIsTimerActive={setIsTimerActive}
				handleAnagramStart={handleAnagramStart}
			/>
			<GamePanel
				handleAnagramStart={handleAnagramStart}
				anagramGameMode={anagramGameMode}
				numberOfGuessTilesToRender={numberOfGuessTilesToRender}
				setNumberOfGuessTilesToRender={setNumberOfGuessTilesToRender}
			/>
			<UserLetterCards
				currentAnagramWord={currentAnagramWord}
				setCurrentAnagramWord={setCurrentAnagramWord}
				dictionary={dictionary}
				shuffledTiles={shuffledTiles}
				currentShuffledTargetWord={currentShuffledTargetWord}
				handleLetter={handleLetter}
				handleReset={handleReset}
				handleSubmit={handleSubmit}
				handleSkip={handleSkip}
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
export default AnagramRoundGame;
