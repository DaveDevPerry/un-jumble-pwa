import React, { useEffect, useContext, useState } from 'react';
import styled from 'styled-components';
import { MdOutlineClose } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
// import { Doughnut } from 'react-chartjs-2';

import { AnagramContext } from '../../contexts/AnagramContext';
// import StatsBarChart from '../../components/LettersRound/StatsBarChart';
import StatsBarChart from '../../components/Anagrams/StatsBarChart';

const AnagramStats = ({ setPageTitle, setMessage }) => {
	const { games } = useContext(AnagramContext);
	let navigate = useNavigate();

	const [totalWordCount, setTotalWordCount] = useState(0);
	// const [totalPlayed, setTotalPlayed] = useState(0);
	// const [totalAnagramScoreCount, setTotalAnagramScoreCount] = useState(0);
	// const [threeLetters, setThreeLetters] = useState([]);
	const [levelFourData, setLevelFourData] = useState([]);
	const [levelFiveData, setLevelFiveData] = useState([]);
	const [levelSixData, setLevelSixData] = useState([]);
	// const [sevenLetters, setSevenLetters] = useState([]);
	// const [eightLetters, setEightLetters] = useState([]);
	// const [nineLetters, setNineLetters] = useState([]);
	const [correctWordCount, setCorrectWordCount] = useState(0);

	useEffect(() => {
		setPageTitle('Anagram');
		console.log(games, 'anagram stats?');
		const result = extractValue(games, 'allAnagramWords');
		console.log(result);
		let merged = [].concat.apply([], result);
		console.log(merged, 'single arr?');
		setTotalWordCount(merged.length);

		// setTotalPlayed(games.length);
		setCorrectWordCount(
			merged.filter((word) => {
				return word.isCorrect === true;
			}).length
		);

		// setTotalAnagramScoreCount(
		// 	merged.reduce((accumulator, object) => {
		// 		return accumulator + object.score;
		// 	}, 0)
		// );
		// console.log(totalAnagramScoreCount, 'tsc');
		// setThreeLetters(
		// 	merged.filter((item) => {
		// 		return item.word.length === 3;
		// 	}).length
		// );
		setLevelFourData(
			games.filter((item) => {
				return item.level === 4;
			})
		);
		// console.log(levelFourData);
		setLevelFiveData(
			games.filter((item) => {
				return item.level === 5;
			})
		);
		setLevelSixData(
			games.filter((item) => {
				return item.level === 6;
			})
		);
		// setLevelFourData([
		// 	...levelFourData,
		// 	merged.filter((item) => {
		// 		return item.word.length === 4;
		// 	}),
		// ]);
		// console.log(levelFourData);
		// setLevelFiveData([
		// 	...levelFiveData,
		// 	merged.filter((item) => {
		// 		return item.word.length === 5;
		// 	}),
		// ]);
		// setLevelSixData([
		// 	...levelSixData,
		// 	merged.filter((item) => {
		// 		return item.word.length === 6;
		// 	}),
		// ]);
		// setSevenLetters(
		// 	merged.filter((item) => {
		// 		return item.word.length === 7;
		// 	}).length
		// );
		// setEightLetters(
		// 	merged.filter((item) => {
		// 		return item.word.length === 8;
		// 	}).length
		// );
		// setNineLetters(
		// 	merged.filter((item) => {
		// 		return item.word.length === 9;
		// 	}).length
		// );
	}, [setPageTitle, games]);

	// program to extract value as an array from an array of objects
	function extractValue(arr, prop) {
		// extract value from property
		let extractedValue = arr.map((item) => item[prop]);
		return extractedValue;
	}

	return games.length ? (
		<StyledStats>
			<div className='stats-page-container'>
				<div className='anagram-header'>
					<MdOutlineClose size='25px' id='close-anagram-blank' />
					<p className='anagram-title'>statistics</p>
					<div
						className='close-anagram-btn'
						onClick={() => {
							navigate('/');
						}}
					>
						<MdOutlineClose className='close-btn-icon' />
						{/* <MdOutlineClose size='25px' id='close-cross-btn' color='#1b2877' /> */}
					</div>
				</div>
				<div className='anagram-stats-container'>
					<div className='stat-wrapper'>
						<p>{games.length < 10 ? `0${games.length}` : games.length}</p>
						<p>
							total
							<br />
							played
						</p>
					</div>
					<div className='stat-wrapper'>
						<p>{totalWordCount < 10 ? `0${totalWordCount}` : totalWordCount}</p>
						<p>
							total
							<br />
							words
						</p>
					</div>
					<div className='stat-wrapper'>
						<p>
							{correctWordCount < 10
								? `0${correctWordCount}`
								: correctWordCount}
						</p>
						<p>
							correct
							<br />
							words
						</p>
					</div>
					<div className='stat-wrapper'>
						<p>
							{totalWordCount - correctWordCount < 10
								? `0${totalWordCount - correctWordCount}`
								: totalWordCount - correctWordCount}
						</p>
						<p>
							incorrect
							<br />
							words
						</p>
					</div>
					{/* <div className='stat-wrapper'>
						<p>
							{totalAnagramScoreCount < 10
								? `0${totalAnagramScoreCount}`
								: totalAnagramScoreCount}
						</p>
						<p>total points</p>
					</div> */}
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

				<div className='anagram-chart-wrapper'>
					<StatsBarChart
						levelFourData={levelFourData}
						levelFiveData={levelFiveData}
						levelSixData={levelSixData}
					/>
					{/* <StatsBarChart
					levelFourData={levelFourData}
					levelFiveData={levelFiveData}
					levelSixData={levelSixData}
				/> */}
				</div>
			</div>
		</StyledStats>
	) : (
		<StyledStats>
			<div className='anagram-header'>
				<MdOutlineClose size='25px' id='close-anagram-blank' />
				<p className='anagram-title'>error</p>
				<div
					className='close-anagram-btn'
					onClick={() => {
						navigate('/');
					}}
				>
					<MdOutlineClose size='25px' className='close-btn-icon' />
				</div>
			</div>
			<div className='anagram-stats-container'>
				<div className='stat-wrapper'>
					<p>03</p>
					<p>
						total
						<br />
						played
					</p>
				</div>
				<div className='stat-wrapper'>
					<p>607</p>
					<p>total words</p>
				</div>
				<div className='stat-wrapper'>
					<p>607</p>
					<p>total points</p>
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

			<div className='anagram-chart-wrapper'>chart goes here</div>
		</StyledStats>
	);
};
const StyledStats = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	.stats-page-container {
		background-color: white;
		/* background-color: ${({ theme }) => theme.bgTile}; */
		border-radius: 5px;
		padding: 1rem 1rem 2rem 1rem;
		/* flex: 1; */
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		row-gap: 1rem; /* justify-self: center; */
		.anagram-header {
			display: flex;
			justify-content: space-between;
			align-items: center;
			/* display: none; */
			#close-anagram-blank {
				opacity: 0;
			}
			.anagram-title {
				text-transform: uppercase;
				font-family: 'Bebas Neue', cursive;
				font-size: 2.2rem;
				color: ${({ theme }) => theme.bgChosen};
				/* width: 100%; */
			}
			#close-anagram-btn {
				justify-self: flex-end;
				/* #close-cross-btn {
				color: blue;
			} */
			}
		}
		.anagram-stats-container {
			display: flex;
			justify-content: space-evenly;
			align-items: flex-start;
			/* border-top: 2px solid ${({ theme }) => theme.bgContainer}; */
			/* border-bottom: 2px solid ${({ theme }) => theme.bgContainer}; */
			padding: 1rem;
			/* margin: 0rem 1rem; */
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
						color: ${({ theme }) => theme.bgChosen};
						/* color: ${({ theme }) => theme.syntax}; */
					}
				}
			}
		}
		/* .anagram-chart-wrapper {
			background-color: white; */
		/* flex: 1; */
		/* display: flex;
		flex-direction: column;
		justify-content: center; */
		/* canvas {
			color: black !important;
		} */
		/* } */
	}
`;

export default AnagramStats;
