import React from 'react';
import styled from 'styled-components';
import Toggle from './Toggler';
import { useNavigate } from 'react-router-dom';
import SpeechBubble from './SpeechBubble';

function Footer({ theme, themeToggler, message, setMessage }) {
	// useEffect(() => {
	// 	document.querySelector('.footer-speech-bubble').classList.add('bark');
	// 	setTimeout(() => {
	// 		document.querySelector('.footer-speech-bubble').classList.remove('bark');
	// 	}, 500);
	// }, [setMessage]);
	let navigate = useNavigate();
	return (
		<StyledFooter>
			<img
				src='/images/savannah icon.png'
				alt='savannah'
				id='savannah'
				onClick={() => {
					navigate('/');
				}}
			/>
			<p id='ssg'>© Silly Sausage Games 2022</p>
			<Toggle theme={theme} toggleTheme={themeToggler} />
			<SpeechBubble
				message={message}
				// message='test message here'
				// className='footer-speech-bubble'
			/>
		</StyledFooter>
	);
}
const StyledFooter = styled.footer`
	background: ${({ theme }) => theme.bgChosen};
	position: relative;
	margin-top: 4rem;
	border-top: 4px solid ${({ theme }) => theme.border};
	/* #footer-speech-bubble {
		color: red;
	} */
	z-index: 500;
	#ssg {
		text-align: center;
		padding: 0.5rem;
		letter-spacing: 0.5px;
		color: ${({ theme }) => theme.syntax};
		font-size: 1.2rem;
	}
	#toggle-switch {
		position: absolute;
		right: 5px;
		top: 50%;
		transform: translateY(-50%);
		padding: 0.2rem 0.5rem;
		border-radius: 3px;
		border: 1px solid ${({ theme }) => theme.border};
		outline: none;
		text-transform: uppercase;
		font-weight: lighter;
		color: ${({ theme }) => theme.syntax};
		background-color: ${({ theme }) => theme.bgTile};
		/* font-family: 'Montserrat'; */
		font-size: 1.2rem;
		line-height: 1px;
		letter-spacing: initial;
		width: unset;
		height: 1rem;
	}
	#savannah {
		position: absolute;
		bottom: 0px;
		left: 15px;
		height: 70px;
		z-index: 500;
		cursor: pointer;
	}
	transition: all 0.5s linear;
`;

export default Footer;
