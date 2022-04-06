import React from 'react';
import styled from 'styled-components';
import GameLetterCards from './GameLetterCards';

const GamePanel = ({ gameLetters, handleLetterGameStart }) => {
	return (
		<StyledGameTargetTotal>
			<GameLetterCards
				gameLetters={gameLetters}
				handleLetterGameStart={handleLetterGameStart}
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
