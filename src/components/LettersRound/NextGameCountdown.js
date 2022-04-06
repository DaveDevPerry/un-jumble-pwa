// import React, { useState } from 'react';
import styled from 'styled-components';
// import Countdown from 'react-countdown';
// export default NextGameCountdown;

import React, { useState, useEffect } from 'react';
import Clock from './Clock';

const NextGameCountdown = () => {
	// const [timerDays, setTimerDays] = useState();
	const [timerHours, setTimerHours] = useState();
	const [timerMinutes, setTimerMinutes] = useState();
	const [timerSeconds, setTimerSeconds] = useState();

	let interval;
	// const today = new Date();
	// const tomorrow = new Date(today);
	// const countdownD = tomorrow.setDate(tomorrow.getDate() + 1);

	const startTimer = () => {
		console.log('in timer');
		// const countDownDate = new Date(new Date().getDate() + 1).getTime();
		// const countDownDate = new Date(new Date().getDate() + 1).getTime();
		// const countDownDate = new Date(new Date() + 1).getTime();
		// const today = new Date();
		// const tomorrow = new Date(today);
		// const countdownD = tomorrow.setDate(tomorrow.getDate() + 1);
		// console.log(countdownD, 'cd');
		// const countd = setDate(countdownD).getTime();
		// console.log(countd, 'countd');
		// const todayDate = new Date();
		// const tomorrowDate = new Date(todayDate + 1);
		// const countDownDate = new Date(tomorrowDate).getTime();
		// const countDownDate = new Date().getTime();
		// const countDownDate = new Date(countdownD).getTime();
		const countDownDate = new Date('04 Apr, 2022').getTime();
		// console.log(countDownDate, 'cdate');

		interval = setInterval(() => {
			const now = new Date().getTime();

			const distance = countDownDate - now;

			// const days = Math.floor(distance / (24 * 60 * 60 * 1000));
			const hours = Math.floor(
				(distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
			);
			const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
			const seconds = Math.floor((distance % (60 * 1000)) / 1000);

			if (distance < 0) {
				// Stop Timer

				clearInterval(interval.current);
			} else {
				// Update Timer
				// setTimerDays(days);
				setTimerHours(hours);
				setTimerMinutes(minutes);
				setTimerSeconds(seconds);
			}
		});
	};

	useEffect(() => {
		console.log('start timer');
		startTimer();
	});
	// const [hours, setHours] = useState();
	// const [minutes, setMinutes] = useState();
	// const [seconds, setSeconds] = useState();

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

// import React, { useState, useEffect } from "react";
// import Clock from "./Components/Clock";

// function App() {
//   const [timerDays, setTimerDays] = useState();
//   const [timerHours, setTimerHours] = useState();
//   const [timerMinutes, setTimerMinutes] = useState();
//   const [timerSeconds, setTimerSeconds] = useState();

//   let interval;

//   const startTimer = () => {
//     const countDownDate = new Date("May 30,2021 ").getTime();

//     interval = setInterval(() => {
//       const now = new Date().getTime();

//       const distance = countDownDate - now;

//       const days = Math.floor(distance / (24 * 60 * 60 * 1000));
//       const hours = Math.floor(
//         (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
//       );
//       const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
//       const seconds = Math.floor((distance % (60 * 1000)) / 1000);

//       if (distance < 0) {
//         // Stop Timer

//         clearInterval(interval.current);
//       } else {
//         // Update Timer
//         setTimerDays(days);
//         setTimerHours(hours);
//         setTimerMinutes(minutes);
//         setTimerSeconds(seconds);
//       }
//     });
//   };

//   useEffect(() => {
//     startTimer();
//   });

//   return (
//     <div className="App">
//       <Clock
//         timerDays={timerDays}
//         timerHours={timerHours}
//         timerMinutes={timerMinutes}
//         timerSeconds={timerSeconds}
//       />
//     </div>
//   );
// }

// export default App;
