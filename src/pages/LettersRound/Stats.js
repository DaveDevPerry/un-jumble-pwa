import React, { useEffect, useContext, useState } from 'react';
import styled from 'styled-components';
import { MdOutlineClose } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

import { LetterRoundContext } from '../../contexts/LetterRoundContext';

const LetterRoundStats = ({ setPageTitle }) => {
	const { games } = useContext(LetterRoundContext);
	let navigate = useNavigate();

	const [totalWordCount, setTotalWordCount] = useState(0);
	const [totalScoreCount, setTotalScoreCount] = useState(0);

	useEffect(() => {
		setPageTitle('letterRound');
		console.log(games, 'lr stats?');
		// getWordCount()
		const result = extractValue(games, 'allWords');
		console.log(result);
		let merged = [].concat.apply([], result);
		console.log(merged, 'single arr?');
		setTotalWordCount(merged.length);
		setTotalScoreCount(
			merged.reduce((accumulator, object) => {
				return accumulator + object.score;
			}, 0)
		);
		// let scoreTotal = merged.reduce((accumulator, object) => {
		// 	return accumulator + object.score;
		// }, 0);
		// console.log(scoreTotal, 'score tot');
		// sum scores
	}, [setPageTitle, games]);

	// const getWordCount = () => {
	// 	games.forEach((game) => {
	// 		console.log(game.allWords.length, ' game for each');
	// 		setTotalWordCount(totalWordCount + game.allWords.length);
	// 	});
	// };

	// useEffect(() => {
	// 	games.forEach((game) => {
	// 		console.log(game.allWords.length, ' game for each');
	// 		setTotalWordCount(totalWordCount + game.allWords.length);
	// 	});
	// 	return;
	// });

	// program to extract value as an array from an array of objects

	function extractValue(arr, prop) {
		// extract value from property
		let extractedValue = arr.map((item) => item[prop]);

		return extractedValue;
	}

	// const objArray = [{a: 1, b: 2}, {a: 4, b: 5}, {a: 8, b: 9}];

	// passing an array of objects and property 'a' to extract
	// const result = extractValue(games, 'allWords');
	// console.log(result);
	//   // program to extract value as an array from an array of objects

	// function extractValue(arr, prop) {

	//   // extract value from property
	//   let extractedValue = arr.map(item => item[prop]);

	//   return extractedValue;

	// }

	// const objArray = [{a: 1, b: 2}, {a: 4, b: 5}, {a: 8, b: 9}];

	// // passing an array of objects and property 'a' to extract
	// const result = extractValue(objArray, 'a');
	// console.log(result);

	return games.length ? (
		<StyledStats>
			<div className='letter-round-header'>
				<MdOutlineClose size='25px' id='close-letter-round-blank' />
				<p className='letter-round-title'>statistics</p>
				<div
					className='close-letter-round-btn'
					onClick={() => {
						navigate('/');
					}}
				>
					<MdOutlineClose size='25px' />
				</div>
			</div>
			<div className='letter-round-stats-container'>
				<div className='stat-wrapper'>
					<p>{games.length < 10 ? `0${games.length}` : games.length}</p>
					<p>played</p>
				</div>
				<div className='stat-wrapper'>
					<p>{totalWordCount < 10 ? `0${totalWordCount}` : totalWordCount}</p>
					<p>words</p>
				</div>
				<div className='stat-wrapper'>
					<p>
						{totalScoreCount < 10 ? `0${totalScoreCount}` : totalScoreCount}
					</p>
					<p>points</p>
				</div>
				{/* <div className='stat-wrapper'>
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
				</div> */}
			</div>

			<div className='letter-round-chart-wrapper'>chart goes here</div>
		</StyledStats>
	) : (
		<StyledStats>
			<div className='letter-round-header'>
				<MdOutlineClose size='25px' id='close-letter-round-blank' />
				<p className='letter-round-title'>error</p>
				<div
					className='close-letter-round-btn'
					onClick={() => {
						navigate('/');
					}}
				>
					<MdOutlineClose size='25px' />
				</div>
			</div>
			<div className='letter-round-stats-container'>
				<div className='stat-wrapper'>
					<p>03</p>
					<p>played</p>
				</div>
				<div className='stat-wrapper'>
					<p>607</p>
					<p>words</p>
				</div>
				<div className='stat-wrapper'>
					<p>607</p>
					<p>points</p>
				</div>
				{/* <div className='stat-wrapper'>
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
      </div> */}
			</div>

			<div className='letter-round-chart-wrapper'>chart goes here</div>
		</StyledStats>
	);
};
const StyledStats = styled.div`
	background-color: ${({ theme }) => theme.bgTile};
	border-radius: 5px;
	padding: 1rem;
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	row-gap: 2rem;
	.letter-round-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		#close-letter-round-blank {
			opacity: 0;
		}
		.letter-round-title {
			text-transform: uppercase;
			font-family: 'Bebas Neue', cursive;
			font-size: 2.2rem;
			/* width: 100%; */
		}
		#close-letter-round-btn {
			justify-self: flex-end;
		}
	}
	.letter-round-stats-container {
		display: flex;
		justify-content: space-evenly;
		align-items: flex-start;
		border-top: 2px solid ${({ theme }) => theme.bgContainer};
		border-bottom: 2px solid ${({ theme }) => theme.bgContainer};
		padding: 1rem;
		margin: 0rem 1rem;
		.stat-wrapper {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: flex-start;
			flex-wrap: wrap;
			flex: 1;
			p {
				font-size: 2rem;
				font-weight: 800;
				line-height: 1;
				color: ${({ theme }) => theme.bgChosen};
				&:last-child {
					font-family: 'Montserrat', sans-serif;
					text-transform: capitalize;
					font-size: 1.2rem;
					font-weight: 400;
					text-align: center;
					color: ${({ theme }) => theme.syntax};
				}
			}
		}
	}
	.letter-round-chart-wrapper {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;
	}
`;

export default LetterRoundStats;
