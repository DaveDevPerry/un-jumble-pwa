import React from 'react';
// import React, { useState } from 'react';
import styled from 'styled-components';
import GameTitle from '../components/GameTitle';
// import { useNavigate } from 'react-router-dom';

// import { MdOutlineTimerOff, MdOutlineTimer } from 'react-icons/md';
import GameTypeScreen from '../components/GameTypeScreen';

const Home = () => {
	// let navigate = useNavigate();

	return (
		<StyledHome>
			<GameTitle title='select game' />
			<GameTypeScreen
				url='/conundrum'
				name='conundrum'
				description="find today's scrambled words"
			/>
			<GameTypeScreen
				url={'/unscramble'}
				name='unscramble'
				description="find today's scrambled words"
			/>
			<GameTypeScreen
				url={'/letterround'}
				name='letter round'
				description="find today's scrambled words"
			/>
		</StyledHome>
	);
};

const StyledHome = styled.section`
	/* padding: 1rem; */
	justify-content: space-between;
	/* align-items: center; */
	flex-direction: column;
	/* word-wrap: wrap; */
	display: flex;
	/* flex: 1; */
	row-gap: 1rem;
`;

export default Home;
