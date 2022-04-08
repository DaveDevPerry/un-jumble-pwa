import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { GiCheckMark, GiCrossMark } from 'react-icons/gi';
import GameTitle from '../../components/Global/GameTitle';
import ResultsFooter from '../../components/Global/ResultsFooter';

const ConundrumResults = ({
	conundrum,
	isNextDayCountdownActive,
	// setIsNextDayCountdownActive,
}) => {
	useEffect(() => {
		console.log('conundrum results');
		setTimeout(() => {
			const gameLetterTiles = document.querySelectorAll('.results-card');
			gameLetterTiles.forEach((tile) => {
				tile.classList.add('visible');
			});
		}, 1000);
	}, []);
	// const [meaning, setMeaning] = useState('');
	let navigate = useNavigate();
	// const API_KEY = '573fddf5-f4bb-412f-a305-f614bfb3d5f3';
	// useEffect(() => {
	// 	// setMeaning(fetchData());
	// 	const wordMeaning = fetchData();
	// 	setMeaning(wordMeaning);
	// 	// .then((data) =>
	// 	// 	setMeaning(data[0].meanings[0].definitions[0].definition)
	// 	// );
	// }, []);

	// const fetchData = () => {
	// 	return fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${conundrum}`)
	// 		.then((response) => response.json())
	// 		.then((data) => wordMeaning = data[0].meanings[0].definitions[0].definition)
	// 			// console.log(data[0].meanings[0].definitions[0].definition)
	// 		// );
	// };
	// const fetchData = () => {
	// 	fetch(
	// 		`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${conundrum}?key=${API_KEY}`
	// 	)
	// 		.then((response) => response.json())
	// 		.then((data) => console.log(data));
	// 	// .then((data) => setMeaning(data));
	// };
	// const fetchData = () => {
	// 	fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${conundrum}`)
	// 		.then((response) => response.json())
	// 		.then((data) => console.log(data));
	// 	// .then((data) => setMeaning(data));
	// };

	// const updateStatus = () => {
	// 	let updatedValue = {};
	// 	updatedValue = { four: true };

	// 	// let updatedValue = {};
	// 	// updatedValue = {"item1":"juice"};
	// 	setConundrumStatus((conundrumStatus) => ({
	// 		...conundrumStatus,
	// 		...updatedValue,
	// 	}));
	// 	// setConundrumStatus({
	// 	// 	nine: true,
	// 	// 	eight: false,
	// 	// 	seven: true,
	// 	// 	six: false,
	// 	// 	five: false,
	// 	// 	four: false,
	// 	// });
	// };

	const shareMobile = () => {
		const conundrumLength = conundrum.length;
		// const gameScore = document.querySelector(
		// 	'#share-conundrum-points'
		// ).textContent;
		window.open(
			`whatsapp://send?text=I just got the ${conundrumLength} letter conundrum of the day!`
		);
	};

	// const setData = () => {
	// 	console.log('in set data');
	// 	// setConundrumData((conundrumData) => ({
	// 	// 	...conundrumData,
	// 	// 	played: conundrumData.played + 1,
	// 	// }));
	// 	setConundrumData({ ...conundrumData, played: 2 });
	// 	return;
	// };
	// console.log(conundrumOfTheDay, 'word otd');
	// console.log(typeof conundrumOfTheDay, 'word otd type');

	// const [usersBestWord, setUsersBestWord] = useState([]);
	// const [usersBestAttempt, setUsersBestAttempt] = useState('');
	// useEffect(() => {
	// 	const wordSplit = conundrumOfTheDay.split(',');
	// 	setUsersBestWord(wordSplit);
	// }, [conundrumOfTheDay]);
	// useEffect(() => {

	// },[])
	// const [conundrum, setConundrum] = useState([])

	// useEffect(() => {
	// 	const strToArr = conundrumOfTheDay.split

	// 	return () => {
	// 		second
	// 	}
	// }, [third])
	// const allWordsSorted = allUserWords.sort(function (a, b) {
	// 	return b[1] - a[1];
	// });
	// const usersBestWord = allWordsSorted[0];
	// const best = usersBestWord[0];
	// setUsersBestAttempt(best);
	// console.log(allWordsSorted, 'all sorted');
	// console.log(usersBestWord, 'best');
	// console.log(best, 'best');

	return (
		<>
			<GameTitle title='results' />
			<StyledConundrumResults>
				{/* <StyledConundrumResults
			className={showResults ? 'results-modal show' : 'results-modal'}
		> */}
				{/* <h2>RESULTS</h2> */}
				<div className='conundrum-stats-container hide'>
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
				</div>
				<div className='conundrum-level-stats-grid hide'>
					<div className='level-stat-wrapper'>
						<p>
							<GiCrossMark size='15px' color='#8a0202' />
						</p>
						<p>master</p>
					</div>
					<div className='level-stat-wrapper'>
						<p>
							<GiCrossMark size='15px' color='#8a0202' />
						</p>
						<p>expert</p>
					</div>
					<div className='level-stat-wrapper'>
						<p>
							<GiCrossMark size='15px' color='#8a0202' />
						</p>
						<p>advanced</p>
					</div>
					<div className='level-stat-wrapper'>
						<p>
							<GiCheckMark size='15px' color='#004600' />
						</p>
						<p>intermediate</p>
					</div>
					<div className='level-stat-wrapper'>
						<p>
							<GiCrossMark size='15px' color='#8a0202' />
						</p>
						<p>beginner</p>
					</div>
					<div className='level-stat-wrapper'>
						<p>
							<GiCheckMark size='15px' color='#004600' />
						</p>
						<p>advanced</p>
					</div>
				</div>

				{/* <GameLetterCards handleStartGame={handleStartGame} shuffled={shuffled} /> */}
				<StyledLetterOutput>
					{conundrum.split('').map((letter, index) => {
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
				<p className='conundrum-meaning'>meaning of the word goes here</p>
				{/* <ul className='best-attempt'>
				<li>{usersBestAttempt}</li>
			</ul> */}
				{/* <p className='conundrum-user-result'>BETTER LUCK TOMORROW</p> */}

				{/* <p className='conundrum-user-result'>
				{usersBestWords &&
				usersBestWords.sort(function (a, b) {
					return b[1] - a[1];
				})[0].length === 9
					? 'CONGRATULATIONS!'
					: 'BETTER LUCK TOMORROW'}
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
				<li>{longestWord}</li>
			</ul> */}
				{/* <ul className='best-attempt'>
				<li>
					<p>best word</p>
					<p>
						<span>{longestWord}</span>
					</p>
					<p>{longestWord.length} letters</p>
				</li>
			</ul> */}
				<p className='conundrum-user-result'>CONGRATULATIONS!</p>
				{/* <p className='conundrum-user-result'>
				{gotConundrum.length === 9
					? 'CONGRATULATIONS!'
					: 'BETTER LUCK TOMORROW'}
			</p> */}
				<div className='points-container'>
					<h2 id='share-conundrum-points'>+1</h2>
					<p>win</p>
				</div>

				{/* <div className='points-container'>
				<h2>
					{usersBestWords &&
					usersBestWords.sort(function (a, b) {
						return b[1] - a[1];
					})[0].length === 9
						? 10
						: 0}
				</h2>
				<p>points</p>
			</div> */}
				{/* <div className='rank-container'>
				<p>RANKED: 560th</p>
			</div> */}

				<ResultsFooter
					isNextDayCountdownActive={isNextDayCountdownActive}
					shareMobile={shareMobile}
				/>
				{/* setCounter( counter => ({...counter,seconds:counter.seconds+1 } )); */}
			</StyledConundrumResults>
			<button
				className='results-home-btn'
				onClick={() => {
					navigate('/');
				}}
			>
				HOME
			</button>
		</>
	);
};
const StyledConundrumResults = styled.section`
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	background-color: ${({ theme }) => theme.bgTile};
	border-radius: 5px;
	padding: 1rem 2rem;
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
	.conundrum-stats-container {
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
	.conundrum-level-stats-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: repeat(1, 1fr);
		grid-gap: 1rem;
		.level-stat-wrapper {
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
	.conundrum-meaning {
		text-align: center;
	}
	.conundrum-user-result {
		font-size: 3rem;
		border-top: 2px solid ${({ theme }) => theme.bgChosen};
		border-bottom: 2px solid ${({ theme }) => theme.bgChosen};
		font-family: 'Bebas Neue', cursive;
		letter-spacing: 1px;
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
`;
const StyledLetterOutput = styled.div`
	display: grid;
	justify-content: center;
	grid-template-columns: repeat(var(--letter-count), 1fr);
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
export default ConundrumResults;
