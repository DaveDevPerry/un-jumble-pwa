import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import GameTitle from '../../components/Global/GameTitle';
import Button from '../../components/Global/Button';
// import { Link } from 'react-router-dom';

const AnagramRoundHome = () => {
	useEffect(() => {
		console.log('anagram home render');
	}, []);
	let navigate = useNavigate();
	// let { username } = useParams();
	return (
		<>
			<GameTitle title='anagram round' />
			<StyledAnagramRoundHome>
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
				<Button url='/anagramround/rules' name='rules' />
			</StyledAnagramRoundHome>
		</>
	);
};

const StyledAnagramRoundHome = styled.section`
	justify-content: space-between;
	align-items: center;
	flex-direction: column;
	word-wrap: wrap;
	display: flex;
	flex: 1;
	row-gap: 1rem;
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

export default AnagramRoundHome;
