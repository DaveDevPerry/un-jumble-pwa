// import React from 'react';
// import styled from 'styled-components';
// import { useNavigate } from 'react-router-dom';
// // import LargeNumberCards from '../../components/NumberRound/LargeNumberCards';
// // import SmallNumberCards from '../../components/NumberRound/SmallNumberCards.js.js';
// // import UserSelectedNumbers from '../../components/NumberRound/UserSelectedNumbers';

// const WordLengthSelect = ({
// 	gameNumbers,
// 	gameNumberSizes,
// 	setGameNumberSizes,
// 	setGameNumbers,
// 	setConundrumWordLength,
// 	allNineLetterWords,
// 	allEightLetterWords,
// 	allSevenLetterWords,
// 	allSixLetterWords,
// }) => {
// 	let navigate = useNavigate();
// 	return (
// 		<StyledWordLengthSelect>
// 			<div className='modal-header'>
// 				<p>select word length</p>
// 			</div>
// 			{/* <div className='modal-header'>
// 				<p>select</p>
// 				<span>{6 - gameNumbers.length}</span>
// 				<p>tiles</p>
// 			</div> */}
// 			<StyledWordLengthSelectGrid>
// 				<button
// 					className='btn start-btn'
// 					onClick={() => {
// 						navigate('/selectwordlength');
// 					}}
// 				>
// 					nine
// 				</button>
// 				<button
// 					className='btn start-btn'
// 					onClick={() => {
// 						navigate('/selectwordlength');
// 					}}
// 				>
// 					eight
// 				</button>
// 				<button
// 					className='btn start-btn'
// 					onClick={() => {
// 						navigate('/selectwordlength');
// 					}}
// 				>
// 					seven
// 				</button>
// 				<button
// 					className='btn start-btn'
// 					onClick={() => {
// 						navigate('/selectwordlength');
// 					}}
// 				>
// 					six
// 				</button>
// 			</StyledWordLengthSelectGrid>
// 			{/* <UserSelectedNumbers
// 				gameNumbers={gameNumbers}
// 				gameNumberSizes={gameNumberSizes}
// 			/>
// 			<LargeNumberCards
// 				gameNumbers={gameNumbers}
// 				setGameNumbers={setGameNumbers}
// 				gameNumberSizes={gameNumberSizes}
// 				setGameNumberSizes={setGameNumberSizes}
// 			/>
// 			<SmallNumberCards
// 				gameNumbers={gameNumbers}
// 				setGameNumbers={setGameNumbers}
// 				gameNumberSizes={gameNumberSizes}
// 				setGameNumberSizes={setGameNumberSizes}
// 			/> */}
// 			{/* <button
// 				className='close-modal-btn show'
// 				onClick={() => {
// 					navigate('/conundrum/game');
// 				}}
// 			>
// 				NEXT
// 			</button> */}
// 		</StyledWordLengthSelect>
// 	);
// };

// const StyledWordLengthSelect = styled.section`
// 	position: absolute;
// 	top: 50%;
// 	left: 50%;
// 	transform: translate(-50%, -50%);
// 	width: 310px;
// 	background: ${({ theme }) => theme.bgTile};
// 	border-radius: 5px;
// 	padding: 1rem;
// 	/* padding: 1rem 0.5rem; */
// 	/* opacity: 0; */
// 	justify-content: space-between;
// 	flex-direction: column;
// 	display: flex;
// 	z-index: 500000;
// 	/* pointer-events: none; */
// 	transition: opacity 200ms ease-in;

// 	.modal-header {
// 		font-family: 'Bebas Neue', cursive;
// 		display: flex;
// 		justify-content: center;
// 		align-items: center;

// 		column-gap: 1rem;
// 		/* flex: 1; */
// 		p {
// 			font-size: 3rem;
// 			flex: 1;
// 			text-align: right;
// 			&:last-child {
// 				text-align: left;
// 			}
// 		}
// 		span {
// 			font-size: 6.5rem;
// 			color: ${({ theme }) => theme.bgChosen};
// 			padding: 0 0.5rem;
// 			font-weight: bold;
// 		}
// 	}
// 	/* &.show {
// 		opacity: 1;
// 		pointer-events: all;
// 	} */
// 	.close-modal-btn {
// 		width: 50%;
// 		align-self: center;
// 		font-size: 2rem;
// 		font-weight: bold;
// 		padding: 0.5rem 1rem;
// 		margin-top: 3rem;
// 		margin-bottom: 1rem;
// 		background-color: ${({ theme }) => theme.bgChosen};
// 		/* border: 1px solid ${({ theme }) => theme.btnBorder}; */
// 		border: none;
// 		border-radius: 5px;
// 		color: ${({ theme }) => theme.syntax};
// 		opacity: 0;
// 		transition: opacity 200ms ease-in;
// 		&.show {
// 			display: block;
// 			opacity: 1;
// 			pointer-events: all;
// 		}
// 	}
// `;

// const StyledWordLengthSelectGrid = styled.div`
// 	border: 2px solid black;
// 	display: grid;
// 	grid-template-columns: repeat(2, 1fr);
// 	grid-template-rows: repeat(auto, 1fr);
// 	gap: 2rem;
// 	button {
// 		border: 2px solid yellow;
// 	}
// `;

// export default WordLengthSelect;
