import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const GameTargetTotal = ({ numberTarget, handleStartGame }) => {
	const [randomNum, setRandomNum] = useState(0);

	const randomAnimation = () => {
		// setTimeout(() => {
		// 	let int = setInterval(() => {
		// 		// let randomNumber = Math.floor(Math.random() * 999);
		// 		setRandomNum(Math.floor(Math.random() * 999));
		// 		// setRandomNum(randomNumber);
		// 	}, 300);
		// 	clearInterval(int);
		// }, 2000);
		// setRandomNum(643);
		let mixer = setInterval(() => {
			setRandomNum(Math.floor(Math.random() * 999));
		}, 100);
		setTimeout(() => {
			clearInterval(mixer);
			setRandomNum(643);
		}, 2000);
	};

	useEffect(() => {
		randomAnimation();
	}, [numberTarget]);

	return (
		<StyledTotalGrid>
			<button className='start-btns-container' onClick={handleStartGame}>
				start game
			</button>
			<div className='game-total'>
				{randomNum}

				{/* {numberTarget === 0 || numberTarget === undefined
					? { randomNum }
					: numberTarget} */}
			</div>
			{/* <div className='game-total'>
				{numberTarget === 0 || numberTarget === undefined
					? '000'
					: numberTarget}
			</div> */}
		</StyledTotalGrid>
	);
};
const StyledTotalGrid = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	/* margin-bottom: 0.5rem; */
	position: relative;
	.start-btns-container {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 20;
		/* display: flex;
		justify-content: center;
    padding: 0 3rem; */
		/* button{ */
		opacity: 1;
		transition: opacity 300ms ease-in;
		font-weight: 100;
		width: 100%;
		font-size: 2.2rem;
		border: none;
		/* margin: 0 2rem; */
		&.hide {
			transition: opacity 300ms ease-in;
			opacity: 0;
		}
	}
	.game-total {
		font-family: 'Revalia', cursive;
		font-size: 3rem;
		border: 2px solid ${({ theme }) => theme.border};
		outline: none;
		color: ${({ theme }) => theme.textTarget};
		background-color: ${({ theme }) => theme.bgTarget};
		padding: 0.1rem 1rem;
		border-radius: 5px;
	}
`;

export default GameTargetTotal;
