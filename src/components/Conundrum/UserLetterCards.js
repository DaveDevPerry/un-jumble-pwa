import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const ConundrumUserLetterCards = ({
	currentWord,
	setCurrentWord,
	shuffled,
	dictionary,
	conundrum,
	setConundrum,
	setMessage,
	setIsConundrumCorrect,
	conundrumGameMode,
}) => {
	let navigate = useNavigate();

	const tileAudio = () => {
		const audio = new Audio('/audio/tile.mp3');
		audio.play();
	};
	const playShowResults = () => {
		const audio = new Audio('/audio/squeek.mp3');
		audio.play();
	};
	const playClear = () => {
		const audio = new Audio('/audio/negative.mp3');
		audio.play();
	};

	const handleReset = (e) => {
		playClear();
		e.preventDefault();
		const tiles = document.querySelectorAll('.card-front');
		tiles.forEach((tile) => {
			tile.classList.remove('active');
			tile.style.pointerEvents = 'initial';
		});
		setCurrentWord('');
	};

	const handleSubmit = (e) => {
		if (currentWord.length !== conundrumGameMode)
			return setMessage('Use all letters!');
		e.preventDefault();
		checkWord();
		// setMessage('');
		// reset tiles
		const tiles = document.querySelectorAll('.card-front');
		tiles.forEach((tile) => {
			tile.classList.remove('active');
			tile.style.pointerEvents = 'initial';
		});
		setCurrentWord('');
	};

	const handleLetter = (e) => {
		tileAudio();
		e.preventDefault();
		if (e.target.classList.contains('active')) {
			e.target.classList.remove('active');
			e.target.style.pointerEvents = 'initial';
		} else {
			e.target.classList.add('active');
			setCurrentWord((currentWord += e.target.textContent));
			e.target.style.pointerEvents = 'none';
		}
	};

	// checks validity of word and displays relative msg
	const checkWord = () => {
		console.log(conundrum);
		if (!dictionary.includes(currentWord)) {
			console.log('wrong');
			setMessage('invalid word!');
			// document.querySelector('#footer-speech-bubble')
			// display word is incorrect
			return;
		}
		if (dictionary.includes(currentWord)) {
			console.log('right');
			setConundrum(currentWord);
			setIsConundrumCorrect(true);
			setMessage('correct word!');
			// setAllUserWords([...allUserWords, [currentWord, currentWord.length]]);
			// if (currentWord.length > longestWord.length) {
			// 	setLongestWord(currentWord);
			// }
			// setGotConundrum(true); - WHY?
			// setIsNextDayCountdownActive(true);
			// setIsNextDayCountdownActive(true); - CAN THIS BE TRUE FROM APP LAUNCH
			setTimeout(() => {
				playShowResults();
				navigate('/conundrum/results');
			}, 1000);
			return;
		}
	};

	return (
		<StyledConundrumUserLetterCards>
			<div className='row-btns-container'>
				<div className='button small-btn'>
					<button className='btn-back btn-cta conundrum-btn'>&nbsp;</button>
					<button className='btn-front btn-cta' onClick={handleReset}>
						clear
					</button>
				</div>
				<div className='button small-btn'>
					<button className='btn-back btn-cta conundrum-btn'>&nbsp;</button>
					<button className='btn-front btn-cta' onClick={handleSubmit}>
						Submit
					</button>
				</div>
			</div>

			<StyledSmallNumberOutput>
				{shuffled.map((letter, index) => {
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
		</StyledConundrumUserLetterCards>
	);
};
const StyledConundrumUserLetterCards = styled.div`
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
			/* font-size: 2.5rem; */
			/* &:last-child {
				grid-column: span 2;
			} */
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
		&.conundrum-btn {
			background-color: ${({ theme }) => theme.bgTile};
			color: ${({ theme }) => theme.bgTile};
		}
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
		cursor: pointer;
		&.active {
			background-color: ${({ theme }) => theme.bgChosen};
		}
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
		cursor: pointer;
		&.active {
			background-color: ${({ theme }) => theme.bgChosen};
		}
	}
`;

export default ConundrumUserLetterCards;
