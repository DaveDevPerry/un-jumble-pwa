import React from 'react';
import styled from 'styled-components';

const AnagramLevelStatus = () => {
	return (
		<StyledAnagramLevelStatus>
			{/* map stats here */}

			<div className='quick-stat'>4</div>
			<div className='quick-stat isComplete'>5</div>
			<div className='quick-stat'>6</div>
		</StyledAnagramLevelStatus>
	);
};
const StyledAnagramLevelStatus = styled.section`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: repeat(1, auto);
	column-gap: 0.5rem;
	/* border: 1px solid black; */
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
		&.isComplete {
			background-color: ${({ theme }) => theme.isComplete};
			color: ${({ theme }) => theme.bgChosen};
		}
	}
`;
export default AnagramLevelStatus;
