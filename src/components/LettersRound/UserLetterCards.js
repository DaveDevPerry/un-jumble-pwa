import React from 'react';
import styled from 'styled-components';

const UserLetterCards = ({
	currentLetterRoundWord,
	setCurrentLetterRoundWord,
	dictionary,
	setAllLetterRoundUserWords,
	allLetterRoundUserWords,
	gameLetters,
	setLetterRoundLongestWord,
	letterRoundLongestWord,
	setGotNineLetterWord,
	setLetterRoundData,
	letterRoundData,
	sortedWordsByLengthArray,
	setSortedWordsByLengthArray,
	setNineLetterWords,
	setEightLetterWords,
	setSevenLetterWords,
	setSixLetterWords,
	setFiveLetterWords,
	setFourLetterWords,
	setThreeLetterWords,
}) => {
	const handleSubmit = (e) => {
		e.preventDefault();
		if (currentLetterRoundWord.length < 3) return;
		checkWord();
		// reset tiles
		const tiles = document.querySelectorAll('.card-front');
		tiles.forEach((tile) => {
			tile.classList.remove('active');
			tile.style.pointerEvents = 'initial';
		});
		setCurrentLetterRoundWord('');
	};
	const handleReset = (e) => {
		e.preventDefault();
		setCurrentLetterRoundWord('');
		// setCurrentWordLetterIndex([]);
		const tiles = document.querySelectorAll('.card-front');
		tiles.forEach((tile) => {
			tile.classList.remove('active');
			tile.style.pointerEvents = 'initial';
		});
	};
	const tileAudio = () => {
		const audio = new Audio('/audio/tile.mp3');
		audio.play();
	};
	// nineLetterWords.length * 20 +
	// eightLetterWords.length * 13 +
	// sevenLetterWords.length * 10 +
	// sixLetterWords.length * 7 +
	// fiveLetterWords.length * 5 +
	// fourLetterWords.length * 3 +
	// threeLetterWords.length * 1
	// const updateLS = (newWord) => {
	// 	console.log(letterRoundData, 'lrd');
	// 	let newWordScore = 0;
	// 	// get score
	// 	switch (newWord.length) {
	// 		case 9:
	// 			newWordScore = 20;
	// 			break;
	// 		case 8:
	// 			newWordScore = 13;
	// 			break;
	// 		case 7:
	// 			newWordScore = 10;
	// 			break;
	// 		case 6:
	// 			newWordScore = 7;
	// 			break;
	// 		case 5:
	// 			newWordScore = 5;
	// 			break;
	// 		case 4:
	// 			newWordScore = 3;
	// 			break;
	// 		case 3:
	// 			newWordScore = 1;
	// 			break;
	// 		default:
	// 			break;
	// 	}
	// 	letterRoundData.score += newWordScore;
	// 	// const newData =
	// 	letterRoundData.words.push(newWord);
	// 	console.log(letterRoundData, 'new lrd');
	// 	const fromLs = JSON.parse(localStorage.getItem('countdown-v1'));
	// 	const wordObj = fromLs.find((Obj) => Obj.gameType === 'letter round');
	// 	wordObj.words.push(newWord);
	// 	wordObj.score += newWordScore;
	// 	localStorage.setItem('countdown-v1', JSON.stringify(fromLs));
	// 	setLetterRoundData(letterRoundData);
	// 	console.log(letterRoundData, 'new lrd');
	// };

	// works
	// const updateLS = (newWord) => {
	// 	const fromLs = JSON.parse(localStorage.getItem('countdown-v1'));
	// 	const wordObj = fromLs.find((Obj) => Obj.gameType === 'letter round');
	// 	wordObj.words.push(newWord);
	// 	localStorage.setItem('countdown-v1', JSON.stringify(fromLs));
	// };

	const handleLetter = (e) => {
		tileAudio();
		e.preventDefault();
		console.log(e.target.textContent);
		if (e.target.classList.contains('active')) {
			e.target.classList.remove('active');
			e.target.style.pointerEvents = 'initial';
		} else {
			e.target.classList.add('active');
			e.target.style.pointerEvents = 'none';
		}
		setCurrentLetterRoundWord((currentLetterRoundWord += e.target.textContent));
	};

	// const [currentLetterRoundWordScore, setCurrentLetterRoundWordScore] =
	// 	useState(0);

	// useEffect(()=>{
	// 	console.log('setting sorted');
	// 	const sortedWordsByLength = allLetterRoundUserWords.sort(function (a, b) {
	// 		return b.word.length - a.word.length;
	// 	});
	// 	console.log(sortedWordsByLength, 'sorted words');
	// 	setSortedWordsByLengthArray(sortedWordsByLength);
	// 	console.log(sortedWordsByLengthArray, 'sorted');
	// 	const nineCount = sortedWordsByLengthArray.filter((wordItem) => {
	// 		return wordItem.word.length === 9;
	// 	});
	// 	setNineLetterWords(nineCount);
	// 	const eightCount = sortedWordsByLengthArray.filter((wordItem) => {
	// 		return wordItem.word.length === 8;
	// 	});
	// 	setEightLetterWords(eightCount);
	// 	const sevenCount = sortedWordsByLengthArray.filter((wordItem) => {
	// 		return wordItem.word.length === 7;
	// 	});
	// 	setSevenLetterWords(sevenCount);
	// 	const sixCount = sortedWordsByLengthArray.filter((wordItem) => {
	// 		return wordItem.word.length === 6;
	// 	});
	// 	setSixLetterWords(sixCount);
	// 	const fiveCount = sortedWordsByLengthArray.filter((wordItem) => {
	// 		return wordItem.word.length === 5;
	// 	});
	// 	setFiveLetterWords(fiveCount);
	// 	const fourCount = sortedWordsByLengthArray.filter((wordItem) => {
	// 		return wordItem.word.length === 4;
	// 	});
	// 	setFourLetterWords(fourCount);
	// 	const threeCount = sortedWordsByLengthArray.filter((wordItem) => {
	// 		return wordItem.word.length === 3;
	// 	});
	// 	setThreeLetterWords(threeCount);
	// },[setAllLetterRoundUserWords])

	// checks validity of word and displays relative msg
	const checkWord = () => {
		console.log('current word', currentLetterRoundWord);
		// if (!dictionary.includes(currentLetterRoundWord.toLowerCase())) {
		if (!dictionary.includes(currentLetterRoundWord.toLowerCase())) {
			console.log('wrong');
			const currentWordPoints = parseInt('-' + getWordScore());
			// setCurrentLetterRoundWordScore(-2);
			setAllLetterRoundUserWords([
				...allLetterRoundUserWords,
				{
					word: currentLetterRoundWord,
					score: currentWordPoints,
					isCorrect: false,
				},
			]);
			// return;
			// setCurrentLetterRoundWord('');
		}
		// if (dictionary.includes(currentLetterRoundWord.toLowerCase())) {
		if (dictionary.includes(currentLetterRoundWord.toLowerCase())) {
			console.log('right');
			const currentWordPoints = getWordScore();

			setAllLetterRoundUserWords([
				...allLetterRoundUserWords,
				{
					word: currentLetterRoundWord,
					score: currentWordPoints,
					isCorrect: true,
				},
			]);

			// updateLS({
			// 	word: currentLetterRoundWord,
			// 	length: currentLetterRoundWord.length,
			// });
			// works
			// updateLS({
			// 	word: currentLetterRoundWord,
			// 	length: currentLetterRoundWord.length,
			// });

			// later
			// if (currentLetterRoundWord.length > letterRoundLongestWord.length) {
			// 	setLetterRoundLongestWord(currentLetterRoundWord);
			// }
			// if (currentLetterRoundWord.length === 9) {
			// 	setGotNineLetterWord(setCurrentLetterRoundWord);
			// }
			// return;
		}
		// console.log('setting sorted');
		// const sortedWordsByLength = allLetterRoundUserWords.sort(function (a, b) {
		// 	return b.word.length - a.word.length;
		// });
		// console.log(sortedWordsByLength, 'sorted words');
		// setSortedWordsByLengthArray(sortedWordsByLength);
		// console.log(sortedWordsByLengthArray, 'sorted');
		// const nineCount = sortedWordsByLengthArray.filter((wordItem) => {
		// 	return wordItem.word.length === 9;
		// });
		// setNineLetterWords(nineCount);
		// const eightCount = sortedWordsByLengthArray.filter((wordItem) => {
		// 	return wordItem.word.length === 8;
		// });
		// setEightLetterWords(eightCount);
		// const sevenCount = sortedWordsByLengthArray.filter((wordItem) => {
		// 	return wordItem.word.length === 7;
		// });
		// setSevenLetterWords(sevenCount);
		// const sixCount = sortedWordsByLengthArray.filter((wordItem) => {
		// 	return wordItem.word.length === 6;
		// });
		// setSixLetterWords(sixCount);
		// const fiveCount = sortedWordsByLengthArray.filter((wordItem) => {
		// 	return wordItem.word.length === 5;
		// });
		// setFiveLetterWords(fiveCount);
		// const fourCount = sortedWordsByLengthArray.filter((wordItem) => {
		// 	return wordItem.word.length === 4;
		// });
		// setFourLetterWords(fourCount);
		// const threeCount = sortedWordsByLengthArray.filter((wordItem) => {
		// 	return wordItem.word.length === 3;
		// });
		// setThreeLetterWords(threeCount);
	};

	const getWordScore = () => {
		let newWordScore = 0;
		switch (currentLetterRoundWord.length) {
			case 9:
				newWordScore = 20;
				break;
			case 8:
				newWordScore = 13;
				break;
			case 7:
				newWordScore = 10;
				break;
			case 6:
				newWordScore = 7;
				break;
			case 5:
				newWordScore = 5;
				break;
			case 4:
				newWordScore = 3;
				break;
			case 3:
				newWordScore = 1;
				break;
			default:
				break;
		}
		// setCurrentLetterRoundWordScore(newWordScore);
		return newWordScore;
	};

	return (
		<StyledUserLetterCards>
			<div className='row-btns-container'>
				<div className='button'>
					<button className='btn-back btn-cta'>reset</button>
					<button className='btn-front btn-cta' onClick={handleReset}>
						reset
					</button>
				</div>
				<div className='button'>
					<button className='btn-back btn-cta'>Submit</button>
					<button className='btn-front btn-cta' onClick={handleSubmit}>
						Submit
					</button>
				</div>

				{/* <button className='start-btns-container' onClick={handleReset}>
					reset
				</button>
				<button className='start-btns-container' onClick={handleSubmit}>
					Submit
				</button> */}
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

			{/* <StyledLetterOutput>
				{wordOfTheDay.split('').map((letter, index) => {
					return (
						<div key={index} className='card'>
							<div className='card-back card-letter'>&nbsp;</div>
							<div className='card-front card-letter'>{letter}</div>
						</div>
					);
				})}
			</StyledLetterOutput> */}
			{/* <StyledLetterOutput>
				{wordOfTheDay.map((letter, index) => {
					return (
						<div key={index} className='card'>
							<div className='card-back card-letter'>&nbsp;</div>
							<div className='card-front card-letter'>{letter}</div>
						</div>
					);
				})}
			</StyledLetterOutput> */}
		</StyledUserLetterCards>
	);
};
const StyledUserLetterCards = styled.div`
	border: none;
	.row-btns-container {
		perspective: 500px;
		display: flex;
		column-gap: 2rem;
		margin-bottom: 1rem;
	}
	.button {
		position: relative;
		height: 45px;
		flex: 1;
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
		&.active {
			background-color: ${({ theme }) => theme.bgChosen};
		}
	}
	/* .start-btns-container {
		width: 100%;
		margin-bottom: 1rem;
	} */
	/* padding: 0 2rem; */
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
		cursor: pointer;
		display: grid;
		place-content: center;
		border-radius: 5px;
		/* border-radius: 5px; */
		transform: rotateY(180deg);
		background-color: ${({ theme }) => theme.bgTile};
		color: ${({ theme }) => theme.syntax};
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
