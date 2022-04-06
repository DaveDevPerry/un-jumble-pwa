import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import GameTitle from '../../components/GameTitle';
import Button from '../../components/Button';
// import { Link } from 'react-router-dom';

const AnagramRoundHome = () => {
	let navigate = useNavigate();
	// let { username } = useParams();
	return (
		<>
			<GameTitle title='letter round' />
			<StyledAnagramRoundHome>
				<div className='how-to-play'>
					{/* <h2>How to play</h2> */}
					<p>
						You must choose how many vowels and consonants you would like to
						make up nine randomly chosen letters.
					</p>
					<p>There must be at least three vowels and four consonants.</p>
					<p>
						You then have 30 seconds to find the longest word that they can make
						out of these letters.
					</p>

					{/* <p>
					You must choose how many vowels and consonants you would like
					to make up nine randomly chosen letters. There must be at least three
					vowels and four consonants. You then have 30 seconds to
					find the longest word that they can make out of these letters.
				</p> */}
					{/* <ul>
					<li>
						<p>Choose a random six Letters.</p>
					</li>
					<li>
						<p>Given 30 seconds and a random 3 digit target Letter.</p>
					</li>
					<li>
						<p>Use your Letters and maths to reach the target.</p>
					</li>
					<li>
						<p>Each Letter must only be used once.</p>
					</li>
					<li>
						<p>Not all Letters need to be used.</p>
						</li>
					</ul> */}
				</div>
				<button
					className='btn start-btn'
					onClick={() => {
						document
							.querySelector(':root')
							.style.setProperty('--letter-count', 5);
						navigate('/anagramround/game');
					}}
				>
					play
				</button>
				{/* <button
					className='btn'
					onClick={() => {
						navigate('/letterround/rules');
					}}
				>
					RULES
				</button> */}
				<Button url='/anagramround/rules' name='rules' />
			</StyledAnagramRoundHome>
			{/* <Button url='/conundrum/rules' name='rules' /> */}
		</>
	);
};

const StyledAnagramRoundHome = styled.section`
	/* padding: 1rem 3rem; */
	justify-content: space-between;
	align-items: center;
	flex-direction: column;
	word-wrap: wrap;
	display: flex;
	flex: 1;
	row-gap: 1rem;
	/* -webkit-touch-callout: none;
	-webkit-user-select: none;
	-khtml-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none; */
	.how-to-play {
		padding: 0 2rem;
		h2 {
			letter-spacing: 2px;
			text-align: center;
			/* margin: 0 2rem 2rem 2rem; */
			font-size: 2.5rem;
			font-weight: 100;
			/* padding-bottom: 1rem; */
			/* text-decoration: underline; */
			/* line-height: 1.2; */
			/* color: ${({ theme }) => theme.bgChosen}; */
		}
		ul {
			list-style: none;
			display: flex;
			flex-direction: column;
			row-gap: 1rem;
		}
		p {
			font-family: 'Montserrat';
			font-weight: 100;
			font-size: 1.6rem;
			pointer-events: none;
			text-align: center;
			margin-bottom: 1rem;
		}
	}
	.start-btn {
		height: 100%;
		/* height: 200px; */
		width: 200px;
		border-radius: 10px;
		background-color: ${({ theme }) => theme.bgTile};
		border: none;
		font-size: 5rem;
		display: block;
		margin: 0 2rem;
	}
	.btn {
		border: none;
		width: 100%;
		margin: 0 2rem;
	}
`;

export default AnagramRoundHome;
