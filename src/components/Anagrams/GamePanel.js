import React from 'react';
import styled from 'styled-components';
import GameLetterCards from './GameLetterCards';

const GamePanel = ({ handleStartGame, handleStart, handleAnagramStart }) => {
	return (
		<StyledGameTargetTotal>
			<GameLetterCards
				handleStart={handleStart}
				handleAnagramStart={handleAnagramStart}
			/>
			{/* <GameLetterCards handleStartGame={handleStartGame} /> */}
		</StyledGameTargetTotal>
	);
};

const StyledGameTargetTotal = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 0.3rem;
`;

export default GamePanel;
