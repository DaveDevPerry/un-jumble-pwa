import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const ConundrumLevelStatus = ({
	// url,
	conundrumGameMode,
	setConundrumGameMode,
	setGameMode,
	letterCount,
	testNum,
}) => {
	let navigate = useNavigate();

	function setTileStyleVariable(number) {
		// console.log(typeof testNum, 'num?');
		const root = document.querySelector(':root');
		root.style.setProperty('--letter-count', number);
	}
	return (
		<StyledConundrumLevelStatus>
			{/* map stats here */}
			<div
				className='quick-stat isComplete'
				onClick={() => {
					setConundrumGameMode(4);
					setTileStyleVariable(4);
					navigate('/conundrum/game');
				}}
			>
				4
			</div>
			<div
				className='quick-stat'
				onClick={() => {
					setConundrumGameMode(5);
					setTileStyleVariable(5);
					navigate('/conundrum/game');
				}}
			>
				5
			</div>
			<div
				className='quick-stat'
				onClick={() => {
					setConundrumGameMode(6);
					setTileStyleVariable(6);
					navigate('/conundrum/game');
				}}
			>
				6
			</div>
			<div
				className='quick-stat isComplete'
				onClick={() => {
					setConundrumGameMode(7);
					setTileStyleVariable(7);
					navigate('/conundrum/game');
				}}
			>
				7
			</div>
			<div
				className='quick-stat'
				onClick={() => {
					setConundrumGameMode(8);
					setTileStyleVariable(8);
					navigate('/conundrum/game');
				}}
			>
				8
			</div>
			<div
				className='quick-stat'
				onClick={() => {
					setConundrumGameMode(9);
					setTileStyleVariable(9);
					navigate('/conundrum/game');
				}}
			>
				9
			</div>
		</StyledConundrumLevelStatus>
	);
};
const StyledConundrumLevelStatus = styled.section`
	display: grid;
	grid-template-columns: repeat(6, 1fr);
	grid-template-rows: repeat(1, auto);
	column-gap: 0.5rem;
	/* border: 1px solid black; */
	width: 100%;
	.quick-stat {
		padding: 0.5rem;
		border-radius: 5px;
		background-color: ${({ theme }) => theme.bgChosen};
		color: ${({ theme }) => theme.syntax};
		font-family: 'Bebas Neue', cursive;
		display: grid;
		place-content: center;
		font-weight: 800;
		font-size: 2rem;
		cursor: pointer;
		&.isComplete {
			background-color: ${({ theme }) => theme.isComplete};
			color: ${({ theme }) => theme.bgChosen};
		}
	}
`;
export default ConundrumLevelStatus;
