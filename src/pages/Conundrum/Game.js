import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import UserWordsDisplay from '../../components/Conundrum/UserWordsDisplay';
import { useNavigate } from 'react-router-dom';
import ConundrumUserLetterCards from '../../components/Conundrum/UserLetterCards';
// import YesterdayUserWordDisplay from '../../components/Conundrum/WeeksResultsTable';
import WeeksResultsTable from '../../components/Conundrum/WeeksResultsTable';
import ConundrumContextProvider from '../../contexts/ConundrumContext';

const ConundrumGame = ({
	dictionary,
	allNineLetterWords,
	allEightLetterWords,
	allSevenLetterWords,
	allSixLetterWords,
	allFiveLetterWords,
	allFourLetterWords,
	message,
	setMessage,
	conundrum,
	setConundrum,
	conundrumGameMode,
	setPageTitle,
	setIsConundrumCorrect,
	// conundrumGameMode
}) => {
	useEffect(() => {
		console.log('conundrum game render');
		setPageTitle(`conundrum: Level ${conundrumGameMode}`);
		// setPageTitle('conundrum');
	}, [setPageTitle, conundrumGameMode]);
	let navigate = useNavigate();
	const [conundrumOfTheDay, setConundrumOfTheDay] = useState([]);
	// const [yesterdayConundrum, setYesterdayConundrum] = useState()
	const [conundrumOfTheDayArray, setConundrumOfTheDayArray] = useState([]);
	const [shuffled, setShuffled] = useState([]);
	const [currentWord, setCurrentWord] = useState('');

	// TESTING VARIABLE LETTER LENGTH
	useEffect(() => {
		const offsetFromDate = new Date(2022, 0, 2);
		const msOffset = Date.now() - offsetFromDate;
		console.log(msOffset, 'ms');
		const dayOffset = msOffset / 1000 / 60 / 60 / 24;
		console.log(dayOffset, 'dos');
		console.log(allFourLetterWords, 'four');
		console.log(conundrumGameMode, 'gm');
		console.log(Math.floor(dayOffset), 'day offset');
		let getConundrumOfTheDay;
		switch (conundrumGameMode) {
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
			// return;
		}
		const getConundrumOfTheDayArray = getConundrumOfTheDay.split('');
		console.log(getConundrumOfTheDayArray, 'arr');
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
		conundrumGameMode,
		setConundrum,
	]);

	// shuffle word - WORKING
	function shuffleArray(array) {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
		return array;
	}

	const handleStartGame = (e) => {
		setMessage('good luck!');
		e.preventDefault();
		console.log(conundrum);
		const gameLetterTiles = document.querySelectorAll('.card');
		gameLetterTiles.forEach((tile) => {
			tile.classList.add('visible');
		});
		console.log(conundrumOfTheDay);
		console.log(conundrumOfTheDayArray);
		document.querySelectorAll('.button').forEach((btn) => {
			btn.classList.add('visible');
		});
	};

	return (
		<StyledConundrumGame>
			{/* <div className='back-btn-container'>
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
			</div> */}
			{/* <GamePanel handleStartGame={handleStartGame} shuffled={shuffled} /> */}
			<ConundrumContextProvider>
				<WeeksResultsTable
					currentWord={currentWord}
					conundrumGameMode={conundrumGameMode}
				/>
			</ConundrumContextProvider>
			<div className='back-btn-container'>
				<div className='button'>
					<button className='btn-back btn-cta' onClick={handleStartGame}>
						start game
					</button>
					<button
						className='btn-front btn-cta'
						onClick={() => {
							navigate('/');
						}}
					>
						back
					</button>
				</div>
			</div>
			<UserWordsDisplay currentWord={currentWord} />
			<ConundrumUserLetterCards
				currentWord={currentWord}
				setCurrentWord={setCurrentWord}
				shuffled={shuffled}
				dictionary={dictionary}
				conundrum={conundrum}
				setConundrum={setConundrum}
				setMessage={setMessage}
				setIsConundrumCorrect={setIsConundrumCorrect}
				conundrumGameMode={conundrumGameMode}
			/>
		</StyledConundrumGame>
	);
};
const StyledConundrumGame = styled.section`
	padding: 0;
	flex-direction: column;
	word-wrap: wrap;
	display: flex;
	flex: 1;
	position: relative;
	row-gap: 1rem;

	.back-btns-container {
		perspective: 500px;
		display: flex;
		column-gap: 2rem;
		margin-bottom: 1rem;
	}
	.button {
		position: relative;
		height: 45px;
		flex: 1;
	}
	.btn-cta {
		position: absolute;
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		overflow: hidden;
		backface-visibility: hidden;
		transition: transform 500ms ease-in-out;
		font-size: 3rem;
		border: none;
		outline: none;
		font-family: 'Bebas Neue', cursive;
		letter-spacing: 2px;
	}
	.button.visible .btn-back {
		transform: rotateX(-180deg);
	}
	.button.visible .btn-front {
		transform: rotateX(0);
	}

	.btn-back {
		font-size: 2rem;
		outline: none;
		background-color: ${({ theme }) => theme.bgChosen};
		color: ${({ theme }) => theme.syntax};
		display: grid;
		place-content: center;
		border-radius: 5px;
	}
	.btn-front {
		font-size: 3rem;
		outline: none;
		display: grid;
		place-content: center;
		border-radius: 5px;
		transform: rotateX(180deg);
		background-color: ${({ theme }) => theme.bgChosen};
		color: ${({ theme }) => theme.syntax};
		cursor: pointer;
		&.active {
			background-color: ${({ theme }) => theme.bgChosen};
		}
	}
`;
export default ConundrumGame;
