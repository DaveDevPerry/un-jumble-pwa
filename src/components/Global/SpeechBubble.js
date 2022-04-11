import React, { useEffect } from 'react';
import styled from 'styled-components';

const SpeechBubble = ({ message }) => {
	useEffect(() => {
		console.log('speech bubble render');
		// document.querySelector('.footer-speech-bubble').classList.toggle('bark');
		// setTimeout(() => {
		// 	document.querySelector('.footer-speech-bubble').classList.toggle('bark');
		// }, 1000);
		if (message === '') return;
		document.querySelector('.footer-speech-bubble').classList.add('bark');
		setTimeout(() => {
			document.querySelector('.footer-speech-bubble').classList.remove('bark');
		}, 1000);
	}, [message]);
	return (
		<>
			<StyledSpeechBubble className='footer-speech-bubble'>
				<q>{message}</q>
				{/* <p>{message}</p> */}
			</StyledSpeechBubble>
		</>
	);
};
const StyledSpeechBubble = styled.p`
	position: absolute;
	top: -43px;
	left: 120px;
	/* height: 3rem; */
	/* max-width: 30em; */

	background-color: #fff;
	padding: 0.5rem 1.5rem;
	font-size: 1.6rem;
	border-radius: 1rem;
	box-shadow: 0 0.125rem 0.5rem rgba(0, 0, 0, 0.3),
		0 0.0625rem 0.125rem rgba(0, 0, 0, 0.2);
	color: ${({ theme }) => theme.black};
	font-weight: 800;
	width: 228px;
	/* width: calc(100% - 90px); */
	text-align: center;
	text-transform: uppercase;
	opacity: 0;
	transition: opacity 200ms ease-in-out;
	&::before {
		content: '';
		position: absolute;
		width: 0;
		height: 0;
		/* background-color: red; */
		right: 96%;
		top: 87%;
		border: 6px solid transparent;
		border-right: 61px solid orange;
		border-left: none;
		border-right-color: white;
		transform: rotateZ(330deg);
	}
	&.bark {
		opacity: 1;
	}
	/* p {
		padding: 1.125em 1.5em;
		font-size: 1.25em;
		color: red;
	} */
	/* &::before {
		content: '';
		position: absolute;
		width: 0;
		height: 0;
		bottom: 50%;
		left: -1em; // offset should move with padding of parent
		border: 0.75rem solid transparent;
		border-left: none;
		border-bottom-color: #fff;
		filter: drop-shadow(0 -0.0625rem 0.0625rem rgba(0, 0, 0, 0.1));
	} */
`;

export default SpeechBubble;
