import React, { useEffect } from 'react';
import styled from 'styled-components';
import { MdOutlineClose } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const LetterRoundStats = ({ setPageTitle }) => {
	let navigate = useNavigate();
	useEffect(() => {
		setPageTitle('letterRound');
	}, [setPageTitle]);
	return (
		<StyledRules>
			<div className='letter-round-header'>
				<MdOutlineClose size='25px' id='close-letter-round-blank' />
				<p className='letter-round-title'>statistics</p>
				<div
					className='close-letter-round-btn'
					onClick={() => {
						navigate('/');
					}}
				>
					<MdOutlineClose size='25px' />
				</div>
			</div>
			<div className='letter-round-stats-container'>
				<div className='stat-wrapper'>
					<p>03</p>
					<p>played</p>
				</div>
				<div className='stat-wrapper'>
					<p>607</p>
					<p>words</p>
				</div>
				<div className='stat-wrapper'>
					<p>607</p>
					<p>points</p>
				</div>
				{/* <div className='stat-wrapper'>
					<p>100</p>
					<p>win %</p>
				</div>
				<div className='stat-wrapper'>
					<p>03</p>
					<p>current streak</p>
				</div>
				<div className='stat-wrapper'>
					<p>03</p>
					<p>max streak</p>
				</div> */}
			</div>

			<div className='letter-round-chart-wrapper'>chart goes here</div>
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
	row-gap: 2rem;
	.letter-round-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		#close-letter-round-blank {
			opacity: 0;
		}
		.letter-round-title {
			text-transform: uppercase;
			font-family: 'Bebas Neue', cursive;
			font-size: 2.2rem;
			/* width: 100%; */
		}
		#close-letter-round-btn {
			justify-self: flex-end;
		}
	}
	.letter-round-stats-container {
		display: flex;
		justify-content: space-evenly;
		align-items: flex-start;
		border-top: 2px solid ${({ theme }) => theme.bgContainer};
		border-bottom: 2px solid ${({ theme }) => theme.bgContainer};
		padding: 1rem;
		margin: 0rem 1rem;
		.stat-wrapper {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: flex-start;
			flex-wrap: wrap;
			flex: 1;
			p {
				font-size: 2rem;
				font-weight: 800;
				line-height: 1;
				color: ${({ theme }) => theme.bgChosen};
				&:last-child {
					font-family: 'Montserrat', sans-serif;
					text-transform: capitalize;
					font-size: 1.2rem;
					font-weight: 400;
					text-align: center;
					color: ${({ theme }) => theme.syntax};
				}
			}
		}
	}
	.letter-round-chart-wrapper {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;
	}
`;

export default LetterRoundStats;
