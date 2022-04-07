import React, { useEffect } from 'react';
import styled from 'styled-components';
import NextGameCountdown from '../../components/NextGameCountdown';
import { useNavigate } from 'react-router-dom';
import { BsFillShareFill, BsWhatsapp } from 'react-icons/bs';

const ConundrumResults = ({
	showResults,
	conundrum,
	gotConundrum,
	isNextDayCountdownActive,
	setIsNextDayCountdownActive,
}) => {
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
	useEffect(() => {
		console.log('conundrum results');
	}, []);
	return (
		<>
			<StyledConundrumResults>
				{/* <StyledConundrumResults
			className={showResults ? 'results-modal show' : 'results-modal'}
		> */}
				<h2>RESULTS</h2>
				<div className='conundrum-stats-container'>
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

				{/* <GameLetterCards handleStartGame={handleStartGame} shuffled={shuffled} /> */}
				{/* <StyledLetterOutput>
				{conundrum.split('').map((letter, index) => {
					return (
						<div key={index} className='card'>
							<div className='card-back card-letter'>{letter}</div>
							<div className='card-front card-letter'>&nbsp;</div>
						</div>
					);
				})}
			</StyledLetterOutput> */}
				{/* <p className='conundrum-meaning'>{meaning}</p> */}
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
				<p className='conundrum-user-result'>
					{gotConundrum ? 'CONGRATULATIONS!' : 'BETTER LUCK TOMORROW'}
				</p>
				{/* <p className='conundrum-user-result'>
				{gotConundrum.length === 9
					? 'CONGRATULATIONS!'
					: 'BETTER LUCK TOMORROW'}
			</p> */}
				<div className='points-container'>
					<h2 id='share-conundrum-points'>{gotConundrum ? '+1' : ''}</h2>
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
				<div className='wrapper'>
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
					{/* <div className='share-wrapper'>
					<button id='share-btn'>
						<p>Share</p>
						<BsFillShareFill size='25px' />
					</button>
				</div> */}
				</div>
				{/* setCounter( counter => ({...counter,seconds:counter.seconds+1 } )); */}
			</StyledConundrumResults>
			<button
				className='results-home-btn'
				onClick={() => {
					// setConundrumData({ played: 2 });
					// 				showResults,
					// allUserWords,
					// conundrumOfTheDay,
					// conundrumOfTheDayArray,
					// conundrum,
					// usersBestWords,
					// setUsersBestWords,
					// gotConundrum,
					// isNextDayCountdownActive,
					// setIsNextDayCountdownActive,
					// longestWord,
					// conundrumData,
					// setConundrumData,
					// setData();
					// let updatedValue = {};
					// updatedValue = {"item1":"juice"};

					// let updatedValue = {};
					// updatedValue = {"item1":"juice"};
					// setShopCart(shopCart => ({
					// 			...shopCart,
					// 			...updatedValue
					// 		}));
					// updateStatus();
					setIsNextDayCountdownActive(false);
					navigate('/');
					// setConundrumStatus((conundrumStatus) => ({
					// 	...conundrumStatus,
					// 	...{ four: true },
					// }));

					// setConundrumData({ ...conundrumData, played: 2 });
					// setAllAttempts([]);
					// setGameNumbers([]);
					// setNumberTarget(0);
					// setGameNumberSizes([]);
					// 	document
					// 		.querySelector('.start-btns-container')
					// 		.classList.remove('hide');
				}}
			>
				HOME
			</button>
		</>
		// <StyledConundrumResults className={isTimeUp === true ? 'results show' : 'results'}>
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
		// </StyledConundrumResults>
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
	.conundrum-user-result {
		font-size: 3rem;
		border-top: 2px solid ${({ theme }) => theme.bgChosen};
		border-bottom: 2px solid ${({ theme }) => theme.bgChosen};
		font-family: 'Bebas Neue', cursive;
		letter-spacing: 1px;
		/* text-align: center; */
		align-self: center;
		display: inline-block;
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
// const StyledLetterOutput = styled.div`
// 	display: grid;
// 	justify-content: center;
// 	grid-template-columns: repeat(var(--letter-count), 1fr);
// 	grid-template-rows: repeat(1, 4.5rem);
// 	border-radius: 5px;
// 	perspective: 500px;
// 	gap: 0.3rem;
// 	.card {
// 		position: relative;
// 	}
// 	.card-letter {
// 		position: absolute;
// 		width: 100%;
// 		height: 100%;
// 		display: flex;
// 		justify-content: center;
// 		align-items: center;
// 		overflow: hidden;
// 		backface-visibility: hidden;
// 		transition: transform 500ms ease-in-out;
// 	}
// 	.card.visible .card-back {
// 		transform: rotateY(-180deg);
// 	}
// 	.card.visible .card-front {
// 		transform: rotateY(0);
// 	}

// 	.card-back {
// 		font-size: 3rem;
// 		outline: none;
// 		background-color: ${({ theme }) => theme.bgChosen};
// 		color: ${({ theme }) => theme.syntax};
// 		display: grid;
// 		place-content: center;
// 		border-radius: 5px;
// 	}
// 	.card-front {
// 		font-size: 3rem;
// 		outline: none;
// 		display: grid;
// 		place-content: center;
// 		border-radius: 5px;
// 		transform: rotateY(180deg);
// 		background-color: ${({ theme }) => theme.bgChosen};
// 	}
// `;
export default ConundrumResults;
