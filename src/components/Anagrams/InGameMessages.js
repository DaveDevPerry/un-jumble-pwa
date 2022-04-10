import React from 'react';
import styled from 'styled-components';

const InGameMessages = () => {
	return (
		<StyledInGameMessages
			className='alert-container'
			data-alert-container
		></StyledInGameMessages>
	);
};
const StyledInGameMessages = styled.div`
	font-size: 3.4rem;
	font-weight: 500;
	display: flex;
	align-items: center;
	justify-content: center;
	text-transform: uppercase;
	word-wrap: wrap;
	height: clamp(50px, 50px, 50px);
	font-family: 'Atma', cursive;
	margin: 0 0.5rem;
	overflow: hidden;
	.alert {
		pointer-events: none;
		padding: 0.2rem;
		color: ${({ theme }) => theme.red};
		transition: all 0.5s linear;
		opacity: 1;
		transition: opacity 500ms ease-in-out;
		margin-bottom: 0.5em;
		font-weight: 600;
		text-shadow: 3px 2px 3px #000000;
	}
	.alert:last-child {
		margin-bottom: 0;
	}
`;

export default InGameMessages;
