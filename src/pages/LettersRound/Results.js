import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
// import NextGameCountdown from '../../components/Global/NextGameCountdown';
// import NextGameCountdown from '../../components/LettersRound/NextGameCountdown';
import { useNavigate } from 'react-router-dom';
// import { BsWhatsapp, BsFillShareFill } from 'react-icons/bs';
// import GameTitle from '../../components/Global/GameTitle';
import ResultsFooter from '../../components/Global/ResultsFooter';
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
	// nineLetterWords,
	// eightLetterWords,
	// sevenLetterWords,
	// sixLetterWords,
	// fiveLetterWords,
	// fourLetterWords,
	// threeLetterWords,
	// setNineLetterWords,
	// setEightLetterWords,
	// setSevenLetterWords,
	// setSixLetterWords,
	// setFiveLetterWords,
	// setFourLetterWords,
	// setThreeLetterWords,
	setSortedWordsByLengthArray,
	// setSortedWordsByLengthArray,
	sortedWordsByLengthArray,
	setPageTitle,
	setMessage,
}) => {
	useEffect(() => {
		console.log('lr results render');
		setTimeout(() => {
			const gameLetterTiles = document.querySelectorAll('.results-card');
			gameLetterTiles.forEach((tile) => {
				tile.classList.add('visible');
			});
		}, 1000);
	}, []);
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
	const [nineLetterWords, setNineLetterWords] = useState([]);
	const [eightLetterWords, setEightLetterWords] = useState([]);
	const [sevenLetterWords, setSevenLetterWords] = useState([]);
	const [sixLetterWords, setSixLetterWords] = useState([]);
	const [fiveLetterWords, setFiveLetterWords] = useState([]);
	const [fourLetterWords, setFourLetterWords] = useState([]);
	const [threeLetterWords, setThreeLetterWords] = useState([]);
	const [nineLetterWrongWords, setNineLetterWrongWords] = useState([]);
	const [eightLetterWrongWords, setEightLetterWrongWords] = useState([]);
	const [sevenLetterWrongWords, setSevenLetterWrongWords] = useState([]);
	const [sixLetterWrongWords, setSixLetterWrongWords] = useState([]);
	const [fiveLetterWrongWords, setFiveLetterWrongWords] = useState([]);
	const [fourLetterWrongWords, setFourLetterWrongWords] = useState([]);
	const [threeLetterWrongWords, setThreeLetterWrongWords] = useState([]);
	// const [letterRoundPoints, setLetterRoundPoints] = useState(0)
	// const [letterRoundPoints, setLetterRoundPoints] = useState(0);
	// const [wrongWords, setWrongWords] = useState([])

	// const [sortedWordsByLengthArray, setSortedWordsByLengthArray] = useState([]);

	useEffect(() => {
		const sortedWrongWordsByLength = allLetterRoundUserWords
			.filter((wordItem) => {
				return wordItem.isCorrect === false;
			})
			.sort(function (a, b) {
				return b.word.length - a.word.length;
			});
		console.log(sortedWrongWordsByLength, 'sorted words');
		// setSortedWrongWordsByLengthArray(sortedWrongWordsByLength);
		console.log(sortedWrongWordsByLength, 'sorted');
		const nineCountWrong = sortedWrongWordsByLength.filter((wordItem) => {
			return wordItem.word.length === 9;
		});
		setNineLetterWrongWords(nineCountWrong);
		const eightCountWrong = sortedWrongWordsByLength.filter((wordItem) => {
			return wordItem.word.length === 8;
		});
		setEightLetterWrongWords(eightCountWrong);
		const sevenCountWrong = sortedWrongWordsByLength.filter((wordItem) => {
			return wordItem.word.length === 7;
		});
		setSevenLetterWrongWords(sevenCountWrong);
		const sixCountWrong = sortedWrongWordsByLength.filter((wordItem) => {
			return wordItem.word.length === 6;
		});
		setSixLetterWrongWords(sixCountWrong);
		const fiveCountWrong = sortedWrongWordsByLength.filter((wordItem) => {
			return wordItem.word.length === 5;
		});
		setFiveLetterWrongWords(fiveCountWrong);
		const fourCountWrong = sortedWrongWordsByLength.filter((wordItem) => {
			return wordItem.word.length === 4;
		});
		setFourLetterWrongWords(fourCountWrong);
		const threeCountWrong = sortedWrongWordsByLength.filter((wordItem) => {
			return wordItem.word.length === 3;
		});
		setThreeLetterWrongWords(threeCountWrong);
		console.log(sortedWrongWordsByLength, 'wrong array');

		// correct words
		console.log('setting sorted');
		const sortedWordsByLength = allLetterRoundUserWords
			.filter((wordItem) => {
				return wordItem.isCorrect === true;
			})
			.sort(function (a, b) {
				return b.word.length - a.word.length;
			});
		console.log(sortedWordsByLength, 'sorted words');
		// setSortedWordsByLengthArray(sortedWordsByLength);
		console.log(sortedWordsByLength, 'sorted');
		const nineCount = sortedWordsByLength.filter((wordItem) => {
			return wordItem.word.length === 9;
		});
		setNineLetterWords(nineCount);
		const eightCount = sortedWordsByLength.filter((wordItem) => {
			return wordItem.word.length === 8;
		});
		setEightLetterWords(eightCount);
		const sevenCount = sortedWordsByLength.filter((wordItem) => {
			return wordItem.word.length === 7;
		});
		setSevenLetterWords(sevenCount);
		const sixCount = sortedWordsByLength.filter((wordItem) => {
			return wordItem.word.length === 6;
		});
		setSixLetterWords(sixCount);
		const fiveCount = sortedWordsByLength.filter((wordItem) => {
			return wordItem.word.length === 5;
		});
		setFiveLetterWords(fiveCount);
		const fourCount = sortedWordsByLength.filter((wordItem) => {
			return wordItem.word.length === 4;
		});
		setFourLetterWords(fourCount);
		const threeCount = sortedWordsByLength.filter((wordItem) => {
			return wordItem.word.length === 3;
		});
		setThreeLetterWords(threeCount);
		// setLetterRoundPoints(
		// 	nineLetterWrongWords.length * 20 +
		// 		eightLetterWrongWords.length * 13 +
		// 		sevenLetterWrongWords.length * 10 +
		// 		sixLetterWrongWords.length * 7 +
		// 		fiveLetterWrongWords.length * 5 +
		// 		fourLetterWrongWords.length * 3 +
		// 		threeLetterWrongWords.length * 1
		// );
		// setLetterRoundPoints(
		// 	nineLetterWords.length * 20 +
		// 		eightLetterWords.length * 13 +
		// 		sevenLetterWords.length * 10 +
		// 		sixLetterWords.length * 7 +
		// 		fiveLetterWords.length * 5 +
		// 		fourLetterWords.length * 3 +
		// 		threeLetterWords.length * 1
		// );
	}, [allLetterRoundUserWords]);

	// useEffect(() => {
	// 	console.log('setting sorted');
	// 	const sortedWordsByLength = allLetterRoundUserWords.sort(function (a, b) {
	// 		return b.word.length - a.word.length;
	// 	});
	// 	console.log(sortedWordsByLength, 'sorted words');
	// 	setSortedWordsByLengthArray([
	// 		...sortedWordsByLengthArray,
	// 		sortedWordsByLength,
	// 	]);
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
	// }, []);

	useEffect(() => {
		console.log('lr results');
		setPageTitle('results');
	}, [setPageTitle]);

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
			{/* <GameTitle title='results' /> */}
			<StyledLetterRoundResults>
				{/* <h2>RESULTS</h2> */}
				{/* <div className='letter-round-stats-container'>
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
				</div> */}

				{/* // IF 9 letter word can be made from all letters display below */}
				<StyledLetterOutput>
					{gameLetters.map((letter, index) => {
						return (
							<div key={index} className='results-card'>
								<div className='results-card-back results-card-letter'>
									&nbsp;
								</div>
								<div className='results-card-front results-card-letter'>
									{letter}
								</div>
							</div>
						);
					})}
				</StyledLetterOutput>
				{/* <p className='conundrum-meaning'>meaning of the word goes here</p> */}
				{/* <p className='letter-round-ai-best-word'>
					longest possible word - IN PROGRESS
				</p> */}
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

				{/* <p className='letter-round-user-result'> */}
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
				{/* </p> */}

				{/* <ul className='best-attempt'>
					<li>
						<p>best word</p>
						<p>
							<span>{letterRoundLongestWord}</span>
						</p>
						<p> letters</p>
					</li>
				</ul> */}

				<section className='points-table-container'>
					<table className='letter-round-player-word-table'>
						<tbody>
							{nineLetterWords && nineLetterWords.length > 0 ? (
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
							{eightLetterWords && eightLetterWords.length > 0 ? (
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
							{sevenLetterWords && sevenLetterWords.length > 0 ? (
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
							{sixLetterWords && sixLetterWords.length > 0 ? (
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
							{fiveLetterWords && fiveLetterWords.length > 0 ? (
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
							{fourLetterWords && fourLetterWords.length > 0 ? (
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
							{threeLetterWords && threeLetterWords.length > 0 ? (
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
						</tbody>
					</table>

					<table className='letter-round-player-wrong-word-table'>
						<tbody>
							{nineLetterWrongWords && nineLetterWrongWords.length > 0 ? (
								<tr>
									<td>{nineLetterWrongWords.length}</td>
									<td>X</td>
									<td>
										9 letter{' '}
										{nineLetterWrongWords.length === 1 ? 'word' : 'words'}
									</td>
									<td>
										{-20 * nineLetterWrongWords.length}
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
							{eightLetterWrongWords && eightLetterWrongWords.length > 0 ? (
								<tr>
									<td>{eightLetterWrongWords.length}</td>
									<td>X</td>
									<td>
										8 letter{' '}
										{eightLetterWrongWords.length === 1 ? 'word' : 'words'}
									</td>
									<td>
										{-13 * eightLetterWrongWords.length}
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
							{sevenLetterWrongWords && sevenLetterWrongWords.length > 0 ? (
								<tr>
									<td>{sevenLetterWrongWords.length}</td>
									<td>X</td>
									<td>
										7 letter{' '}
										{sevenLetterWrongWords.length === 1 ? 'word' : 'words'}
									</td>
									<td>
										{-10 * sevenLetterWrongWords.length}
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
							{sixLetterWrongWords && sixLetterWrongWords.length > 0 ? (
								<tr>
									<td>{sixLetterWrongWords.length}</td>
									<td>X</td>
									<td>
										6 letter{' '}
										{sixLetterWrongWords.length === 1 ? 'word' : 'words'}
									</td>
									<td>
										{-7 * sixLetterWrongWords.length}
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
							{fiveLetterWrongWords && fiveLetterWrongWords.length > 0 ? (
								<tr>
									<td>{fiveLetterWrongWords.length}</td>
									<td>X</td>
									<td>
										5 letter{' '}
										{fiveLetterWrongWords.length === 1 ? 'word' : 'words'}
									</td>
									<td>
										{-5 * fiveLetterWrongWords.length}
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
							{fourLetterWrongWords && fourLetterWrongWords.length > 0 ? (
								<tr>
									<td>{fourLetterWrongWords.length}</td>
									<td>X</td>
									<td>
										4 letter{' '}
										{fourLetterWrongWords.length === 1 ? 'word' : 'words'}
									</td>
									<td>
										{-3 * fourLetterWrongWords.length}
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
							{threeLetterWrongWords && threeLetterWrongWords.length > 0 ? (
								<tr>
									<td>{threeLetterWrongWords.length}</td>
									<td>X</td>
									<td>
										3 letter{' '}
										{threeLetterWrongWords.length === 1 ? 'word' : 'words'}
									</td>
									<td>
										{-1 * threeLetterWrongWords.length}
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
						</tbody>
					</table>
				</section>
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
						{allLetterRoundUserWords.reduce((accumulator, object) => {
							return accumulator + object.score;
						}, 0)}
					</h2>
					<p>points</p>
				</div>

				<p className='letter-round-user-result'>
					{allLetterRoundUserWords.reduce((accumulator, object) => {
						return accumulator + object.score;
					}, 0) > 20
						? 'EXCELLENT'
						: 'GOOD JOB'}
				</p>

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
				{/* <div className='rank-container'>
					<p>RANKED: 560th</p>
				</div> */}
				<ResultsFooter
					isNextDayCountdownActive={isNextDayCountdownActive}
					shareMobile={shareMobile}
				/>

				{/* <div className='wrapper'>
					<div className='next-wrapper'>
						<p>Next Game</p>
						<NextGameCountdown
							isNextDayCountdownActive={isNextDayCountdownActive}
						/>
					</div>
					<div className='share-wrapper-whatsapp'>
						<button className='share-btn-whatsapp' onClick={shareMobile}>
						
							<BsFillShareFill size='20px' />
							<BsWhatsapp size='25px' />
						</button>
						{/* <button id='share-btn'>
						<p>Share</p>
						<BsFillShareFill size='16px' />
					</div>
				</div> */}
			</StyledLetterRoundResults>
			<button
				className='results-home-btn'
				onClick={() => {
					setMessage('play again?');
					// setIsNextDayCountdownActive(false);
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
	.letter-round-ai-best-word {
		font-size: 1.2rem;
		align-self: center;
	}
	.letter-round-user-result {
		font-size: 3rem;
		border-top: 2px solid ${({ theme }) => theme.bgChosen};
		border-bottom: 2px solid ${({ theme }) => theme.bgChosen};
		font-family: 'Bebas Neue', cursive;
		letter-spacing: 1px;
		align-self: center;
		display: inline-block;
		padding: 0 1rem;
	}
	.points-table-container {
		align-self: center;
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
		.letter-round-player-wrong-word-table {
			align-self: center;
			font-size: 1.8rem;
			th {
				font-weight: lighter;
			}

			tr {
				td {
					padding: 0rem 0.2rem;
					&:nth-child(2) {
						color: ${({ theme }) => theme.red};
						font-weight: bolder;
					}
					&:last-child {
						color: ${({ theme }) => theme.red};
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
`;
const StyledLetterOutput = styled.div`
	display: grid;
	justify-content: center;
	grid-template-columns: repeat(9, 1fr);
	grid-template-rows: repeat(1, 4.5rem);
	border-radius: 5px;
	perspective: 500px;
	gap: 0.3rem;
	.results-card {
		position: relative;
	}
	.results-card-letter {
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
	.results-card.visible .results-card-back {
		transform: rotateY(-180deg);
	}
	.results-card.visible .results-card-front {
		transform: rotateY(0);
	}

	.results-card-back {
		font-size: 3rem;
		outline: none;
		background-color: ${({ theme }) => theme.bgTile};

		display: grid;
		place-content: center;
		border-radius: 5px;
	}
	.results-card-front {
		font-size: 3rem;
		outline: none;
		display: grid;
		place-content: center;
		border-radius: 5px;
		transform: rotateY(180deg);
		background-color: ${({ theme }) => theme.bgChosen};
		color: ${({ theme }) => theme.syntax};
	}
`;

export default LetterRoundResults;
