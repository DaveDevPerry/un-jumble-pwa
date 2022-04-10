import React from 'react';
import styled from 'styled-components';

function Header() {
	return (
		<StyledHeader id='header'>
			<ul className='brand-tiles'>
				<li>u</li>
				<li>n</li>
				<li>s</li>
				<li>c</li>
				<li>r</li>
				<li>a</li>
				<li>m</li>
				<li>b</li>
				<li>l</li>
				<li>e</li>
			</ul>
		</StyledHeader>
	);
}
const StyledHeader = styled.header`
	background: ${({ theme }) => theme.bg};
	transition: all 0.5s linear;
	padding: 1rem;
	/* border-bottom: 4px solid ${({ theme }) => theme.border}; */
	position: relative;
	/* height: 35px; */
	.brand-tiles {
		display: flex;
		justify-content: center;
		align-items: center;
		column-gap: 0.2rem;
		list-style: none;
		li {
			border-radius: 5px;
			background-color: ${({ theme }) => theme.bgTile};
			color: ${({ theme }) => theme.syntax};
			text-transform: uppercase;
			display: grid;
			place-content: center;
			font-size: 3rem;
			line-height: 1.2;
			/* letter-spacing: 4px; */
			/* text-shadow: 8px 2px 10px #000000; */
			transition: all 0.5s linear;
			padding: 0 0.2rem;
			flex: 1;
		}
	}
	/* h1 {

		text-transform: uppercase;
		color: ${({ theme }) => theme.syntax};
		padding: 0.1px 10px;
		letter-spacing: 4px;
		font-size: 3.8rem;

		text-shadow: 8px 2px 10px #000000;
		transition: all 0.5s linear;
	} */
`;

export default Header;
