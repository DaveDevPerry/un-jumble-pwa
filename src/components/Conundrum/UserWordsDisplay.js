import React, { useEffect } from 'react';
import styled from 'styled-components';

const UserWordsDisplay = ({ currentWord }) => {
	useEffect(() => {
		console.log('initial render and current word?');
	}, [currentWord]);
	return (
		<StyledWordsDisplay>
			<p className='update-current-word-elem'>
				{currentWord ? currentWord : <span>&nbsp;</span>}
			</p>
		</StyledWordsDisplay>
	);
};
const StyledWordsDisplay = styled.section`
	background-color: ${({ theme }) => theme.syntax};
	padding: 0.5rem 2rem;
	border-radius: 5px;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	/* flex: 1; */
	/* border: 6px solid ${({ theme }) => theme.bgChosen}; */
	.update-current-word-elem {
		font-size: 3rem;
		text-transform: uppercase;
		color: ${({ theme }) => theme.bgChosen};
		font-family: 'Bebas Neue', cursive;
		font-weight: 100;
		letter-spacing: 2px;
	}
`;

export default UserWordsDisplay;
