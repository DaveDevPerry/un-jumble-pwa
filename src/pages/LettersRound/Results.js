import React, { useEffect } from 'react';
import styled from 'styled-components';
import NextGameCountdown from '../../components/NextGameCountdown';
// import NextGameCountdown from '../../components/LettersRound/NextGameCountdown';
import { useNavigate } from 'react-router-dom';
import { BsWhatsapp, BsFillShareFill } from 'react-icons/bs';
// import GameLetterCards from '../../components/Conundrum/GameLetterCards';

const LetterRoundResults = ({
	showLetterRoundResults,
	allLetterRoundUserWords,
	setAllLetterRoundUserWords,
	gameLetters,
	setGameLetters,
	letterRoundLongestWord,
	gotNineLetterWord,
	setIsNextDayCountdownActive,
	isNextDayCountdownActive,
	setLetterTypes,
	setLetterRoundData,
	letterRoundData,
}) => {
	let navigate = useNavigate();

	const shareMobile = () => {
		const gameType = 'letter round';
		const gameScore = document.querySelector(
			'.share-letter-round-points'
		).textContent;
		window.open(
			`whatsapp://send?text=I just scored ${gameScore} points on the ${gameType}. My best word was ${letterRoundLongestWord}.`
		);
	};
	// console.log(wordOfTheDay, 'word otd');
	// console.log(typeof wordOfTheDay, 'word otd type');
	// const [usersBestWord, setUsersBestWord] = useState([]);

	// useEffect(() => {
	// 	const wordSplit = wordOfTheDay.split(',');
	// 	setUsersBestWord(wordSplit);
	// }, [wordOfTheDay]);
	// const [nineLetterWords, setNineLetterWords] = useState([]);
	// const [eightLetterWords, setEightLetterWords] = useState([]);
	// const [sevenLetterWords, setSevenLetterWords] = useState([]);
	// const [sixLetterWords, setSixLetterWords] = useState([]);
	// const [fiveLetterWords, setFiveLetterWords] = useState([]);
	// const [fourLetterWords, setFourLetterWords] = useState([]);
	// const [threeLetterWords, setThreeLetterWords] = useState([]);
	// const [letterRoundPoints, setLetterRoundPoints] = useState(0);

	// useEffect(() => {
	// 	const sortedWordsByLength = allLetterRoundUserWords.sort(function (a, b) {
	// 		return b.word.length - a.word.length;
	// 	});
	// 	const nineCount = sortedWordsByLength.filter((wordItem) => {
	// 		return wordItem.word.length === 9;
	// 	});
	// 	setNineLetterWords(nineCount);
	// 	const eightCount = sortedWordsByLength.filter((wordItem) => {
	// 		return wordItem.word.length === 8;
	// 	});
	// 	setEightLetterWords(eightCount);
	// 	const sevenCount = sortedWordsByLength.filter((wordItem) => {
	// 		return wordItem.word.length === 7;
	// 	});
	// 	setSevenLetterWords(sevenCount);
	// 	const sixCount = sortedWordsByLength.filter((wordItem) => {
	// 		return wordItem.word.length === 6;
	// 	});
	// 	setSixLetterWords(sixCount);
	// 	const fiveCount = sortedWordsByLength.filter((wordItem) => {
	// 		return wordItem.word.length === 5;
	// 	});
	// 	setFiveLetterWords(fiveCount);
	// 	const fourCount = sortedWordsByLength.filter((wordItem) => {
	// 		return wordItem.word.length === 4;
	// 	});
	// 	setFourLetterWords(fourCount);
	// 	const threeCount = sortedWordsByLength.filter((wordItem) => {
	// 		return wordItem.word.length === 3;
	// 	});
	// 	setThreeLetterWords(threeCount);
	// 	// setLetterRoundPoints(
	// 	// 	nineLetterWords.length * 20 +
	// 	// 		eightLetterWords.length * 13 +
	// 	// 		sevenLetterWords.length * 10 +
	// 	// 		sixLetterWords.length * 7 +
	// 	// 		fiveLetterWords.length * 5 +
	// 	// 		fourLetterWords.length * 3 +
	// 	// 		threeLetterWords.length * 1
	// 	// );
	// }, [
	// 	allLetterRoundUserWords,
	// 	// nineLetterWords,
	// 	// eightLetterWords,
	// 	// sevenLetterWords,
	// 	// sixLetterWords,
	// 	// fiveLetterWords,
	// 	// fourLetterWords,
	// 	// threeLetterWords,
	// ]);

	useEffect(() => {
		console.log('lr results');
	}, []);

	// const updateLRPlayed = () => {
	// 	// console.log(letterRoundData, 'lrd');

	// 	// letterRoundData.played++;
	// 	// const newData =

	// 	const fromLs = JSON.parse(localStorage.getItem('countdown-v1'));
	// 	const wordObj = fromLs.find((Obj) => Obj.gameType === 'letter round');
	// 	wordObj.played++;
	// 	localStorage.setItem('countdown-v1', JSON.stringify(fromLs));
	// 	// setLetterRoundData(letterRoundData);
	// 	// console.log(letterRoundData, 'new lrd');
	// };

	return (
		<>
			<StyledLetterRoundResults>
				<h2>RESULTS</h2>
				<div className='letter-round-stats-container'>
					<div className='stat-wrapper'>
						<p>03</p>
						<p>played</p>
					</div>
					<div className='stat-wrapper'>
						<p>607</p>
						<p>points</p>
					</div>
					<div className='stat-wrapper'>
						<p>100</p>
						<p>win %</p>
					</div>
					<div className='stat-wrapper'>
						<p>03</p>
						<p>current streak</p>
					</div>
					<div className='stat-wrapper'>
						<p>03</p>
						<p>max streak</p>
					</div>
				</div>

				{/* // IF 9 letter word can be made from all letters display below */}
				<StyledLetterOutput>
					{gameLetters.map((letter, index) => {
						return (
							<div key={index} className='card'>
								<div className='card-back card-letter'>{letter}</div>
								<div className='card-front card-letter'>&nbsp;</div>
							</div>
						);
					})}
				</StyledLetterOutput>
				{/* <p className='conundrum-meaning'>meaning of the word goes here</p> */}
				<p className='letter-round-ai-best-word'>
					longest possible word - IN PROGRESS
				</p>
				{/* <ul className='best-attempt'>
				<li>{usersBestAttempt}</li>
			</ul> */}
				{/* <p className='conundrum-user-result'>BETTER LUCK TOMORROW</p> */}

				{/* <p className='letter-round-user-result'>
				CONGRATULATIONS!
			</p> */}
				{/* <ul className='best-attempt'>
				<li>
					{usersBestWords &&
						usersBestWords.sort(function (a, b) {
							return b[1] - a[1];
						})[0]}
				</li>
			</ul> */}
				{/* <ul className='longest-word'>
				<li>Total Word Count</li>
			</ul> */}
				{/* <p className='letter-round-user-result'>
				{gotNineLetterWord.length === 9 ? 'YOU HIT THE NINE!' : 'WELL PLAYED'}
			</p> */}
				<p className='letter-round-user-result'>
					{/* {nineLetterWords.length * 20 +
						eightLetterWords.length * 13 +
						sevenLetterWords.length * 10 +
						sixLetterWords.length * 7 +
						fiveLetterWords.length * 5 +
						fourLetterWords.length * 3 +
						threeLetterWords.length * 1 <=
					10
						? 'YOU PLAYED OK'
						: 'WELL PLAYED'} */}
				</p>

				<ul className='best-attempt hide'>
					<li>
						<p>best word</p>
						<p>
							<span>{letterRoundLongestWord}</span>
						</p>
						<p> letters</p>
						{/* <p>{letterRoundLongestWord.length} letters</p> */}
					</li>
				</ul>

				{/* <table className='letter-round-player-word-table'>
					<tbody>
						{nineLetterWords.length > 0 ? (
							<tr>
								<td>{nineLetterWords.length}</td>
								<td>X</td>
								<td>
									9 letter {nineLetterWords.length === 1 ? 'word' : 'words'}
								</td>
								<td>
									{nineLetterWords.length * 20}
									<span className='small-pts'>pts</span>
								</td>
							</tr>
						) : (
							<tr>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
							</tr>
						)}
						{eightLetterWords.length > 0 ? (
							<tr>
								<td>{eightLetterWords.length}</td>
								<td>X</td>
								<td>
									8 letter {eightLetterWords.length === 1 ? 'word' : 'words'}
								</td>
								<td>
									{eightLetterWords.length * 13}
									<span className='small-pts'>pts</span>
								</td>
							</tr>
						) : (
							<tr>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
							</tr>
						)}
						{sevenLetterWords.length > 0 ? (
							<tr>
								<td>{sevenLetterWords.length}</td>
								<td>X</td>
								<td>
									7 letter {sevenLetterWords.length === 1 ? 'word' : 'words'}
								</td>
								<td>
									{sevenLetterWords.length * 10}
									<span className='small-pts'>pts</span>
								</td>
							</tr>
						) : (
							<tr>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
							</tr>
						)}
						{sixLetterWords.length > 0 ? (
							<tr>
								<td>{sixLetterWords.length}</td>
								<td>X</td>
								<td>
									6 letter {sixLetterWords.length === 1 ? 'word' : 'words'}
								</td>
								<td>
									{sixLetterWords.length * 7}
									<span className='small-pts'>pts</span>
								</td>
							</tr>
						) : (
							<tr>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
							</tr>
						)}
						{fiveLetterWords.length > 0 ? (
							<tr>
								<td>{fiveLetterWords.length}</td>
								<td>X</td>
								<td>
									5 letter {fiveLetterWords.length === 1 ? 'word' : 'words'}
								</td>
								<td>
									{fiveLetterWords.length * 5}
									<span className='small-pts'>pts</span>
								</td>
							</tr>
						) : (
							<tr>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
							</tr>
						)}
						{fourLetterWords.length > 0 ? (
							<tr>
								<td>{fourLetterWords.length}</td>
								<td>X</td>
								<td>
									4 letter {fourLetterWords.length === 1 ? 'word' : 'words'}
								</td>
								<td>
									{fourLetterWords.length * 3}
									<span className='small-pts'>pts</span>
								</td>
							</tr>
						) : (
							<tr>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
							</tr>
						)}
						{threeLetterWords.length > 0 ? (
							<tr>
								<td>{threeLetterWords.length}</td>
								<td>X</td>
								<td>
									3 letter {threeLetterWords.length === 1 ? 'word' : 'words'}
								</td>
								<td>
									{threeLetterWords.length * 1}
									<span className='small-pts'>pts</span>
								</td>
							</tr>
						) : (
							<tr>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
							</tr>
						)}
						{/* <tr>
						<td>{fiveLetterWords.length}</td>
						<td>X</td>
						<td>5 letter {fiveLetterWords.length === 1 ? 'word' : 'words'}</td>
						<td>{fiveLetterWords.length * 5}</td>
					</tr> */}
				{/* <tr>
						<td>{fourLetterWords.length}</td>
						<td>X</td>
						<td>4 letter {fourLetterWords.length === 1 ? 'word' : 'words'}</td>
						<td>{fourLetterWords.length * 3}</td>
					</tr> */}
				{/* <tr>
						<td>{threeLetterWords.length}</td>
						<td>X</td>
						<td>3 letter {threeLetterWords.length === 1 ? 'word' : 'words'}</td>
						<td>{threeLetterWords.length * 1}</td>
					</tr> */}
				{/* </tbody> */}
				{/* </table> */}
				{/* <table className='letter-round-player-word-table'>
				<tbody>
					<tr>
						<td>5</td>
						<td>X</td>
						<td>5 letter words</td>
						<td>25</td>
					</tr>
					<tr>
						<td>3</td>
						<td>X</td>
						<td>4 letter words</td>
						<td>9</td>
					</tr>
					<tr>
						<td>2</td>
						<td>X</td>
						<td>3 letter words</td>
						<td>2</td>
					</tr>
				</tbody>
			</table> */}

				{/* <div className='points-container'>
				<h2>{gotNineLetterWord === '' ? 0 : 10}</h2>
				<p>points</p>
			</div> */}
				<div className='points-container'>
					<h2 className='share-letter-round-points'>
						{/* {nineLetterWords.length * 20 +
							eightLetterWords.length * 13 +
							sevenLetterWords.length * 10 +
							sixLetterWords.length * 7 +
							fiveLetterWords.length * 5 +
							fourLetterWords.length * 3 +
							threeLetterWords.length * 1} */}
					</h2>
					<p>points</p>
				</div>

				{/* <GameLetterCards handleStartGame={handleStartGame} shuffled={shuffled} /> */}
				{/* <StyledSmallNumberOutput>
				{wordOfTheDayArray.map((letter, index) => {
					return (
						<div key={index} className='card'>
							<div className='card-back card-number'>{letter}</div>
							<div className='card-front card-number'>&nbsp;</div>
						</div>
					);
				})}

			
	
			</StyledSmallNumberOutput> */}
				{/* <table id="letter-round-results-table">
		<thead>
			<th>word</th>
			<th>letters</th>
		</thead>
	</table> */}
				{/* <ul className='best-attempt'>
				<li>
					{
						allLetterRoundUserWords.sort(function (a, b) {
							return b[1] - a[1];
						})[0]
					}
				</li>
				
			</ul> */}
				{/* <div className='points-container'>
				<h2>10</h2>
				<p>points</p>
			</div> */}
				<div className='rank-container'>
					<p>RANKED: 560th</p>
				</div>
				<div className='wrapper'>
					<div className='next-wrapper'>
						<p>Next Game</p>
						<NextGameCountdown
							isNextDayCountdownActive={isNextDayCountdownActive}
						/>
					</div>
					<div className='share-wrapper-whatsapp'>
						<button id='share-btn-whatsapp' onClick={shareMobile}>
							{/* {' '}
						<p>Share</p> */}
							<BsFillShareFill size='20px' />
							<BsWhatsapp size='25px' />
						</button>
						{/* <button id='share-btn'>
						<p>Share</p>
						<BsFillShareFill size='16px' />
					</button> */}
					</div>
				</div>
			</StyledLetterRoundResults>
			<button
				className='results-home-btn'
				onClick={() => {
					setIsNextDayCountdownActive(false);
					// updateLRPlayed();

					navigate('/');
					// setAllAttempts([]);
					// setGameNumbers([]);
					// setNumberTarget(0);
					// setGameNumberSizes([]);
					setAllLetterRoundUserWords([]);
					setGameLetters([]);
					// setLetterTypes([]);
					// document
					// 	.querySelector('.start-btns-container')
					// 	.classList.remove('hide');
				}}
			>
				HOME
			</button>
		</>
		// <StyledLetterRoundResults className={isTimeUp === true ? 'results show' : 'results'}>
		// 	<p className='results-header'>GAME OVER - RESULTS</p>

		// 	<button
		// 		className={
		// 			gameNumbers.length === 6
		// 				? 'close-results-btn show'
		// 				: 'close-results-btn'
		// 		}
		// 		onClick={closeResults}
		// 	>
		// 		HOME
		// 	</button>
		// </StyledLetterRoundResults>
	);
};
const StyledLetterRoundResults = styled.section`
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	background-color: ${({ theme }) => theme.bgTile};
	border-radius: 5px;
	padding: 1rem 2rem;
	transition: all 300ms ease-in;
	flex: 1;
	/* color: red !important; */
	h2 {
		font-family: 'Bebas Neue', cursive;
		display: flex;
		align-items: center;
		align-self: center;
		font-size: 2.5rem;
		font-weight: 100;
	}
	.letter-round-stats-container {
		display: flex;
		justify-content: space-evenly;
		align-items: flex-start;
		.stat-wrapper {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: flex-start;
			flex-wrap: wrap;
			flex: 1;
			p {
				font-size: 2rem;
				font-weight: 800;
				line-height: 1;
				color: ${({ theme }) => theme.bgChosen};
				&:last-child {
					font-family: 'Montserrat';
					text-transform: capitalize;
					font-size: 1.2rem;
					font-weight: 400;
					text-align: center;
					color: ${({ theme }) => theme.syntax};
				}
			}
		}
	}
	.letter-round-user-result {
		font-size: 3rem;
		border-top: 2px solid ${({ theme }) => theme.bgChosen};
		border-bottom: 2px solid ${({ theme }) => theme.bgChosen};
		font-family: 'Bebas Neue', cursive;
		letter-spacing: 1px;
		/* text-align: center; */
		align-self: center;
		display: inline-block;
	}
	.letter-round-player-word-table {
		align-self: center;
		font-size: 1.8rem;
		th {
			font-weight: lighter;
		}

		tr {
			td {
				padding: 0rem 0.2rem;
				&:nth-child(2) {
					color: ${({ theme }) => theme.bgChosen};
					font-weight: bolder;
				}
				&:last-child {
					color: ${({ theme }) => theme.bgChosen};
					text-align: right;
					font-weight: bolder;
					.small-pts {
						font-size: 1.4rem;
						padding-left: 0.2rem;
					}
				}
			}
		}
	}
	.points-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		h2 {
			color: ${({ theme }) => theme.bgChosen};
			font-size: 5rem;
			line-height: 0.7;
			font-weight: 400;
		}
		p {
			font-size: 2rem;
		}
	}
	.wrapper {
		display: flex;
		width: 100%;
		justify-content: space-between;
		.next-wrapper {
			display: flex;
			justify-content: center;
			flex-direction: column;
			align-items: center;
			flex: 1;
			p {
				font-size: 1.6rem;
				color: ${({ theme }) => theme.bgChosen};
				line-height: 1;
				font-weight: bolder;
				&:last-child {
					font-size: 2rem;
					font-weight: lighter;
					color: ${({ theme }) => theme.syntax};
				}
			}
		}
		.share-wrapper-whatsapp {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: space-around;
			row-gap: 2rem;
			border-left: 2px solid ${({ theme }) => theme.bgChosen};
			flex: 1;
			.share-btn-whatsapp {
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: space-between;
				letter-spacing: 2px;
				font-size: 1.6rem;
				padding: 0.5rem 1rem;
				background-color: ${({ theme }) => theme.bgChosen};
				border: none;
				border-radius: 5px;
				color: ${({ theme }) => theme.syntax};
				cursor: pointer;
				padding: 0.2rem 1rem;
				column-gap: 1rem;
			}
		}
	}
	/* .results-modal {
		display: none;
		opacity: 0;
		justify-content: space-between;
		flex-direction: column;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		height: 100%;
		width: 100%;
		z-index: 500;
		background-color: ${({ theme }) => theme.bgTile};
		padding: 1rem;
		border-radius: 10px;
		transition: all 300ms ease-in;
		h2 {
			font-family: 'Bebas Neue', cursive;
			display: flex;
			align-items: center;
			align-self: center;
			font-size: 2.5rem;
			font-weight: 100;
		}
		.stats-container {
			display: flex;
			justify-content: space-evenly;
			align-items: flex-start;

			.stat-wrapper {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: flex-start;
				flex-wrap: wrap;
				flex: 1;
			}
			p {
				font-size: 3rem;
				font-weight: 100;
				line-height: 1;
				color: ${({ theme }) => theme.bgChosen};
				&:last-child {
					font-family: 'Montserrat';
					text-transform: capitalize;
					font-size: 1.2rem;
					font-weight: 400;
					text-align: center;
					color: ${({ theme }) => theme.syntax};
				}
			}
		}
		.points-container {
			display: flex;
			flex-direction: column;
			align-items: center;
			h2 {
				color: ${({ theme }) => theme.bgChosen};
				font-size: 5rem;
				line-height: 0.7;
				font-weight: 400;
			}
			p {
				font-size: 2rem;
			}
		}
		.letter-round-ai-best-word {
			font-family: 'Montserrat';
			font-size: 1.2rem;
		}
		.letter-round-player-word-table {
			align-self: center;
			font-size: 1.8rem;
			th {
				font-weight: lighter;
			}

			tr {
				td {
					padding: 0rem 0.2rem;
					&:nth-child(2) {
						color: ${({ theme }) => theme.bgChosen};
						font-weight: bolder;
					}
					&:last-child {
						color: ${({ theme }) => theme.bgChosen};
						text-align: right;
						font-weight: bolder;
						.small-pts {
							font-size: 1.4rem;
							padding-left: 0.2rem;
						}
					}
				}
			}
		}
		.letter-round-user-result {
			font-size: 2.6rem;
			border-top: 2px solid ${({ theme }) => theme.bgChosen};
			border-bottom: 2px solid ${({ theme }) => theme.bgChosen};
		}
		.rank-container {
			display: flex;
			flex-direction: row;
			align-items: center;
			display: none;
			p {
			}
		}
		.best-attempt {
			list-style: none;

			li {
				display: flex;
				justify-content: center;
				align-items: center;
				letter-spacing: 2px;
				column-gap: 1rem;
				p {
					font-size: 2rem;
					span {
						color: ${({ theme }) => theme.bgChosen};
						font-size: 2.6rem;
					}
				}
			}
		}
		.wrapper {
			display: flex;
			width: 100%;
			justify-content: space-between;

			.next-wrapper {
				display: flex;
				justify-content: center;
				flex-direction: column;
				align-items: center;
				flex: 1;

				p {
					font-size: 1.6rem;
					color: ${({ theme }) => theme.bgChosen};
					line-height: 1;
					font-weight: bolder;
					&:last-child {
						font-size: 2rem;
						font-weight: lighter;
						color: ${({ theme }) => theme.syntax};
					}
				}
			}
			.share-wrapper-whatsapp {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: space-around;
				row-gap: 2rem;
				border-left: 2px solid ${({ theme }) => theme.bgChosen};
				flex: 1;
				.share-btn-whatsapp {
					display: flex;
					flex-direction: row;
					align-items: center;
					justify-content: space-between;
					letter-spacing: 2px;
					font-size: 1.6rem;
					padding: 0.5rem 1rem;
					background-color: ${({ theme }) => theme.bgChosen};
					border: none;
					border-radius: 5px;
					color: ${({ theme }) => theme.syntax};
					cursor: pointer;
					padding: 0.2rem 1rem 0.5rem 1rem;
					column-gap: 1rem;
				}
			}
			button {
				display: flex;
				align-items: center;
				border: none;
				background-color: ${({ theme }) => theme.bgChosen};
				column-gap: 1rem;
			}
		}
		&.show {
			display: flex;
			opacity: 1;
		}
	}
	.timer-container {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.game-variables-container {
		display: block;
		opacity: 1;
		transition: opacity 300ms ease-in;
	}
	.words-display-container {
		display: flex;

		flex: 1;
	}
	.user-letter-container {
		display: block;
	} */
	/* position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 310px;
	background: ${({ theme }) => theme.bgTile};
	border-radius: 5px;
	padding: 1rem 0.5rem;
	opacity: 0;
	justify-content: space-between;
	flex-direction: column;
	display: flex;
	z-index: 500000;
	pointer-events: none;
	transition: opacity 300ms ease-in;
	p {
		display: flex;
		align-items: center;
		align-self: center;
		span {
			font-size: 6rem;
			color: ${({ theme }) => theme.bgChosen};
			padding: 0 0.5rem;
			font-weight: bold;
		}
	}
	&.show {
		opacity: 1;
		pointer-events: all;
	}
	.close-results-btn {
		width: 50%;
		align-self: center;
		font-size: 2rem;
		font-weight: bold;
		padding: 0.5rem 1rem;
		margin-top: 2rem;
		margin-bottom: 1rem;
		background-color: ${({ theme }) => theme.bgChosen};
		border: 1px solid ${({ theme }) => theme.btnBorder};
		border-radius: 5px;
		color: ${({ theme }) => theme.syntax};
		opacity: 0;
		transition: opacity 300ms ease-in;
		&.show {
			display: block;
			opacity: 1;
			pointer-events: all;
		}
	} */
`;
const StyledLetterOutput = styled.div`
	display: grid;
	justify-content: center;
	grid-template-columns: repeat(9, 1fr);
	grid-template-rows: repeat(1, 4.5rem);
	/* border: 3px solid ${({ theme }) => theme.border}; */
	/* background-color: ${({ theme }) => theme.bgTile}; */
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
	/* .card.matched .card-value {
	animation: correct 1s linear forwards 500ms;
} */

	.card-back {
		/* background-color: ${({ theme }) => theme.bgChosen}; */
		font-size: 3rem;
		/* border: 1px solid white; */
		outline: none;
		background-color: ${({ theme }) => theme.bgChosen};
		/* color: ${({ theme }) => theme.bgChosen}; */
		color: ${({ theme }) => theme.syntax};
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
		/* background-color: ${({ theme }) => theme.bgTile}; */
		background-color: ${({ theme }) => theme.bgChosen};
		/* color: ${({ theme }) => theme.syntax}; */
	}
`;

export default LetterRoundResults;
