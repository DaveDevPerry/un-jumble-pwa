import React, { useEffect } from 'react';
import styled from 'styled-components';
import ResultsFooter from '../../components/Global/ResultsFooter';
import UserWordResultsDisplay from '../../components/Anagrams/UserWordResultsDisplay';
import AnagramContextProvider from '../../contexts/AnagramContext';
import NewAnagramForm from '../../components/Anagrams/NewAnagramForm';

const AnagramRoundResults = ({
	isNextDayCountdownActive,
	allAnagramUserWords,
	setAllAnagramUserWords,
	setPageTitle,
	setMessage,
	anagramGameMode,
}) => {
	useEffect(() => {
		console.log('anagram results render');
		setPageTitle(`results`);
	}, [setPageTitle]);

	const shareMobile = () => {
		const gameType = 'anagram round';
		const gameScore = document.querySelector(
			'#share-anagram-points'
		).textContent;
		window.open(
			`whatsapp://send?text=I just scored ${gameScore} points on the ${gameType}.`
		);
	};

	return (
		<>
			<AnagramContextProvider>
				<StyledAnagramResults>
					<UserWordResultsDisplay allAnagramUserWords={allAnagramUserWords} />
					<div className='anagram-results-outcome-container'>
						<div className='points-container'>
							<h2 id='share-anagram-points'>
								{allAnagramUserWords.reduce((accumulator, object) => {
									return accumulator + object.score;
								}, 0)}
							</h2>
							<p>points</p>
						</div>
						{(() => {
							if (
								allAnagramUserWords.reduce((accumulator, object) => {
									return accumulator + object.score;
								}, 0) < 10
							) {
								return <p className='anagram-user-result'>NOT GREAT</p>;
							} else if (
								allAnagramUserWords.reduce((accumulator, object) => {
									return accumulator + object.score;
								}, 0) > 10
							) {
								return <p className='anagram-user-result'>GOOD GAME</p>;
							} else if (
								allAnagramUserWords.reduce((accumulator, object) => {
									return accumulator + object.score;
								}, 0) > 20
							) {
								return <p className='anagram-user-result'>EXCELLENT!</p>;
							}
						})()}
					</div>
					<ResultsFooter
						isNextDayCountdownActive={isNextDayCountdownActive}
						shareMobile={shareMobile}
					/>
				</StyledAnagramResults>
				<NewAnagramForm
					timeLimit='120'
					setMessage={setMessage}
					allAnagramUserWords={allAnagramUserWords}
					anagramGameMode={anagramGameMode}
					setAllAnagramUserWords={setAllAnagramUserWords}
				/>
			</AnagramContextProvider>
		</>
	);
};
const StyledAnagramResults = styled.section`
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	background-color: ${({ theme }) => theme.bgTile};
	border-radius: 5px;
	padding: 1rem;
	transition: all 300ms ease-in;
	flex: 1;
	row-gap: 1rem;
	.anagram-results-outcome-container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		flex: 1;
		row-gap: 0.5rem;
		.points-container {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			h2 {
				color: ${({ theme }) => theme.bgChosen};
				font-size: 3rem;
				line-height: 0.7;
				font-weight: 400;
			}
			p {
				font-size: 2rem;
			}
		}
		.anagram-user-result {
			font-size: 3rem;
			border-top: 2px solid ${({ theme }) => theme.bgChosen};
			border-bottom: 2px solid ${({ theme }) => theme.bgChosen};
			font-family: 'Bebas Neue', cursive;
			letter-spacing: 1px;
			align-self: center;
			display: inline-block;
			padding: 0 1rem;
		}
	}
`;

export default AnagramRoundResults;
