import React from 'react';
import styled from 'styled-components';
import { AiOutlineSwap } from 'react-icons/ai';

const UserWordResultsDisplay = ({ allAnagramUserWords }) => {
	const handleFlipWordStatusList = (e) => {
		e.preventDefault();
		// document.querySelectorAll('.btn-timer').forEach((btn) => {
		// 	btn.classList.add('visible');
		// });
		document.querySelectorAll('.status').forEach((btn) => {
			btn.classList.toggle('visible');
			// btn.classList.add('visible');
		});
	};
	return (
		<StyledUserWordResultsDisplay>
			<div className='word-status-btn-container'>
				{/* <button
					className='btn-front btn-cta'
					onClick={handleFlipWordStatusList}
				>
					Correct
				</button> */}
				<button className='flip-btn' onClick={handleFlipWordStatusList}>
					<AiOutlineSwap size='30px' />
				</button>

				{/* <button
					className='btn-front btn-cta'
					onClick={handleFlipWordStatusList}
				>
					Incorrect
				</button> */}
			</div>
			<div className='word-status-list-container'>
				<div className='status small-btn'>
					<div className='word-status-back word-status'>
						{/* back */}
						<div className='results-title-wrapper'>
							<p className='results-title'>correct</p>
							<p className='results-word-count'>25</p>
						</div>

						<ul className='anagram-word-list'>
							{allAnagramUserWords
								.filter((wordStatus) => {
									return wordStatus.isCorrect === true;
								})
								// .sort(function (a, b) {
								// 	return b.word > a.word;
								// })
								.map((userWord, index) => {
									return (
										<li key={userWord + index}>
											<p
												className={userWord.isCorrect === false ? 'strike' : ''}
											>
												{userWord.word}
											</p>
										</li>
									);
								})}
						</ul>
					</div>
					<div className='word-status-front word-status'>
						{/* front */}
						<div className='results-title-wrapper'>
							<p className='results-word-count'>6</p>
							<p className='right results-title'>incorrect</p>
						</div>

						<ul className='anagram-word-list'>
							{allAnagramUserWords
								.filter((wordStatus) => {
									return wordStatus.isCorrect === false;
								})
								.map((userWord, index) => {
									return (
										<li key={userWord + index}>
											<p
												className={userWord.isCorrect === false ? 'strike' : ''}
											>
												{userWord.word}
											</p>
										</li>
									);
								})}
						</ul>
					</div>
				</div>
			</div>
		</StyledUserWordResultsDisplay>
	);
};
const StyledUserWordResultsDisplay = styled.div`
	/* border: 2px solid white; */
	/* flex: 1; */
	display: flex;
	flex-direction: column;
	row-gap: 0.5rem;
	justify-content: flex-start;
	flex: 1;
	.word-status-btn-container {
		display: flex;
		justify-content: center;
		align-items: center;
		column-gap: 1rem;
		.flip-btn {
			padding: 0.2rem 2rem;
			display: grid;
			place-content: center;
			height: unset;
		}
	}
	.word-status-list-container {
		perspective: 500px;
		display: flex;
		column-gap: 1rem;
		margin-bottom: 1rem;
		flex: 1;
		display: grid;
		grid-template-columns: repeat(1, 1fr);
		grid-template-rows: repeat(1, 1fr);
		/* border: 2px solid red; */
		border-radius: 5px;
		/* grid-template-rows:  */
	}
	.status {
		position: relative;
		/* height: 45px; */
		flex: 1;
		&.small-btn {
			/* height: 34px; */
			/* font-size: 2.5rem; */
			&:last-child {
				grid-column: span 2;
			}
		}
		/* &.small-btn > button {
			height: 34px;
			font-size: 2rem;
		} */
	}
	.word-status {
		position: absolute;
		width: 100%;
		/* height: 100%; */
		display: flex;
		/* justify-content: center; */
		align-items: center;
		overflow: hidden;
		backface-visibility: hidden;
		transition: transform 500ms ease-in-out;
		font-size: 3rem;
		border: none;
		outline: none;
		font-family: 'Bebas Neue', cursive;
		letter-spacing: 2px;
		padding: 1rem 0.5rem;
		.results-title-wrapper {
			display: flex;
			justify-content: space-between;
			align-items: center;
			border-bottom: 2px solid ${({ theme }) => theme.bgChosen};
			margin: 0 1rem 1rem 1rem;
			.results-title {
				font-size: 1.8rem;
				font-family: 'Bebas Neue', cursive;
				/* margin: 0 1rem 1rem 1rem; */
				/* text-decoration: underline; */
				/* border-bottom: 2px solid ${({ theme }) => theme.bgChosen}; */
				&.right {
					text-align: right;
					/* margin: 0 1rem 1rem 1rem; */
				}
			}
			.results-word-count {
				font-size: 1.8rem;
				font-family: 'Bebas Neue', cursive;
				&.right {
					text-align: right;
					/* margin: 0 1rem 1rem 1rem; */
				}
			}
		}

		ul {
			list-style: none;
			/* width: 100%; */
			/* font-size: 3rem; */
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			grid-template-rows: repeat(8, auto);
			grid-auto-flow: row;
			li {
				display: flex;
				justify-content: center;
				/* margin-left: 1rem; */
				/* flex: 1; */
				p {
					font-size: 1.2rem;
					text-transform: uppercase;
					color: ${({ theme }) => theme.syntax};
					font-weight: 800;
					/* &.strike {
						text-decoration: line-through;
						color: #9e9a9a;
						color: ${({ theme }) => theme.red};
					} */
				}
			}
		}
	}
	.status.visible .word-status-back {
		transform: rotateY(-180deg);
		/* background-color: pink; */
	}
	.status.visible .word-status-front {
		transform: rotateY(0);
	}
	/* .card.matched .card-value {
	animation: correct 1s linear forwards 500ms;
} */

	.word-status-back {
		/* background-color: ${({ theme }) => theme.bgChosen}; */
		font-size: 2rem;
		/* border: 1px solid white; */
		outline: none;
		background-color: ${({ theme }) => theme.bgTileInset};
		/* border: 2px solid blue; */
		color: ${({ theme }) => theme.syntax};
		display: grid;
		/* place-content: center; */
		border-radius: 5px;
		/* border-radius: 5px; */
	}
	.word-status-front {
		/* border: 1px solid white; */
		font-size: 3rem;
		/* border: 1px solid white; */
		outline: none;
		/* background-color: ${({ theme }) => theme.bgChosen}; */
		background-color: ${({ theme }) => theme.bgTileInset};
		/* color: ${({ theme }) => theme.bgChosen}; */
		display: grid;
		/* place-content: center; */
		border-radius: 5px;
		/* border-radius: 5px; */
		transform: rotateY(180deg);
		/* border: 2px solid blue; */
		/* background-color: ${({ theme }) => theme.green}; */
		color: ${({ theme }) => theme.syntax};
		cursor: pointer;
	}
`;

export default UserWordResultsDisplay;
