import React from 'react';
import styled from 'styled-components';
// import { useNavigate } from 'react-router-dom';

const FunctionButton = ({ functionName, name }) => {
	// let navigate = useNavigate();
	return (
		<StyledButton className='start-btns-container' onClick={{ functionName }}>
			{name}
		</StyledButton>
	);
};
const StyledButton = styled.button`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 50;
	width: 100%;

	/* font-family: 'Bebas Neue', cursive;
	letter-spacing: 2px;
	font-size: 2.4rem;
	padding: 0.5rem 1rem;
	background-color: ${({ theme }) => theme.bgChosen};
	border: 1px solid ${({ theme }) => theme.btnBorder};
	border-radius: 5px;
	color: ${({ theme }) => theme.syntax};
	cursor: pointer;
	border: none;
	width: 100%; */
	/* margin: 0 2rem; */
`;

export default FunctionButton;
