import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Clock from './Clock';

const NextGameCountdown = ({ isNextDayCountdownActive }) => {
	const [timerHours, setTimerHours] = useState();
	const [timerMinutes, setTimerMinutes] = useState();
	const [timerSeconds, setTimerSeconds] = useState();

	useEffect(() => {
		console.log('start timer');
		let nextMidnight = new Date();
		nextMidnight.setHours(24, 0, 0, 0);
		// console.log(nextMidnight);
		// const tom = nextMidnight.getTime();
		// console.log(tom);
		const countDownDate = nextMidnight.getTime();
		// const countDownDate = new Date('06 Apr, 2022').getTime();
		// const countDownDate = new Date('05 Apr, 2022').getTime();
		// const date = new Date();
		// const countDownDate = date.setDate(date.getDate() + 1);
		console.log(countDownDate);

		let interval = setInterval(() => {
			const now = new Date().getTime();
			const distance = countDownDate - now;
			const hours = Math.floor(
				(distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
			);
			const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
			const seconds = Math.floor((distance % (60 * 1000)) / 1000);
			if (isNextDayCountdownActive === false) {
				clearInterval(interval.current);
				return;
			}
			if (distance < 0) {
				// Stop Timer
				clearInterval(interval.current);
			} else {
				// Update Timer
				setTimerHours(hours);
				setTimerMinutes(minutes);
				setTimerSeconds(seconds);
			}
		});
	}, [isNextDayCountdownActive]);
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
		<StyledNextGameCountdown className='date-countdown-container'>
			<Clock
				// timerDays={timerDays}
				timerHours={timerHours}
				timerMinutes={timerMinutes}
				timerSeconds={timerSeconds}
			/>
		</StyledNextGameCountdown>
	);
};
const StyledNextGameCountdown = styled.div`
	display: flex;
	align-items: center;
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

export default NextGameCountdown;
