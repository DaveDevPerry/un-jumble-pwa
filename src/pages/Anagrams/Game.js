import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import GamePanel from '../../components/Anagrams/GamePanel';
import UserLetterCards from '../../components/Anagrams/UserLetterCards';
import UserWordsDisplay from '../../components/Anagrams/UserWordsDisplay';
import NewDigitalTimer from '../../components/Anagrams/NewDigitalTimer';

const AnagramRoundGame = ({
	dictionary,
	allSixLetterWords,
	allFiveLetterWords,
	allFourLetterWords,
	allAnagramUserWords,
	setAllAnagramUserWords,
	anagramGameMode,
	setPageTitle,
	setMessage,
}) => {
	const playButton = () => {
		new Audio('/audio/button.mp3').play();
	};
	const tileAudio = () => {
		new Audio('/audio/tile.mp3').play();
	};
	const playClear = () => {
		new Audio('/audio/negative.mp3').play();
	};
	const playCorrect = () => {
		new Audio('/audio/correct.mp3').play();
	};
	useEffect(() => {
		console.log('anagram game render');
		setPageTitle(`anagrams: Level ${anagramGameMode}`);
		switch (anagramGameMode) {
			case 4:
				setAllCurrentTargetWords(allFourLetterWords);
				setCurrentTargetWord(
					allFourLetterWords[
						Math.floor(Math.random() * allFourLetterWords.length)
					]
				);
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
		setPageTitle,
		anagramGameMode,
		allFourLetterWords,
		allFiveLetterWords,
		allSixLetterWords,
	]);

	const [currentTargetWord, setCurrentTargetWord] = useState('');
	const [allCurrentTargetWords, setAllCurrentTargetWords] = useState('');
	const [currentShuffledTargetWord, setCurrentShuffledTargetWord] = useState([
		'a',
		'v',
		'd',
		'd',
		'i',
		'd',
	]);
	// const [shuffledTiles, setShuffledTiles] = useState(null);
	const [currentAnagramWord, setCurrentAnagramWord] = useState('');
	const [isTimerActive, setIsTimerActive] = useState(false);
	const [numberOfGuessTilesToRender, setNumberOfGuessTilesToRender] =
		useState(0);

	// useEffect(() => {
	// 	switch (anagramGameMode) {
	// 		case 4:
	// 			setAllCurrentTargetWords(allFourLetterWords);
	// 			// setCurrentTargetWord(
	// 			// 	allFourLetterWords[
	// 			// 		Math.floor(Math.random() * allFourLetterWords.length)
	// 			// 	]
	// 			// );
	// 			break;
	// 		case 5:
	// 			// setCurrentTargetWord(
	// 			// 	allFiveLetterWords[
	// 			// 		Math.floor(Math.random() * allFiveLetterWords.length)
	// 			// 	]
	// 			// );
	// 			setAllCurrentTargetWords(allFiveLetterWords);
	// 			break;
	// 		case 6:
	// 			// setCurrentTargetWord(
	// 			// 	allSixLetterWords[
	// 			// 		Math.floor(Math.random() * allSixLetterWords.length)
	// 			// 	]
	// 			// );
	// 			setAllCurrentTargetWords(allSixLetterWords);
	// 			break;
	// 		default:
	// 			console.log('error in switch');
	// 	}
	// 	// getNewWord()
	// }, [
	// 	anagramGameMode,
	// 	allFourLetterWords,
	// 	allFiveLetterWords,
	// 	allSixLetterWords,
	// 	// getNewWord
	// ]);

	const handleAnagramStart = (e) => {
		playButton();
		e.preventDefault();
		setIsTimerActive(true);
		setMessage('good luck!');
		// get current target word
		getNewWord();
		// transitions the dom elements
		document.querySelectorAll('.guess').forEach((tile) => {
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
		// setShuffledTiles(
		// 	currentTargetWord.split('').sort(() => Math.random() - 0.5)
		// );
		setCurrentShuffledTargetWord(
			currentTargetWord.split('').sort(() => Math.random() - 0.5)
		);
		// document.querySelectorAll('.guess').forEach((tile) => {
		// 	tile.classList.add('visible');
		// });
		// document.querySelectorAll('.btn-timer').forEach((btn) => {
		// 	btn.classList.add('visible');
		// });
		// document.querySelectorAll('.button').forEach((btn) => {
		// 	btn.classList.add('visible');
		// });
		// document.querySelectorAll('.card').forEach((card) => {
		// 	card.classList.add('visible');
		// });
	};

	useEffect(() => {
		console.log(currentTargetWord);
		setCurrentShuffledTargetWord(
			currentTargetWord.split('').sort(() => Math.random() - 0.5)
		);
		// console.log(
		// 	currentTargetWord,
		// 	currentShuffledTargetWord,
		// 	'current 1st time words'
		// );
	}, [currentTargetWord]);

	const handleLetter = (e) => {
		tileAudio();
		e.preventDefault();
		if (e.target.classList.contains('active')) {
			e.target.classList.remove('active');
		} else {
			e.target.classList.add('active');
			setCurrentAnagramWord(currentAnagramWord + e.target.textContent);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (currentAnagramWord.length !== anagramGameMode)
			return setMessage('not enough letters!');
		checkWord();
		// reset tiles
		document.querySelectorAll('.card-front').forEach((tile) => {
			tile.classList.remove('active');
			tile.style.pointerEvents = 'initial';
		});
		setCurrentAnagramWord('');
	};
	const handleReset = (e) => {
		playClear();
		e.preventDefault();
		// console.log('reset tiles');
		setCurrentAnagramWord('');
		document.querySelectorAll('.card-front').forEach((tile) => {
			tile.classList.remove('active');
		});
	};
	const handleSkip = (e) => {
		playClear();
		setMessage('skipping!?');
		e.preventDefault();
		console.log('skipped');
		setAllAnagramUserWords([
			...allAnagramUserWords,
			{
				// word: currentAnagramWord,
				word: currentTargetWord,
				score: -1,
				isCorrect: false,
			},
		]);
		// setCurrentTargetWord(
		// 	allCurrentTargetWords[
		// 		Math.floor(Math.random() * allCurrentTargetWords.length)
		// 	]
		// );
		// setCurrentAnagramWord('');
		// setCurrentTargetWord('');
		// document.querySelectorAll('.card-front').forEach((tile) => {
		// 	tile.classList.remove('active');
		// 	tile.style.pointerEvents = 'initial';
		// });
		// setCurrentAnagramWord('');
		resetWord();
		getNewWord();
	};

	// clears letters from ui
	const resetWord = () => {
		console.log('reset word - check states');
		document.querySelectorAll('.card-front').forEach((tile) => {
			tile.classList.remove('active');
			// tile.textContent = '\u00A0';
			// tile.style.pointerEvents = 'initial';
		});
		setCurrentAnagramWord('');
		setCurrentTargetWord('');
		setCurrentShuffledTargetWord('');
		return;
	};

	// checks validity of word and displays relative msg
	const checkWord = () => {
		console.log('check word', currentTargetWord, currentAnagramWord);
		if (!dictionary.includes(currentAnagramWord)) {
			console.log('wrong', currentTargetWord, currentAnagramWord);
			const wrongWordMessages = [
				"that's not a word!",
				"I don't think so!",
				'you what?',
				'incorrect!',
			];
			// console.log(Math.random() * wrongWordMessages.length);
			setMessage(
				wrongWordMessages[Math.floor(Math.random() * wrongWordMessages.length)]
			);
			const currentWordPoints = parseInt('-' + getWordScore());
			setAllAnagramUserWords([
				...allAnagramUserWords,
				{
					// word: currentAnagramWord,
					word: currentTargetWord,
					score: currentWordPoints,
					isCorrect: false,
				},
			]);
		}
		if (dictionary.includes(currentAnagramWord)) {
			playCorrect();
			console.log('right', currentTargetWord, currentAnagramWord);
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
			setMessage('correct!');
			setAllAnagramUserWords([
				...allAnagramUserWords,
				{
					word: currentAnagramWord,
					score: currentWordPoints,
					isCorrect: true,
				},
			]);
		}
		console.log('pre reset word', currentTargetWord, currentAnagramWord);
		resetWord();
		console.log('post reset word', currentTargetWord, currentAnagramWord);
		getNewWord();
		console.log(
			'right post get new word',
			currentTargetWord,
			currentAnagramWord
		);
	};
	// updates ui with letter chosen by user
	useEffect(() => {
		const lettersElem = document.querySelectorAll('.guess-tile');
		lettersElem.forEach((elem) => {
			elem.firstElementChild.classList.remove('reveal');
			elem.firstElementChild.textContent = '\u00a0';
		});
		for (let i = 0; i < currentAnagramWord.length; i++) {
			lettersElem[i].firstElementChild.classList.add('reveal');
			lettersElem[i].firstElementChild.textContent = currentAnagramWord[i];
		}
	}, [currentAnagramWord]);

	const getWordScore = () => {
		let newWordScore = 0;
		switch (currentAnagramWord.length) {
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
			<UserWordsDisplay
				allAnagramUserWords={allAnagramUserWords}
				setAllAnagramUserWords={setAllAnagramUserWords}
			/>
			<NewDigitalTimer
				isTimerActive={isTimerActive}
				setIsTimerActive={setIsTimerActive}
				handleAnagramStart={handleAnagramStart}
				setMessage={setMessage}
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
				// shuffledTiles={shuffledTiles}
				currentShuffledTargetWord={currentShuffledTargetWord}
				handleLetter={handleLetter}
				handleReset={handleReset}
				handleSubmit={handleSubmit}
				handleSkip={handleSkip}
				anagramGameMode={anagramGameMode}
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
