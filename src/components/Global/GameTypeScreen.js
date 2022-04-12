import React from 'react';
import styled from 'styled-components';
// import { useNavigate } from 'react-router-dom';
import { MdOutlineTimerOff, MdOutlineTimer } from 'react-icons/md';
// import { BsWhatsapp } from 'react-icons/bs';
import ConundrumLevelStatus from '../Conundrum/ConundrumLevelStatus';
import AnagramLevelStatus from '../Anagrams/AnagramLevelStatus';
import ConundrumContextProvider from '../../contexts/ConundrumContext';
import LetterRoundLevelStatus from '../LettersRound/LetterRoundLevelStatus';
import LetterRoundContextProvider from '../../contexts/LetterRoundContext';
// import ReactTooltip from "react-tooltip";
import { MdOutlineHelpOutline } from 'react-icons/md';

const GameTypeScreen = ({
	url,
	name,
	description,
	isTimed,
	conundrumGameMode,
	setConundrumGameMode,
	anagramGameMode,
	setAnagramGameMode,
}) => {
	// let navigate = useNavigate();

	// const handleRules = (e) => {
	// 	console.log(e.target.parentElement.parentElement);
	// };

	return (
		<StyledGameTypeScreen
		// className='btn start-btn start-game-mode-btn'
		// onClick={url === '/letterround' ? navigate('/') : navigate(url)}
		>
			<div className='game-mode-header'>
				{isTimed === 'true' ? (
					<MdOutlineTimer size='23px' />
				) : (
					<MdOutlineTimerOff size='23px' />
				)}
				<h3>{name}</h3>
				{/* <a data-tip="React-tooltip"> */}
				{/* <div className='rules-btn' onClick={handleRules}> */}
				<MdOutlineHelpOutline size='25px' />
				{/* </div> */}
				{/* <BsWhatsapp size='20px' /> */}
				{/* </a>
				{'<ReactTooltip place="' +
                    place +
                    '" type="' +
                    type +
                    '" effect="' +
                    effect +
                    '"/>'}
				<ReactTooltip
            id="main"
            place={place}
            type={type}
            effect={effect}
            multiline={true}
          /> */}
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
							<LetterRoundLevelStatus
							// anagramGameMode={anagramGameMode}
							// setAnagramGameMode={setAnagramGameMode}
							/>
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
