import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Button = ({ url, name }) => {
	let navigate = useNavigate();
	return (
		<StyledButton
			className='btn-front btn-cta'
			onClick={() => {
				navigate(url);
			}}
		>
			{name}
		</StyledButton>
	);
};
const StyledButton = styled.button`
	font-family: 'Bebas Neue', cursive;
	letter-spacing: 2px;
	font-size: 2.4rem;
	padding: 0.5rem 1rem;
	background-color: ${({ theme }) => theme.bgChosen};
	border: 1px solid ${({ theme }) => theme.btnBorder};
	border-radius: 5px;
	color: ${({ theme }) => theme.syntax};
	cursor: pointer;
	border: none;
	width: 100%;
`;

export default Button;
