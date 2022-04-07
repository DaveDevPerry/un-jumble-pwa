import React from 'react';
import styled from 'styled-components';

const InGameStats = ({ allAnagramUserWords, currentScore, totalWordCount }) => {
	return (
		<StyledInGameStats className='in-game-stats-container'>
			<div className='in-game-stat-wrapper'>
				<p>{totalWordCount}</p>
				<p>words</p>
			</div>
			<div className='in-game-stat-wrapper'>
				<p>{currentScore}</p>
				<p>score</p>
			</div>
			<div className='in-game-stat-wrapper'>
				<p>100</p>
				<p>win %</p>
			</div>
		</StyledInGameStats>
	);
};
const StyledInGameStats = styled.section`
	width: 100%;
	font-size: 1.6rem;
	display: flex;
	justify-content: space-evenly;
	align-items: flex-start;
	.in-game-stat-wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
		flex-wrap: wrap;
		flex: 1;
		p {
			font-size: 2rem;
			font-weight: bolder;
			line-height: 1;
			color: ${({ theme }) => theme.bgChosen};
			&:last-child {
				text-transform: capitalize;
				font-size: 1.2rem;
				font-weight: 400;
				text-align: center;
				color: ${({ theme }) => theme.syntax};
			}
		}
	}
`;
export default InGameStats;
