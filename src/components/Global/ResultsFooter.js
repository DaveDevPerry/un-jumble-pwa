import React from 'react';
import { BsFillShareFill, BsWhatsapp } from 'react-icons/bs';
import NextGameCountdown from './NextGameCountdown';
import styled from 'styled-components';

const ResultsFooter = ({ isNextDayCountdownActive, shareMobile }) => {
	const playTile = () => {
		new Audio('/audio/tile.mp3').play();
	};
	return (
		<StyledResultsFooter className='wrapper'>
			<div className='next-wrapper'>
				<p>Next Game</p>
				<NextGameCountdown
					isNextDayCountdownActive={isNextDayCountdownActive}
				/>
			</div>
			<div className='share-wrapper-whatsapp'>
				<button
					className='share-btn-whatsapp'
					onClick={() => {
						playTile();
						shareMobile();
					}}
				>
					{/* <p>Share</p> */}
					<BsFillShareFill size='20px' />
					<BsWhatsapp size='25px' />
				</button>
			</div>
		</StyledResultsFooter>
	);
};
const StyledResultsFooter = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
	.next-wrapper {
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
		flex: 1;
		p {
			font-size: 2rem;
			color: ${({ theme }) => theme.bgChosen};
			line-height: 1;
			font-weight: 800;
			text-transform: uppercase;
			font-family: 'Bebas Neue', cursive;
			&:last-child {
				font-size: 2.2rem;
				font-weight: lighter;
				color: ${({ theme }) => theme.syntax};
			}
		}
	}
	.share-wrapper-whatsapp {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-around;
		row-gap: 2rem;
		border-left: 2px solid ${({ theme }) => theme.bgChosen};
		flex: 1;
		.share-btn-whatsapp {
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
			letter-spacing: 2px;
			font-size: 1.6rem;
			padding: 0.5rem 1rem;
			background-color: ${({ theme }) => theme.bgChosen};
			border: none;
			border-radius: 5px;
			color: ${({ theme }) => theme.syntax};
			cursor: pointer;
			padding: 0.2rem 1rem;
			column-gap: 1rem;
		}
	}
`;

export default ResultsFooter;
