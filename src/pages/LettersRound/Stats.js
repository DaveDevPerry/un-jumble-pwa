import React, { useEffect, useContext, useState } from 'react';
import styled from 'styled-components';
import { MdOutlineClose } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { LetterRoundContext } from '../../contexts/LetterRoundContext';
import StatsPieChart from '../../components/LettersRound/StatsPieChart';

const LetterRoundStats = ({ setPageTitle }) => {
	const { games } = useContext(LetterRoundContext);
	let navigate = useNavigate();

	const [totalWordCount, setTotalWordCount] = useState(0);
	const [totalScoreCount, setTotalScoreCount] = useState(0);
	const [threeLetters, setThreeLetters] = useState([]);
	const [fourLetters, setFourLetters] = useState([]);
	const [fiveLetters, setFiveLetters] = useState([]);
	const [sixLetters, setSixLetters] = useState([]);
	const [sevenLetters, setSevenLetters] = useState([]);
	const [eightLetters, setEightLetters] = useState([]);
	const [nineLetters, setNineLetters] = useState([]);

	useEffect(() => {
		setPageTitle('letter Round');
		console.log(games, 'lr stats?');
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
		setThreeLetters(
			merged.filter((item) => {
				return item.word.length === 3;
			}).length
		);
		setFourLetters(
			merged.filter((item) => {
				return item.word.length === 4;
			}).length
		);
		setFiveLetters(
			merged.filter((item) => {
				return item.word.length === 5;
			}).length
		);
		setSixLetters(
			merged.filter((item) => {
				return item.word.length === 6;
			}).length
		);
		setSevenLetters(
			merged.filter((item) => {
				return item.word.length === 7;
			}).length
		);
		setEightLetters(
			merged.filter((item) => {
				return item.word.length === 8;
			}).length
		);
		setNineLetters(
			merged.filter((item) => {
				return item.word.length === 9;
			}).length
		);
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
				<div className='letter-round-header'>
					<MdOutlineClose size='25px' id='close-letter-round-blank' />
					<p className='letter-round-title'>statistics</p>
					<div
						className='close-letter-round-btn'
						onClick={() => {
							navigate('/');
						}}
					>
						<MdOutlineClose className='close-btn-icon' />
					</div>
				</div>
				<div className='letter-round-stats-container'>
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
							{totalScoreCount < 10 ? `0${totalScoreCount}` : totalScoreCount}
						</p>
						<p>
							total
							<br />
							points
						</p>
					</div>
				</div>
				<div className='letter-round-chart-wrapper'>
					<StatsPieChart
						threeLetters={threeLetters}
						fourLetters={fourLetters}
						fiveLetters={fiveLetters}
						sixLetters={sixLetters}
						sevenLetters={sevenLetters}
						eightLetters={eightLetters}
						nineLetters={nineLetters}
					/>
				</div>
			</div>
		</StyledStats>
	) : (
		<StyledStats>
			<div className='stats-page-container'>
				<div className='letter-round-header'>
					<MdOutlineClose size='25px' id='close-letter-round-blank' />
					<p className='letter-round-title'>statistics</p>
					<div
						className='close-letter-round-btn'
						onClick={() => {
							navigate('/');
						}}
					>
						<MdOutlineClose className='close-btn-icon' />
					</div>
				</div>
				<div className='letter-round-chart-wrapper'>
					<p>NO PREVIOUS STATS TO DISPLAY</p>
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
		background-color: white;
		border-radius: 5px;
		padding: 1rem 1rem 2rem 1rem;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		row-gap: 1rem;
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
				color: ${({ theme }) => theme.bgChosen};
			}
			#close-letter-round-btn {
				justify-self: flex-end;
			}
		}
		.letter-round-stats-container {
			display: flex;
			justify-content: space-evenly;
			align-items: flex-start;
			padding: 1rem;
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
					}
				}
			}
		}
		.letter-round-chart-wrapper {
			p {
				color: ${({ theme }) => theme.bgChosen};
				text-align: center;
				font-weight: 800;
			}
		}
	}
`;

export default LetterRoundStats;
