import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Clock from './Clock';

// const beep = require('../../audio/beep.mp3');
// const BeepAudio = new Audio(beep);
// const buzz = require('../../audio/buzz.mp3');
// const BuzzAudio = new Audio(buzz);

const DigitalTimer = ({
	isTimerActive,
	setIsTimerActive,
	isNextDayCountdownActive,
}) => {
	useEffect(() => {
		console.log('digital timer render');
		// BeepAudio.load();
		// BuzzAudio.load();
	}, []);
	let navigate = useNavigate();

	// const playBeep = () => {
	// 	BeepAudio.play();
	// };
	// const playBuzz = () => {
	// 	BuzzAudio.play();
	// };

	// const [beepAudio, setBeepAudio] = useState()

	// const beep = () => {
	// 	const audio = new Audio('/audio/beep.mp3')
	// 	audio.play()
	// }
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
	let time = 12;
	// useEffect(() => {
	// 	// setTimerSeconds(time);
	// }, [time]);

	useEffect(() => {
		console.log('digital timer use effect');
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
			// setTimerSeconds(time);
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
