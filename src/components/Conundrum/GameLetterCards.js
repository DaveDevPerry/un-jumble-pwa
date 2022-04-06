import React from 'react';
import styled from 'styled-components';
// import FunctionButton from '../FunctionButton';

const GameLetterCards = ({ shuffled, handleStartGame }) => {
	return (
		<StyledGameLetterCards>
			{/* <FunctionButton functionName='handleStartGame' name='start game' /> */}
			<button className='start-btns-container' onClick={handleStartGame}>
				start game
			</button>
			<StyledSmallNumberOutput>
				{shuffled.map((letter, index) => {
					return (
						<div key={index} className='card'>
							<div className='card-back card-number'>&nbsp;</div>
							<div className='card-front card-number'>{letter}</div>
						</div>
					);
				})}
			</StyledSmallNumberOutput>
		</StyledGameLetterCards>
	);
};
const StyledGameLetterCards = styled.div`
	border: none;
	position: relative;
	.start-btns-container {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 50;
		width: 100%;
		font-family: 'Bebas Neue', cursive;
		letter-spacing: 2px;
		font-size: 2.8rem;
		padding: 0.5rem 1rem;
		background-color: ${({ theme }) => theme.bgChosen};
		border-radius: 5px;
		color: rgb(255, 255, 255);
		cursor: pointer;
		border: none;
	}
`;
const StyledSmallNumberOutput = styled.div`
	display: grid;
	justify-content: center;
	grid-template-columns: repeat(var(--letter-count), 1fr);
	grid-template-rows: repeat(1, 4.5rem);
	border-radius: 5px;
	perspective: 500px;
	gap: 0.3rem;
	.card {
		position: relative;
	}
	.card-number {
		position: absolute;
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		overflow: hidden;
		backface-visibility: hidden;
		transition: transform 500ms ease-in-out;
	}
	.card.visible .card-back {
		transform: rotateY(-180deg);
	}
	.card.visible .card-front {
		transform: rotateY(0);
	}

	.card-back {
		font-size: 2rem;
		outline: none;
		background-color: ${({ theme }) => theme.bgChosen};
		color: ${({ theme }) => theme.bgChosen};
		display: grid;
		place-content: center;
		border-radius: 5px;
	}
	.card-front {
		font-size: 3rem;
		outline: none;
		display: grid;
		place-content: center;
		border-radius: 5px;
		transform: rotateY(180deg);
		background-color: ${({ theme }) => theme.bgTile};
		color: ${({ theme }) => theme.syntax};
	}
`;

export default GameLetterCards;
