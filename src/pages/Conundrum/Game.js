import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
// import ClockTimer from '../../components/Conundrum/ClockTimer';
import GamePanel from '../../components/Conundrum/GamePanel';
import UserWordsDisplay from '../../components/Conundrum/UserWordsDisplay';
import { useNavigate } from 'react-router-dom';
import ConundrumUserLetterCards from '../../components/Conundrum/UserLetterCards';

const ConundrumGame = ({
	dictionary,
	allNineLetterWords,
	allEightLetterWords,
	allSevenLetterWords,
	allSixLetterWords,
	allFiveLetterWords,
	allFourLetterWords,
	gameMode,
	conundrum,
	setConundrum,
}) => {
	useEffect(() => {
		console.log('conundrum game render');
	}, []);
	let navigate = useNavigate();
	const [conundrumOfTheDay, setConundrumOfTheDay] = useState([]);
	const [conundrumOfTheDayArray, setConundrumOfTheDayArray] = useState([]);
	const [shuffled, setShuffled] = useState([]);
	const [currentWord, setCurrentWord] = useState('');

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
		e.preventDefault();
		console.log(conundrum);
		document.querySelector('.start-btns-container').classList.add('hide');
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
			{/* <ClockTimer ticking={ticking} /> */}
			<GamePanel handleStartGame={handleStartGame} shuffled={shuffled} />
			<UserWordsDisplay currentWord={currentWord} />
			<ConundrumUserLetterCards
				currentWord={currentWord}
				setCurrentWord={setCurrentWord}
				shuffled={shuffled}
				dictionary={dictionary}
				conundrum={conundrum}
				setConundrum={setConundrum}
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
	.back-btn-container {
		perspective: 500px;
	}
`;
export default ConundrumGame;
