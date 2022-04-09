import React, { useEffect } from 'react';
// import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
// import NextGameCountdown from '../../components/Global/NextGameCountdown';
// import NextGameCountdown from '../../components/LettersRound/NextGameCountdown';
import { useNavigate } from 'react-router-dom';
// import { BsWhatsapp, BsFillShareFill } from 'react-icons/bs';
import GameTitle from '../../components/Global/GameTitle';
import ResultsFooter from '../../components/Global/ResultsFooter';
import UserWordResultsDisplay from '../../components/Anagrams/UserWordResultsDisplay';
// import GameLetterCards from '../../components/Conundrum/GameLetterCards';

const AnagramRoundResults = ({
	showAnagramRoundResults,
	// allLetterRoundUserWords,
	// setAllLetterRoundUserWords,
	// gameLetters,
	// setGameLetters,
	// letterRoundLongestWord,
	// gotNineLetterWord,
	setIsNextDayCountdownActive,
	isNextDayCountdownActive,
	// setLetterTypes,
	// setLetterRoundData,
	// letterRoundData,
	allAnagramUserWords,
	setAllAnagramUserWords,
}) => {
	useEffect(() => {
		console.log('anagram results render');
	}, []);
	let navigate = useNavigate();

	const shareMobile = () => {
		const gameType = 'anagram round';
		const gameScore = document.querySelector(
			'#share-anagram-points'
		).textContent;
		window.open(
			`whatsapp://send?text=I just scored ${gameScore} points on the ${gameType}.`
		);
	};

	// const [nineLetterWords, setNineLetterWords] = useState([]);
	// const [eightLetterWords, setEightLetterWords] = useState([]);
	// const [sevenLetterWords, setSevenLetterWords] = useState([]);
	// const [sixLetterWords, setSixLetterWords] = useState([]);
	// const [fiveLetterWords, setFiveLetterWords] = useState([]);
	// const [fourLetterWords, setFourLetterWords] = useState([]);
	// const [threeLetterWords, setThreeLetterWords] = useState([]);

	// useEffect(() => {
	// 	const sortedWordsByLength = allLetterRoundUserWords.sort(function (a, b) {
	// 		return parseFloat(b.length) - parseFloat(a.length);
	// 	});
	// 	const nineCount = sortedWordsByLength.filter((word) => {
	// 		return word.length === 9;
	// 	});
	// 	setNineLetterWords(nineCount);
	// 	const eightCount = sortedWordsByLength.filter((word) => {
	// 		return word.length === 8;
	// 	});
	// 	setEightLetterWords(eightCount);
	// 	const sevenCount = sortedWordsByLength.filter((word) => {
	// 		return word.length === 7;
	// 	});
	// 	setSevenLetterWords(sevenCount);
	// 	const sixCount = sortedWordsByLength.filter((word) => {
	// 		return word.length === 6;
	// 	});
	// 	setSixLetterWords(sixCount);
	// 	const fiveCount = sortedWordsByLength.filter((word) => {
	// 		return word.length === 5;
	// 	});
	// 	setFiveLetterWords(fiveCount);
	// 	const fourCount = sortedWordsByLength.filter((word) => {
	// 		return word.length === 4;
	// 	});
	// 	setFourLetterWords(fourCount);
	// 	const threeCount = sortedWordsByLength.filter((word) => {
	// 		return word.length === 3;
	// 	});
	// 	setThreeLetterWords(threeCount);

	// }, [
	// 	allLetterRoundUserWords,

	// ]);

	useEffect(() => {
		console.log('lr results');
	}, []);

	return (
		<>
			<GameTitle title='results' />
			<StyledAnagramResults>
				{/* <h2>RESULTS</h2> */}
				{/* <div className='anagram-stats-container'>
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

				<UserWordResultsDisplay allAnagramUserWords={allAnagramUserWords} />

				{/* <div className='anagram-word-list-container'>
					<ul className='anagram-word-list'>
						{allAnagramUserWords.map((userWord, index) => {
							return (
								<li key={userWord + index}>
									<p className={userWord.isCorrect === false ? 'strike' : ''}>
										{userWord.word}
									</p>
								</li>
							);
						})}
					</ul>
				</div> */}

				{/* <p className='anagram-user-result'>
					{allAnagramUserWords.reduce((accumulator, object) => {
						return accumulator + object.score;
					}, 0) > 50
						? 'EXCELLENT'
						: 'GOOD JOB'}
				</p> */}
				<div className='points-container'>
					<h2 id='share-anagram-points'>
						{allAnagramUserWords.reduce((accumulator, object) => {
							return accumulator + object.score;
						}, 0)}
					</h2>
					<p>points</p>
				</div>
				{/* <StyledLetterOutput>
				{gameLetters.map((letter, index) => {
					return (
						<div key={index} className='card'>
							<div className='card-back card-letter'>{letter}</div>
							<div className='card-front card-letter'>&nbsp;</div>
						</div>
						);
				})}
			</StyledLetterOutput>
			<p className='letter-round-ai-best-word'>
			longest possible word - IN PROGRESS
			</p>
			
			<p className='letter-round-user-result'>
				{nineLetterWords.length * 20 +
					eightLetterWords.length * 13 +
					sevenLetterWords.length * 10 +
					sixLetterWords.length * 7 +
					fiveLetterWords.length * 5 +
					fourLetterWords.length * 3 +
					threeLetterWords.length * 1 <=
					10
					? 'YOU PLAYED OK'
					: 'WELL PLAYED'}
			</p>

			<ul className='best-attempt'>
				<li>
					<p>best word</p>
					<p>
						<span>{letterRoundLongestWord}</span>
						</p>
					<p>{letterRoundLongestWord.length} letters</p>
				</li>
			</ul>
			
			<table className='letter-round-player-word-table'>
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
							<td>6 letter {sixLetterWords.length === 1 ? 'word' : 'words'}</td>
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
			
					</tbody>
					</table>
	
			<div className='points-container'>
				<h2 id='share-points'>
					{nineLetterWords.length * 20 +
						eightLetterWords.length * 13 +
						sevenLetterWords.length * 10 +
						sixLetterWords.length * 7 +
						fiveLetterWords.length * 5 +
						fourLetterWords.length * 3 +
						threeLetterWords.length * 1}
				</h2>
				<p>points</p>
			</div>
			
		
			<div className='rank-container'>
				<p>RANKED: 560th</p>
			</div>*/}
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
					</div>
				</div> */}
				{/* <button
				className='results-home-btn'
				onClick={() => {
					setIsNextDayCountdownActive(false);
					// updateLRPlayed();

					navigate('/');
					// setAllAttempts([]);
					// setGameNumbers([]);
					// setNumberTarget(0);
					// setGameNumberSizes([]);
					// setAllLetterRoundUserWords([]);
					// setGameLetters([]);
					// setLetterTypes([]);
					document
						.querySelector('.start-btns-container')
						.classList.remove('hide');
					}}
					>
					HOME
			</button> */}
			</StyledAnagramResults>
			<button
				className='results-home-btn'
				onClick={() => {
					// setIsNextDayCountdownActive(false);
					// updateLRPlayed();
					setAllAnagramUserWords([]);
					navigate('/');
					// setAllAttempts([]);
					// setGameNumbers([]);
					// setNumberTarget(0);
					// setGameNumberSizes([]);
					// setAllLetterRoundUserWords([]);
					// setGameLetters([]);
					// setLetterTypes([]);
					// document
					// 	.querySelector('.start-btns-container')
					// 	.classList.remove('hide');
				}}
			>
				HOME
			</button>
		</>
	);
};
const StyledAnagramResults = styled.section`
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	background-color: ${({ theme }) => theme.bgTile};
	border-radius: 5px;
	padding: 1rem;
	transition: all 300ms ease-in;
	flex: 1;
	h2 {
		font-family: 'Bebas Neue', cursive;
		display: flex;
		align-items: center;
		align-self: center;
		font-size: 2.5rem;
		font-weight: 100;
	}
	.anagram-stats-container {
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
	.anagram-word-list-container {
		/* width: 100%; */
		align-self: center;
		ul {
			list-style: none;
			/* font-size: 3rem; */
			display: grid;
			grid-template-columns: repeat(4, auto);
			grid-template-rows: repeat(8, auto);
			grid-auto-flow: column;
			li {
				display: flex;
				justify-content: flex-start;
				margin-left: 1rem;
				p {
					font-size: 1.2rem;
					text-transform: uppercase;
					color: ${({ theme }) => theme.bgChosen};
					font-weight: 800;
					&.strike {
						text-decoration: line-through;
						color: #9e9a9a;
						color: ${({ theme }) => theme.red};
					}
				}
			}
		}
	}
	.anagram-user-result {
		font-size: 3rem;
		border-top: 2px solid ${({ theme }) => theme.bgChosen};
		border-bottom: 2px solid ${({ theme }) => theme.bgChosen};
		font-family: 'Bebas Neue', cursive;
		letter-spacing: 1px;
		/* text-align: center; */
		align-self: center;
		display: inline-block;
		padding: 0 1rem;
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
	/* .wrapper {
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
				font-size: 2rem;
				color: ${({ theme }) => theme.bgChosen};
				line-height: 1;
				font-weight: 800;
				text-transform: uppercase;
				font-family: 'Bebas Neue', cursive;
				&:last-child {
					font-size: 2.2rem;
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
	} */
`;

export default AnagramRoundResults;
