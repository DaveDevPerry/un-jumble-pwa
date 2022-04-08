import React from 'react';
import styled from 'styled-components';

const ClockTimer = ({ letterRoundTicking }) => {
	return (
		<StyledClockTimer className='clock-timer'>
			<div
				className={letterRoundTicking === true ? 'backlight tick' : 'backlight'}
			>
				<div className='top-right'></div>
				<div className='bottom-right'></div>
			</div>
			<div className='top-left'></div>
			<div className='top-right'></div>
			<div className='bottom-left'></div>
			<div className='bottom-right'></div>

			<div className='dot'></div>
			<div className={letterRoundTicking === true ? 'hand tick' : 'hand'}></div>
		</StyledClockTimer>
	);
};

const StyledClockTimer = styled.div`
	background-color: #c0c0c0;
	/* height: 60%;
	width: 60%; */
	/* height: 200px;
	width: 200px; */
	/* height: 100px;
	width: 100px; */
	align-self: center;
	height: 150px;
	width: 150px;
	border-radius: 50%;
	border: 10px solid ${({ theme }) => theme.bgChosen};
	position: relative;
	display: flex;
	flex-wrap: wrap;
	overflow: hidden;
	box-shadow: 2px 2px 8px 4px rgba(0, 0, 0, 0.4);

	.top-left,
	.top-right,
	.bottom-left,
	.bottom-right {
		height: 50%;
		width: 50%;
		border: 1px solid #b3b3b3;
	}
	.top-left,
	.bottom-left {
		background-color: #c0c0c0;
		z-index: 3;
	}
	.top-right,
	.bottom-right {
		z-index: 4;
		background: transparent;
	}
	.backlight {
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 50%;
		z-index: 2;
		background-color: #dadada;
		display: flex;
		flex-direction: column;
		transform-origin: right center;
		animation: tock 30s linear forwards;
		animation-play-state: paused;
		.top-right,
		.bottom-right {
			height: 100%;
			width: 100%;
			border: none;
		}
		&.tick {
			animation: tock 30s linear forwards;
			animation-play-state: start;
		}
	}
	.dot {
		position: absolute;
		background-color: ${({ theme }) => theme.bgChosen};
		height: 10%;
		width: 10%;
		border-radius: 50%;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 50;
	}
	.hand {
		position: absolute;
		height: 45%;
		width: 8px;
		border-radius: 0 0 50% 50%;
		border-radius: 0 0 1000% 1000%;
		top: 50%;
		left: calc(50% - 4px);
		transform: translate(-50%, -50%);
		transform-origin: top;
		animation: tick 30s linear forwards;
		animation-play-state: paused;
		background-color: ${({ theme }) => theme.bgChosen};
		z-index: 40;
		&.tick {
			animation: tick 30s linear forwards;
			animation-play-state: start;
		}
	}
	@keyframes tick {
		0% {
			transform: rotate(180deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
	@keyframes tock {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(180deg);
		}
	}
`;

export default ClockTimer;
