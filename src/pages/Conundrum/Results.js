import React, { useEffect } from 'react';
import styled from 'styled-components';
import ResultsFooter from '../../components/Global/ResultsFooter';
import WordDefinition from '../../components/Conundrum/WordDefinition';
import { FaTrophy } from 'react-icons/fa';
import NewConundrumForm from '../../components/Conundrum/NewConundrumForm';
import ConundrumContextProvider from '../../contexts/ConundrumContext';

const ConundrumResults = ({
	conundrum,
	isNextDayCountdownActive,
	APIKey,
	conundrumGameMode,
	isConundrumCorrect,
	setPageTitle,
	setMessage,
}) => {
	useEffect(() => {
		console.log('conundrum results');
		setPageTitle(`results`);
		setTimeout(() => {
			const gameLetterTiles = document.querySelectorAll('.results-card');
			gameLetterTiles.forEach((tile) => {
				tile.classList.add('visible');
			});
		}, 1000);
	}, [setPageTitle]);

	const shareMobile = () => {
		const conundrumLength = conundrum.length;
		window.open(
			`whatsapp://send?text=I just got the ${conundrumLength} letter conundrum of the day!`
		);
	};
	return (
		<>
			<ConundrumContextProvider>
				<StyledConundrumResults>
					<StyledLetterOutput>
						{conundrum.split('').map((letter, index) => {
							return (
								<div key={index} className='results-card'>
									<div className='results-card-back results-card-letter'>
										&nbsp;
									</div>
									<div className='results-card-front results-card-letter'>
										{letter}
									</div>
								</div>
							);
						})}
					</StyledLetterOutput>
					<WordDefinition conundrum={conundrum} APIKey={APIKey} />
					<div className='results-outcome-container'>
						<div className='conundrum-points-container'>
							<FaTrophy id='trophy' />
							<h2 id='share-conundrum-points'>1</h2>
						</div>
						<p className='conundrum-user-result'>CONGRATULATIONS!</p>
					</div>
					<ResultsFooter
						isNextDayCountdownActive={isNextDayCountdownActive}
						shareMobile={shareMobile}
					/>
				</StyledConundrumResults>
				<NewConundrumForm
					conundrum={conundrum}
					conundrumGameMode={conundrumGameMode}
					isConundrumCorrect={isConundrumCorrect}
					setMessage={setMessage}
					url='/'
				/>
			</ConundrumContextProvider>
		</>
	);
};
const StyledConundrumResults = styled.section`
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	background-color: ${({ theme }) => theme.bgTile};
	border-radius: 5px;
	padding: 1rem;
	transition: all 300ms ease-in;
	flex: 1;
	row-gap: 1rem;
	h2 {
		font-family: 'Bebas Neue', cursive;
		display: flex;
		align-items: center;
		align-self: center;
		font-size: 2.5rem;
		font-weight: 100;
	}
	.conundrum-stats-container {
		display: flex;
		justify-content: space-evenly;
		align-items: flex-start;
		.stat-wrapper {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: flex-start;
			flex-wrap: wrap;
			flex: 1;
			p {
				font-size: 2rem;
				font-weight: 800;
				line-height: 1;
				color: ${({ theme }) => theme.bgChosen};
				&:last-child {
					font-family: 'Montserrat', sans-serif;
					text-transform: capitalize;
					font-size: 1.2rem;
					font-weight: 400;
					text-align: center;
					color: ${({ theme }) => theme.syntax};
				}
			}
		}
	}
	.conundrum-level-stats-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: repeat(1, 1fr);
		grid-gap: 1rem;
		.level-stat-wrapper {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: flex-start;
			flex-wrap: wrap;
			flex: 1;
			p {
				font-size: 2rem;
				font-weight: 800;
				line-height: 1;
				color: ${({ theme }) => theme.bgChosen};
				&:last-child {
					font-family: 'Montserrat', sans-serif;
					text-transform: capitalize;
					font-size: 1.2rem;
					font-weight: 400;
					text-align: center;
					color: ${({ theme }) => theme.syntax};
				}
			}
		}
	}
	.results-outcome-container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		flex: 1;
		row-gap: 0.5rem;
		opacity: 0;
		.conundrum-points-container {
			display: flex;
			flex-direction: column;
			align-items: center;
			position: relative;
			#trophy {
				color: ${({ theme }) => theme.textTarget};
				height: 6rem;
				width: 6rem;
			}
			#share-conundrum-points {
				color: ${({ theme }) => theme.bgChosen};
				font-size: 3rem;
				font-weight: 400;
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -70%);
			}
		}
		.conundrum-user-result {
			font-size: 3rem;
			border-top: 2px solid ${({ theme }) => theme.bgChosen};
			border-bottom: 2px solid ${({ theme }) => theme.bgChosen};
			font-family: 'Bebas Neue', cursive;
			letter-spacing: 1px;
			align-self: center;
			display: inline-block;
			padding: 0 1rem;
		}
		&.appear {
			opacity: 1;
		}
	}
`;
const StyledLetterOutput = styled.div`
	display: grid;
	justify-content: center;
	grid-template-columns: repeat(var(--letter-count), 1fr);
	grid-template-rows: repeat(1, 3rem);
	border-radius: 5px;
	perspective: 500px;
	gap: 0.3rem;
	.results-card {
		position: relative;
	}
	.results-card-letter {
		position: absolute;
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		overflow: hidden;
		backface-visibility: hidden;
		transition: transform 500ms ease-in-out;
	}
	.results-card.visible .results-card-back {
		transform: rotateY(-180deg);
	}
	.results-card.visible .results-card-front {
		transform: rotateY(0);
	}
	.results-card-back {
		font-size: 3rem;
		outline: none;
		background-color: ${({ theme }) => theme.bgTile};
		display: grid;
		place-content: center;
		border-radius: 5px;
	}
	.results-card-front {
		font-size: 2.2rem;
		outline: none;
		display: grid;
		place-content: center;
		border-radius: 5px;
		transform: rotateY(180deg);
		background-color: ${({ theme }) => theme.bgChosen};
		color: ${({ theme }) => theme.syntax};
	}
`;
export default ConundrumResults;
