// import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
// import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import GameTitle from '../../components/GameTitle';
import GameLevelScreen from '../../components/GameLevelscreen';
// import { useEffect } from 'react';

const ConundrumHome = ({ setGameMode }) => {
	// let navigate = useNavigate();

	// useEffect(() => {
	// 	setIsNex
	// },[])

	// function setTileStyleVariable(number) {
	// 	const root = document.querySelector(':root');
	// 	root.style.setProperty('--letter-count', `${number}`);
	// }

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
				{/* <button
					className={
						conundrumStatus.nine === false
							? 'btn start-btn start-game-mode-btn'
							: 'btn start-btn start-game-mode-btn gold'
					}
					className='btn start-btn start-game-mode-btn'
					onClick={() => {
						setGameMode(9);
						setTileStyleVariable(9);
						navigate('/conundrum/game');
					}}
				>
					<div className='game-mode-container'>
						<h3>MASTER</h3>
						<p>nine letters</p>
					</div>
					<div className='game-mode-stats-container'>
						<div className='stat-wrapper'>
							<p>03</p>
							<p>played</p>
						</div>
						<div className='stat-wrapper'>
							<p>100</p>
							<p>win %</p>
						</div>
					</div>
				</button> */}
			</StyledConundrumGameMode>
			{/* <StyledConundrumHome> */}
			<Button url='/conundrum/rules' name='rules' />

			{/* </StyledConundrumHome> */}
		</>
	);
};

const StyledConundrumGameMode = styled.section`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: repeat(auto, 1fr);
	gap: 1rem;
`;
// const StyledConundrumHome = styled.section`
// 	padding: 1rem 3rem;
// 	justify-content: space-between;
// 	align-items: center;
// 	flex-direction: column;
// 	word-wrap: wrap;
// 	display: flex;
// 	flex: 1;
// 	row-gap: 1rem;
// 	/* -webkit-touch-callout: none;
// 	-webkit-user-select: none;
// 	-khtml-user-select: none;
// 	-moz-user-select: none;
// 	-ms-user-select: none;
// 	user-select: none; */
// 	.how-to-play {
// 		/* padding: 0 3rem; */
// 		h2 {
// 			letter-spacing: 2px;
// 			text-align: center;
// 			margin-bottom: 2rem;
// 			font-size: 2.5rem;
// 			font-weight: 100;
// 			/* padding-bottom: 1rem; */
// 			/* text-decoration: underline; */
// 			/* line-height: 1.2; */
// 			/* color: ${({ theme }) => theme.bgChosen}; */
// 		}
// 		ul {
// 			list-style: none;
// 			display: flex;
// 			flex-direction: column;
// 			row-gap: 1rem;
// 		}
// 		p {
// 			font-family: 'Montserrat';
// 			font-weight: 100;
// 			font-size: 1.6rem;
// 			pointer-events: none;
// 			text-align: center;
// 			margin-bottom: 1rem;
// 		}
// 	}
// 	.start-btn {
// 		height: 100%;
// 		/* height: 200px; */
// 		width: 200px;
// 		border-radius: 10px;
// 		background-color: ${({ theme }) => theme.bgTile};
// 		border: none;
// 		font-size: 5rem;
// 		display: block;
// 		margin: 0 2rem;
// 	}
// 	.btn {
// 		border: none;
// 		width: 100%;
// 		margin: 0 2rem;
// 	}
// `;

export default ConundrumHome;
