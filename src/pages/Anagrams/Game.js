import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
// import Controls from '../../components/Anagrams/Controls';
import GamePanel from '../../components/Anagrams/GamePanel';
// import GuessTiles from '../../components/Anagrams/GuessTiles';

// import InGameControls from '../../components/Anagrams/InGameControls';
// import InGameMessages from '../../components/Anagrams/InGameMessages';
import InGameStats from '../../components/Anagrams/InGameStats';
// import PlayerTiles from '../../components/Anagrams/PlayerTiles';
import UserLetterCards from '../../components/Anagrams/UserLetterCards';
// import UserLetterCards from '../../components/Anagrams/UserLetterCards';
import UserWordsDisplay from '../../components/Anagrams/UserWordsDisplay';
import GameTitle from '../../components/Global/GameTitle';
// import Timer from '../../components/Anagrams/Timer';
import DigitalTimer from '../../components/Anagrams/DigitalTimer';
// import ClockTimer from '../../components/Anagrams/ClockTimer';
// import GamePanel from '../../components/Anagrams/GamePanel';
// import UserLetterCards from '../../components/Anagrams/UserLetterCards';
// import UserAllWordsDisplay from '../../components/Anagrams/UserWordsDisplay';

const AnagramRoundGame = ({
	gameLetters,
	setGameLetters,
	dictionary,
	setLetterRoundData,
	letterRoundData,
	allFiveLetterWords,
}) => {
	// const [allShuffled, setAllShuffled] = useState([]);
	// const [totalWordCount, setTotalWordCount] = useState(0);
	// const [validWordCount, setValidWordCount] = useState(0);
	// const [invalidWordCount, setInvalidWordCount] = useState(0);
	// const [letters, setLetters] = useState('');
	// const [letterIndex, setLetterIndex] = useState([]);

	// const [gameData, setGameData] = useState(null);
	// const [wordData, setWordData] = useState([]);
	// const [isPlaying, setIsPlaying] = useState(false);
	// const [startTime, setStartTime] = useState(null);
	// const [endTime, setEndTime] = useState(null);
	// const [isTimer, setIsTimer] = useState(null);

	// temp for handling end of game instead of timer
	// const [wordCount, setWordCount] = useState(-1);
	// const [highScore, setHighScore] = useState(null);
	// const [newHighScore, setNewHighScore] = useState(0);

	// const [totalGamesPlayed, setTotalGamesPlayed] = useState(0);

	// runs when user submits a word
	// const handleSubmit = (e) => {
	// 	// @note - ADD CHECK for letters.length = 5
	// 	e.preventDefault();
	// 	if (letters.length < 5) {
	// 		showAlert('Not enough letters');
	// 		return;
	// 	}
	// 	if (letters.length === 5) {
	// 		check();
	// 		checkWord();
	// 	}

	// 	console.log(currentAnagramWord);
	// };
	// checks validity of word and displays relative msg
	// const checkWord = () => {
	// 	setTotalWordCount(totalWordCount + 1);
	// 	// let isWordValid;
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
	// 	]);
	// };
	// clears letters from ui
	// const resetWord = () => {
	// 	console.log('reset word - check states');
	// 	setLetterIndex([]);
	// 	setLetters('');
	// 	document.querySelectorAll('.guess-tile').forEach((elem) => {
	// 		// elem.textContent = '\u00A0';
	// 		elem.firstElementChild.classList.remove('reveal');
	// 		setTimeout(() => {
	// 			elem.firstElementChild.textContent = '\u00a0';
	// 		}, 500);
	// 	});
	// 	const currentTileElement = document.querySelectorAll('.tile');
	// 	currentTileElement.forEach((tile) => {
	// 		tile.classList.remove('active');
	// 		tile.textContent = '\u00A0';
	// 		tile.style.pointerEvents = 'initial';
	// 	});
	// };
	// sets order of letters in word chosen by user
	// const handleLetter = (e) => {
	// 	tile();
	// 	e.preventDefault();
	// 	// console.log(e.target.dataset.tile);
	// 	setLetterIndex([...letterIndex, e.target.dataset.tile]);
	// 	// console.log(letterIndex);
	// 	setLetters(letters + e.target.textContent);
	// 	if (e.target.classList.contains('active')) {
	// 		e.target.classList.remove('active');
	// 		e.target.style.pointerEvents = 'initial';
	// 	} else {
	// 		e.target.classList.add('active');
	// 		e.target.style.pointerEvents = 'none';
	// 	}
	// };
	// gets new word from word array to create letter elements
	// const getNewWord = () => {
	// 	if (!isPlaying) {
	// 		console.log('is playing', isPlaying);
	// 		// closeModal()
	// 	}
	// 	setWordCount(wordCount + 1);
	// 	const currentTileElement = document.querySelectorAll('.tile');
	// 	currentTileElement.forEach((tile) => {
	// 		tile.classList.remove('active');
	// 		tile.textContent = '\u00A0';
	// 		tile.style.pointerEvents = 'initial';
	// 	});
	// 	// const lettersElem = document.querySelectorAll('.guess-tile');
	// 	// lettersElem.forEach((guess) => {
	// 	// 	guess.firstElementChild.classList.remove('reveal');
	// 	// });
	// 	const newWord =
	// 		allFiveLetterWords[Math.floor(Math.random() * allFiveLetterWords.length)];
	// 	// console.log(newWord);
	// 	setCurrentAnagramWord(newWord);
	// 	const shuffleLetters = shuffleArray(newWord.split(''));
	// 	// console.log(shuffleLetters);
	// 	renderNewWord(shuffleLetters);
	// };
	// // renders the letters for user to select
	// const renderNewWord = (array) => {
	// 	document.querySelector('#l1').textContent = array[0];
	// 	document.querySelector('#l2').textContent = array[1];
	// 	document.querySelector('#l3').textContent = array[2];
	// 	document.querySelector('#l4').textContent = array[3];
	// 	document.querySelector('#l5').textContent = array[4];
	// };

	// useEffect(() => {
	// 	if (wordCount === 60) {
	// 		setIsPlaying(false);
	// 	}
	// 	// console.log('words played', wordCount);
	// }, [wordCount]);

	// shuffle word - WORKING
	// function shuffleArray(array) {
	// 	for (let i = array.length - 1; i > 0; i--) {
	// 		const j = Math.floor(Math.random() * (i + 1));
	// 		[array[i], array[j]] = [array[j], array[i]];
	// 	}
	// 	return array;
	// }
	// inits one full game playthrough
	// const play = () => {
	// 	setIsPlaying(true);
	// 	getNewWord();
	// };

	// set ui and states back to initial - also sets game data
	// const closeModal = (e) => {
	// 	closeModalAudio();
	// 	e.preventDefault();
	// 	console.log('handle end');

	// 	// setGameData({
	// 	// 	start: startTime,
	// 	// 	end: endTime,
	// 	// 	allWordData: wordData,
	// 	// 	wordsPlayed: totalWordCount,
	// 	// 	wordsCorrect: validWordCount,
	// 	// 	wordsIncorrect: invalidWordCount,
	// 	// 	// deleteCount: 0,
	// 	// });
	// 	setTimeout(() => {
	// 		setIsTimer(null);
	// 	}, 1000);
	// 	setTimeout(() => {
	// 		setTotalWordCount(0);
	// 		setValidWordCount(0);
	// 		setInvalidWordCount(0);
	// 		setWordData([]);
	// 		// time = 60;
	// 		setLetters('');
	// 		resetWord();
	// 		document.querySelectorAll('.tile').forEach((tile) => {
	// 			tile.textContent = '\u00A0';
	// 		});
	// 	}, 1500);
	// };
	// deletes last letter from letters state
	// const handleDelete = (e) => {
	// 	e.preventDefault();
	// 	if (letters.length === 0 || letters === '') return;
	// 	deleteAudio();

	// 	// console.log(letters);
	// 	const lastLetterIndex = letterIndex[letterIndex.length - 1];
	// 	const undoLastUserTileChoice = document.querySelector(
	// 		`[data-tile="${lastLetterIndex}"]`
	// 	);
	// 	undoLastUserTileChoice.classList.remove('active');
	// 	undoLastUserTileChoice.style.pointerEvents = 'initial';
	// 	// console.log(undoLastUserTileChoice);
	// 	setLetterIndex(letterIndex.slice(0, -1));
	// 	setLetters(letters.slice(0, -1));
	// 	// console.log(letters);
	// };
	// when user clicks , sets start time, runs timer and calls play()
	// const handleStart = (e) => {
	// 	startAudio();
	// 	e.preventDefault();
	// 	setStartTime(new Date().getMilliseconds());
	// 	runTimer();
	// 	// createNewGameData();
	// 	play();
	// };

	// checks storage for app data and also sets storage after each game
	// useEffect(() => {
	// 	console.log('storage functions now');
	// 	console.log(gameData);

	// 	if (!localStorage.getItem('unscramble-v3')) {
	// 		localStorage.setItem(
	// 			'unscramble-v3',
	// 			JSON.stringify([{ highestScore: 0 }])
	// 		);
	// 		console.log('check ls');
	// 	}
	// 	const lsData = JSON.parse(localStorage.getItem('unscramble-v3'));
	// 	lsData[0].highestScore = newHighScore;
	// 	// console.log(typeof lsData);
	// 	// console.log(lsData);
	// 	if (gameData) {
	// 		lsData.push(gameData);
	// 		localStorage.setItem('unscramble-v3', JSON.stringify(lsData));
	// 	} else {
	// 		console.log('no game data yet');
	// 	}

	// 	// render highscore

	// 	// set highscore
	// }, [gameData, newHighScore]);

	// let time = 120;
	// let hs = 0;

	// updates ui countdown
	// useEffect(() => {
	// 	setTimeout(() => {
	// 		document.querySelector('#timer-element').textContent = time;
	// 	}, 1000);
	// }, [time]);

	// runs timer til 0
	// const runTimer = () => {
	// 	let timer = setInterval(() => {
	// 		console.log('timer');
	// 		if (time > 5 && time <= 10) {
	// 			beep();
	// 		}
	// 		if (time < 10) {
	// 			document.querySelector('#timer-element').textContent = `0${time}`;
	// 		} else {
	// 			document.querySelector('#timer-element').textContent = time;
	// 		}
	// 		// document.querySelector('#timer-element').textContent = time;
	// 		if (time >= 1 && time <= 5) {
	// 			// console.log('pulse');
	// 			document.querySelector('.timer-card').classList.add('pulse');
	// 			buzzer();
	// 		}
	// 		if (time === 0) {
	// 			end();
	// 			clearInterval(timer);
	// 			// openModalAudio();
	// 			setTimeout(() => {
	// 				openModalAudio();
	// 			}, 1000);
	// 			setTimeout(() => {
	// 				// console.log('time zero');
	// 				// console.log(highScore, newHighScore, validWordCount);

	// 				setIsTimer(false);

	// 				setEndTime(new Date().getMilliseconds());

	// 				// clearInterval(timer);

	// 				setIsPlaying(false);
	// 				document.querySelector('.timer-card').classList.remove('pulse');

	// 				const validCount = parseInt(
	// 					document.querySelector('#v-word-count').textContent
	// 				);
	// 				console.log('v count', validCount);
	// 				setNewHighScore(validCount);
	// 				// saveGame();
	// 			}, 1500);
	// 		}
	// 		time--;
	// 	}, 1000);
	// };

	// // // shows user is word is valid - WORKING
	// function showAlert(message, duration = 2000) {
	// 	// console.log('show alert');
	// 	// console.log({ message });
	// 	const alertContainer = document.querySelector('[data-alert-container]');
	// 	const alert = document.createElement('div');

	// 	// alert.textContent = message;
	// 	// add flash class for new high score
	// 	if (message === 'NEW HIGH SCORE!') {
	// 		alert.textContent = message;
	// 		alert.classList.add('flash');
	// 	}
	// 	if (message === 'Correct!') {
	// 		alert.textContent = message;
	// 		alert.style.color = 'green';
	// 	}
	// 	if (message === 'Invalid Word') {
	// 		alert.textContent = message;
	// 		alert.style.color = 'red';
	// 	}
	// 	alert.textContent = message;
	// 	alert.classList.add('alert');
	// 	alertContainer.prepend(alert);
	// 	if (duration == null) return;
	// 	setTimeout(() => {
	// 		alert.classList.add('hide');
	// 		alert.addEventListener('transitionend', () => {
	// 			alert.remove();
	// 		});
	// 	}, duration);
	// }

	// audio
	// const buzzer = () => {
	// 	const audio = new Audio(newBuzzAudio);
	// 	audio.play();
	// };
	// const buzzer = () => {
	// 	const audio = new Audio('/audio/buzz.mp3');
	// 	audio.play();
	// };
	// const beep = () => {
	// 	const audio = new Audio('/audio/beep.mp3');
	// 	audio.play();
	// };
	// const tile = () => {
	// 	const audio = new Audio('/audio/tile.mp3');
	// 	audio.play();
	// };
	// const end = () => {
	// 	const audio = new Audio('/audio/end.mp3');
	// 	audio.play();
	// };
	// const deleteAudio = () => {
	// 	const audio = new Audio('/audio/delete.mp3');
	// 	audio.play();
	// };
	// const check = () => {
	// 	const audio = new Audio('/audio/check.mp3');
	// 	audio.play();
	// };
	// const openModalAudio = () => {
	// 	const audio = new Audio('/audio/openModal.mp3');
	// 	audio.play();
	// };
	// const closeModalAudio = () => {
	// 	const audio = new Audio('/audio/closeModal.mp3');
	// 	audio.play();
	// };
	// // const startAudio = () => {
	// // 	const audio = new Audio(newStartAudio);
	// // 	audio.play();
	// // };
	// const startAudio = () => {
	// 	const audio = new Audio('/audio/start.mp3');
	// 	audio.play();
	// };

	// get stats - games played
	// get total games
	// useEffect(() => {
	// 	const fromLs = JSON.parse(localStorage.getItem('unscramble-v3'));
	// 	const totalGamesCount = fromLs.length - 1;
	// 	// console.log(totalGamesPlayed, 'total ');
	// 	setTotalGamesPlayed(totalGamesCount);
	// }, [totalGamesPlayed]);
	// const [letterRoundTicking, setLetterRoundTicking] = useState(false);
	// const [currentLetterRoundWord, setCurrentLetterRoundWord] = useState('');
	// const [allLetterRoundUserWords, setAllLetterRoundUserWords] = useState([]);
	// const [showLetterRoundResults, setShowLetterRoundResults] = useState(false);
	// // const [letterRoundUsersBestWords, setLetterRoundUsersBestWords] = useState(
	// // 	[]
	// // );
	// const [gotNineLetterWord, setGotNineLetterWord] = useState('');
	// const [isNextDayCountdownActive, setIsNextDayCountdownActive] =
	// 	useState(false);
	// const [letterRoundLongestWord, setLetterRoundLongestWord] = useState('');

	// const updatePlayed = () => {
	// 	// letterRoundData.score += newWordScore;
	// 	// const newData =
	// 	// letterRoundData.words.push(newWord);
	// 	console.log(letterRoundData, 'new lrd');
	// 	const fromLs = JSON.parse(localStorage.getItem('countdown-v1'));
	// 	const wordObj = fromLs.find((Obj) => Obj.gameType === 'letter round');
	// 	// wordObj.words.push(newWord);
	// 	wordObj.played += 1;
	// 	localStorage.setItem('countdown-v1', JSON.stringify(fromLs));
	// 	setLetterRoundData(letterRoundData);
	// 	console.log(letterRoundData, 'new lrd');
	// };

	// const handleLetterGameStart = (e) => {
	// 	e.preventDefault();
	// 	document.querySelector('.start-btns-container').classList.add('hide');
	// 	const gameLetterTiles = document.querySelectorAll('.card');
	// 	gameLetterTiles.forEach((tile) => {
	// 		tile.classList.add('visible');
	// 		console.log(setShowLetterRoundResults);
	// 	});
	// 	document.querySelectorAll('.button').forEach((btn) => {
	// 		btn.classList.add('visible');
	// 	});

	// 	setTimeout(() => {
	// 		// setNumberTarget(randomNumber);
	// 		setLetterRoundTicking(true);
	// 		document.querySelector('.results-home-btn').style.pointerEvents = 'none';
	// 		timerAudio();
	// 		setTimeout(() => {
	// 			// TURN THIS ON TO SHOW RESULTS PAGE
	// 			updatePlayed();
	// 			setIsNextDayCountdownActive(true);
	// 			setShowLetterRoundResults(true);
	// 			setLetterRoundTicking(false);

	// 			setTimeout(() => {
	// 				const gameLetterTiles = document.querySelectorAll('.card');
	// 				gameLetterTiles.forEach((tile) => {
	// 					tile.classList.remove('visible');
	// 					// console.log(setShowResults);
	// 				});
	// 				document.querySelector('.results-home-btn').style.pointerEvents =
	// 					'initial';
	// 			}, 2000);
	// 		}, 30000);
	// 	}, 2000);
	// };

	// const timerAudio = () => {
	// 	const audio = new Audio('/audio/cc timer30.mp3');
	// 	audio.play();
	// };
	const [currentTargetWord, setCurrentTargetWord] = useState('');
	const [currentShuffledTargetWord, setCurrentShuffledTargetWord] = useState([
		'a',
		'v',
		'd',
		'd',
		'i',
	]);
	const [shuffledTiles, setShuffledTiles] = useState(null);
	// const [currentUserGuess, setCurrentUserGuess] = useState('');
	const [currentAnagramWord, setCurrentAnagramWord] = useState('');
	const [allAnagramUserWords, setAllAnagramUserWords] = useState([]);
	const [isTimerActive, setIsTimerActive] = useState(false);

	useEffect(() => {
		setCurrentTargetWord(
			allFiveLetterWords[Math.floor(Math.random() * allFiveLetterWords.length)]
		);
	}, [allFiveLetterWords]);

	const handleStart = (e) => {
		e.preventDefault();

		const root = document.querySelector(':root');
		root.style.setProperty('--letter-count', 5);
		// }
		// start timer
		// runTimer()
		setIsTimerActive(true);
		// get current target word
		getNewWord();
		document.querySelector('.start-btns-container').classList.add('hide');
		const gameLetterTiles = document.querySelectorAll('.guess');
		gameLetterTiles.forEach((tile) => {
			tile.classList.add('visible');
			// console.log(setShowLetterRoundResults);
		});
		document.querySelectorAll('.button').forEach((btn) => {
			btn.classList.add('visible');
		});
		document.querySelectorAll('.card').forEach((card) => {
			card.classList.add('visible');
		});
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
	const getNewWord = () => {
		setCurrentTargetWord(
			allFiveLetterWords[Math.floor(Math.random() * allFiveLetterWords.length)]
		);

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

	const handleReset = (e) => {
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
		setCurrentAnagramWord([]);
		// setCurrentUserGuess([]);
		const tiles = document.querySelectorAll('.card-front');
		tiles.forEach((tile) => {
			tile.classList.remove('active');
			tile.style.pointerEvents = 'initial';
		});
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

	const [currentAnagramWordScore, setCurrentAnagramWordScore] = useState(0);

	// checks validity of word and displays relative msg
	const checkWord = () => {
		// console.log(currentUserGuess);
		// setCurrentAnagramWord(currentUserGuess.join(''));
		// console.log(currentUserGuess);
		// console.log(conundrum);
		console.log('current word', currentAnagramWord);
		if (!dictionary.includes(currentAnagramWord)) {
			console.log('wrong');
			setCurrentAnagramWordScore(-2);
			setAllAnagramUserWords([
				...allAnagramUserWords,
				{
					word: currentTargetWord,
					score: currentAnagramWordScore,
					isCorrect: false,
				},
			]);
			// showAlert(currentTargetWord);
			// return;
		}
		if (dictionary.includes(currentAnagramWord)) {
			console.log('right');
			getWordScore();
			// setallAnagramUserWords([...allAnagramUserWords, currentAnagramWord]);
			setAllAnagramUserWords([
				...allAnagramUserWords,
				{
					word: currentAnagramWord,
					score: currentAnagramWordScore,
					isCorrect: true,
				},
			]);

			// setallAnagramUserWords([...allAnagramUserWords, [currentAnagramWord, currentAnagramWord.length]]);
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
		setCurrentAnagramWordScore(newWordScore);
		return;
	};

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
			console.log(lettersElem[i]);
			// const strElem = document.createElement('p');
			// strElem.classList.add('reveal');
			// strElem.textContent = letters[i];
			// lettersElem[i].appendChild(strElem);
			lettersElem[i].firstElementChild.classList.add('reveal');
			lettersElem[i].firstElementChild.textContent = currentAnagramWord[i];
			// lettersElem[i].textContent = letters[i];
		}
	}, [currentAnagramWord]);

	// const [first, setfirst] = useState(second)

	// const [currentGameData, setCurrentGameData] = useState({
	// 	words: 0,
	// 	score: 0,
	// 	winPercentage: 0,
	// })
	const [currentScore, setCurrentScore] = useState(0);
	const [totalWordCount, setTotalWordCount] = useState(0);
	console.log(setCurrentScore, setTotalWordCount);
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
			<GameTitle title='anagram round' />
			{/* <Controls /> */}
			{/* <Controls handleStart={handleStart} isPlaying={isPlaying} /> */}
			{/* <GuessTiles /> */}
			<InGameStats
				allAnagramUserWords={allAnagramUserWords}
				currentScore={currentScore}
				totalWordCount={totalWordCount}
			/>
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
			<DigitalTimer
				isTimerActive={isTimerActive}
				setIsTimerActive={setIsTimerActive}
			/>
			{/* </div> */}
			{/* <div className='game-variables-container'> */}
			<GamePanel handleStart={handleStart} />
			{/* <GamePanel handleStartGame={handleStartGame} /> */}
			{/* </div> */}
			{/* <div className='user-letter-container'>
				<UserLetterCards
					currentAnagramWord={currentAnagramWord}
					setCurrentAnagramWord={setCurrentAnagramWord}
					shuffled={shuffled}
					dictionary={dictionary}
					setallAnagramUserWords={setallAnagramUserWords}
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
