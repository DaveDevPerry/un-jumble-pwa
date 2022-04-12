import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Clock from './Clock';

// import Clock from './Clock';

// const beep = require('../../audio/beep.mp3');
// const BeepAudio = new Audio(beep);
// const buzz = require('../../audio/buzz.mp3');
// const BuzzAudio = new Audio(buzz);

const NewDigitalTimer = ({
	isTimerActive,
	setIsTimerActive,
	handleLetterRoundStart,
	setMessage,
}) => {
	useEffect(() => {
		console.log('new digital timer render');
		// BeepAudio.load();
		// BuzzAudio.load();
	}, []);
	let navigate = useNavigate();

	let time = 30;
	// useEffect(() => {
	// 	// setTimerSeconds(time);
	// }, [time]);

	useEffect(() => {
		console.log('new digital timer use effect');
		if (isTimerActive === false) {
			return;
		}
		// runTimer();
		let timer = setInterval(() => {
			console.log(time, 'time');
			// if (time > 60) {
			// 	document.querySelector('#timer-element-mins').textContent = `0${
			// 		time % 60
			// 	}`;
			// }
			if (time > 5 && time <= 10) {
				// beep();
				playBeep();
			}
			if (time < 10) {
				// document.querySelector('#timer-element').textContent = `0${time}`;
				document.querySelector(
					'#new-timer-element-secs'
				).textContent = `0${time}`;
			} else {
				// document.querySelector('#timer-element').textContent = time;
				document.querySelector('#new-timer-element-secs').textContent = time;
			}
			// document.querySelector('#timer-element').textContent = time;
			if (time >= 1 && time <= 5) {
				// console.log('pulse');
				// document.querySelector('.timer-card').classList.add('pulse');
				// buzzer();
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
			// setTimerSeconds(time);
		}, 1000);
	}, [isTimerActive, time, setIsTimerActive, navigate, setMessage]);

	const playBeep = () => {
		const audio = new Audio('/audio/beep.mp3');
		audio.play();
	};
	const playBuzz = () => {
		const audio = new Audio('/audio/buzz.mp3');
		audio.play();
	};
	// const playEnd = () => {
	// 	const audio = new Audio('/audio/end.mp3');
	// 	audio.play();
	// };
	const playShowResults = () => {
		const audio = new Audio('/audio/squeek.mp3');
		audio.play();
	};

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
			/* background-color: ${({ theme }) => theme.bgChosen}; */
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
