// import React, { useContext } from 'react';
// import { WordsContext } from '../../contexts/WordsContext';

// import { StyledPlayerTiles } from './PlayerTilesStyles';
import styled from 'styled-components';

const PlayerTiles = ({ handleLetter }) => {
	// const {words} = useContext(WordsContext)
	return (
		<StyledPlayerTiles className='tiles word-wrapper'>
			<div className='tile-background'></div>
			<button
				id='l1'
				className='tile  tile-grad'
				data-tile='0'
				onClick={handleLetter}
			>
				&nbsp;
			</button>
			<button
				id='l2'
				className='tile  tile-grad'
				data-tile='1'
				onClick={handleLetter}
			>
				&nbsp;
			</button>
			<button
				id='l3'
				className='tile  tile-grad'
				data-tile='2'
				onClick={handleLetter}
			>
				&nbsp;
			</button>
			<button
				id='l4'
				className='tile  tile-grad'
				data-tile='3'
				onClick={handleLetter}
			>
				&nbsp;
			</button>
			<button
				id='l5'
				className='tile  tile-grad'
				data-tile='4'
				onClick={handleLetter}
			>
				&nbsp;
			</button>
		</StyledPlayerTiles>
	);
};
const StyledPlayerTiles = styled.section`
	/* .word-wrapper { */
	display: flex;
	justify-content: space-around;
	align-items: center;
	padding: 0 1rem;
	gap: 0.5rem;
	/* } */
	position: relative;
	gap: 1rem;

	.tile-background {
		position: absolute;
		top: 50%;
		left: 0;
		transform: translateY(-50%);
		height: 40px;
		/* background-color: rgb(63, 29, 1); */
		background: ${({ theme }) => theme.bg};
		border-top: 3px solid ${({ theme }) => theme.borderSecondary};
		border-bottom: 3px solid ${({ theme }) => theme.borderSecondary};
		/* border-top: 3px solid rgb(87, 39, 0);
		border-bottom: 3px solid rgb(87, 39, 0); */
		width: 100%;
		transition: all 0.5s linear;
		/* z-index: -1; */
	}
	.tile {
		padding: 0.5rem;
		font-size: 3.2rem;
		/* background-color: lightgray; */
		background: ${({ theme }) => theme.bgTile};
		font-family: 'Fredoka', sans-serif;
		font-weight: 500;
		text-transform: uppercase;
		flex: 1;
		text-align: center;
		/* color: rgb(87, 39, 0); */
		color: ${({ theme }) => theme.textColorSecondary};
		border: 1px solid ${({ theme }) => theme.borderSecondary};
		border-radius: 1rem;
		z-index: 1;
	}
	.tile-grad {
		background-image: linear-gradient(
			to right,
			#8f8e8d 0%,
			#ffffff 51%,
			#c4c0bd 100%
		);
	}
	.tile-grad {
		margin: 0px;
		padding: 1rem;
		text-align: center;
		text-transform: uppercase;
		transition: 0.3s;
		background-size: 200% auto;
		/* color: white; */
		/* color: rgb(87, 39, 0); */
		color: ${({ theme }) => theme.textColorSecondary};
		box-shadow: 3px 2px 4px ${({ theme }) => theme.boxShadow};
		/* box-shadow: 0 0 2px #eee; */
		border-radius: 10px;
	}

	.tile-grad:hover {
		background-position: right center;
		/* color: #fff; */
		/* color: rgb(87, 39, 0); */
		color: ${({ theme }) => theme.textColorSecondary};
		text-decoration: none;
		cursor: pointer;
		transform: scale(0.8);
	}
	.tile-grad.active {
		background-image: none;
		/* background-color: rgb(65, 64, 64);
		background-color: rgb(43, 30, 2); */
		background: ${({ theme }) => theme.bgTileActive};
		transform: scale(0.8);
		color: white;
	}
`;

export default PlayerTiles;
