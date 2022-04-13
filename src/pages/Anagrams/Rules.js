import React, { useEffect } from 'react';
import styled from 'styled-components';
import { MdOutlineClose } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const AnagramRoundRules = ({ setPageTitle }) => {
	let navigate = useNavigate();
	useEffect(() => {
		setPageTitle('conundrum');
	}, [setPageTitle]);
	return (
		<StyledRules>
			<div className='rules-header'>
				<MdOutlineClose size='25px' id='close-rules-blank' />
				<p className='rules-title'>HOW to play</p>
				<div
					className='close-rules-btn'
					onClick={() => {
						navigate('/');
					}}
				>
					<MdOutlineClose size='25px' />
				</div>
			</div>
			<div className='rules-wrapper'>
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
		</StyledRules>
	);
};
const StyledRules = styled.div`
	background-color: ${({ theme }) => theme.bgTile};
	border-radius: 5px;
	padding: 1rem;
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	.rules-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		#close-rules-blank {
			opacity: 0;
		}
		.rules-title {
			text-transform: uppercase;
			font-family: 'Bebas Neue', cursive;
			font-size: 2.2rem;
			/* width: 100%; */
		}
		#close-rules-btn {
			justify-self: flex-end;
		}
	}
	.rules-wrapper {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		.rules {
			list-style: none;
			display: flex;
			flex-direction: column;
			flex: 1;
			justify-content: space-between;
			row-gap: 0.5rem;
			/* padding: 2rem; */
			li {
				font-family: 'Montserrat', sans-serif;
				font-weight: 100;
				font-size: 1.2rem;
				pointer-events: none;
				/* text-align: center; */
			}
		}
	}
`;

export default AnagramRoundRules;
