import React, { useEffect } from 'react';
import styled from 'styled-components';
// import DataFetching from '../components/Conundrum/DataFetching';
import GameTitle from '../components/Global/GameTitle';
import GameTypeScreen from '../components/Global/GameTypeScreen';

const Home = ({
	conundrumGameMode,
	setConundrumGameMode,
	anagramGameMode,
	setAnagramGameMode,
}) => {
	useEffect(() => {
		console.log('home rendered');
	}, []);

	return (
		<StyledHome>
			{/* <DataFetching /> */}
			<GameTitle title='select game' />
			<GameTypeScreen
				// url='/conundrum'
				name='conundrum'
				description="use all letters to make today's word"
				isTimed='false'
				conundrumGameMode={conundrumGameMode}
				setConundrumGameMode={setConundrumGameMode}
			/>
			<GameTypeScreen
				// url={'/anagramround'}
				name='anagram round'
				description='unscramble words in two minutes'
				isTimed='true'
				anagramGameMode={anagramGameMode}
				setAnagramGameMode={setAnagramGameMode}
			/>
			<GameTypeScreen
				url={'/letterround'}
				name='letter round'
				description='make words from a selection of nine letters'
				isTimed='true'
			/>
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
