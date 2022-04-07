import React from 'react';
import styled from 'styled-components';

const UserLetterCards = ({
	currentAnagramWord,
	setCurrentAnagramWord,
	shuffled,
	dictionary,
	setallAnagramUserWords,
	allAnagramUserWords,
	setGotConundrum,
	setLongestWord,
	longestWord,
	setShowResults,
	setIsNextDayCountdownActive,
	conundrum,
	shuffledTiles,
	currentShuffledTargetWord,
	handleLetter,
	handleReset,
	handleSubmit,
	handleSkip,
}) => {
	// const [shuffledTiles, setShuffledTiles] = useState(null);

	// const tileAudio = () => {
	// 	const audio = new Audio('/audio/tile.mp3');
	// 	audio.play();
	// };

	// const handleReset = (e) => {
	// 	e.preventDefault();
	// 	setCurrentAnagramWord([]);
	// 	const tiles = document.querySelectorAll('.card-front');
	// 	tiles.forEach((tile) => {
	// 		tile.classList.remove('active');
	// 		tile.style.pointerEvents = 'initial';
	// 	});
	// };
	// // let letterIndex = 0;

	// const handleSubmit = (e) => {
	// 	e.preventDefault();
	// 	checkWord();
	// 	// reset tiles
	// 	const tiles = document.querySelectorAll('.card-front');
	// 	tiles.forEach((tile) => {
	// 		tile.classList.remove('active');
	// 		tile.style.pointerEvents = 'initial';
	// 	});
	// 	setCurrentAnagramWord([]);
	// };

	// const handleLetter = (e) => {
	// 	tileAudio();
	// 	// letterIndex = e.target.dataset.index;
	// 	// console.log(letterIndex);
	// 	e.preventDefault();

	// 	if (e.target.classList.contains('active')) {
	// 		e.target.classList.remove('active');
	// 		e.target.style.pointerEvents = 'initial';
	// 	} else {
	// 		e.target.classList.add('active');
	// 		setCurrentAnagramWord((currentAnagramWord += e.target.textContent));
	// 		e.target.style.pointerEvents = 'none';
	// 	}
	// };

	// // checks validity of word and displays relative msg
	// const checkWord = () => {
	// 	// console.log(conundrum);
	// 	// console.log('current word', currentAnagramWord);
	// 	if (!dictionary.includes(currentAnagramWord)) {
	// 		console.log('wrong');
	// 		return;
	// 	}
	// 	if (dictionary.includes(currentAnagramWord)) {
	// 		console.log('right');
	// 		setallAnagramUserWords([...allAnagramUserWords, [currentAnagramWord, currentAnagramWord.length]]);
	// 		if (currentAnagramWord.length > longestWord.length) {
	// 			setLongestWord(currentAnagramWord);
	// 		}
	// 		if (currentAnagramWord === conundrum) {
	// 			setGotConundrum(true);
	// 			setIsNextDayCountdownActive(true);
	// 			setShowResults(true);
	// 			setTimeout(() => {
	// 				const gameLetterTiles = document.querySelectorAll('.card');
	// 				gameLetterTiles.forEach((tile) => {
	// 					tile.classList.remove('visible');
	// 				});
	// 			}, 2000);
	// 		}
	// 		return;
	// 	}
	// };

	return (
		<StyledUserLetterCards>
			<div className='row-btns-container'>
				<div className='button small-btn'>
					<button className='btn-back btn-cta'>reset</button>
					<button className='btn-front btn-cta' onClick={handleReset}>
						reset
					</button>
				</div>
				<div className='button small-btn'>
					<button className='btn-back btn-cta'>skip</button>
					<button className='btn-front btn-cta' onClick={handleSkip}>
						skip
					</button>
				</div>
				<div className='button small-btn'>
					<button className='btn-back btn-cta'>Submit</button>
					<button className='btn-front btn-cta' onClick={handleSubmit}>
						Submit
					</button>
				</div>
			</div>

			<StyledSmallNumberOutput>
				{currentShuffledTargetWord.map((letter, index) => {
					return (
						<div key={index} className='card'>
							<div className='card-back card-number'>&nbsp;</div>
							<div
								className='card-front card-number'
								data-index={index}
								onClick={handleLetter}
							>
								{letter}
							</div>
						</div>
					);
				})}
			</StyledSmallNumberOutput>
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
		grid-template-columns: repeat(4, 1fr);
		/* grid-template-rows:  */
	}
	.button {
		position: relative;
		height: 45px;
		flex: 1;
		&.small-btn {
			height: 34px;
			/* font-size: 2.5rem; */
			&:last-child {
				grid-column: span 2;
			}
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
		/* background-color: pink; */
	}
	.button.visible .btn-front {
		transform: rotateX(0);
	}
	/* .card.matched .card-value {
	animation: correct 1s linear forwards 500ms;
} */

	.btn-back {
		/* background-color: ${({ theme }) => theme.bgChosen}; */
		font-size: 2rem;
		/* border: 1px solid white; */
		outline: none;
		background-color: ${({ theme }) => theme.bgTile};
		color: ${({ theme }) => theme.bgTile};
		display: grid;
		place-content: center;
		border-radius: 5px;
		/* border-radius: 5px; */
	}
	.btn-front {
		/* border: 1px solid white; */
		font-size: 3rem;
		/* border: 1px solid white; */
		outline: none;
		/* background-color: ${({ theme }) => theme.bgChosen}; */
		/* color: ${({ theme }) => theme.bgChosen}; */
		display: grid;
		place-content: center;
		border-radius: 5px;
		/* border-radius: 5px; */
		transform: rotateX(180deg);
		background-color: ${({ theme }) => theme.bgChosen};
		color: ${({ theme }) => theme.syntax};
		cursor: pointer;
		&.active {
			background-color: ${({ theme }) => theme.bgChosen};
		}
	}
	/* .btns-container {
		display: flex;
		justify-content: space-between;
		column-gap: 2rem;
		.start-btns-container {
			width: 100%;
			margin-bottom: 1rem;
		}
	} */

	/* padding: 0 2rem; */
`;
const StyledSmallNumberOutput = styled.div`
	display: grid;
	justify-content: center;
	grid-template-columns: repeat(var(--letter-count), 1fr);
	/* grid-template-columns: repeat(9, 1fr); */
	grid-template-rows: repeat(1, 4.5rem);
	/* border: 3px solid ${({ theme }) => theme.border}; */
	/* background-color: ${({ theme }) => theme.bgTile}; */
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
		/* color: white; */
	}
	/* .card.matched .card-value {
	animation: correct 1s linear forwards 500ms;
} */

	.card-back {
		/* background-color: ${({ theme }) => theme.bgChosen}; */
		font-size: 2rem;
		/* border: 1px solid white; */
		outline: none;
		background-color: ${({ theme }) => theme.bgChosen};
		color: ${({ theme }) => theme.bgChosen};
		display: grid;
		place-content: center;
		border-radius: 5px;
		/* border-radius: 5px; */
	}
	.card-front {
		/* border: 1px solid white; */
		font-size: 3rem;
		/* border: 1px solid white; */
		outline: none;
		/* background-color: ${({ theme }) => theme.bgChosen}; */
		/* color: ${({ theme }) => theme.bgChosen}; */
		display: grid;
		place-content: center;
		border-radius: 5px;
		/* border-radius: 5px; */
		transform: rotateY(180deg);
		background-color: ${({ theme }) => theme.bgTile};
		color: ${({ theme }) => theme.syntax};
		cursor: pointer;
		&.active {
			background-color: ${({ theme }) => theme.bgChosen};
		}
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

export default UserLetterCards;

// import React from 'react';
// import styled from 'styled-components';

// const UserLetterCards = ({ gameNumbers }) => {
// 	return (
// 		<StyledUserLetterCards>
// 			<StyledSmallNumberOutput>
// 				{gameNumbers
// 					.sort(function (a, b) {
// 						return b - a;
// 					})
// 					.map((number) => {
// 						return (
// 							<div key={number} className='game-number'>
// 								{number}
// 							</div>
// 						);
// 					})}
// 			</StyledSmallNumberOutput>
// 		</StyledUserLetterCards>
// 	);
// };
// const StyledUserLetterCards = styled.div`
// 	border: 0px solid;
// `;
// const StyledSmallNumberOutput = styled.div`
// 	display: grid;
// 	justify-content: center;
// 	grid-template-columns: repeat(6, 1fr);
// 	grid-template-rows: repeat(1, 4.5rem);
// 	border: 2px solid ${({ theme }) => theme.border};
// 	background-color: ${({ theme }) => theme.bgTile};
// 	border-radius: 5px;
// 	.game-number {
// 		font-size: 2rem;
// 		border: 1px solid white;
// 		outline: none;
// 		background-color: ${({ theme }) => theme.bgChosen};
// 		color: ${({ theme }) => theme.bgChosen};
// 		display: grid;
// 		place-content: center;
// 		border-radius: 5px;

// 		&.flip {
// 			animation: 0.5s linear flipping;
// 			background-color: ${({ theme }) => theme.bgNumber};
// 			color: ${({ theme }) => theme.syntax};
// 			&:nth-child(2) {
// 				animation-delay: 300ms;
// 			}
// 			&:nth-child(3) {
// 				animation-delay: 600ms;
// 			}
// 			&:nth-child(4) {
// 				animation-delay: 900ms;
// 			}
// 			&:nth-child(5) {
// 				animation-delay: 1.2s;
// 			}
// 			&:last-child {
// 				animation-delay: 1.5s;
// 			}
// 		}
// 	}
// 	@keyframes flipping {
// 		0% {
// 			transform: rotateX(0deg);
// 			background-color: ${({ theme }) => theme.bgChosen};
// 			color: ${({ theme }) => theme.bgChosen};
// 		}
// 		50% {
// 			transform: rotateX(90deg);
// 			background-color: ${({ theme }) => theme.bgNumber};
// 			color: ${({ theme }) => theme.syntax};
// 		}
// 		100% {
// 			transform: rotateX(0deg);
// 			background-color: ${({ theme }) => theme.bgNumber};
// 			color: ${({ theme }) => theme.syntax};
// 		}
// 	}
// `;

// export default UserLetterCards;
