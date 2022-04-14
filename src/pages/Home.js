import React, { useEffect } from 'react';
import styled from 'styled-components';
import GameTypeScreen from '../components/Global/GameTypeScreen';
import LetterRoundContextProvider from '../contexts/LetterRoundContext';
// import LetterRoundContextProvider, {
// 	LetterRoundContext,
// } from '../contexts/LetterRoundContext';

const Home = ({
	conundrumGameMode,
	setConundrumGameMode,
	anagramGameMode,
	setAnagramGameMode,
	setPageTitle,
}) => {
	// const { games } = useContext(LetterRoundContext);

	useEffect(() => {
		console.log('home rendered');
		setPageTitle('un-jumble');
		// console.log(games, 'letter round games');
		// handleUpdate()
	}, [setPageTitle]);

	// const handleUpdate = () => {
	// 	// dispatch({
	// 	// 	type: 'ADD_CONUNDRUM',
	// 	// 	// conundrum: { date, level, wordOfTheDay, isCorrect },
	// 	// 	conundrum: {
	// 	// 		// date,
	// 	// 		// level,
	// 	// 		// wordOfTheDay,
	// 	// 		// isCorrect,
	// 	// 		date: new Date().toLocaleDateString(),
	// 	// 		level: conundrumGameMode,
	// 	// 		wordOfTheDay: conundrum,
	// 	// 		isCorrect: isConundrumCorrect,
	// 	// 	},
	// 	// });

	// 	console.log(games)
	// }

	return (
		<StyledHome>
			<GameTypeScreen
				name='conundrum'
				description='select below how many letters you want to play'
				// description="use all letters to make today's word"
				isTimed='false'
				conundrumGameMode={conundrumGameMode}
				setConundrumGameMode={setConundrumGameMode}
			/>
			<GameTypeScreen
				name='anagram round'
				description='un-jumble as many words as poss. in two minutes'
				isTimed='true'
				anagramGameMode={anagramGameMode}
				setAnagramGameMode={setAnagramGameMode}
			/>
			<LetterRoundContextProvider>
				<GameTypeScreen
					url={'/letterround'}
					name='letter round'
					description='make words from a selection of nine letters'
					isTimed='true'
				/>
			</LetterRoundContextProvider>
		</StyledHome>
	);
};

const StyledHome = styled.section`
	justify-content: space-between;
	flex-direction: column;
	display: flex;
	flex: 1;
	row-gap: 1rem;
`;

export default Home;
