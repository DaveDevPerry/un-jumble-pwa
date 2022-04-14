import React, { useEffect, useContext, useState } from 'react';
import styled from 'styled-components';
import { MdOutlineClose } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { AnagramContext } from '../../contexts/AnagramContext';
import StatsBarChart from '../../components/Anagrams/StatsBarChart';

const AnagramStats = ({ setPageTitle, setMessage }) => {
	const { games } = useContext(AnagramContext);
	let navigate = useNavigate();

	const [totalWordCount, setTotalWordCount] = useState(0);
	const [levelFourData, setLevelFourData] = useState([]);
	const [levelFiveData, setLevelFiveData] = useState([]);
	const [levelSixData, setLevelSixData] = useState([]);
	const [correctWordCount, setCorrectWordCount] = useState(0);

	useEffect(() => {
		setPageTitle('Anagram');
		const result = extractValue(games, 'allAnagramWords');
		let merged = [].concat.apply([], result);
		setTotalWordCount(merged.length);
		setCorrectWordCount(
			merged.filter((word) => {
				return word.isCorrect === true;
			}).length
		);
		setLevelFourData(
			games.filter((item) => {
				return item.level === 4;
			})
		);
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
				</div>
				<div className='anagram-chart-wrapper'>
					<StatsBarChart
						levelFourData={levelFourData}
						levelFiveData={levelFiveData}
						levelSixData={levelSixData}
					/>
				</div>
			</div>
		</StyledStats>
	) : (
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
					</div>
				</div>
				<div className='anagram-chart-wrapper'>
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
		.anagram-header {
			display: flex;
			justify-content: space-between;
			align-items: center;
			#close-anagram-blank {
				opacity: 0;
			}
			.anagram-title {
				text-transform: uppercase;
				font-family: 'Bebas Neue', cursive;
				font-size: 2.2rem;
				color: ${({ theme }) => theme.bgChosen};
			}
			#close-anagram-btn {
				justify-self: flex-end;
			}
		}
		.anagram-stats-container {
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
		.anagram-chart-wrapper {
			p {
				color: ${({ theme }) => theme.bgChosen};
				text-align: center;
				font-weight: 800;
			}
		}
	}
`;

export default AnagramStats;
