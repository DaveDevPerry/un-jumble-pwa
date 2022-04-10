import React from 'react';
import styled from 'styled-components';
import GameLetterCards from './GameLetterCards';

const GamePanel = ({
	handleStartGame,
	handleStart,
	handleAnagramStart,
	anagramGameMode,
	numberOfGuessTilesToRender,
	setNumberOfGuessTilesToRender,
}) => {
	// const [numberOfGuessTilesToRender, setNumberOfGuessTilesToRender] =
	// 	useState(0);
	return (
		<StyledGameTargetTotal>
			<GameLetterCards
				handleStart={handleStart}
				handleAnagramStart={handleAnagramStart}
				anagramGameMode={anagramGameMode}
				numberOfGuessTilesToRender={numberOfGuessTilesToRender}
				setNumberOfGuessTilesToRender={setNumberOfGuessTilesToRender}
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
