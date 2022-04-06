import React from 'react';
// import { StyledGuessTiles } from './GuessTilesStyles';
import styled from 'styled-components';

const GuessTiles = () => {
	return (
		<StyledGuessTiles className='guess word-wrapper' data-guess>
			<div className='guess-tile'>
				<p>&nbsp;</p>
			</div>
			<div className='guess-tile'>
				<p>&nbsp;</p>
			</div>
			<div className='guess-tile'>
				<p>&nbsp;</p>
			</div>
			<div className='guess-tile'>
				<p>&nbsp;</p>
			</div>
			<div className='guess-tile'>
				<p>&nbsp;</p>
			</div>
		</StyledGuessTiles>
	);
};
const StyledGuessTiles = styled.section`
	display: flex;
	justify-content: space-around;
	align-items: center;
	padding: 0 1rem;
	gap: 0.5rem;

	.guess-tile {
		border-bottom: 4px solid ${({ theme }) => theme.borderPrimary};
		border-radius: 5px;
		padding: 1rem 1rem 1rem 1rem;
		font-size: 3.5rem;
		font-family: 'Fredoka', sans-serif;
		font-weight: 500;
		flex: 1;
		text-align: center;
		text-transform: uppercase;
		color: white;

		text-shadow: 3px 3px 4px #000000;
		background-color: rgba(0, 0, 0, 0.2);
		box-shadow: inset 2px 2px 2px rgba(0, 0, 0, 0.2),
			inset -1px -1px 2px rgba(0, 0, 0, 0.1);
		overflow: hidden;
	}
	.guess-tile > p {
		transform: translateY(50px);
		transition: 200ms ease-in;
	}
	.guess-tile > p.reveal {
		transform: translateY(0px);
	}
`;

export default GuessTiles;
