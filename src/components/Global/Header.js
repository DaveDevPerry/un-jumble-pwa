import React from 'react';
import styled from 'styled-components';
// import Delete from '../../pages/Delete';
import { MdDeleteForever, MdOutlineSettings } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

function Header({ pageTitle }) {
	let navigate = useNavigate();
	//

	return (
		<StyledHeader>
			<div
				className='delete-btn'
				onClick={() => {
					// navigate('/delete');
				}}
			>
				<MdDeleteForever size='20px' id='hide-btn' />
			</div>
			<h2>{pageTitle}</h2>
			<div
				className='delete-btn'
				onClick={() => {
					navigate('/settings');
				}}
			>
				<MdOutlineSettings size='18px' />
			</div>
		</StyledHeader>
	);
}
const StyledHeader = styled.header`
	margin: 0rem 0rem 1rem 0rem;
	/* background-color: ${({ theme }) => theme.bg}; */
	background-color: ${({ theme }) => theme.bgChosen};
	transition: all 0.5s linear;
	padding: 0.2rem 1rem;
	/* border-bottom: 4px solid ${({ theme }) => theme.border}; */
	/* position: relative; */
	/* height: 35px; */
	/* border-top: 3px solid ${({ theme }) => theme.bgTile}; */
	border-bottom: 3px solid ${({ theme }) => theme.border};
	display: flex;
	justify-content: space-between;
	align-items: center;
	.delete-btn {
		display: grid;
		place-content: center;
	}
	h2 {
		letter-spacing: 2px;
		font-size: 2rem;
		font-weight: lighter;
	}
	/* text-align: center;
	letter-spacing: 2px;
	font-size: 2.5rem;
	font-weight: lighter; */
`;

export default Header;
