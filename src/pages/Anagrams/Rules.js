import React, { useEffect } from 'react';
import styled from 'styled-components';
import { MdOutlineClose } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const AnagramRoundRules = ({ setPageTitle }) => {
	let navigate = useNavigate();
	useEffect(() => {
		setPageTitle('anagram');
	}, [setPageTitle]);
	return (
		<StyledRules>
			<div className='rules-page-container'>
				<div className='rules-header'>
					<MdOutlineClose size='25px' id='close-rules-blank' />
					<p className='rules-title'>HOW to play</p>
					<div
						className='close-rules-btn'
						onClick={() => {
							navigate('/');
						}}
					>
						<MdOutlineClose className='close-btn-icon' />
					</div>
				</div>
				<div className='rules-container'>
					<div className='rules-wrapper'>
						<p>Make words using all the letters available.</p>
						<p>Each game lasts two minutes.</p>
						<p>Only one attempt at each level per day.</p>
						<p>New levels will be available each day!</p>
					</div>
				</div>
			</div>
		</StyledRules>
	);
};
const StyledRules = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	.rules-page-container {
		background-color: white;
		border-radius: 5px;
		padding: 1rem;
		row-gap: 2rem;
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
				color: ${({ theme }) => theme.bgChosen};
			}
			#close-rules-btn {
				justify-self: flex-end;
			}
		}
		.rules-container {
			flex: 1;
			display: flex;
			flex-direction: column;
			justify-content: center;
			padding: 0 1rem;
			.rules-wrapper {
				padding: 1rem 0rem;
				color: ${({ theme }) => theme.bgChosen};
				font-weight: 600;
				p {
					margin-bottom: 1rem;
					text-align: center;
				}
				&:nth-child(2) {
					border-top: 1px solid ${({ theme }) => theme.bgChosen};
					border-bottom: 1px solid ${({ theme }) => theme.bgChosen};
				}
			}
		}
	}
`;

export default AnagramRoundRules;
