import React from 'react';
import styled from 'styled-components';
import { AiOutlineSwap } from 'react-icons/ai';

const UserWordResultsDisplay = ({ allAnagramUserWords }) => {
	const handleFlipWordStatusList = (e) => {
		e.preventDefault();
		document.querySelectorAll('.status').forEach((btn) => {
			btn.classList.toggle('visible');
		});
	};
	return (
		<StyledUserWordResultsDisplay>
			<div className='word-status-btn-container'>
				<button className='flip-btn' onClick={handleFlipWordStatusList}>
					<AiOutlineSwap size='30px' />
				</button>
			</div>
			<div className='word-status-list-container'>
				<div className='status small-btn'>
					<div className='word-status-back word-status'>
						<div className='results-title-wrapper'>
							<p className='results-title'>correct</p>
							<p className='results-word-count'>
								x{' '}
								{
									allAnagramUserWords.filter((wordStatus) => {
										return wordStatus.isCorrect === true;
									}).length
								}
							</p>
						</div>
						<ul className='anagram-word-list'>
							{allAnagramUserWords
								.filter((wordStatus) => {
									return wordStatus.isCorrect === true;
								})
								.map((userWord, index) => {
									return (
										<li key={userWord + index}>
											<p
												className={userWord.isCorrect === false ? 'strike' : ''}
											>
												{/* {allAnagramUserWords[index - 1].word} */}
												{userWord.word}
											</p>
										</li>
									);
								})}
						</ul>
					</div>
					<div className='word-status-front word-status'>
						<div className='results-title-wrapper'>
							<p className='results-title'>incorrect</p>
							<p className='results-word-count'>
								x{' '}
								{
									allAnagramUserWords.filter((wordStatus) => {
										return wordStatus.isCorrect === false;
									}).length
								}
							</p>
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
		border-radius: 5px;
	}
	.status {
		position: relative;
		flex: 1;
		&.small-btn {
			&:last-child {
				grid-column: span 2;
			}
		}
	}
	.word-status {
		position: absolute;
		width: 100%;
		display: flex;
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
				&.right {
					text-align: right;
				}
			}
			.results-word-count {
				font-size: 1.8rem;
				font-family: 'Bebas Neue', cursive;
				&.right {
					text-align: right;
				}
			}
		}
		ul {
			list-style: none;
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			grid-template-rows: repeat(8, auto);
			grid-auto-flow: row;
			li {
				display: flex;
				justify-content: center;
				p {
					font-size: 1.2rem;
					text-transform: uppercase;
					color: ${({ theme }) => theme.syntax};
					font-weight: 800;
				}

				/* &:first-child, */
				/* &:nth-child(1n + 3) {
					justify-content: flex-start;
					margin-left: 1rem;
				}
				&:nth-child(2n + 3) {
					justify-content: center;
					margin-left: 1rem;
				}
				&:nth-child(3n + 3) {
					justify-content: flex-end;
					margin-right: 1rem;
				} */
			}
		}
	}
	.status.visible .word-status-back {
		transform: rotateY(-180deg);
	}
	.status.visible .word-status-front {
		transform: rotateY(0);
	}
	.word-status-back {
		font-size: 2rem;
		outline: none;
		background-color: ${({ theme }) => theme.bgTileInset};
		color: ${({ theme }) => theme.syntax};
		display: grid;
		border-radius: 5px;
	}
	.word-status-front {
		font-size: 3rem;
		outline: none;
		background-color: ${({ theme }) => theme.bgTileInset};
		display: grid;
		border-radius: 5px;
		transform: rotateY(180deg);
		color: ${({ theme }) => theme.syntax};
		cursor: pointer;
	}
`;

export default UserWordResultsDisplay;
