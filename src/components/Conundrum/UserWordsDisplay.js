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
	background-color: ${({ theme }) => theme.bgTile};
	padding: 1rem 2rem;
	border-radius: 10px;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	.update-current-word-elem {
		font-size: 4rem;
	}
`;

export default UserWordsDisplay;
