import React from 'react';
import styled from 'styled-components';

function Header() {
	return <StyledHeader>Header</StyledHeader>;
}
const StyledHeader = styled.header`
	background: ${({ theme }) => theme.bg};
	transition: all 0.5s linear;
	padding: 1rem;
	/* border-bottom: 4px solid ${({ theme }) => theme.border}; */
	/* position: relative; */
	/* height: 35px; */
	border-top: 3px solid ${({ theme }) => theme.bgChosen};
	border-bottom: 3px solid ${({ theme }) => theme.bgChosen};
	display: flex;
	justify-content: space-between;
	align-items: center;

	/* text-align: center;
	letter-spacing: 2px;
	font-size: 2.5rem;
	font-weight: lighter; */
`;

export default Header;
