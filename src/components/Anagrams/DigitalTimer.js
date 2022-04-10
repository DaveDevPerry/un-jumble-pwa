import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Clock from './Clock';

const DigitalTimer = ({
	isTimerActive,
	setIsTimerActive,
	isNextDayCountdownActive,
}) => {
	useEffect(() => {
		console.log('digital timer render');
	}, []);
	let navigate = useNavigate();

	let time = 120;

	useEffect(() => {
		console.log('digital timer use effect');
		if (isTimerActive === false) {
			return;
		}
		let timer = setInterval(() => {
			console.log(time, 'time');
			if (time > 5 && time <= 10) {
				playBeep();
			}
			if (time < 10) {
				document.querySelector('#timer-element-secs').textContent = `0${time}`;
			} else {
				document.querySelector('#timer-element-secs').textContent = time;
			}
			if (time >= 1 && time <= 5) {
				playBuzz();
			}
			if (time === 0) {
				playEnd();
				clearInterval(timer);
				setIsTimerActive(false);
				setTimeout(() => {
					playShowResults();
					navigate('/anagramround/results');
				}, 1000);
				return;
			}
			time--;
		}, 1000);
	}, [isTimerActive, time, setIsTimerActive, navigate]);

	const playBeep = () => {
		const audio = new Audio('/audio/beep.mp3');
		audio.play();
	};
	const playBuzz = () => {
		const audio = new Audio('/audio/buzz.mp3');
		audio.play();
	};
	const playEnd = () => {
		const audio = new Audio('/audio/end.mp3');
		audio.play();
	};
	const playShowResults = () => {
		const audio = new Audio('/audio/squeek.mp3');
		audio.play();
	};
	return (
		<StyledDigitalTimer className='date-countdown-container'>
			<Clock
			// timerDays={timerDays}
			// timerHours={timerHours}
			// timerMinutes={timerMinutes}
			// timerSeconds={timerSeconds}
			/>
		</StyledDigitalTimer>
	);
};
const StyledDigitalTimer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 30px;
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

export default DigitalTimer;
