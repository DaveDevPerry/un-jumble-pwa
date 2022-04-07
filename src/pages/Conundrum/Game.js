import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ClockTimer from '../../components/Conundrum/ClockTimer';
import GamePanel from '../../components/Conundrum/GamePanel';
import UserLetterCards from '../../components/Conundrum/UserLetterCards';
import UserWordsDisplay from '../../components/Conundrum/UserWordsDisplay';
import ConundrumResults from '../../pages/Conundrum/Results';
import { useNavigate } from 'react-router-dom';
// import RotatingButton from '../../components/RotatingButton';

const ConundrumGame = ({
	dictionary,
	allNineLetterWords,
	allEightLetterWords,
	allSevenLetterWords,
	allSixLetterWords,
	allFiveLetterWords,
	allFourLetterWords,
	gameMode,
}) => {
	let navigate = useNavigate();
	const [conundrum, setConundrum] = useState('');
	const [conundrumOfTheDay, setConundrumOfTheDay] = useState([]);
	const [conundrumOfTheDayArray, setConundrumOfTheDayArray] = useState([]);
	const [shuffled, setShuffled] = useState([]);
	const [ticking, setTicking] = useState(false);
	const [currentWord, setCurrentWord] = useState('');
	const [allUserWords, setAllUserWords] = useState([]);
	const [showResults, setShowResults] = useState(false);
	const [gotConundrum, setGotConundrum] = useState(false);
	const [isNextDayCountdownActive, setIsNextDayCountdownActive] =
		useState(false);
	const [longestWord, setLongestWord] = useState('');

	// TESTING VARIABLE LETTER LENGTH
	useEffect(() => {
		const offsetFromDate = new Date(2022, 0, 1);
		const msOffset = Date.now() - offsetFromDate;
		const dayOffset = msOffset / 1000 / 60 / 60 / 24;
		let getConundrumOfTheDay;

		switch (gameMode) {
			case 9:
				getConundrumOfTheDay = allNineLetterWords[Math.floor(dayOffset)];
				break;
			case 8:
				getConundrumOfTheDay = allEightLetterWords[Math.floor(dayOffset)];
				break;
			case 7:
				getConundrumOfTheDay = allSevenLetterWords[Math.floor(dayOffset)];
				break;
			case 6:
				getConundrumOfTheDay = allSixLetterWords[Math.floor(dayOffset)];
				break;
			case 5:
				getConundrumOfTheDay = allFiveLetterWords[Math.floor(dayOffset)];
				break;
			case 4:
				getConundrumOfTheDay = allFourLetterWords[Math.floor(dayOffset)];
				break;
			default:
				console.error('error in word length choice');
				return;
		}

		const getConundrumOfTheDayArray = getConundrumOfTheDay.split('');
		setConundrum(getConundrumOfTheDay);
		setConundrumOfTheDay(getConundrumOfTheDay);
		setConundrumOfTheDayArray(getConundrumOfTheDayArray);
		setShuffled(shuffleArray(getConundrumOfTheDayArray));
	}, [
		allNineLetterWords,
		allEightLetterWords,
		allSevenLetterWords,
		allSixLetterWords,
		allFiveLetterWords,
		allFourLetterWords,
		gameMode,
	]);

	// WORKING WITH NINE LETTERS
	// useEffect(() => {
	// 	const offsetFromDate = new Date(2022, 0, 1);
	// 	const msOffset = Date.now() - offsetFromDate;
	// 	const dayOffset = msOffset / 1000 / 60 / 60 / 24;
	// 	const getConundrumOfTheDay = allNineLetterWords[Math.floor(dayOffset)];
	// 	const getConundrumOfTheDayArray = getConundrumOfTheDay.split('');
	// 	setConundrum(getConundrumOfTheDay);
	// 	setConundrumOfTheDay(getConundrumOfTheDay);
	// 	setConundrumOfTheDayArray(getConundrumOfTheDayArray);
	// 	setShuffled(shuffleArray(getConundrumOfTheDayArray));
	// }, [allNineLetterWords]);

	// shuffle word - WORKING
	function shuffleArray(array) {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
		return array;
	}

	const handleStartGame = (e) => {
		e.preventDefault();
		console.log(conundrum);
		setIsNextDayCountdownActive(true);
		document.querySelector('.start-btns-container').classList.add('hide');
		const gameLetterTiles = document.querySelectorAll('.card');
		gameLetterTiles.forEach((tile) => {
			tile.classList.add('visible');
			console.log(setTicking);
			console.log(conundrumOfTheDay);
			console.log(conundrumOfTheDayArray);
		});
		document.querySelectorAll('.button').forEach((btn) => {
			btn.classList.add('visible');
		});

		setTimeout(() => {
			// document.querySelector('.results-home-btn').style.pointerEvents = 'none';
			setTimeout(() => {
				// TURN THIS ON TO SHOW RESULTS PAGE
				setIsNextDayCountdownActive(true);
				// setTimeout(() => {}, 2000);
			}, 30000);
		}, 2000);
	};

	return (
		<StyledGame>
			{/* <Button url='/' */}
			{/* <div className='back-btn-container'>
				<RotatingButton url='/' name='try again later' />
			</div> */}
			<div className='back-btn-container'>
				<div className='button'>
					<button className='btn-back btn-cta'>back</button>
					<button
						className='btn-front btn-cta'
						onClick={() => {
							navigate('/');
						}}
					>
						try again later
					</button>
				</div>
			</div>
			<div className='timer-container hide'>
				<ClockTimer ticking={ticking} />
			</div>
			<div className='game-variables-container'>
				<GamePanel handleStartGame={handleStartGame} shuffled={shuffled} />
			</div>
			<div className='words-display-container'>
				<UserWordsDisplay
					// conundrumOfTheDay={conundrumOfTheDay}
					// handleStartGame={handleStartGame}
					// shuffled={shuffled}
					currentWord={currentWord}
					// setCurrentWord={setCurrentWord}
					// allUserWords={allUserWords}
					// setAllUserWords={setAllUserWords}
				/>
			</div>
			<div className='user-letter-container'>
				<UserLetterCards
					currentWord={currentWord}
					setCurrentWord={setCurrentWord}
					shuffled={shuffled}
					dictionary={dictionary}
					setAllUserWords={setAllUserWords}
					allUserWords={allUserWords}
					setGotConundrum={setGotConundrum}
					setLongestWord={setLongestWord}
					longestWord={longestWord}
					setShowResults={setShowResults}
					setIsNextDayCountdownActive={setIsNextDayCountdownActive}
					conundrum={conundrum}
					// conundrumOfTheDay={conundrumOfTheDay}
					// handleStartGame={handleStartGame}
					// usersBestWords={usersBestWords}
					// setUsersBestWords={setUsersBestWords}
				/>
			</div>
			<ConundrumResults
				showResults={showResults}
				conundrum={conundrum}
				gotConundrum={gotConundrum}
				isNextDayCountdownActive={isNextDayCountdownActive}
				setIsNextDayCountdownActive={setIsNextDayCountdownActive}
				// handleStartGame={handleStartGame}
				// shuffled={shuffled}
				// allUserWords={allUserWords}
				// conundrumOfTheDay={conundrumOfTheDay}
				// conundrumOfTheDayArray={conundrumOfTheDayArray}
				// setConundrumOfTheDayArray={setConundrumOfTheDayArray}
				// usersBestWords={usersBestWords}
				// setUsersBestWords={setUsersBestWords}
				// longestWord={longestWord}
			/>
		</StyledGame>
	);
};
const StyledGame = styled.section`
	/* padding: 0 1rem; */
	padding: 0;
	flex-direction: column;
	word-wrap: wrap;
	display: flex;
	flex: 1;
	position: relative;
	row-gap: 1rem;
	.back-btn-container {
		perspective: 500px;
	}

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
		.conundrum-meaning {
			font-family: 'Montserrat';
			font-size: 1.2rem;
			font-weight: 100;
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
		.conundrum-user-result {
			font-size: 4rem;
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
		} */
	/* .best-attempt {
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
		} */
	/* .wrapper {
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
			} */
	/* .share-wrapper {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: space-around;
				row-gap: 2rem;
				border-left: 2px solid ${({ theme }) => theme.bg};
				flex: 1;
				p {
					font-size: 1.6rem;
					line-height: 1;
				}
				button {
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: space-around;
					font-family: 'Bebas Neue', cursive;
					letter-spacing: 2px;
					font-size: 1.6rem;
					padding: 0.5rem 1rem;
					background-color: ${({ theme }) => theme.bgChosen};
					border: none;
					border-radius: 5px;
					color: ${({ theme }) => theme.syntax};
					cursor: pointer;
					padding: 0.2rem 1rem 0.5rem 1rem;
				}
			} */
	/* button {
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
		} */

	/* .back-btn-container {
		display: flex;
		align-items: center;
		.btn {
			width: 100%;
		}
	} */
	/* .timer-container {
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

	/* .user-answers-container {
		display: block;
		flex: 1;
	}
	.calculator-container {
		display: block;
	} */
`;
export default ConundrumGame;
