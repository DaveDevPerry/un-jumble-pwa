import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import UserSelectedLetters from '../../components/LettersRound/UserSelectLetters';
import LetterCards from '../../components/LettersRound/LetterCards';
// import GameTitle from '../../components/Global/GameTitle';

const LetterSelect = ({
	gameLetters,
	letterTypes,
	setLetterTypes,
	setGameLetters,
	setLetterRoundData,
	letterRoundData,
	setPageTitle,
	setMessage,
}) => {
	useEffect(() => {
		console.log('lr letter select render');
		// setGameLetters([])
		// setLetterTypes([])
		setMessage('lets go!');
		setPageTitle('letter round');
	}, [setPageTitle, setMessage]);
	let navigate = useNavigate();

	useEffect(() => {
		if (gameLetters.length !== 6) return;

		setMessage('only 3 more!');
	}, [setMessage, gameLetters]);

	// const updateLRPlayed = () => {
	// 	console.log(letterRoundData, 'lrd');

	// 	letterRoundData.played++;
	// 	// const newData =

	// 	const fromLs = JSON.parse(localStorage.getItem('countdown-v1'));
	// 	const wordObj = fromLs.find((Obj) => Obj.gameType === 'letter round');
	// 	wordObj.played++;
	// 	localStorage.setItem('countdown-v1', JSON.stringify(fromLs));
	// 	setLetterRoundData(letterRoundData);
	// 	console.log(letterRoundData, 'new lrd');
	// };
	// let { username } = useParams();
	return (
		<>
			{/* <GameTitle title='letter round' /> */}

			<StyledLetterSelect>
				<div className='letter-select-container'>
					<div className='letter-select-wrapper'>
						<div className='modal-header'>
							<p>select</p>
							<span>{9 - gameLetters.length}</span>
							<p>letters</p>
						</div>
						<UserSelectedLetters
							gameLetters={gameLetters}
							letterTypes={letterTypes}
						/>
						<LetterCards
							gameLetters={gameLetters}
							letterTypes={letterTypes}
							setGameLetters={setGameLetters}
							setLetterTypes={setLetterTypes}
						/>

						{/* <button
				className={
					gameLetters.length === 9 ? 'close-modal-btn show' : 'close-modal-btn'
				}
				onClick={() => {
					// updateLRPlayed();
					navigate('/letterround/game');
				}}
				>
				NEXT
			</button> */}
					</div>
				</div>
				<StyledCloseBtn
					className={
						gameLetters.length === 9
							? 'close-modal-btn show'
							: 'close-modal-btn'
					}
					onClick={() => {
						navigate('/letterround/game');
					}}
				>
					NEXT
				</StyledCloseBtn>
			</StyledLetterSelect>
		</>
	);
};

const StyledLetterSelect = styled.section`
	/* border: 2px solid red; */
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	.letter-select-container {
		/* border: 2px solid green; */
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		.letter-select-wrapper {
			background: ${({ theme }) => theme.bgTile};
			border-radius: 5px;
			padding: 1rem 1rem 2rem 1rem;
			justify-content: space-between;
			flex-direction: column;
			display: flex;
			row-gap: 1rem;

			/* transition: opacity 200ms ease-in; */
			.modal-header {
				font-family: 'Bebas Neue', cursive;
				display: flex;
				justify-content: center;
				align-items: center;
				column-gap: 1rem;
				p {
					font-size: 3rem;
					flex: 1;
					text-align: right;
					&:last-child {
						text-align: left;
					}
				}
				span {
					font-size: 6.5rem;
					color: ${({ theme }) => theme.bgChosen};
					padding: 0 0.5rem;
					font-weight: bold;
				}
			}
		}
	}
`;
const StyledCloseBtn = styled.button`
	width: 100%;
	align-self: center;
	font-size: 2.5rem;
	font-weight: bold;
	padding: 0.5rem 1rem;
	/* margin-top: 2rem; */
	/* margin-bottom: 1rem; */
	background-color: ${({ theme }) => theme.bgChosen};
	border: none;
	border-radius: 5px;
	color: ${({ theme }) => theme.syntax};
	opacity: 0;
	transition: opacity 200ms ease-in;
	&.show {
		display: block;
		opacity: 1;
		pointer-events: all;
	}
`;

export default LetterSelect;
