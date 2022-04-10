import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
// import GameTitle from '../components/Global/GameTitle';
import GameTypeScreen from '../components/Global/GameTypeScreen';

const Home = ({
	conundrumGameMode,
	setConundrumGameMode,
	anagramGameMode,
	setAnagramGameMode,
	setPageTitle,
}) => {
	// let navigate
	useEffect(() => {
		console.log('home rendered');
		setPageTitle('select game');
	}, [setPageTitle]);

	// const changeTitle = () => {
	// 	setPageTitle('select game');
	// }

	return (
		<StyledHome>
			{/* <GameTitle title='select game' /> */}
			<GameTypeScreen
				name='conundrum'
				description="use all letters to make today's word"
				isTimed='false'
				conundrumGameMode={conundrumGameMode}
				setConundrumGameMode={setConundrumGameMode}
			/>
			<GameTypeScreen
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
				// onClick={navigate('/letterround')}
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
