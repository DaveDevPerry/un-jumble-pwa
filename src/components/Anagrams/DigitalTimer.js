import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Clock from './Clock';

const DigitalTimer = ({
	isTimerActive,
	setIsTimerActive,
	isNextDayCountdownActive,
}) => {
	let navigate = useNavigate();
	// const [timerHours, setTimerHours] = useState();
	// const [timerMinutes, setTimerMinutes] = useState();
	// const [timerSeconds, setTimerSeconds] = useState();

	// useEffect(() => {
	// 	console.log('start timer');
	// 	let nextMidnight = new Date();
	// 	nextMidnight.setHours(24, 0, 0, 0);
	// 	// console.log(nextMidnight);
	// 	// const tom = nextMidnight.getTime();
	// 	// console.log(tom);
	// 	const countDownDate = nextMidnight.getTime();

	// 	// const countDownDate = new Date('06 Apr, 2022').getTime();
	// 	// const countDownDate = new Date('05 Apr, 2022').getTime();
	// 	// const date = new Date();
	// 	// const countDownDate = date.setDate(date.getDate() + 1);
	// 	console.log(countDownDate);

	// 	let interval = setInterval(() => {
	// 		// const now = new Date().getTime();
	// 		// const now = 120000
	// 		// const distance = countDownDate - now;
	// 		const distance = 120000;
	// 		// const timerInMS = 120000;
	// 		// const hours = Math.floor(
	// 		// 	(distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
	// 		// );
	// 		const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
	// 		const seconds = Math.floor((distance % (60 * 1000)) / 1000);
	// 		if (isNextDayCountdownActive === false) {
	// 			clearInterval(interval.current);
	// 			return;
	// 		}
	// 		if (distance < 0) {
	// 			// Stop Timer
	// 			clearInterval(interval.current);
	// 		} else {
	// 			// Update Timer
	// 			// setTimerHours(hours);
	// 			setTimerMinutes(minutes);
	// 			setTimerSeconds(seconds);
	// 		}
	// 	});
	// }, [isNextDayCountdownActive]);
	let time = 10;
	// useEffect(() => {
	// 	// setTimerSeconds(time);
	// }, [time]);

	useEffect(() => {
		if (isTimerActive === false) {
			return;
		}
		// runTimer();
		let timer = setInterval(() => {
			// if (time > 60) {
			// 	document.querySelector('#timer-element-mins').textContent = `0${
			// 		time % 60
			// 	}`;
			// }
			if (time > 5 && time <= 10) {
				// beep();
			}
			if (time < 10) {
				// document.querySelector('#timer-element').textContent = `0${time}`;
				document.querySelector('#timer-element-secs').textContent = `0${time}`;
			} else {
				// document.querySelector('#timer-element').textContent = time;
				document.querySelector('#timer-element-secs').textContent = time;
			}
			// document.querySelector('#timer-element').textContent = time;
			if (time >= 1 && time <= 5) {
				// console.log('pulse');
				// document.querySelector('.timer-card').classList.add('pulse');
				// buzzer();
			}
			if (time === 0) {
				clearInterval(timer);
				setIsTimerActive(false);
				navigate('/anagramround/results');
			}
			time--;
			// setTimerSeconds(time);
		}, 1000);
	}, [isTimerActive, time, setIsTimerActive, navigate]);

	// const runTimer = () => {
	// 	console.log('running 2 min timer');

	// 	let timer = setInterval(() => {
	// 		if (time > 5 && time <= 10) {
	// 			// beep();
	// 		}
	// 		if (time < 10) {
	// 			document.querySelector('#timer-element').textContent = `0${time}`;
	// 		} else {
	// 			document.querySelector('#timer-element').textContent = time;
	// 		}
	// 		// document.querySelector('#timer-element').textContent = time;
	// 		if (time >= 1 && time <= 5) {
	// 			// console.log('pulse');
	// 			// document.querySelector('.timer-card').classList.add('pulse');
	// 			// buzzer();
	// 		}
	// 		if (time === 0) {
	// 			clearInterval(timer);
	// 		}
	// 		time--;
	// 		// setTimerSeconds(time);
	// 	}, 1000);
	// };

	// const runTimer = () => {
	// 	let timer = setInterval(() => {
	// 		console.log('timer');
	// 		if (time > 5 && time <= 10) {
	// 			beep();
	// 		}
	// 		if (time < 10) {
	// 			document.querySelector('#timer-element').textContent = `0${time}`;
	// 		} else {
	// 			document.querySelector('#timer-element').textContent = time;
	// 		}
	// 		// document.querySelector('#timer-element').textContent = time;
	// 		if (time >= 1 && time <= 5) {
	// 			// console.log('pulse');
	// 			document.querySelector('.timer-card').classList.add('pulse');
	// 			buzzer();
	// 		}
	// 		if (time === 0) {
	// 			end();
	// 			clearInterval(timer);
	// 			// openModalAudio();
	// 			setTimeout(() => {
	// 				openModalAudio();
	// 			}, 1000);
	// 			setTimeout(() => {
	// 				// console.log('time zero');
	// 				// console.log(highScore, newHighScore, validWordCount);

	// 				setIsTimer(false);

	// 				setEndTime(new Date().getMilliseconds());

	// 				// clearInterval(timer);

	// 				setIsPlaying(false);
	// 				document.querySelector('.timer-card').classList.remove('pulse');

	// 				const validCount = parseInt(
	// 					document.querySelector('#v-word-count').textContent
	// 				);
	// 				console.log('v count', validCount);
	// 				setNewHighScore(validCount);
	// 				// saveGame();
	// 			}, 1500);
	// 		}
	// 		time--;
	// 	}, 1000);
	// };

	// let interval;

	// const startTimer = () => {
	// 	console.log('in timer');
	// 	const countDownDate = new Date('03 Apr, 2022').getTime();

	// 	interval = setInterval(() => {
	// 		const now = new Date().getTime();
	// 		const distance = countDownDate - now;
	// 		const hours = Math.floor(
	// 			(distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
	// 		);
	// 		const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
	// 		const seconds = Math.floor((distance % (60 * 1000)) / 1000);
	// 		if (distance < 0) {
	// 			// Stop Timer
	// 			clearInterval(interval.current);
	// 		} else {
	// 			// Update Timer
	// 			setTimerHours(hours);
	// 			setTimerMinutes(minutes);
	// 			setTimerSeconds(seconds);
	// 		}
	// 	});
	// };

	// useEffect(() => {
	// 	console.log('start timer');
	// 	startTimer();
	// }, []);

	return (
		<StyledDigitalTimer className='date-countdown-container'>
			{/* <div id='timer-element'>t</div> */}
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
		/* margin: a; */
		display: flex;
		justify-content: center;
		align-items: center;
		column-gap: 0.4rem;
		/* background: linear-gradient(270deg, #051817, #0e3839); */
		/* height: 180px; */
		/* width: 360px; */
		/* color: #06f1f6; */
		/* text-shadow: 1px 1px 7px; */
		/* border-radius: 15px; */
		/* border: 2px solid silver; */
		/* box-shadow: 0 0 5px 25px; */
	}

	.clock section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		/* padding: 1rem; */
	}
	.clock section p {
		font-size: 4rem;
	}
	.clock section small {
		color: silver;
		text-shadow: none;
	}
`;

export default DigitalTimer;
