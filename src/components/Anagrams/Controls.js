import React from 'react';
// import { StyledControls } from './ControlsStyles';
import styled from 'styled-components';

const Controls = ({ handleStart, isPlaying }) => {
	return (
		<StyledControls className='game-btns'>
			<form onSubmit={handleStart}>
				<input type='submit' value='PLAY' id='start-btn' className='btn-grad' />
			</form>
		</StyledControls>
	);
};

const StyledControls = styled.section`
	width: 100%;
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0 1rem;
	.btn-grad {
		padding: 2px 15px;
		text-align: center;
		text-transform: uppercase;
		transition: 0.5s;
		background-size: 200% auto;
		background: ${({ theme }) => theme.bgButton};
		color: ${({ theme }) => theme.btnTextColor};
		border-radius: 10px;
		font-weight: 600;
		height: 30px;
		width: 100px;
		font-size: 2rem;
		font-family: 'Fredoka', sans-serif;
		box-shadow: 0px 0px 20px 2px rgba(0, 0, 0, 0.5);
	}
	.btn-grad:hover {
		background-position: right center;
		color: ${({ theme }) => theme.textColorSecondary}; */
		color: ${({ theme }) => theme.btnTextColor};
		text-decoration: none;
		cursor: pointer;
		transform: scale(1.2);
	}
	#start-btn.hidden {
		display: none;
	}
`;

export default Controls;
