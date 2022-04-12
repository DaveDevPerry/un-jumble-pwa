import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import CurrentWordDisplay from '../../components/LettersRound/CurrentWordDisplay';
// import ClockTimer from '../../components/LettersRound/ClockTimer';
// import GamePanel from '../../components/LettersRound/GamePanel';
import NewDigitalTimer from '../../components/LettersRound/NewDigitalTimer';
import UserLetterCards from '../../components/LettersRound/UserLetterCards';
import UserAllWordsDisplay from '../../components/LettersRound/UserWordsDisplay';
// import LetterRoundResults from '../../pages/LettersRound/Results';

const LetterRoundGame = ({
	gameLetters,
	// setGameLetters,
	dictionary,
	setLetterRoundData,
	letterRoundData,
	setGotNineLetterWord,
	// setShowLetterRoundResults,
	setLetterRoundLongestWord,
	letterRoundLongestWord,
	allLetterRoundUserWords,
	setAllLetterRoundUserWords,
	setCurrentLetterRoundWord,
	currentLetterRoundWord,
	setMessage,
	setPageTitle,
}) => {
	useEffect(() => {
		console.log('lr game render');
		setPageTitle('letter round');
	}, [setPageTitle]);
	// let navigate = useNavigate();
	// const [letterRoundTicking, setLetterRoundTicking] = useState(false);
	// const [currentLetterRoundWord, setCurrentLetterRoundWord] = useState('');
	const [isTimerActive, setIsTimerActive] = useState(false);
	// const [isTimerActive, setIsTimerActive] = useState(false);
	// const [allLetterRoundUserWords, setAllLetterRoundUserWords] = useState([]);
	// const [showLetterRoundResults, setShowLetterRoundResults] = useState(false);
	// const [letterRoundUsersBestWords, setLetterRoundUsersBestWords] = useState(
	// 	[]
	// );
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
	// 	setIsTimerActive(true);
	// };

	const handleLetterRoundStart = (e) => {
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
		console.log('reset tiles');
		setCurrentLetterRoundWord('');
		// setCurrentAnagramWord([]);
		// setCurrentUserGuess([]);
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
		// setCurrentLetterRoundWord((currentLetterRoundWord += e.target.textContent));
		// setCurrentAnagramWord([]);
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
			// tile.textContent = '\u00A0';
			tile.style.pointerEvents = 'initial';
		});
	};
	const checkWord = () => {
		console.log('current word', currentLetterRoundWord);
		if (!dictionary.includes(currentLetterRoundWord.toLowerCase())) {
			console.log('wrong');
			const wrongWordMessages = [
				"that's not a word!",
				"I don't think so!",
				'you what?',
				'incorrect!',
				'worth a try!',
			];
			// console.log(Math.random() * wrongWordMessages.length);
			setMessage(
				wrongWordMessages[Math.floor(Math.random() * wrongWordMessages.length)]
			);
			// setCurrentAnagramWordScore(-2);
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
			console.log('right');
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
		// resetWord(); - yes or no?
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
	const tileAudio = () => {
		const audio = new Audio('/audio/tile.mp3');
		audio.play();
	};
	const playClear = () => {
		const audio = new Audio('/audio/negative.mp3');
		audio.play();
	};

	return (
		<StyledGame>
			{/* <ClockTimer letterRoundTicking={letterRoundTicking} /> */}

			<UserAllWordsDisplay
				// handleLetterGameStart={handleLetterGameStart}
				currentLetterRoundWord={currentLetterRoundWord}
				setCurrentLetterRoundWord={setCurrentLetterRoundWord}
				allLetterRoundUserWords={allLetterRoundUserWords}
				setAllLetterRoundUserWords={setAllLetterRoundUserWords}
			/>
			<NewDigitalTimer
				isTimerActive={isTimerActive}
				setIsTimerActive={setIsTimerActive}
				handleLetterRoundStart={handleLetterRoundStart}
				setMessage={setMessage}
			/>
			<CurrentWordDisplay currentLetterRoundWord={currentLetterRoundWord} />
			{/* <GamePanel
				// handleStart={handleStart}
				handleLetterRoundStart={handleLetterRoundStart}
			/> */}
			{/* <GamePanel
				gameLetters={gameLetters}
				handleLetterGameStart={handleLetterGameStart}
				setLetterRoundData={setLetterRoundData}
				letterRoundData={letterRoundData}
			/> */}
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
				// currentAnagramWord={currentAnagramWord}
				// setCurrentAnagramWord={setCurrentAnagramWord}
				// shuffledTiles={shuffledTiles}
				// currentShuffledTargetWord={currentShuffledTargetWord}
				handleLetter={handleLetter}
				handleReset={handleReset}
				handleSubmit={handleSubmit}
				// handleSkip={handleSkip}
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
	/* .results-modal {
		display: none;
		opacity: 0;
		justify-content: space-between;
		flex-direction: column;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		height: 100%;
		width: 100%;
		z-index: 500;
		background-color: ${({ theme }) => theme.bgTile};
		padding: 1rem;
		border-radius: 10px;
		transition: all 300ms ease-in;
		h2 {
			font-family: 'Bebas Neue', cursive;
			display: flex;
			align-items: center;
			align-self: center;
			font-size: 2.5rem;
			font-weight: 100;
		}
		.stats-container {
			display: flex;
			justify-content: space-evenly;
			align-items: flex-start;

			.stat-wrapper {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: flex-start;
				flex-wrap: wrap;
				flex: 1;
			}
			p {
				font-size: 3rem;
				font-weight: 100;
				line-height: 1;
				color: ${({ theme }) => theme.bgChosen};
				&:last-child {
					font-family: 'Montserrat';
					text-transform: capitalize;
					font-size: 1.2rem;
					font-weight: 400;
					text-align: center;
					color: ${({ theme }) => theme.syntax};
				}
			}
		}
		.points-container {
			display: flex;
			flex-direction: column;
			align-items: center;
			h2 {
				color: ${({ theme }) => theme.bgChosen};
				font-size: 5rem;
				line-height: 0.7;
				font-weight: 400;
			}
			p {
				font-size: 2rem;
			}
		}
		.letter-round-ai-best-word {
			font-family: 'Montserrat';
			font-size: 1.2rem;
		}
		.letter-round-player-word-table {
			align-self: center;
			font-size: 1.8rem;
			th {
				font-weight: lighter;
			}

			tr {
				td {
					padding: 0rem 0.2rem;
					&:nth-child(2) {
						color: ${({ theme }) => theme.bgChosen};
						font-weight: bolder;
					}
					&:last-child {
						color: ${({ theme }) => theme.bgChosen};
						text-align: right;
						font-weight: bolder;
						.small-pts {
							font-size: 1.4rem;
							padding-left: 0.2rem;
						}
					}
				}
			}
		}
		.letter-round-user-result {
			font-size: 2.6rem;
			border-top: 2px solid ${({ theme }) => theme.bgChosen};
			border-bottom: 2px solid ${({ theme }) => theme.bgChosen};
		}
		.rank-container {
			display: flex;
			flex-direction: row;
			align-items: center;
			display: none;
			p {
			}
		}
		.best-attempt {
			list-style: none;

			li {
				display: flex;
				justify-content: center;
				align-items: center;
				letter-spacing: 2px;
				column-gap: 1rem;
				p {
					font-size: 2rem;
					span {
						color: ${({ theme }) => theme.bgChosen};
						font-size: 2.6rem;
					}
				}
			}
		}
		.wrapper {
			display: flex;
			width: 100%;
			justify-content: space-between;

			.next-wrapper {
				display: flex;
				justify-content: center;
				flex-direction: column;
				align-items: center;
				flex: 1;

				p {
					font-size: 1.6rem;
					color: ${({ theme }) => theme.bgChosen};
					line-height: 1;
					font-weight: bolder;
					&:last-child {
						font-size: 2rem;
						font-weight: lighter;
						color: ${({ theme }) => theme.syntax};
					}
				}
			}
			.share-wrapper-whatsapp {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: space-around;
				row-gap: 2rem;
				border-left: 2px solid ${({ theme }) => theme.bgChosen};
				flex: 1;
				.share-btn-whatsapp {
					display: flex;
					flex-direction: row;
					align-items: center;
					justify-content: space-between;
					letter-spacing: 2px;
					font-size: 1.6rem;
					padding: 0.5rem 1rem;
					background-color: ${({ theme }) => theme.bgChosen};
					border: none;
					border-radius: 5px;
					color: ${({ theme }) => theme.syntax};
					cursor: pointer;
					padding: 0.2rem 1rem 0.5rem 1rem;
					column-gap: 1rem;
				}
			}

			button {
				display: flex;
				align-items: center;
				border: none;
				background-color: ${({ theme }) => theme.bgChosen};
				column-gap: 1rem;
			}
		}
		&.show {
			display: flex;
			opacity: 1;
		}
	}
	.timer-container {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.game-variables-container {
		display: block;
		opacity: 1;
		transition: opacity 300ms ease-in;
	}
	.words-display-container {
		display: flex;

		flex: 1;
	}
	.user-letter-container {
		display: block;
	} */
`;
export default LetterRoundGame;
