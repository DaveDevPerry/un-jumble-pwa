import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Clock from './Clock';

const NewDigitalTimer = ({
	isTimerActive,
	setIsTimerActive,
	handleLetterRoundStart,
	setMessage,
}) => {
	const playBeep = () => {
		new Audio('/audio/beep.mp3').play();
	};
	const playBuzz = () => {
		new Audio('/audio/buzz.mp3').play();
	};
	const playShowResults = () => {
		new Audio('/audio/squeek.mp3').play();
	};
	useEffect(() => {
		console.log('new digital timer render');
	}, []);
	let navigate = useNavigate();
	let time = 30;

	useEffect(() => {
		console.log('new digital timer use effect');
		if (isTimerActive === false) {
			return;
		}
		let timer = setInterval(() => {
			if (time > 5 && time <= 10) {
				playBeep();
			}
			if (time < 10) {
				document.querySelector(
					'#new-timer-element-secs'
				).textContent = `0${time}`;
			} else {
				document.querySelector('#new-timer-element-secs').textContent = time;
			}
			if (time >= 1 && time <= 5) {
				playBuzz();
			}
			if (time === 0) {
				setMessage('time is up!');
				playBuzz();
				clearInterval(timer);
				setIsTimerActive(false);
				setTimeout(() => {
					playShowResults();
					navigate('/letterround/results');
				}, 1000);
				return;
			}
			time--;
		}, 1000);
	}, [isTimerActive, time, setIsTimerActive, navigate, setMessage]);

	return (
		<StyledNewDigitalTimer className='date-countdown-container btn-and-timer'>
			<div className='btn-timer'>
				<div className='btn-timer-back btn-timer-letter'>
					<button onClick={handleLetterRoundStart}>start game</button>
				</div>
				<div className='btn-timer-front btn-timer-letter btn-timer-tile'>
					<Clock />
				</div>
			</div>
		</StyledNewDigitalTimer>
	);
};
const StyledNewDigitalTimer = styled.div`
	height: 50px;
	width: 100%;
	perspective: 500px;
	.btn-timer {
		position: relative;
		width: 100%;
	}
	.btn-timer-letter {
		position: absolute;
		width: 100%;
		display: flex;
		align-items: center;
		overflow: hidden;
		backface-visibility: hidden;
		transition: transform 500ms ease-in-out;
		font-size: 2.5rem !important;
		padding: 0.2rem 0rem;
	}
	.btn-timer.visible .btn-timer-back {
		transform: rotateX(-180deg);
	}
	.btn-timer.visible .btn-timer-front {
		transform: rotateX(0);
	}
	.btn-timer-back {
		font-size: 2rem;
		outline: none;
		color: ${({ theme }) => theme.bgTile};
		border-radius: 5px;
		width: 100%;
		button {
			width: 100%;
		}
	}
	.btn-timer-front {
		font-size: 3rem;
		outline: none;
		display: grid;
		place-content: center;
		border-radius: 5px;
		height: 50px;
		transform: rotateX(180deg);
		color: ${({ theme }) => theme.syntax};
		&.active {
		}
	}
	.clock {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		column-gap: 0.4rem;
	}
	.clock section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.clock section p {
		font-size: 4rem;
		font-family: 'Roboto Mono', monospace;
	}
	.clock section small {
		color: silver;
		text-shadow: none;
	}
`;

export default NewDigitalTimer;
