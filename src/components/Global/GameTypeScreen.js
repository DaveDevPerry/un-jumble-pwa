import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { MdOutlineHelpOutline } from 'react-icons/md';
// import { MdOutlineTimerOff, MdOutlineTimer,MdOutlineHelpOutline } from 'react-icons/md';
// import { BsWhatsapp } from 'react-icons/bs';
import ConundrumLevelStatus from '../Conundrum/ConundrumLevelStatus';
import AnagramLevelStatus from '../Anagrams/AnagramLevelStatus';
import ConundrumContextProvider from '../../contexts/ConundrumContext';
import LetterRoundLevelStatus from '../LettersRound/LetterRoundLevelStatus';
import LetterRoundContextProvider from '../../contexts/LetterRoundContext';
import AnagramContextProvider from '../../contexts/AnagramContext';
import { useNavigate } from 'react-router-dom';
import { RiBarChart2Line } from 'react-icons/ri';
const GameTypeScreen = ({
	url,
	name,
	description,
	isTimed,
	conundrumGameMode,
	setConundrumGameMode,
	anagramGameMode,
	setAnagramGameMode,
	// letterRoundData,
	// setLetterRoundData,
}) => {
	let navigate = useNavigate();
	const [letterRoundData, setLetterRoundData] = useState([]);
	const [conundrumData, setConundrumData] = useState([]);
	const [anagramData, setAnagramData] = useState([]);

	useEffect(() => {
		console.log('game type screen render');
		const localConundrumData =
			JSON.parse(localStorage.getItem('conundrums')) || [];
		setConundrumData(localConundrumData);
		const localLRData = JSON.parse(localStorage.getItem('letterRounds')) || [];
		setLetterRoundData(localLRData);
		const localAnagramData =
			JSON.parse(localStorage.getItem('anagramRound')) || [];
		setAnagramData(localAnagramData);
	}, []);

	useEffect(() => {
		setTimeout(() => {
			const currentDate = new Date().toLocaleDateString();
			// check letter round
			const todayPlayedLetterRound = letterRoundData.find(
				(Obj) => Obj.date === currentDate
			);
			if (todayPlayedLetterRound !== undefined) {
				document.querySelector('.letter-round-status').classList.add('played');
			}
			// check conundrum
			const todayPlayedConundrums = conundrumData.filter(function (today) {
				return today.date === currentDate;
			});
			// check for each conundrum level - clean up later by for loop calling function
			const conundrumLevelFour = todayPlayedConundrums.find(
				(Obj) => Obj.level === 4
			);
			if (conundrumLevelFour !== undefined) {
				document
					.querySelector('.conundrum-level-status-four')
					.classList.add('played');
			}
			const conundrumLevelFive = todayPlayedConundrums.find(
				(Obj) => Obj.level === 5
			);
			if (conundrumLevelFive !== undefined) {
				document
					.querySelector('.conundrum-level-status-five')
					.classList.add('played');
			}
			const conundrumLevelSix = todayPlayedConundrums.find(
				(Obj) => Obj.level === 6
			);
			if (conundrumLevelSix !== undefined) {
				document
					.querySelector('.conundrum-level-status-six')
					.classList.add('played');
			}
			const conundrumLevelSeven = todayPlayedConundrums.find(
				(Obj) => Obj.level === 7
			);
			if (conundrumLevelSeven !== undefined) {
				document
					.querySelector('.conundrum-level-status-seven')
					.classList.add('played');
			}
			const conundrumLevelEight = todayPlayedConundrums.find(
				(Obj) => Obj.level === 8
			);
			if (conundrumLevelEight !== undefined) {
				document
					.querySelector('.conundrum-level-status-eight')
					.classList.add('played');
			}
			const conundrumLevelNine = todayPlayedConundrums.find(
				(Obj) => Obj.level === 9
			);
			if (conundrumLevelNine !== undefined) {
				document
					.querySelector('.conundrum-level-status-nine')
					.classList.add('played');
			}
			// check anagram
			const todayPlayedAnagram = anagramData.filter(function (today) {
				return today.date === currentDate;
			});
			// check for each conundrum level - clean up later by for loop calling function
			const anagramLevelFour = todayPlayedAnagram.find(
				(Obj) => Obj.level === 4
			);
			if (anagramLevelFour !== undefined) {
				document
					.querySelector('.anagram-level-status-four')
					.classList.add('played');
			}
			const anagramLevelFive = todayPlayedAnagram.find(
				(Obj) => Obj.level === 5
			);
			if (anagramLevelFive !== undefined) {
				document
					.querySelector('.anagram-level-status-five')
					.classList.add('played');
			}
			const anagramLevelSix = todayPlayedAnagram.find((Obj) => Obj.level === 6);
			if (anagramLevelSix !== undefined) {
				document
					.querySelector('.anagram-level-status-six')
					.classList.add('played');
			}
		}, 10);
	}, [letterRoundData, conundrumData, anagramData]);
	return (
		<StyledGameTypeScreen>
			{(() => {
				if (name === 'conundrum') {
					return (
						<div className='game-mode-header'>
							<div
								className='rules-btn'
								onClick={() => {
									navigate('/conundrum/rules');
								}}
							>
								<MdOutlineHelpOutline size='22px' />
							</div>

							<h3>{name}</h3>
							<div
								className='stats-btn'
								onClick={() => {
									navigate('/conundrum/stats');
								}}
							>
								<RiBarChart2Line size='22px' />
							</div>
						</div>
					);
				} else if (name === 'anagram round') {
					return (
						<div className='game-mode-header'>
							<div
								className='rules-btn'
								onClick={() => {
									navigate('/anagramround/rules');
								}}
							>
								<MdOutlineHelpOutline size='22px' />
							</div>

							<h3>{name}</h3>
							<div
								className='stats-btn'
								onClick={() => {
									navigate('/anagramround/stats');
								}}
							>
								<RiBarChart2Line size='22px' />
							</div>
						</div>
					);
				} else if (name === 'letter round') {
					return (
						<LetterRoundContextProvider>
							<div className='game-mode-header'>
								<div
									className='rules-btn'
									onClick={() => {
										navigate('/letterround/rules');
									}}
								>
									<MdOutlineHelpOutline size='22px' />
								</div>

								<h3>{name}</h3>
								<div
									className='stats-btn'
									onClick={() => {
										navigate('/letterround/stats');
									}}
								>
									<RiBarChart2Line size='22px' />
								</div>
							</div>
						</LetterRoundContextProvider>
					);
				} else {
					return <p>&nbsp;</p>;
				}
			})()}

			<p>{description}</p>
			{(() => {
				if (name === 'conundrum') {
					return (
						<ConundrumContextProvider>
							<ConundrumLevelStatus
								conundrumGameMode={conundrumGameMode}
								setConundrumGameMode={setConundrumGameMode}
							/>
						</ConundrumContextProvider>
					);
				} else if (name === 'anagram round') {
					return (
						<AnagramContextProvider>
							<AnagramLevelStatus
								anagramGameMode={anagramGameMode}
								setAnagramGameMode={setAnagramGameMode}
							/>
						</AnagramContextProvider>
					);
				} else if (name === 'letter round') {
					return (
						<LetterRoundContextProvider>
							<LetterRoundLevelStatus />
						</LetterRoundContextProvider>
					);
				} else {
					return <p>&nbsp;</p>;
				}
			})()}
		</StyledGameTypeScreen>
		// <StyledGameTypeScreen>
		// 	<div className='game-mode-header'>
		// 		{isTimed === 'true' ? (
		// 			<MdOutlineTimer size='23px' />
		// 		) : (
		// 			<MdOutlineTimerOff size='23px' />
		// 		)}
		// 		<h3>{name}</h3>
		// 		<BsWhatsapp size='20px' />
		// 	</div>
		// 	<p>{description}</p>
		// 	{(() => {
		// 		if (name === 'conundrum') {
		// 			return (
		// 				<ConundrumContextProvider>
		// 					<ConundrumLevelStatus
		// 						conundrumGameMode={conundrumGameMode}
		// 						setConundrumGameMode={setConundrumGameMode}
		// 					/>
		// 				</ConundrumContextProvider>
		// 			);
		// 		} else if (name === 'anagram round') {
		// 			return (
		// 				<AnagramContextProvider>
		// 					<AnagramLevelStatus
		// 						anagramGameMode={anagramGameMode}
		// 						setAnagramGameMode={setAnagramGameMode}
		// 					/>
		// 				</AnagramContextProvider>
		// 			);
		// 		} else if (name === 'letter round') {
		// 			return (
		// 				<LetterRoundContextProvider>
		// 					<LetterRoundLevelStatus />
		// 				</LetterRoundContextProvider>
		// 			);
		// 		} else {
		// 			return <p>&nbsp;</p>;
		// 		}
		// 	})()}
		// </StyledGameTypeScreen>
	);
};
const StyledGameTypeScreen = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	height: 100%;
	width: 100%;
	border-radius: 5px;
	background-color: ${({ theme }) => theme.bgTile};
	border: none;
	padding: 1rem;
	row-gap: 1rem;
	transition: all 200ms linear;
	p {
		text-align: center;
	}
	.game-mode-header {
		display: flex;
		justify-content: space-between;
		column-gap: 1rem;
		align-items: flex-start;
		width: 100%;
		color: ${({ theme }) => theme.bgChosen};
		.rules-btn,
		.stats-btn {
			cursor: pointer;
		}
		h3 {
			font-weight: lighter;
			font-size: 2.2rem;
			line-height: 1;
		}
	}
	.game-mode-stats-container {
		width: 100%;
		font-size: 1.6rem;
		display: flex;
		justify-content: space-evenly;
		align-items: flex-start;
		opacity: 0;
		.stat-wrapper {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: flex-start;
			flex-wrap: wrap;
			flex: 1;
		}
		p {
			font-size: 2rem;
			font-weight: bolder;
			line-height: 1;
			color: ${({ theme }) => theme.bgChosen};
			&:last-child {
				text-transform: capitalize;
				font-size: 1.2rem;
				font-weight: 400;
				text-align: center;
				color: ${({ theme }) => theme.syntax};
			}
		}
	}
`;

export default GameTypeScreen;
