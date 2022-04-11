import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const LetterRoundLevelStatus = () => {
	let navigate = useNavigate();

	function setTileStyleVariable(number) {
		const root = document.querySelector(':root');
		root.style.setProperty('--letter-count', number);
	}
	return (
		<StyledLetterRoundLevelStatus>
			{/* map stats here */}
			<div
				className='quick-stat'
				onClick={() => {
					// setAnagramGameMode(4);
					setTileStyleVariable(9);
					navigate('/selectletters');
				}}
			>
				play
			</div>
		</StyledLetterRoundLevelStatus>
	);
};
const StyledLetterRoundLevelStatus = styled.section`
	display: grid;
	grid-template-columns: repeat(1, 1fr);
	grid-template-rows: repeat(1, auto);
	column-gap: 0.5rem;
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
		letter-spacing: 2px;
		&.isComplete {
			background-color: ${({ theme }) => theme.isComplete};
			color: ${({ theme }) => theme.bgChosen};
		}
	}
`;
export default LetterRoundLevelStatus;
