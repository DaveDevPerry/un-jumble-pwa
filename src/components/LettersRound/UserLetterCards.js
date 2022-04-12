import React from 'react';
import styled from 'styled-components';

const UserLetterCards = ({
	gameLetters,
	handleLetter,
	handleReset,
	handleSubmit,
}) => {
	return (
		<StyledUserLetterCards>
			<div className='row-btns-container'>
				<div className='button small-btn'>
					<button className='btn-back btn-cta'>clear</button>
					<button className='btn-front btn-cta' onClick={handleReset}>
						clear
					</button>
				</div>
				<div className='button small-btn'>
					<button className='btn-back btn-cta'>Submit</button>
					<button className='btn-front btn-cta' onClick={handleSubmit}>
						Submit
					</button>
				</div>
			</div>
			<StyledLetterOutput>
				{gameLetters.map((letter, index) => {
					return (
						<div key={index} className='card'>
							<div className='card-back card-letter'>&nbsp;</div>
							<div className='card-front card-letter' onClick={handleLetter}>
								{letter}
							</div>
						</div>
					);
				})}
			</StyledLetterOutput>
		</StyledUserLetterCards>
	);
};
const StyledUserLetterCards = styled.div`
	border: none;
	.row-btns-container {
		perspective: 500px;
		display: flex;
		column-gap: 1rem;
		margin-bottom: 1rem;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
	}
	.button {
		position: relative;
		height: 45px;
		flex: 1;
		&.small-btn {
			height: 34px;
		}
		&.small-btn > button {
			height: 34px;
			font-size: 2rem;
		}
	}
	.btn-cta {
		position: absolute;
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		overflow: hidden;
		backface-visibility: hidden;
		transition: transform 500ms ease-in-out;
		font-size: 3rem;
		border: none;
		outline: none;
		font-family: 'Bebas Neue', cursive;
		letter-spacing: 2px;
	}
	.button.visible .btn-back {
		transform: rotateX(-180deg);
	}
	.button.visible .btn-front {
		transform: rotateX(0);
	}
	.btn-back {
		font-size: 2rem;
		outline: none;
		background-color: ${({ theme }) => theme.bgTile};
		color: ${({ theme }) => theme.bgTile};
		display: grid;
		place-content: center;
		border-radius: 5px;
	}
	.btn-front {
		font-size: 3rem;
		outline: none;
		display: grid;
		place-content: center;
		border-radius: 5px;
		transform: rotateX(180deg);
		background-color: ${({ theme }) => theme.bgChosen};
		color: ${({ theme }) => theme.syntax};
		&.active {
			background-color: ${({ theme }) => theme.bgChosen};
		}
	}
`;
const StyledLetterOutput = styled.div`
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
		cursor: pointer;
		display: grid;
		place-content: center;
		border-radius: 5px;
		transform: rotateY(180deg);
		background-color: ${({ theme }) => theme.bgTile};
		color: ${({ theme }) => theme.syntax};
		&.active {
			background-color: ${({ theme }) => theme.bgChosen};
		}
	}
`;

export default UserLetterCards;
