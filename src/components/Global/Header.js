import React from 'react';
import styled from 'styled-components';

function Header({ pageTitle }) {
	return (
		<StyledHeader>
			<div></div>
			<h2>{pageTitle}</h2>
			<div></div>
		</StyledHeader>
	);
}
const StyledHeader = styled.header`
	margin: 0rem 0rem 1rem 0rem;
	/* background-color: ${({ theme }) => theme.bg}; */
	background-color: ${({ theme }) => theme.bgChosen};
	transition: all 0.5s linear;
	padding: 0.2rem 1rem;
	/* border-bottom: 4px solid ${({ theme }) => theme.border}; */
	/* position: relative; */
	/* height: 35px; */
	/* border-top: 3px solid ${({ theme }) => theme.bgTile}; */
	border-bottom: 3px solid ${({ theme }) => theme.border};
	display: flex;
	justify-content: space-between;
	align-items: center;
	h2 {
		letter-spacing: 2px;
		font-size: 2rem;
		font-weight: lighter;
	}
	/* text-align: center;
	letter-spacing: 2px;
	font-size: 2.5rem;
	font-weight: lighter; */
`;

export default Header;
