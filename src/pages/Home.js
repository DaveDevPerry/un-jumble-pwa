import React, { useEffect } from 'react';
import styled from 'styled-components';
import GameTitle from '../components/Global/GameTitle';
import GameTypeScreen from '../components/Global/GameTypeScreen';

const Home = () => {
	useEffect(() => {
		console.log('home rendered');
	}, []);

	return (
		<StyledHome>
			<GameTitle title='select game' />
			<GameTypeScreen
				url='/conundrum'
				name='conundrum'
				description="use all letters to make today's word"
				isTimed='false'
			/>
			<GameTypeScreen
				url={'/anagramround'}
				name='anagram round'
				description='unscramble words in two minutes'
				isTimed='true'
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
