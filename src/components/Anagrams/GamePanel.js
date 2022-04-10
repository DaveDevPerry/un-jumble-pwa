import React from 'react';
import styled from 'styled-components';
import GameLetterCards from './GameLetterCards';

const GamePanel = ({
	handleStart,
	handleAnagramStart,
	anagramGameMode,
	numberOfGuessTilesToRender,
	setNumberOfGuessTilesToRender,
}) => {
	return (
		<StyledGameTargetTotal>
			<GameLetterCards
				handleStart={handleStart}
				handleAnagramStart={handleAnagramStart}
				anagramGameMode={anagramGameMode}
				numberOfGuessTilesToRender={numberOfGuessTilesToRender}
				setNumberOfGuessTilesToRender={setNumberOfGuessTilesToRender}
			/>
		</StyledGameTargetTotal>
	);
};

const StyledGameTargetTotal = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 0.3rem;
`;

export default GamePanel;
