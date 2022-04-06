import React from 'react';
import Timer from './Timer';
// import { StyledInGameControls } from './InGameControlsStyles';
import styled from 'styled-components';

function InGameControls({ handleDelete, handleSubmit }) {
	return (
		<StyledInGameControls className='btns'>
			{/* <form> */}
			<form onSubmit={handleDelete}>
				<input
					type='submit'
					id='del-btn'
					className='btn-grad circle-btn'
					value='DELETE'
				/>
			</form>

			<Timer />

			{/* <form> */}
			<form onSubmit={handleSubmit}>
				<input
					type='submit'
					value='ENTER'
					id='check-btn'
					className='btn-grad circle-btn'
				/>
			</form>
		</StyledInGameControls>
	);
}
const StyledInGameControls = styled.section`
	width: 100%;
	text-align: center;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0;
	/* .btn-grad.circle-btn {
		padding: 5px 15px;
		text-align: center;
		text-transform: uppercase;
		transition: 0.2s;
		background-size: 200% auto;
		color: white;
		color: rgb(87, 39, 0);
		box-shadow: 0 0 3px #eee;
		border-radius: 10px;
		font-weight: 600;
		font-size: 2rem;
	} */
	.btn-grad {
		margin: 10px;
		/* padding: 5px 15px;
		text-align: center;
		text-transform: uppercase; */
		/* transition: 0.5s; */
		/* background-size: 200% auto; */
		background: ${({ theme }) => theme.bgButton};
		/* color: white;
		color: rgb(87, 39, 0); */
		/* color: ${({ theme }) => theme.textColorSecondary}; */
		/* border-radius: 10px; */
		/* font-weight: 600; */
		/* height: 50px; */
		/* width: 100px; */
		/* font-size: 2rem; */
		font-family: 'Fredoka', sans-serif;
		transition: all 0.5s linear;
	}
	.btn-grad.circle-btn {
		padding: 5px 15px;
		text-align: center;
		text-transform: uppercase;
		/* transition: 0.2s; */
		background-size: 200% auto;
		/* color: white;
		color: rgb(87, 39, 0); */
		color: ${({ theme }) => theme.btnTextColor};
		box-shadow: 0 0 3px #eee;
		border-radius: 10px;
		font-weight: 600;
		font-size: 2rem;
		border-radius: 1rem;
		height: 50px;
		width: 95px;
		display: grid;
		place-content: center;
		box-shadow: 0px 0px 20px 2px rgba(0, 0, 0, 0.5);
	}
	.btn-grad.circle-btn:hover {
		background-position: right center;
		text-decoration: none;
		cursor: pointer;
		transform: scale(1.1);
		box-shadow: 0 0 3px rgb(248, 211, 4);
	}
`;

export default InGameControls;
