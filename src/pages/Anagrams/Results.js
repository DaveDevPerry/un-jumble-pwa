import React, { useEffect } from 'react';
// import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
// import NextGameCountdown from '../../components/Global/NextGameCountdown';
// import NextGameCountdown from '../../components/LettersRound/NextGameCountdown';
import { useNavigate } from 'react-router-dom';
// import { BsWhatsapp, BsFillShareFill } from 'react-icons/bs';
import GameTitle from '../../components/Global/GameTitle';
import ResultsFooter from '../../components/Global/ResultsFooter';
import UserWordResultsDisplay from '../../components/Anagrams/UserWordResultsDisplay';
// import GameLetterCards from '../../components/Conundrum/GameLetterCards';

const AnagramRoundResults = ({
	showAnagramRoundResults,
	// allLetterRoundUserWords,
	// setAllLetterRoundUserWords,
	// gameLetters,
	// setGameLetters,
	// letterRoundLongestWord,
	// gotNineLetterWord,
	setIsNextDayCountdownActive,
	isNextDayCountdownActive,
	// setLetterTypes,
	// setLetterRoundData,
	// letterRoundData,
	allAnagramUserWords,
	setAllAnagramUserWords,
}) => {
	useEffect(() => {
		console.log('anagram results render');
	}, []);
	let navigate = useNavigate();

	const shareMobile = () => {
		const gameType = 'anagram round';
		const gameScore = document.querySelector(
			'#share-anagram-points'
		).textContent;
		window.open(
			`whatsapp://send?text=I just scored ${gameScore} points on the ${gameType}.`
		);
	};

	// const [nineLetterWords, setNineLetterWords] = useState([]);
	// const [eightLetterWords, setEightLetterWords] = useState([]);
	// const [sevenLetterWords, setSevenLetterWords] = useState([]);
	// const [sixLetterWords, setSixLetterWords] = useState([]);
	// const [fiveLetterWords, setFiveLetterWords] = useState([]);
	// const [fourLetterWords, setFourLetterWords] = useState([]);
	// const [threeLetterWords, setThreeLetterWords] = useState([]);

	// useEffect(() => {
	// 	const sortedWordsByLength = allLetterRoundUserWords.sort(function (a, b) {
	// 		return parseFloat(b.length) - parseFloat(a.length);
	// 	});
	// 	const nineCount = sortedWordsByLength.filter((word) => {
	// 		return word.length === 9;
	// 	});
	// 	setNineLetterWords(nineCount);
	// 	const eightCount = sortedWordsByLength.filter((word) => {
	// 		return word.length === 8;
	// 	});
	// 	setEightLetterWords(eightCount);
	// 	const sevenCount = sortedWordsByLength.filter((word) => {
	// 		return word.length === 7;
	// 	});
	// 	setSevenLetterWords(sevenCount);
	// 	const sixCount = sortedWordsByLength.filter((word) => {
	// 		return word.length === 6;
	// 	});
	// 	setSixLetterWords(sixCount);
	// 	const fiveCount = sortedWordsByLength.filter((word) => {
	// 		return word.length === 5;
	// 	});
	// 	setFiveLetterWords(fiveCount);
	// 	const fourCount = sortedWordsByLength.filter((word) => {
	// 		return word.length === 4;
	// 	});
	// 	setFourLetterWords(fourCount);
	// 	const threeCount = sortedWordsByLength.filter((word) => {
	// 		return word.length === 3;
	// 	});
	// 	setThreeLetterWords(threeCount);

	// }, [
	// 	allLetterRoundUserWords,

	// ]);

	useEffect(() => {
		console.log('lr results');
	}, []);

	return (
		<>
			<GameTitle title='results' />
			<StyledAnagramResults>
				{/* <div className='anagram-stats-container'>
					<div className='stat-wrapper'>
						<p>03</p>
						<p>played</p>
					</div>
					<div className='stat-wrapper'>
						<p>607</p>
						<p>points</p>
					</div>
					<div className='stat-wrapper'>
						<p>100</p>
						<p>win %</p>
					</div>
					<div className='stat-wrapper'>
						<p>03</p>
						<p>current streak</p>
					</div>
					<div className='stat-wrapper'>
						<p>03</p>
						<p>max streak</p>
					</div>
				</div> */}
				<UserWordResultsDisplay allAnagramUserWords={allAnagramUserWords} />
				<div className='anagram-results-outcome-container'>
					<div className='points-container'>
						<h2 id='share-anagram-points'>
							{allAnagramUserWords.reduce((accumulator, object) => {
								return accumulator + object.score;
							}, 0)}
						</h2>
						<p>points</p>
					</div>
					{(() => {
						if (
							allAnagramUserWords.reduce((accumulator, object) => {
								return accumulator + object.score;
							}, 0) < 10
						) {
							return <p className='anagram-user-result'>NOT GREAT</p>;
						} else if (
							allAnagramUserWords.reduce((accumulator, object) => {
								return accumulator + object.score;
							}, 0) > 10
						) {
							return <p className='anagram-user-result'>GOOD GAME</p>;
						} else if (
							allAnagramUserWords.reduce((accumulator, object) => {
								return accumulator + object.score;
							}, 0) > 20
						) {
							return <p className='anagram-user-result'>EXCELLENT!</p>;
						}
					})()}
				</div>
				<ResultsFooter
					isNextDayCountdownActive={isNextDayCountdownActive}
					shareMobile={shareMobile}
				/>
			</StyledAnagramResults>
			<button
				className='results-home-btn'
				onClick={() => {
					setAllAnagramUserWords([]);
					navigate('/');
				}}
			>
				HOME
			</button>
		</>
	);
};
const StyledAnagramResults = styled.section`
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	background-color: ${({ theme }) => theme.bgTile};
	border-radius: 5px;
	padding: 1rem;
	transition: all 300ms ease-in;
	flex: 1;
	row-gap: 1rem;
	.anagram-results-outcome-container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		flex: 1;
		row-gap: 0.5rem;
		.points-container {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			h2 {
				color: ${({ theme }) => theme.bgChosen};
				font-size: 3rem;
				line-height: 0.7;
				font-weight: 400;
			}
			p {
				font-size: 2rem;
			}
		}
		.anagram-user-result {
			font-size: 3rem;
			border-top: 2px solid ${({ theme }) => theme.bgChosen};
			border-bottom: 2px solid ${({ theme }) => theme.bgChosen};
			font-family: 'Bebas Neue', cursive;
			letter-spacing: 1px;
			align-self: center;
			display: inline-block;
			padding: 0 1rem;
		}
	}
`;

export default AnagramRoundResults;
