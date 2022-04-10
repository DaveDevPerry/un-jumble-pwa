import React from 'react';
import styled from 'styled-components';

function Timer() {
	return (
		<StyledTimer className='timer-card'>
			<div id='timer-element'></div>
		</StyledTimer>
	);
}
const StyledTimer = styled.div`
	font-family: 'Atma', cursive;
	border: 3px solid ${({ theme }) => theme.borderPrimary};
	box-shadow: 3px 3px 6px 4px rgba(0, 0, 0, 0.3);
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	height: 80px;
	width: 80px;
	font-weight: 500;
	background: ${({ theme }) => theme.bg};
	position: relative;
	transition: all 0.5s linear;
	color: ${({ theme }) => theme.textColorPrimary};
	&.pulse {
		animation: pulse 1s ease-out;
		animation-iteration-count: 5;
	}
	#timer-element {
		font-size: 2.5rem;
		font-family: 'Atma', cursive;
	}
	@keyframes pulse {
		0%,
		100% {
			transform: scale(1);
		}
		30% {
			transform: scale(1.3);
		}
	}
`;

export default Timer;
