import React from 'react';
import styled from 'styled-components';

const GameLetterCards = ({
	gameLetters,
	handleLetterGameStart,
	handleLetterRoundStart,
}) => {
	return (
		<StyledGameLetterCards>
			<button className='start-btns-container' onClick={handleLetterGameStart}>
				start game
			</button>
			<StyledLettersOutput>
				{gameLetters.map((letter, index) => {
					return (
						<div key={index} className='card'>
							<div className='card-back card-letter'>&nbsp;</div>
							<div className='card-front card-letter'>{letter}</div>
						</div>
					);
				})}
			</StyledLettersOutput>
			{/* <StyledLettersOutput>
				{wordOfTheDay.split('').map((letter, index) => {
					return (
						<div key={index} className='card'>
							<div className='card-back card-letter'>&nbsp;</div>
							<div className='card-front card-letter'>{letter}</div>
						</div>
					);
				})}
			</StyledLettersOutput> */}
			{/* <StyledLettersOutput>
				{wordOfTheDay.map((letter, index) => {
					return (
						<div key={index} className='card'>
							<div className='card-back card-letter'>&nbsp;</div>
							<div className='card-front card-letter'>{letter}</div>
						</div>
					);
				})}
			</StyledLettersOutput> */}
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
	}
`;
const StyledLettersOutput = styled.div`
	display: grid;
	justify-content: center;
	grid-template-columns: repeat(9, 1fr);
	grid-template-rows: repeat(1, 4.5rem);
	border-radius: 5px;
	perspective: 500px;
	gap: 0.3rem;
	.card {
		position: relative;
	}
	.card-letter {
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
	/* .card-value {
	transition: transform 100ms ease-in-out;
	transform: scale(1);
}
.card-front:hover .card-value {
	transform: scale(1);
} */

	/* .game-number {
		font-size: 2rem;
		border: 1px solid white;
		outline: none;
		background-color: ${({ theme }) => theme.bgChosen};
		color: ${({ theme }) => theme.bgChosen};
		display: grid;
		place-content: center;
		border-radius: 5px;

		&.flip {
			animation: 0.5s linear flipping;
			background-color: ${({ theme }) => theme.bgNumber};
			color: ${({ theme }) => theme.syntax};
			&:nth-child(2) {
				animation-delay: 300ms;
			}
			&:nth-child(3) {
				animation-delay: 600ms;
			}
			&:nth-child(4) {
				animation-delay: 900ms;
			}
			&:nth-child(5) {
				animation-delay: 1.2s;
			}
			&:last-child {
				animation-delay: 1.5s;
			}
		}
	}
	@keyframes flipping {
		0% {
			transform: rotateX(0deg);
			background-color: ${({ theme }) => theme.bgChosen};
			color: ${({ theme }) => theme.bgChosen};
		}
		50% {
			transform: rotateX(90deg);
			background-color: ${({ theme }) => theme.bgNumber};
			color: ${({ theme }) => theme.syntax};
		}
		100% {
			transform: rotateX(0deg);
			background-color: ${({ theme }) => theme.bgNumber};
			color: ${({ theme }) => theme.syntax};
		}
	} */
`;

export default GameLetterCards;
