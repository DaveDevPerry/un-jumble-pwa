import React from 'react';
import styled from 'styled-components';
// import { useNavigate } from 'react-router-dom';
import { MdOutlineTimerOff, MdOutlineTimer } from 'react-icons/md';
import { BsWhatsapp } from 'react-icons/bs';
import ConundrumLevelStatus from '../Conundrum/ConundrumLevelStatus';
import AnagramLevelStatus from '../Anagrams/AnagramLevelStatus';

const GameTypeScreen = ({
	url,
	name,
	description,
	isTimed,
	conundrumGameMode,
	setConundrumGameMode,
}) => {
	// let navigate = useNavigate();
	return (
		<StyledGameTypeScreen
		// className='btn start-btn start-game-mode-btn'
		// onClick={() => {
		// 	navigate(url);
		// 	// navigate('/conundrum');
		// }}
		>
			<div className='game-mode-header'>
				{isTimed === 'true' ? (
					<MdOutlineTimer size='25px' />
				) : (
					<MdOutlineTimerOff size='25px' />
				)}
				<h3>{name}</h3>
				<BsWhatsapp size='22px' />
			</div>
			<p>{description}</p>
			{(() => {
				if (name === 'conundrum') {
					return (
						<ConundrumLevelStatus
							conundrumGameMode={conundrumGameMode}
							setConundrumGameMode={setConundrumGameMode}
						/>
					);
				} else if (name === 'anagram round') {
					return <AnagramLevelStatus />;
				} else {
					return <p>&nbsp;</p>;
				}
			})()}
			{/* <div className='game-mode-stats-container'>
				<div className='stat-wrapper'>
					<p>03</p>
					<p>played</p>
				</div>
				<div className='stat-wrapper'>
					<p>100</p>
					<p>win %</p>
				</div>
			</div> */}
		</StyledGameTypeScreen>
	);
};
const StyledGameTypeScreen = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	height: 100%;
	width: 100%;
	border-radius: 5px;
	background-color: ${({ theme }) => theme.bgTile};
	border: none;
	padding: 1rem;
	row-gap: 1rem;
	cursor: pointer;
	p {
		text-align: center;
	}
	.game-mode-header {
		display: flex;
		justify-content: space-between;
		column-gap: 1rem;
		align-items: flex-start;
		width: 100%;
		color: ${({ theme }) => theme.bgChosen};
		h3 {
			font-weight: lighter;
			font-size: 2.8rem;
			line-height: 1;
		}
	}

	.game-mode-stats-container {
		width: 100%;
		font-size: 1.6rem;
		display: flex;
		justify-content: space-evenly;
		align-items: flex-start;
		opacity: 0;
		.stat-wrapper {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: flex-start;
			flex-wrap: wrap;
			flex: 1;
		}
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

export default GameTypeScreen;
