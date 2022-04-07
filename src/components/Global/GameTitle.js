import React from 'react';
import styled from 'styled-components';

const GameTitle = ({ title }) => {
	return <StyledGameTitle>{title}</StyledGameTitle>;
};
const StyledGameTitle = styled.h2`
	/* background-color: ${({ theme }) => theme.bgChosen}; */
	border-top: 3px solid ${({ theme }) => theme.bgChosen};
	border-bottom: 3px solid ${({ theme }) => theme.bgChosen};
	text-align: center;
	letter-spacing: 2px;
	font-size: 2.5rem;
	font-weight: lighter;
`;
export default GameTitle;
