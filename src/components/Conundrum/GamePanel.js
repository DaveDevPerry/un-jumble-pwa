import React from 'react';
import styled from 'styled-components';
import GameLetterCards from './GameLetterCards';

const GamePanel = ({ handleStartGame, shuffled }) => {
	return (
		<StyledGameTargetTotal>
			<GameLetterCards handleStartGame={handleStartGame} shuffled={shuffled} />
		</StyledGameTargetTotal>
	);
};

const StyledGameTargetTotal = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 0.3rem;
`;

export default GamePanel;
