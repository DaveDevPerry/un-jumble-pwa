import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
// import ConundrumContextProvider from '../../contexts/ConundrumContext';

// import React, { useContext } from 'react';

// import { ConundrumContext } from '../../contexts/ConundrumContext';

const ConundrumLevelStatus = ({
	// url,
	conundrumGameMode,
	setConundrumGameMode,
	setGameMode,
	letterCount,
	testNum,
}) => {
	// const { conundrums } = useContext(ConundrumContext);
	let navigate = useNavigate();

	// const createConundrumCurrentDayData = () => {
	// 	for (let i = 4; i <= 9; i++) {
	// 		dispatch({
	// 			type: 'ADD_CURRENT_DAY_CONUNDRUMS',
	// 			conundrum: {
	// 				date: new Date().toLocaleDateString(),
	// 				level: i,
	// 				wordOfTheDay: '',
	// 				isCorrect: false,
	// 			},
	// 		});
	// 	}
	// 	// return console.log('check 02/april');
	// 	setTimeout(() => {
	// 		// document.querySelector('.load-screen').classList.add('close');
	// 		navigate('/conundrum/game');
	// 	}, 2000);
	// };

	// const createCurrentDayConundrumData = () => {
	// 	// e.preventDefault();
	// 	dispatch({
	// 		type: 'ADD_CONUNDRUM',
	// 		// conundrum: { date, level, wordOfTheDay, isCorrect },
	// 		conundrum: {
	// 			// date,
	// 			// level,
	// 			// wordOfTheDay,
	// 			// isCorrect,
	// 			date: new Date().toLocaleDateString(),
	// 			level: conundrumGameMode,
	// 			wordOfTheDay: conundrum,
	// 			isCorrect: isConundrumCorrect,
	// 		},
	// 	});
	// 	// setDate('');
	// 	// setLevel('');
	// 	// setWordOfTheDay('');
	// 	// setIsCorrect(false);
	// 	setTimeout(() => {
	// 		navigate('/');
	// 	}, 100);
	// };
	// useEffect(() => {

	// },[currentDate])

	function setTileStyleVariable(number) {
		// console.log(typeof testNum, 'num?');
		const root = document.querySelector(':root');
		root.style.setProperty('--letter-count', number);
	}
	return (
		// <ConundrumContextProvider>
		// 	<StyledConundrumLevelStatus>
		// 		{/* map stats here */}
		// 		{conundrums
		// 			.filter((item) => {
		// 				return item.date === new Date().toLocaleDateString();
		// 			})
		// 			.sort((a, b) => {
		// 				return a.level - b.level;
		// 			})
		// 			// .reduce((acc, current) => {
		// 			// 	const x = acc.find(item => item.id === current.id);
		// 			// 	if (!x) {
		// 			// 		return acc.concat([current]);
		// 			// 	} else {
		// 			// 		return acc;
		// 			// 	}
		// 			// }, [])
		// 			// .slice(-6)
		// 			.map((item, index) => {
		// 				return (
		// 					<div
		// 						key={index}
		// 						className={
		// 							item.isCorrect === true
		// 								? 'quick-stat isComplete'
		// 								: 'quick-stat'
		// 						}
		// 						onClick={() => {
		// 							setConundrumGameMode(item.level);
		// 							setTileStyleVariable(item.level);
		// 							// setConundrumGameMode(index + 4);
		// 							// setTileStyleVariable(index + 4);
		// 							navigate('/conundrum/game');
		// 						}}
		// 					>
		// 						{item.level}
		// 					</div>
		// 				);
		// 			})}
		// 	</StyledConundrumLevelStatus>
		// </ConundrumContextProvider>
		// ) : (
		<StyledConundrumLevelStatus>
			{/* map stats here */}

			<div
				className='quick-stat'
				onClick={() => {
					setConundrumGameMode(4);
					setTileStyleVariable(4);

					// createConundrumCurrentDayData();
					navigate('/conundrum/game');
				}}
			>
				4
			</div>
			<div
				className='quick-stat'
				onClick={() => {
					setConundrumGameMode(5);
					setTileStyleVariable(5);
					navigate('/conundrum/game');
				}}
			>
				5
			</div>
			<div
				className='quick-stat'
				onClick={() => {
					setConundrumGameMode(6);
					setTileStyleVariable(6);
					navigate('/conundrum/game');
				}}
			>
				6
			</div>
			<div
				className='quick-stat'
				onClick={() => {
					setConundrumGameMode(7);
					setTileStyleVariable(7);
					navigate('/conundrum/game');
				}}
			>
				7
			</div>
			<div
				className='quick-stat'
				onClick={() => {
					setConundrumGameMode(8);
					setTileStyleVariable(8);
					navigate('/conundrum/game');
				}}
			>
				8
			</div>
			<div
				className='quick-stat'
				onClick={() => {
					setConundrumGameMode(9);
					setTileStyleVariable(9);
					navigate('/conundrum/game');
				}}
			>
				9
			</div>
		</StyledConundrumLevelStatus>
	);
};
const StyledConundrumLevelStatus = styled.section`
	display: grid;
	grid-template-columns: repeat(6, 1fr);
	grid-template-rows: repeat(1, auto);
	column-gap: 0.5rem;
	/* border: 1px solid black; */
	width: 100%;
	.quick-stat {
		padding: 0.5rem;
		border-radius: 5px;
		background-color: ${({ theme }) => theme.bgChosen};
		color: ${({ theme }) => theme.syntax};
		font-family: 'Bebas Neue', cursive;
		display: grid;
		place-content: center;
		font-weight: 800;
		font-size: 2rem;
		cursor: pointer;
		&.isComplete {
			background-color: ${({ theme }) => theme.isComplete};
			color: ${({ theme }) => theme.bgChosen};
			pointer-events: none;
		}
	}
`;
export default ConundrumLevelStatus;
