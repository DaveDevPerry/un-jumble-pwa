import React, { useEffect, useRef } from 'react';
// import { ConundrumContext } from '../../contexts/ConundrumContext';
import styled from 'styled-components';
// import { useNavigate } from 'react-router-dom';
// import { gsap } from 'gsap';

const PageLoader = () => {
	// let navigate = useNavigate();/
	// const { dispatch } = useContext(ConundrumContext);
	const pageRef = useRef();
	// const playCloseLoader = () => {
	// 	const audio = new Audio('/audio/closeModal.mp3');
	// 	audio.play();
	// };
	// const dogRef = useRef();

	// setTimeout(() => {
	// 	dispatch({
	// 		type: 'ADD_CURRENT_DAY_CONUNDRUMS',
	// 		conundrum: {
	// 			date: new Date('Apr 02, 2022').toLocaleDateString(),
	// 			level: 4,
	// 			wordOfTheDay: '',
	// 			isCorrect: false,
	// 		},
	// 	});
	// }, 1000);

	// (() => {
	// 	for (let i = 4; i <= 9; i++) {
	// 		dispatch({
	// 			type: 'ADD_CURRENT_DAY_CONUNDRUMS',
	// 			conundrum: {
	// 				date: new Date('Jan 01, 2022').toLocaleDateString(),
	// 				level: i,
	// 				wordOfTheDay: '',
	// 				isCorrect: false,
	// 			},
	// 		});
	// 	}
	// 	// return console.log('check 02/april');
	// 	// setTimeout(() => {
	// 	// 	document.querySelector('.load-screen').classList.add('close');
	// 	// 	// navigate('/');
	// 	// }, 1000);
	// })();

	// const createConundrumCurrentDayData = () => {
	// 	for (let i = 4; i <= 9; i++) {
	// 		dispatch({
	// 			type: 'ADD_CURRENT_DAY_CONUNDRUMS',
	// 			conundrum: {
	// 				date: new Date('Jan 01, 2022').toLocaleDateString(),
	// 				level: i,
	// 				wordOfTheDay: '',
	// 				isCorrect: false,
	// 			},
	// 		});
	// 	}
	// 	// return console.log('check 02/april');
	// 	setTimeout(() => {
	// 		document.querySelector('.load-screen').classList.add('close');
	// 		// navigate('/');
	// 	}, 1000);
	// };

	const flipLetter = (i) => {
		setTimeout(() => {
			document.querySelector(`[data-order='${i}']`).classList.add('visible');
		}, 300 * i);
	};

	const jumpLetter = (i) => {
		// const loaderLetterTiles = document.querySelectorAll('.loader-letters');
		// console.log(loaderLetterTiles[i]);
		setTimeout(() => {
			document.querySelector(`[data-jump='${i}']`).classList.add('jump');
			// loaderLetterTiles[i].classList.add('jump');
		}, 100 * i);
		// });
	};
	const rotateContainer = () => {
		// playCloseLoader();
		document.querySelector('.load-screen').classList.add('rotate');
	};

	useEffect(() => {
		// testing setting con all level same day data
		// createConundrumCurrentDayData();

		// animate tiles
		// const loaderLetterTiles = document.querySelectorAll('.loader-letters');
		// loaderLetterTiles.forEach((tile) => {
		// 	tile.classList.add('visible');
		// });
		for (let i = 1; i <= 8; i++) {
			// setTimeout(() => {
			// 	document.querySelector(`[data-letter='${i}']`).classList.add('visible');
			// }, 1000);
			flipLetter(i);
			// createConundrumCurrentDayData(i);
		}
		setTimeout(() => {
			for (let i = 1; i <= 8; i++) {
				jumpLetter(i);
			}
		}, 3200);
		setTimeout(() => {
			// playCloseLoader();
			rotateContainer();
		}, 4200);

		// gsap.to(
		// 	pageRef.current,
		// 	{
		// 		rotationZ: 90,
		// 		// transformOrigin: '50% 50%',
		// 		duration: 1.5,
		// 		ease: 'Linear'.easeNone,
		// 	},
		// 	'+=5'
		// );

		// gsap.to(
		// 	pageRef.current,
		// 	{
		// 		y: '-100%',
		// 		duration: 1.5,
		// 		ease: 'Linear'.easeNone,
		// 	},
		// 	'+=5'
		// );
	}, []);
	return (
		<>
			<StyledPageLoader ref={pageRef} className='load-screen'>
				<div className='loader-grid'>
					<div className='loader-letters' data-order='8' data-jump='1'>
						<div className='loader-letter-back loader-letter'>e</div>
						<div className='loader-letter-front loader-letter'>U</div>
					</div>
					<div className='loader-letters' data-order='2' data-jump='2'>
						<div className='loader-letter-back loader-letter'>n</div>
						<div className='loader-letter-front loader-letter'>n</div>
					</div>
					<div className='loader-letters' data-order='4' data-jump='3'>
						<div className='loader-letter-back loader-letter'>u</div>
						<div className='loader-letter-front loader-letter'>j</div>
					</div>
					<div className='loader-letters' data-order='6' data-jump='4'>
						<div className='loader-letter-back loader-letter'>b</div>
						<div className='loader-letter-front loader-letter'>U</div>
					</div>
					<div className='loader-letters' data-order='5' data-jump='5'>
						<div className='loader-letter-back loader-letter'>m</div>
						<div className='loader-letter-front loader-letter'>m</div>
					</div>
					<div className='loader-letters' data-order='7' data-jump='6'>
						<div className='loader-letter-back loader-letter'>l</div>
						<div className='loader-letter-front loader-letter'>b</div>
					</div>
					<div className='loader-letters' data-order='1' data-jump='7'>
						<div className='loader-letter-back loader-letter'>u</div>
						<div className='loader-letter-front loader-letter'>l</div>
					</div>
					<div className='loader-letters' data-order='3' data-jump='8'>
						<div className='loader-letter-back loader-letter'>j</div>
						<div className='loader-letter-front loader-letter'>e</div>
					</div>
				</div>

				{/* <button
					onClick={() => {
					
						createConundrumCurrentDayData();
					}}
				>
					Lets Play
				</button> */}

				{/* <div className="loader-grid">
        <div className="loader-letter">U</div>
        <div className="loader-letter">n</div>
        <div className="loader-letter">j</div>
        <div className="loader-letter">U</div>
        <div className="loader-letter">m</div>
        <div className="loader-letter">b</div>
        <div className="loader-letter">l</div>
        <div className="loader-letter">e</div>
      </div> */}
			</StyledPageLoader>
		</>
	);
};
const StyledPageLoader = styled.div`
	z-index: 100;
	background-color: ${({ theme }) => theme.bgContainer};
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
	row-gap: 2rem;
	/* perspective: 500px; */
	transition: all 800ms linear;
	transform: rotateY(0deg);

	&.rotate {
		transform: rotateY(-90deg);
	}
	.loader-grid {
		width: 100%;
		display: grid;
		grid-template-columns: repeat(8, 1fr);
		grid-template-rows: repeat(1, 4rem);
		/* gap: 1rem; */
		perspective: 500px;
		gap: 0.3rem;
		padding: 1rem;
		.loader-letters {
			position: relative;
		}
		.loader-letter {
			position: absolute;
			width: 100%;
			height: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			overflow: hidden;
			backface-visibility: hidden;
			transition: transform 500ms ease-in-out;
		}
		.loader-letters.visible .loader-letter-back {
			transform: rotateY(-180deg);
		}
		.loader-letters.visible .loader-letter-front {
			transform: rotateY(0);
		}
		.loader-letters.jump {
			animation: jump 100ms ease-out;
		}
		/* [data-letter='1'].loader-letters.visible .loader-letter-back {
			transform: rotateY(-180deg);
		}
		.loader-letters.visible .loader-letter-front {
			transform: rotateY(0);
		} */
		.loader-letter-back {
			font-size: 2rem;
			outline: none;
			background-color: ${({ theme }) => theme.bgChosen};
			color: ${({ theme }) => theme.syntax};
			display: grid;
			place-content: center;
			border-radius: 5px;
			transform: rotate(180deg);
		}
		.loader-letter-front {
			font-size: 3rem;
			outline: none;
			display: grid;
			place-content: center;
			border-radius: 5px;
			transform: rotateY(180deg);
			background-color: ${({ theme }) => theme.bgTile};
			color: ${({ theme }) => theme.syntax};
		}
	}
	&.close {
		display: none;
	}

	@keyframes jump {
		0%,
		100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-10px);
		}
		/* 0%,
		100% {
			transform: scale(1);
		}
		50% {
			transform: scale(1.2);
		} */
	}
`;

export default PageLoader;
