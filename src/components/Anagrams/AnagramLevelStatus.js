import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const AnagramLevelStatus = ({ setAnagramGameMode }) => {
	let navigate = useNavigate();
	const playButton = () => {
		new Audio('/audio/button.mp3').play();
	};

	function setTileStyleVariable(number) {
		const root = document.querySelector(':root');
		root.style.setProperty('--letter-count', number);
	}
	return (
		<StyledAnagramLevelStatus>
			{/* map stats here */}
			<div
				className='quick-stat anagram-level-status-four'
				onClick={() => {
					playButton();
					// new Audio('/audio/button.mp3').play();
					setAnagramGameMode(4);
					setTileStyleVariable(4);
					navigate('/anagramround/game');
				}}
			>
				4
			</div>
			<div
				className='quick-stat anagram-level-status-five'
				onClick={() => {
					playButton();

					setAnagramGameMode(5);
					setTileStyleVariable(5);
					navigate('/anagramround/game');
				}}
			>
				5
			</div>
			<div
				className='quick-stat anagram-level-status-six'
				onClick={() => {
					playButton();

					setAnagramGameMode(6);
					setTileStyleVariable(6);
					navigate('/anagramround/game');
				}}
			>
				6
			</div>
		</StyledAnagramLevelStatus>
	);
};
const StyledAnagramLevelStatus = styled.section`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: repeat(1, auto);
	column-gap: 0.5rem;
	width: 100%;
	.quick-stat {
		padding: 0.5rem;
		border-radius: 5px;
		background-color: ${({ theme }) => theme.bgChosen};
		color: ${({ theme }) => theme.syntax};
		font-family: 'Bebas Neue', cursive;
		display: grid;
		place-content: center;
		font-weight: 800;
		font-size: 2rem;
		cursor: pointer;
		&.isComplete {
			background-color: ${({ theme }) => theme.isComplete};
			color: ${({ theme }) => theme.bgChosen};
		}
		&.anagram-level-status-four.played,
		&.anagram-level-status-five.played,
		&.anagram-level-status-six.played {
			background-color: ${({ theme }) => theme.isComplete};
			pointer-events: none;
			color: ${({ theme }) => theme.bgChosen};
		}
	}
`;
export default AnagramLevelStatus;
