// import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from '../../components/Global/Button';
import GameTitle from '../../components/Global/GameTitle';
import GameLevelScreen from '../../components/Conundrum/GameLevelScreen';
import { useEffect } from 'react';

const ConundrumHome = ({ setGameMode }) => {
	useEffect(() => {
		console.log('conundrum home render');
	}, []);

	return (
		<>
			<GameTitle title='conundrum' />
			<StyledConundrumGameMode>
				<GameLevelScreen
					url='/conundrum/game'
					title='master'
					description='nine letters'
					letterCount='9'
					testNum={9}
					setGameMode={setGameMode}
				/>
				<GameLevelScreen
					url='/conundrum/game'
					title='expert'
					description='eight letters'
					letterCount='8'
					testNum={8}
					setGameMode={setGameMode}
				/>
				<GameLevelScreen
					url='/conundrum/game'
					title='advanced'
					description='seven letters'
					letterCount='7'
					testNum={7}
					setGameMode={setGameMode}
				/>
				<GameLevelScreen
					url='/conundrum/game'
					title='intermediate'
					description='six letters'
					letterCount='6'
					testNum={6}
					setGameMode={setGameMode}
				/>
				<GameLevelScreen
					url='/conundrum/game'
					title='average'
					description='five letters'
					letterCount='5'
					testNum={5}
					setGameMode={setGameMode}
				/>
				<GameLevelScreen
					url='/conundrum/game'
					title='beginner'
					description='four letters'
					letterCount='4'
					testNum={4}
					setGameMode={setGameMode}
				/>
			</StyledConundrumGameMode>
			<Button url='/conundrum/rules' name='rules' />
		</>
	);
};

const StyledConundrumGameMode = styled.section`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: repeat(auto, 1fr);
	gap: 1rem;
`;

export default ConundrumHome;
