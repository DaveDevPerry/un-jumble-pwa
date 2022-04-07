import React from 'react';
import styled from 'styled-components';

const UserWordsDisplay = ({ currentWord }) => {
	return (
		<StyledWordsDisplay>
			<p className='update-current-word-elem'>{currentWord}</p>
		</StyledWordsDisplay>
	);
};
const StyledWordsDisplay = styled.section`
	/* background-color: ${({ theme }) => theme.bgTile}; */
	background-color: ${({ theme }) => theme.syntax};
	padding: 1rem 2rem;
	border-radius: 5px;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex: 1;
	border: 6px solid ${({ theme }) => theme.bgChosen};

	.update-current-word-elem {
		font-size: 4rem;
		text-transform: uppercase;
	}
`;

export default UserWordsDisplay;
