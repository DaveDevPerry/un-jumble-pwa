import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const PlayButton = ({ url }) => {
	let navigate = useNavigate();
	return (
		<StyledPlayButton
			// className='btn start-btn'
			onClick={() => {
				navigate(url);
			}}
		>
			play
		</StyledPlayButton>
	);
};
const StyledPlayButton = styled.button`
	height: 100%;
	width: 200px;
	width: 100%;
	border-radius: 5px;
	background-color: ${({ theme }) => theme.bgTile};
	border: none;
	font-size: 5rem;
	display: block;
	margin: 0 2rem;
	cursor: pointer;
`;

export default PlayButton;
