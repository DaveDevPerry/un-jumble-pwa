import React, { useEffect, useContext, useState } from 'react';
import styled from 'styled-components';
import { MdOutlineClose } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { ConundrumContext } from '../../contexts/ConundrumContext';
import StatsPieChart from '../../components/Conundrum/StatsPieChart';

const ConundrumStats = ({ setPageTitle }) => {
	const { conundrums } = useContext(ConundrumContext);
	let navigate = useNavigate();

	const [totalWordCount, setTotalWordCount] = useState(0);
	const [fourLetters, setFourLetters] = useState([]);
	const [fiveLetters, setFiveLetters] = useState([]);
	const [sixLetters, setSixLetters] = useState([]);
	const [sevenLetters, setSevenLetters] = useState([]);
	const [eightLetters, setEightLetters] = useState([]);
	const [nineLetters, setNineLetters] = useState([]);

	useEffect(() => {
		setPageTitle('conundrum');
		console.log(conundrums, 'conundrum stats?');
		setTotalWordCount(conundrums.length);
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
				</div>

				<div className='conundrum-chart-wrapper'>
					<StatsPieChart
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
				<div className='conundrum-chart-wrapper'>
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
			}
			#close-conundrum-btn {
				justify-self: flex-end;
			}
		}
		.conundrum-stats-container {
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
		.conundrum-chart-wrapper {
			p {
				color: ${({ theme }) => theme.bgChosen};
				text-align: center;
				font-weight: 800;
			}
		}
	}
`;

export default ConundrumStats;
