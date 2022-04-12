import React, { useEffect } from 'react';
import styled from 'styled-components';
import GameTypeScreen from '../components/Global/GameTypeScreen';

const Home = ({
	conundrumGameMode,
	setConundrumGameMode,
	anagramGameMode,
	setAnagramGameMode,
	setPageTitle,
}) => {
	useEffect(() => {
		console.log('home rendered');
		setPageTitle('select game');
	}, [setPageTitle]);
	return (
		<StyledHome>
			<GameTypeScreen
				name='conundrum'
				description="use all letters to make today's word"
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
