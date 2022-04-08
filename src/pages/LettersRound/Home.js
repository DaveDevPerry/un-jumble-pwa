import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import GameTitle from '../../components/Global/GameTitle';
import Button from '../../components/Global/Button';

const LetterRoundHome = () => {
	useEffect(() => {
		console.log('lr home render');
	}, []);
	let navigate = useNavigate();
	return (
		<>
			<GameTitle title='letter round' />
			<StyledLetterRoundHome>
				{/* <div className='how-to-play hide'>
					<p>
						You must choose how many vowels and consonants you would like to
						make up nine randomly chosen letters.
					</p>
					<p>There must be at least three vowels and four consonants.</p>
					<p>
						You then have 30 seconds to find the longest word that they can make
						out of these letters.
					</p>
				</div> */}
				<button
					className='btn start-btn'
					onClick={() => {
						navigate('/selectletters');
					}}
				>
					play
				</button>
				<Button url='/letterround/rules' name='rules' />
			</StyledLetterRoundHome>
		</>
	);
};

const StyledLetterRoundHome = styled.section`
	justify-content: space-between;
	align-items: center;
	flex-direction: column;
	word-wrap: wrap;
	display: flex;
	flex: 1;
	row-gap: 1rem;
	/* .how-to-play {
		padding: 0 2rem;
		h2 {
			letter-spacing: 2px;
			text-align: center;
			font-size: 2.5rem;
			font-weight: 100;
		}
		ul {
			list-style: none;
			display: flex;
			flex-direction: column;
			row-gap: 1rem;
		}
		p {
			font-family: 'Montserrat', sans-serif;
			font-weight: 100;
			font-size: 1.6rem;
			pointer-events: none;
			text-align: center;
			margin-bottom: 1rem;
		}
	} */
	.start-btn {
		height: 100%;
		width: 200px;
		border-radius: 5px;
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

export default LetterRoundHome;
