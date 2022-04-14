import React, { useEffect, useContext, useState } from 'react';
import styled from 'styled-components';
import { MdOutlineClose } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
// import { Doughnut } from 'react-chartjs-2';

import { ConundrumContext } from '../../contexts/ConundrumContext';
// import StatsBarChart from '../../components/LettersRound/StatsBarChart';
import StatsPieChart from '../../components/Conundrum/StatsPieChart';
// import { ConundrumContext } from '../../contexts/ConundrumContext';

const ConundrumStats = ({ setPageTitle }) => {
	const { conundrums } = useContext(ConundrumContext);
	let navigate = useNavigate();

	const [totalWordCount, setTotalWordCount] = useState(0);
	// const [totalScoreCount, setTotalScoreCount] = useState(0);
	// const [threeLetters, setThreeLetters] = useState([]);
	const [fourLetters, setFourLetters] = useState([]);
	const [fiveLetters, setFiveLetters] = useState([]);
	const [sixLetters, setSixLetters] = useState([]);
	const [sevenLetters, setSevenLetters] = useState([]);
	const [eightLetters, setEightLetters] = useState([]);
	const [nineLetters, setNineLetters] = useState([]);

	useEffect(() => {
		setPageTitle('conundrum');
		console.log(conundrums, 'conundrum stats?');
		// const result = extractValue(conundrums, 'allWords');
		// console.log(result);
		// let merged = [].concat.apply([], result);
		// console.log(merged, 'single arr?');
		// setTotalWordCount(merged.length);

		setTotalWordCount(conundrums.length);

		// setThreeLetters(
		// 	conundrums.filter((item) => {
		// 		return item.level === 3;
		// 	}).length
		// );
		setFourLetters(
			conundrums.filter((item) => {
				return item.level === 4;
			}).length
		);
		setFiveLetters(
			conundrums.filter((item) => {
				return item.level === 5;
			}).length
		);
		setSixLetters(
			conundrums.filter((item) => {
				return item.level === 6;
			}).length
		);
		setSevenLetters(
			conundrums.filter((item) => {
				return item.level === 7;
			}).length
		);
		setEightLetters(
			conundrums.filter((item) => {
				return item.level === 8;
			}).length
		);
		setNineLetters(
			conundrums.filter((item) => {
				return item.level === 9;
			}).length
		);
	}, [setPageTitle, conundrums]);

	// program to extract value as an array from an array of objects
	// function extractValue(arr, prop) {
	// 	// extract value from property
	// 	let extractedValue = arr.map((item) => item[prop]);
	// 	return extractedValue;
	// }

	return conundrums.length ? (
		<StyledStats>
			<div className='stats-page-container'>
				<div className='conundrum-header'>
					<MdOutlineClose size='25px' id='close-conundrum-blank' />
					<p className='conundrum-title'>statistics</p>
					<div
						className='close-conundrum-btn'
						onClick={() => {
							navigate('/');
						}}
					>
						<MdOutlineClose className='close-btn-icon' />
					</div>
				</div>
				<div className='conundrum-stats-container'>
					<div className='stat-wrapper'>
						<p>
							{conundrums.length < 10
								? `0${conundrums.length}`
								: conundrums.length}
						</p>
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
					{/* <div className='stat-wrapper'>
					<p>
						{totalScoreCount < 10 ? `0${totalScoreCount}` : totalScoreCount}
					</p>
					<p>points</p>
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

				<div className='conundrum-chart-wrapper'>
					<StatsPieChart
						// threeLetters={threeLetters}
						fourLetters={fourLetters}
						fiveLetters={fiveLetters}
						sixLetters={sixLetters}
						sevenLetters={sevenLetters}
						eightLetters={eightLetters}
						nineLetters={nineLetters}
					/>
					{/* <StatsBarChart
					threeLetters={threeLetters}
					fourLetters={fourLetters}
					fiveLetters={fiveLetters}
					sixLetters={sixLetters}
					sevenLetters={sevenLetters}
					eightLetters={eightLetters}
					nineLetters={nineLetters}
				/> */}
					{/* <Doughnut data={data} /> */}
					{/* chart goes here
				<p>three letter words: {threeLetters}</p>
				<p>four letter words: {fourLetters}</p> */}
				</div>
			</div>
		</StyledStats>
	) : (
		<StyledStats>
			<div className='stats-page-container'>
				<div className='conundrum-header'>
					<MdOutlineClose size='25px' id='close-conundrum-blank' />
					<p className='conundrum-title'>statistics</p>
					<div
						className='close-conundrum-btn'
						onClick={() => {
							navigate('/');
						}}
					>
						<MdOutlineClose className='close-btn-icon' />
					</div>
				</div>
				{/* <div className='conundrum-stats-container'>
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
			
			</div> */}

				<div className='conundrum-chart-wrapper'>
					NO PREVIOUS STATS TO DISPLAY
				</div>
			</div>
		</StyledStats>
	);
};
const StyledStats = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	.stats-page-container {
		/* background-color: ${({ theme }) => theme.bgTile}; */
		background-color: white;
		border-radius: 5px;
		/* padding: 1rem; */
		padding: 1rem 1rem 2rem 1rem;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		row-gap: 1rem;
		.conundrum-header {
			display: flex;
			justify-content: space-between;
			align-items: center;
			#close-conundrum-blank {
				opacity: 0;
			}
			.conundrum-title {
				text-transform: uppercase;
				font-family: 'Bebas Neue', cursive;
				font-size: 2.2rem;
				color: ${({ theme }) => theme.bgChosen};
				/* width: 100%; */
			}
			#close-conundrum-btn {
				justify-self: flex-end;
			}
		}
		.conundrum-stats-container {
			display: flex;
			justify-content: space-evenly;
			align-items: flex-start;
			/* border-top: 2px solid ${({ theme }) => theme.bgContainer};
			border-bottom: 2px solid ${({ theme }) => theme.bgContainer}; */
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
						/* color: ${({ theme }) => theme.syntax}; */
						color: ${({ theme }) => theme.bgChosen};
					}
				}
			}
		}
		/* .conundrum-chart-wrapper {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;

	} */
	}
`;

export default ConundrumStats;
