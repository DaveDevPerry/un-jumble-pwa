import React from 'react';
import styled from 'styled-components';

const UserSelectedLetters = ({ letterTypes, gameLetters }) => {
	return (
		<StyledUserSelectedLetters>
			<StyledUserLettersGrid>
				{gameLetters.map((letter, index) => {
					return (
						<div key={index} className='selected-letters'>
							{letter}
						</div>
					);
				})}
			</StyledUserLettersGrid>
		</StyledUserSelectedLetters>
	);
};
const StyledUserSelectedLetters = styled.div`
	/* padding: 1rem 0rem; */
`;
const StyledUserLettersGrid = styled.div`
	display: grid;
	justify-content: center;
	grid-template-columns: repeat(9, 1fr);
	grid-template-rows: repeat(1, 4.5rem);
	border: 2px solid ${({ theme }) => theme.border};
	background-color: ${({ theme }) => theme.bgNumber};
	border-radius: 5px;
	gap: 0.3rem;
	.selected-letters {
		font-size: 2.5rem;
		/* border: 1px solid white; */
		outline: none;
		background-color: ${({ theme }) => theme.bgChosen};
		display: grid;
		place-content: center;
		border-radius: 5px;
	}
`;

export default UserSelectedLetters;
