import React, { useEffect } from 'react';
import styled from 'styled-components';

const GameLetterCards = ({ anagramGameMode }) => {
	useEffect(() => {
		console.log('game letter cards', anagramGameMode);
	}, [anagramGameMode]);
	return (
		<StyledGameLetterCards>
			<StyledSmallNumberOutput className='guesses word-wrapper' data-guess>
				{anagramGameMode && anagramGameMode === 4 ? (
					<>
						<div className='guess'>
							<div className='guess-back guess-letter'>&nbsp;</div>
							<div className='guess-front guess-letter guess-tile'>
								<p>&nbsp;</p>
							</div>
						</div>
						<div className='guess'>
							<div className='guess-back guess-letter'>&nbsp;</div>
							<div className='guess-front guess-letter guess-tile'>
								<p>&nbsp;</p>
							</div>
						</div>
						<div className='guess'>
							<div className='guess-back guess-letter'>&nbsp;</div>
							<div className='guess-front guess-letter guess-tile'>
								<p>&nbsp;</p>
							</div>
						</div>
						<div className='guess'>
							<div className='guess-back guess-letter'>&nbsp;</div>
							<div className='guess-front guess-letter guess-tile'>
								<p>&nbsp;</p>
							</div>
						</div>
					</>
				) : (
					''
				)}
				{anagramGameMode && anagramGameMode === 5 ? (
					<>
						<div className='guess'>
							<div className='guess-back guess-letter'>&nbsp;</div>
							<div className='guess-front guess-letter guess-tile'>
								<p>&nbsp;</p>
							</div>
						</div>
						<div className='guess'>
							<div className='guess-back guess-letter'>&nbsp;</div>
							<div className='guess-front guess-letter guess-tile'>
								<p>&nbsp;</p>
							</div>
						</div>
						<div className='guess'>
							<div className='guess-back guess-letter'>&nbsp;</div>
							<div className='guess-front guess-letter guess-tile'>
								<p>&nbsp;</p>
							</div>
						</div>
						<div className='guess'>
							<div className='guess-back guess-letter'>&nbsp;</div>
							<div className='guess-front guess-letter guess-tile'>
								<p>&nbsp;</p>
							</div>
						</div>
						<div className='guess'>
							<div className='guess-back guess-letter'>&nbsp;</div>
							<div className='guess-front guess-letter guess-tile'>
								<p>&nbsp;</p>
							</div>
						</div>
					</>
				) : (
					''
				)}
				{anagramGameMode && anagramGameMode === 6 ? (
					<>
						<div className='guess'>
							<div className='guess-back guess-letter'>&nbsp;</div>
							<div className='guess-front guess-letter guess-tile'>
								<p>&nbsp;</p>
							</div>
						</div>
						<div className='guess'>
							<div className='guess-back guess-letter'>&nbsp;</div>
							<div className='guess-front guess-letter guess-tile'>
								<p>&nbsp;</p>
							</div>
						</div>
						<div className='guess'>
							<div className='guess-back guess-letter'>&nbsp;</div>
							<div className='guess-front guess-letter guess-tile'>
								<p>&nbsp;</p>
							</div>
						</div>
						<div className='guess'>
							<div className='guess-back guess-letter'>&nbsp;</div>
							<div className='guess-front guess-letter guess-tile'>
								<p>&nbsp;</p>
							</div>
						</div>
						<div className='guess'>
							<div className='guess-back guess-letter'>&nbsp;</div>
							<div className='guess-front guess-letter guess-tile'>
								<p>&nbsp;</p>
							</div>
						</div>
						<div className='guess'>
							<div className='guess-back guess-letter'>&nbsp;</div>
							<div className='guess-front guess-letter guess-tile'>
								<p>&nbsp;</p>
							</div>
						</div>
					</>
				) : (
					''
				)}
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
	.guess {
		position: relative;
	}
	.guess-letter {
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
	.guess.visible .guess-back {
		transform: rotateY(-180deg);
	}
	.guess.visible .guess-front {
		transform: rotateY(0);
	}
	.guess-back {
		font-size: 2rem;
		outline: none;
		display: grid;
		place-content: center;
		border-radius: 5px;
	}
	.guess-front {
		border-radius: 5px;
		padding: 1rem 1rem 1rem 1rem;
		font-size: 3rem;
		font-family: 'Montserrat', sans-serif;
		font-weight: 500;
		flex: 1;
		text-align: center;
		text-transform: uppercase;
		color: white;
		text-shadow: 3px 3px 4px #000000;
		background-color: rgba(0, 0, 0, 0.2);
		box-shadow: inset 2px 2px 2px rgba(0, 0, 0, 0.2),
			inset -1px -1px 2px rgba(0, 0, 0, 0.1);
		overflow: hidden;
	}
	.guess-front > p {
		transform: translateY(50px);
		transition: 200ms ease-in;
		font-family: 'Montserrat', sans-serif;
	}
	.guess-front > p.reveal {
		transform: translateY(0px);
		font-family: 'Montserrat', sans-serif;
	}
`;

export default GameLetterCards;
