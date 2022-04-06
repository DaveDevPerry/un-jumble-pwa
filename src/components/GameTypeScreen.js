import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { MdOutlineTimerOff } from 'react-icons/md';

const GameTypeScreen = ({ url, name, description }) => {
	let navigate = useNavigate();
	return (
		<StyledGameTypeScreen
			// className='btn start-btn start-game-mode-btn'
			onClick={() => {
				navigate(url);
				// navigate('/conundrum');
			}}
		>
			<div className='game-mode-header'>
				<MdOutlineTimerOff size='22px' />
				<h3>{name}</h3>
				<MdOutlineTimerOff size='22px' />
			</div>
			<p>{description}</p>
			<div className='game-mode-stats-container'>
				<div className='stat-wrapper'>
					<p>03</p>
					<p>played</p>
				</div>
				<div className='stat-wrapper'>
					<p>100</p>
					<p>win %</p>
				</div>
			</div>
		</StyledGameTypeScreen>
	);
};
const StyledGameTypeScreen = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	height: 100%;
	/* flex: 1; */
	width: 100%;
	border-radius: 10px;
	background-color: ${({ theme }) => theme.bgTile};
	border: none;
	padding: 1rem;
	/* margin: 0 2rem; */
	row-gap: 1rem;
	cursor: pointer;
	.game-mode-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		color: ${({ theme }) => theme.bgChosen};
		h3 {
			font-weight: lighter;
			border-bottom: 2px solid ${({ theme }) => theme.bgChosen};
			display: inline-block;
			/* margin-bottom: 1rem; */
			font-size: 2.8rem;
			align-self: center;
			/* flex: 1; */
		}
	}

	.game-mode-stats-container {
		width: 100%;
		font-size: 1.6rem;
		display: flex;
		justify-content: space-evenly;
		align-items: flex-start;
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
				/* font-family: 'Montserrat'; */
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
