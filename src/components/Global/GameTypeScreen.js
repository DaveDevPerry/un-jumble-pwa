import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { MdOutlineTimerOff, MdOutlineTimer } from 'react-icons/md';
import { BsWhatsapp } from 'react-icons/bs';
import ConundrumLevelStatus from '../Conundrum/ConundrumLevelStatus';
import AnagramLevelStatus from '../Anagrams/AnagramLevelStatus';
import ConundrumContextProvider from '../../contexts/ConundrumContext';
import LetterRoundLevelStatus from '../LettersRound/LetterRoundLevelStatus';
import LetterRoundContextProvider from '../../contexts/LetterRoundContext';

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
	const [letterRoundData, setLetterRoundData] = useState([]);

	useEffect(() => {
		console.log('app render');
		// console.log(setAPIKey);
		// console.log(conundrums);
		// setCurrentDate(new Date().toLocaleDateString())
		const localLRData = JSON.parse(localStorage.getItem('letterRounds')) || [];
		console.log(localLRData, 'lr data');
		setLetterRoundData(localLRData);
	}, []);
	useEffect(() => {
		setTimeout(() => {
			const currentDate = new Date().toLocaleDateString();
			const todayPlayed = letterRoundData.find(
				(Obj) => Obj.date === currentDate
			);
			console.log(todayPlayed, 'played already?');
			if (todayPlayed !== undefined) {
				document.querySelector('.letter-round-status').classList.add('played');
			}
		}, 2000);
	}, [letterRoundData]);
	return (
		<StyledGameTypeScreen>
			<div className='game-mode-header'>
				{isTimed === 'true' ? (
					<MdOutlineTimer size='23px' />
				) : (
					<MdOutlineTimerOff size='23px' />
				)}
				<h3>{name}</h3>
				<BsWhatsapp size='20px' />
			</div>
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
						<AnagramLevelStatus
							anagramGameMode={anagramGameMode}
							setAnagramGameMode={setAnagramGameMode}
						/>
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
