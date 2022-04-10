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
	allSevenLetterWords,
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

	// const [currentFiveLetterTargetWord, setCurrentFiveLetterTargetWord] = useState('');
	// const [currentSixLetterTargetWord, setCurrentSixLetterTargetWord] = useState('');
	// const [currentFourLetterTargetWord, setCurrentFourLetterTargetWord] = useState('');
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
				setAllCurrentTargetWords(
					allFourLetterWords
					// [
					// 	Math.floor(Math.random() * allFourLetterWords.length)
					// ]
				);
				break;
			case 5:
				setCurrentTargetWord(
					allFiveLetterWords[
						Math.floor(Math.random() * allFiveLetterWords.length)
					]
				);
				setAllCurrentTargetWords(
					allFiveLetterWords
					// [
					// 	Math.floor(Math.random() * allFiveLetterWords.length)
					// ]
				);
				break;
			case 6:
				setCurrentTargetWord(
					allSixLetterWords[
						Math.floor(Math.random() * allSixLetterWords.length)
					]
				);
				setAllCurrentTargetWords(
					allSixLetterWords
					// [
					// 	Math.floor(Math.random() * allSixLetterWords.length)
					// ]
				);
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

	// useEffect(() => {
	// 	setCurrentFourLetterTargetWord(
	// 		allFourLetterWords[Math.floor(Math.random() * allFourLetterWords.length)]
	// 	);
	// 	setCurrentFiveLetterTargetWord(
	// 		allFiveLetterWords[Math.floor(Math.random() * allFiveLetterWords.length)]
	// 	);
	// 	setCurrentSixLetterTargetWord(
	// 		allSixLetterWords[Math.floor(Math.random() * allSixLetterWords.length)]
	// 	);
	// }, [allFourLetterWords,allFiveLetterWords, allSixLetterWords]);

	const handleAnagramStart = (e) => {
		e.preventDefault();

		// const root = document.querySelector(':root');
		// root.style.setProperty('--letter-count', 5);
		// }
		// start timer
		// runTimer()
		setIsTimerActive(true);
		// get current target word
		getNewWord();
		// document.querySelector('.start-btns-container').classList.add('hide');
		const gameLetterTiles = document.querySelectorAll('.guess');
		gameLetterTiles.forEach((tile) => {
			tile.classList.add('visible');
			// console.log(setShowLetterRoundResults);
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
		// document.querySelectorAll('.button').forEach((btn) => {
		// 	btn.classList.add('visible');
		// });
		// const currentTargetWord =
		// 	allFiveLetterWords[Math.floor(Math.random() * allFiveLetterWords.length)];
		// console.log(currentTargetWord);
		// const currentShuffledTargetWord = currentTargetWord
		// 	.split('')
		// 	.sort(() => Math.random() - 0.5);
		// // const shuffled = list.sort(() => Math.random() - 0.5)
		// console.log(currentShuffledTargetWord);
		// // setShuffledTiles(currentShuffledTargetWord);
		// // console.log(shuffledTiles);
	};
	// const handleStart = (e) => {
	// 	e.preventDefault();

	// 	const root = document.querySelector(':root');
	// 	root.style.setProperty('--letter-count', 5);
	// 	// }
	// 	// start timer
	// 	// runTimer()
	// 	setIsTimerActive(true);
	// 	// get current target word
	// 	getNewWord();
	// 	document.querySelector('.start-btns-container').classList.add('hide');
	// 	const gameLetterTiles = document.querySelectorAll('.guess');
	// 	gameLetterTiles.forEach((tile) => {
	// 		tile.classList.add('visible');
	// 		// console.log(setShowLetterRoundResults);
	// 	});
	// 	document.querySelectorAll('.button').forEach((btn) => {
	// 		btn.classList.add('visible');
	// 	});
	// 	document.querySelectorAll('.card').forEach((card) => {
	// 		card.classList.add('visible');
	// 	});
	// 	// const currentTargetWord =
	// 	// 	allFiveLetterWords[Math.floor(Math.random() * allFiveLetterWords.length)];
	// 	// console.log(currentTargetWord);
	// 	// const currentShuffledTargetWord = currentTargetWord
	// 	// 	.split('')
	// 	// 	.sort(() => Math.random() - 0.5);
	// 	// // const shuffled = list.sort(() => Math.random() - 0.5)
	// 	// console.log(currentShuffledTargetWord);
	// 	// // setShuffledTiles(currentShuffledTargetWord);
	// 	// // console.log(shuffledTiles);
	// };
	const getNewWord = () => {
		console.log('get new word', currentTargetWord, allCurrentTargetWords);
		setCurrentTargetWord(
			allCurrentTargetWords[
				Math.floor(Math.random() * allCurrentTargetWords.length)
			]
		);
		// setCurrentTargetWord(
		// 	allFiveLetterWords[Math.floor(Math.random() * allFiveLetterWords.length)]
		// );
		// setCurrentAnagramWord(allCurrentTargetWords);

		// const currentTargetWord =
		// 	allFiveLetterWords[Math.floor(Math.random() * allFiveLetterWords.length)];
		// console.log(currentTargetWord);
		const currentShuffledTargetWord = currentTargetWord
			.split('')
			.sort(() => Math.random() - 0.5);
		// const shuffled = list.sort(() => Math.random() - 0.5)
		console.log(currentShuffledTargetWord);
		setShuffledTiles(currentShuffledTargetWord);
		// console.log(shuffledTiles);
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
		// setCurrentUserGuess([]);
		const tiles = document.querySelectorAll('.card-front');
		tiles.forEach((tile) => {
			tile.classList.remove('active');
			tile.style.pointerEvents = 'initial';
		});
	};
	// let letterIndex = 0;

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
		// setCurrentUserGuess([]);
	};

	const handleLetter = (e) => {
		tileAudio();
		e.preventDefault();
		console.log(e.target.textContent, 'e');
		// console.log(currentUserGuess);
		if (e.target.classList.contains('active')) {
			e.target.classList.remove('active');
			e.target.style.pointerEvents = 'initial';
		} else {
			e.target.classList.add('active');
			setCurrentAnagramWord(currentAnagramWord + e.target.textContent);
			e.target.style.pointerEvents = 'none';
			// setCurrentUserGuess(currentUserGuess + e.target.textContent);
			// setCurrentUserGuess([...currentUserGuess, e.target.textContent]);
		}
	};

	const handleSkip = (e) => {
		e.preventDefault();
		console.log('reset tiles');
		// setCurrentAnagramWord('skipped');
		setAllAnagramUserWords([
			...allAnagramUserWords,
			{
				word: currentTargetWord,
				score: -1,
				isCorrect: false,
			},
		]);
		setCurrentAnagramWord('');
		// checkWord();

		getNewWord();

		// setCurrentUserGuess([]);
		const tiles = document.querySelectorAll('.card-front');
		tiles.forEach((tile) => {
			tile.classList.remove('active');
			tile.style.pointerEvents = 'initial';
		});
		// document.querySelector('.start-btns-container').classList.add('hide');
		// const gameLetterTiles = document.querySelectorAll('.guess');
		// gameLetterTiles.forEach((tile) => {
		// 	tile.classList.add('visible');
		// 	// console.log(setShowLetterRoundResults);
		// });
		// document.querySelectorAll('.button').forEach((btn) => {
		// 	btn.classList.add('visible');
		// });
		// document.querySelectorAll('.card').forEach((card) => {
		// 	card.classList.add('visible');
		// });
	};

	// clears letters from ui
	const resetWord = () => {
		console.log('reset word - check states');
		// setLetterIndex([]);
		// setLetters('');
		// document.querySelectorAll('.guess-tile').forEach((elem) => {

		// 	elem.firstElementChild.classList.remove('reveal');
		// 	setTimeout(() => {
		// 		elem.firstElementChild.textContent = '\u00a0';
		// 	}, 500);
		// });
		const currentTileElement = document.querySelectorAll('.card-front');
		currentTileElement.forEach((tile) => {
			tile.classList.remove('active');
			tile.textContent = '\u00A0';
			tile.style.pointerEvents = 'initial';
		});
	};
	// let isWordValid;
	// 	if (!dictionary.includes(letters)) {
	// 		// console.log(letters, 'not in dictionary');
	// 		console.log('current word', currentAnagramWord);
	// 		setInvalidWordCount(invalidWordCount + 1);
	// 		// isWordValid = false;
	// 		showAlert(currentAnagramWord);
	// 		// showAlert('Invalid Word');
	// 		console.log(startTime, endTime, newHighScore, isTimer, closeModalAudio);
	// 	}
	// 	if (dictionary.includes(letters)) {
	// 		// console.log(letters, 'in dictionary');
	// 		setValidWordCount(validWordCount + 1);
	// 		// isWordValid = true;
	// 		showAlert('Correct!');
	// 	}
	// 	// createWordData(isWordValid);
	// 	// console.log('isWordValid', isWordValid);
	// 	// reset states?
	// 	resetWord();
	// 	getNewWord();
	// };
	// creates object for each user guess
	// const createWordData = (isWordValid) => {
	// 	setWordData([
	// 		...wordData,
	// 		{
	// 			word: letters,
	// 			isCorrect: isWordValid,
	// 		},

	// const [currentAnagramWordScore, setCurrentAnagramWordScore] = useState(0);

	// checks validity of word and displays relative msg
	const checkWord = () => {
		// console.log(currentUserGuess);
		// setCurrentAnagramWord(currentUserGuess.join(''));
		// console.log(currentUserGuess);
		// console.log(conundrum);
		console.log('current word', currentAnagramWord);
		// if (currentAnagramWord === 'skipped') {
		// 	console.log('skipped');
		// 	// setCurrentAnagramWordScore(-2);
		// 	setAllAnagramUserWords([
		// 		...allAnagramUserWords,
		// 		{
		// 			word: currentTargetWord,
		// 			score: -1,
		// 			isCorrect: false,
		// 		},
		// 	]);
		// 	// showAlert(currentTargetWord);
		// 	// return;
		// }
		if (!dictionary.includes(currentAnagramWord)) {
			console.log('wrong');
			// setCurrentAnagramWordScore(-2);
			setAllAnagramUserWords([
				...allAnagramUserWords,
				{
					word: currentTargetWord,
					score: -1,
					isCorrect: false,
				},
			]);
			// showAlert(currentTargetWord);
			// return;
		}
		if (dictionary.includes(currentAnagramWord)) {
			console.log('right');
			// getWordScore();
			// setAllAnagramUserWords([...allAnagramUserWords, currentAnagramWord]);
			setAllAnagramUserWords([
				...allAnagramUserWords,
				{
					word: currentAnagramWord,
					score: 1,
					isCorrect: true,
				},
			]);

			// setAllAnagramUserWords([...allAnagramUserWords, [currentAnagramWord, currentAnagramWord.length]]);
			// showAlert('Correct!');
			// if (currentAnagramWord.length > longestWord.length) {
			// 	setLongestWord(currentAnagramWord);
			// }
			// if (currentAnagramWord === conundrum) {
			// 	setGotConundrum(true);
			// 	setIsNextDayCountdownActive(true);
			// 	setShowResults(true);
			// 	setTimeout(() => {
			// 		const gameLetterTiles = document.querySelectorAll('.card');
			// 		gameLetterTiles.forEach((tile) => {
			// 			tile.classList.remove('visible');
			// 		});
			// 	}, 2000);
			// }
			// return;
		}
		resetWord();
		getNewWord();
	};

	// const getWordScore = () => {
	// 	let newWordScore = 0;
	// 	switch (currentAnagramWord.length) {
	// 		case 9:
	// 			newWordScore = 20;
	// 			break;
	// 		case 8:
	// 			newWordScore = 13;
	// 			break;
	// 		case 7:
	// 			newWordScore = 10;
	// 			break;
	// 		case 6:
	// 			newWordScore = 7;
	// 			break;
	// 		case 5:
	// 			newWordScore = 5;
	// 			break;
	// 		case 4:
	// 			newWordScore = 3;
	// 			break;
	// 		case 3:
	// 			newWordScore = 1;
	// 			break;
	// 		default:
	// 			break;
	// 	}
	// 	setCurrentAnagramWordScore(newWordScore);
	// 	return;
	// };

	// updates ui with letter chosen by user
	useEffect(() => {
		// console.log('letters useEffect');
		const lettersElem = document.querySelectorAll('.guess-tile');
		// clear ui upon delete letter
		lettersElem.forEach((elem) => {
			elem.firstElementChild.classList.remove('reveal');
			elem.firstElementChild.textContent = '\u00a0';
		});
		for (let i = 0; i < currentAnagramWord.length; i++) {
			console.log(currentAnagramWord[i]);
			// console.log(lettersElem[i]);
			// const strElem = document.createElement('p');
			// strElem.classList.add('reveal');
			// strElem.textContent = letters[i];
			// lettersElem[i].appendChild(strElem);
			lettersElem[i].firstElementChild.classList.add('reveal');
			lettersElem[i].firstElementChild.textContent = currentAnagramWord[i];
			// lettersElem[i].textContent = letters[i];
		}
	}, [currentAnagramWord]);

	// const [first, setFirst] = useState(second)

	// const [currentGameData, setCurrentGameData] = useState({
	// 	words: 0,
	// 	score: 0,
	// 	winPercentage: 0,
	// })

	// console.log(setCurrentScore, setTotalWordCount);

	// useEffect(() => {

	// 	let totalWords = allAnagramUserWords.length;
	// 	setTotalWordCount(totalWords);
	// 	let totalScore = currentScore;
	// 	setCurrentScore((totalScore += currentAnagramWordScore));
	// }, [allAnagramUserWords]);

	return (
		<StyledGame>
			{/* <h2>{wordOfTheDay}</h2> */}
			{/* <div className='timer-container'>
				<ClockTimer letterRoundTicking={letterRoundTicking} />
			</div> */}
			{/* <GameTitle title='anagram round' /> */}
			{/* <Controls /> */}
			{/* <Controls handleStart={handleStart} isPlaying={isPlaying} /> */}
			{/* <GuessTiles /> */}
			{/* <InGameStats
				allAnagramUserWords={allAnagramUserWords}
				currentScore={currentScore}
				totalWordCount={totalWordCount}
			/> */}
			{/* <div className='words-display-container'> */}
			<UserWordsDisplay
				// conundrumOfTheDay={conundrumOfTheDay}
				// handleStartGame={handleStartGame}
				// shuffled={shuffled}
				// currentAnagramWord={currentAnagramWord}
				// setCurrentAnagramWord={setCurrentAnagramWord}
				allAnagramUserWords={allAnagramUserWords}
				setAllAnagramUserWords={setAllAnagramUserWords}
			/>
			{/* <DigitalTimer
				isTimerActive={isTimerActive}
				setIsTimerActive={setIsTimerActive}
			/> */}
			<NewDigitalTimer
				isTimerActive={isTimerActive}
				setIsTimerActive={setIsTimerActive}
				handleAnagramStart={handleAnagramStart}
			/>
			{/* </div> */}
			{/* <div className='game-variables-container'> */}
			<GamePanel
				// handleStart={handleStart}
				handleAnagramStart={handleAnagramStart}
				anagramGameMode={anagramGameMode}
				numberOfGuessTilesToRender={numberOfGuessTilesToRender}
				setNumberOfGuessTilesToRender={setNumberOfGuessTilesToRender}
			/>
			{/* <GamePanel handleStartGame={handleStartGame} /> */}
			{/* </div> */}
			{/* <div className='user-letter-container'>
				<UserLetterCards
					currentAnagramWord={currentAnagramWord}
					setCurrentAnagramWord={setCurrentAnagramWord}
					shuffled={shuffled}
					dictionary={dictionary}
					setAllAnagramUserWords={setAllAnagramUserWords}
					allAnagramUserWords={allAnagramUserWords}
				
					setShowResults={setShowResults}
					setIsNextDayCountdownActive={setIsNextDayCountdownActive}
				
				/>
			</div> */}
			{/* <InGameMessages /> */}
			{/* <InGameControls /> */}
			{/* <InGameControls handleDelete={handleDelete} handleSubmit={handleSubmit} /> */}
			{/* <PlayerTiles /> */}
			{/* <PlayerTiles handleLetter={handleLetter} /> */}
			{/* <div className='game-variables-container'>
				<GamePanel
					gameLetters={gameLetters}
					handleLetterGameStart={handleLetterGameStart}
					setLetterRoundData={setLetterRoundData}
					letterRoundData={letterRoundData}
				/>
			</div> */}

			{/* <div className='user-letter-container'> */}
			<UserLetterCards
				// currentLetterRoundWord={currentLetterRoundWord}
				// setCurrentLetterRoundWord={setCurrentLetterRoundWord}
				currentAnagramWord={currentAnagramWord}
				setCurrentAnagramWord={setCurrentAnagramWord}
				dictionary={dictionary}
				shuffledTiles={shuffledTiles}
				currentShuffledTargetWord={currentShuffledTargetWord}
				handleLetter={handleLetter}
				handleReset={handleReset}
				handleSubmit={handleSubmit}
				handleSkip={handleSkip}
				// setAllLetterRoundUserWords={setAllLetterRoundUserWords}
				// allLetterRoundUserWords={allLetterRoundUserWords}
				// setGotNineLetterWord={setGotNineLetterWord}
				// setLetterRoundLongestWord={setLetterRoundLongestWord}
				// letterRoundLongestWord={letterRoundLongestWord}
				// gameLetters={gameLetters}
				// setLetterRoundData={setLetterRoundData}
				// letterRoundData={letterRoundData}
			/>
			{/* </div> */}
			{/* <LetterRoundResults
				showLetterRoundResults={showLetterRoundResults}
				allLetterRoundUserWords={allLetterRoundUserWords}
				setAllLetterRoundUserWords={setAllLetterRoundUserWords}
				gameLetters={gameLetters}
				gotNineLetterWord={gotNineLetterWord}
				isNextDayCountdownActive={isNextDayCountdownActive}
				setIsNextDayCountdownActive={setIsNextDayCountdownActive}
				letterRoundLongestWord={letterRoundLongestWord}
				setGameLetters={setGameLetters}
			/> */}
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
