import React, { useEffect } from 'react';
import styled from 'styled-components';

const UserWordsDisplay = ({ currentWord }) => {
	useEffect(() => {
		console.log('initial render and current word?');
	}, [currentWord]);
	return (
		<StyledWordsDisplay>
			<p className='update-current-word-elem'>{currentWord}</p>
		</StyledWordsDisplay>
	);
};
const StyledWordsDisplay = styled.section`
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
		color: ${({ theme }) => theme.bgChosen};
		font-family: 'Bebas Neue', cursive;
		font-weight: 800;
	}
`;

export default UserWordsDisplay;
