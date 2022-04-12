// import React from 'react';
import styled from 'styled-components';
import { GiCheckMark, GiCrossMark } from 'react-icons/gi';

import React, { useContext } from 'react';

import { ConundrumContext } from '../../contexts/ConundrumContext';

const WeeksResultsTable = ({ currentWord, conundrumGameMode }) => {
	const { conundrums } = useContext(ConundrumContext);
	// NEEDS TO MAP FROM LAST 6 DAYS OF RESULTS
	return conundrums.length ? (
		<StyledWeeksResultsTable>
			<table>
				<caption>Previous results</caption>
				<tbody>
					{/* sort by date, then filter out last 6 */}
					{conundrums
						// FILTER BY LEVEL
						.filter((item) => {
							return item.level === conundrumGameMode;
						})
						// SORT BY DATE
						.sort((a, b) => {
							return b.date > a.date;
						})
						// return last 6
						.slice(-6)
						// .filter((item) => {
						// 	return item
						// })
						.map((conundrum, index) => {
							return (
								<tr key={index}>
									<td>{conundrum.date.substring(0, 5)}</td>
									<td>
										<StyledLetterOutput>
											{conundrum.wordOfTheDay.split('').map((letter, index) => {
												return (
													<div key={letter + index} className='results-card'>
														<div className='results-card-front results-card-letter'>
															{letter}
														</div>
													</div>
												);
											})}
										</StyledLetterOutput>
									</td>
									<td>
										{conundrum.isCorrect === true ? (
											<GiCheckMark size='18px' color='#004600' />
										) : (
											<GiCrossMark size='18px' color='#8a0202' />
										)}
									</td>
								</tr>
							);
						})}
					{/* {conundrums.map((conundrum, index) => {
						return (
							<tr key={index}>
								<td>{conundrum.date}</td>
								<td>
									<StyledLetterOutput>
										{conundrum.wordOfTheDay.split('').map((letter, index) => {
											return (
												<div key={letter + index} className='results-card'>
													<div className='results-card-front results-card-letter'>
														{letter}
													</div>
												</div>
											);
										})}
									</StyledLetterOutput>
								</td>
								<td>
									{conundrum.isCorrect === true ? (
										<GiCheckMark size='18px' color='#004600' />
									) : (
										<GiCrossMark size='18px' color='#8a0202' />
									)}
								</td>
							</tr>
						);
					})} */}
				</tbody>
			</table>
		</StyledWeeksResultsTable>
	) : (
		<StyledWeeksResultsTable>
			<p>no player history data yet</p>
		</StyledWeeksResultsTable>
	);
};
const StyledWeeksResultsTable = styled.section`
	padding: 1rem;
	background-color: ${({ theme }) => theme.bgTile};
	border-radius: 5px;
	display: flex;
	justify-content: center;
	/* flex: 1; */
	table {
		width: 100%;
		/* border-spacing: 2rem; */

		/* border: 1px solid white; */
		/* border-collapse: separate; */
		/* border-spacing: 0px 30px; */
		caption {
			font-size: 2.2rem;
			/* margin-top: 0.5rem; */
			margin-bottom: 0.2rem;
		}
		tbody {
			tr {
				display: flex;
				justify-content: space-between;
				align-items: center;
				column-gap: 1rem;
				/* border-spacing: 0px 30px; */
				padding: 0.2rem 0rem;
				/* border-collapse: separate;
				border-spacing: 0px 15px; */
				td {
					/* border-spacing: 30px; */
					/* align-self: center; */
					/* font-weight: 100; */
					&:nth-child(2) {
						flex: 1;
					}
				}
			}
		}
	}
`;
// const StyledWordsDisplay = styled.section`
// 	background-color: ${({ theme }) => theme.bgTile};
// 	padding: 1rem 2rem;
// 	border-radius: 5px;
// 	width: 100%;
// 	display: flex;
// 	justify-content: center;
// 	align-items: center;
// 	column-gap: 1rem;
// 	/* flex: 1; */
// 	/* border: 6px solid ${({ theme }) => theme.bgChosen}; */
// 	.yesterday-date {
// 		font-size: 2.2rem;
// 		text-transform: uppercase;
// 		/* font-family: 'Bebas Neue', cursive; */
// 		/* letter-spacing: 2px; */
// 		color: white;
// 	}

// 	/* span {
// 		margin-left: 2rem;
// 	} */
// `;
const StyledLetterOutput = styled.div`
	display: grid;
	/* justify-content: center; */
	grid-template-columns: repeat(var(--letter-count), 1fr);
	grid-template-rows: repeat(1, auto);
	border-radius: 5px;
	/* perspective: 500px; */
	gap: 0.1rem;
	/* width: 100%; */
	/* flex: 1; */
	.results-card {
		position: relative;
		/* flex: 1; */
		/* display: grid;
		place-content: center; */
	
	.results-card-letter {
		/* position: absolute; */
		/* width: 100%; */
		/* height: 100%; */
		display: flex;
		justify-content: center;
		align-items: center;
		overflow: hidden;
		flex: 1;
		/* backface-visibility: hidden; */
		/* transition: transform 500ms ease-in-out; */
	/* } */
	/* .results-card.visible .results-card-back {
		transform: rotateY(-180deg);
	} */
	/* .results-card.visible .results-card-front {
		transform: rotateY(0);
	} */

	/* .results-card-back {
		font-size: 3rem;
		outline: none;
		background-color: ${({ theme }) => theme.bgTile};

		display: grid;
		place-content: center;
		border-radius: 5px;
	} */
	/* .results-card-front { */
	padding: 0.2rem 1rem;
		font-size: 1.6rem;
		outline: none;
		display: grid;
		place-content: center;
		border-radius: 5px;
		/* transform: rotateY(180deg); */
		background-color: ${({ theme }) => theme.bgChosen};
		color: ${({ theme }) => theme.syntax};
	/* } */
}
`;

export default WeeksResultsTable;
