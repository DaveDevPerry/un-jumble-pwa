import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const RotatingButton = ({ url, name }) => {
	let navigate = useNavigate();
	return (
		<StyledRotatingButton className='button'>
			<button className='btn-back btn-cta'>back</button>
			<button
				className='btn-front btn-cta'
				onClick={() => {
					navigate({ url });
				}}
			>
				{name}
			</button>
		</StyledRotatingButton>
	);
};
const StyledRotatingButton = styled.div`
	position: relative;
	height: 37px;
	.btn-cta {
		position: absolute;
		width: 100%;
		/* height: 100%; */
		display: flex;
		justify-content: center;
		align-items: center;
		overflow: hidden;
		backface-visibility: hidden;
		transition: transform 500ms ease-in-out;
		font-size: 2.5rem !important;
		padding: 0.2rem 0rem;
	}
	.button.visible .btn-back {
		transform: rotateX(-180deg);
		/* background-color: pink; */
	}
	.button.visible .btn-front {
		transform: rotateX(0);
	}
	/* .card.matched .card-value {
	animation: correct 1s linear forwards 500ms;
} */

	.btn-back {
		/* background-color: ${({ theme }) => theme.bgChosen}; */
		font-size: 2rem;
		/* border: 1px solid white; */
		outline: none;
		background-color: ${({ theme }) => theme.bgTile};
		color: ${({ theme }) => theme.bgTile};
		display: grid;
		place-content: center;
		border-radius: 5px;
		/* border-radius: 5px; */
	}
	.btn-front {
		/* border: 1px solid white; */
		font-size: 3rem;
		/* border: 1px solid white; */
		outline: none;
		/* background-color: ${({ theme }) => theme.bgChosen}; */
		/* color: ${({ theme }) => theme.bgChosen}; */
		display: grid;
		place-content: center;
		border-radius: 5px;
		/* border-radius: 5px; */
		transform: rotateX(180deg);
		background-color: ${({ theme }) => theme.bgChosen};
		color: ${({ theme }) => theme.syntax};
		&.active {
			background-color: ${({ theme }) => theme.bgChosen};
		}
	}
`;

export default RotatingButton;
