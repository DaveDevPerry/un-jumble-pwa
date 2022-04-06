import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';

const LetterRoundRules = () => {
	let navigate = useNavigate();
	// let { username } = useParams();
	return (
		<StyledRules>
			<div className='rules-container'>
				<h2>Rules</h2>
				<ul className='rules'>
					<li>
						Six, face-down, numbered tiles are selected from fourteen shuffled
						tiles.
					</li>
					<li>The tiles are arranged into two sets:</li>
					<li>Large set [ 25 , 50 , 75 , 100 ]</li>
					<li>Small set [ 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 ]</li>
					<li>
						The player selects as many numbers as desired (unseen) from the
						large set (between none and four), and then from the small set to
						make a total of six numbers.
					</li>
					<li>
						A random three-digit target number is then chosen by a computer.
					</li>
					<li>
						Given 30 seconds, your goal is to get as close as possible to the
						chosen target by using just the four basic arithmetic operators + -
						× ÷
					</li>
					<li>Not all the digits need to be used.</li>

					<li>Each numbered tile can only be used once in the calculation.</li>
					<li>
						10 points are awarded for correctly getting the exact solution.
					</li>
					<li>
						7 points are awarded for getting within 5 of the required solution.
					</li>
					<li>
						5 points are awarded for getting within 10 points of the required
						solution.
					</li>
				</ul>
			</div>

			<div className='btn-container'>
				<button
					className='btn start-btn'
					onClick={() => {
						navigate('/selectletters');
					}}
				>
					START
				</button>
				{/* </div> */}
				{/* <div className='btn-container'> */}
				<button
					className='btn'
					onClick={() => {
						navigate('/');
					}}
				>
					BACK
				</button>
			</div>
		</StyledRules>
	);
};

const StyledRules = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	row-gap: 2rem;
	flex: 1;
	.rules-container {
	}
	h2 {
		letter-spacing: 2px;
		text-align: center;
		/* margin-bottom: 2rem; */
		font-size: 3rem;
		/* padding-bottom: 1rem; */
		text-decoration: underline;
		display: none;
		/* line-height: 1.2; */
		/* color: ${({ theme }) => theme.bgChosen}; */
	}
	.btn-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-direction: column;
		row-gap: 1rem;
		width: 100%;
		padding: 0 3rem;
		/* button.btn {
			flex: 1;
			border: none;
		} */
		.start-btn {
			width: 100%;
			border-radius: 5px;
			background-color: ${({ theme }) => theme.bgTile};
			border: none;
			font-size: 2.8rem;
			display: block;
			margin: 0 2rem;
		}
		.btn {
			border: none;
			width: 100%;
			margin: 0 2rem;
		}
	}
	.rules {
		list-style: none;
		display: flex;
		flex-direction: column;
		/* justify-content: space-between; */
		/* row-gap: 0.5rem; */
		/* padding: 2rem; */
		li {
			font-family: 'Montserrat';
			font-weight: 100;
			font-size: 1.2rem;
			pointer-events: none;
			text-align: center;
		}
	}
`;

export default LetterRoundRules;
