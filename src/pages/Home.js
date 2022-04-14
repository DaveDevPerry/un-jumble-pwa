import React, { useEffect } from 'react';
import styled from 'styled-components';
import GameTypeScreen from '../components/Global/GameTypeScreen';
import LetterRoundContextProvider from '../contexts/LetterRoundContext';

const Home = ({
	conundrumGameMode,
	setConundrumGameMode,
	anagramGameMode,
	setAnagramGameMode,
	setPageTitle,
}) => {
	useEffect(() => {
		setPageTitle('un-jumble');
	}, [setPageTitle]);

	return (
		<StyledHome>
			<GameTypeScreen
				name='conundrum'
				description='select below how many letters you want to play'
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
