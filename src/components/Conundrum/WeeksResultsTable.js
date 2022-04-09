import React from 'react';
import styled from 'styled-components';
import { GiCheckMark, GiCrossMark } from 'react-icons/gi';

const WeeksResultsTable = ({ currentWord }) => {
	// NEEDS TO MAP FROM LAST 6 DAYS OF RESULTS
	return (
		<StyledWeeksResultsTable>
			<table>
				<caption>Previous results</caption>
				<tbody>
					<tr>
						<td>12/06</td>
						<td>
							<StyledLetterOutput>
								<div className='results-card'>
									<div className='results-card-front results-card-letter'>
										M
									</div>
								</div>
								<div className='results-card'>
									<div className='results-card-front results-card-letter'>
										M
									</div>
								</div>
								<div className='results-card'>
									<div className='results-card-front results-card-letter'>
										M
									</div>
								</div>
								<div className='results-card'>
									<div className='results-card-front results-card-letter'>
										M
									</div>
								</div>
							</StyledLetterOutput>
						</td>
						<td>
							<GiCrossMark size='22px' color='#8a0202' />
						</td>
					</tr>
					<tr>
						<td>12/06</td>
						<td>
							<StyledLetterOutput>
								<div className='results-card'>
									<div className='results-card-front results-card-letter'>
										M
									</div>
								</div>
								<div className='results-card'>
									<div className='results-card-front results-card-letter'>
										M
									</div>
								</div>
								<div className='results-card'>
									<div className='results-card-front results-card-letter'>
										M
									</div>
								</div>
								<div className='results-card'>
									<div className='results-card-front results-card-letter'>
										M
									</div>
								</div>
							</StyledLetterOutput>
						</td>
						<td>
							<GiCheckMark size='22px' color='#004600' />
						</td>
					</tr>
					<tr>
						<td>12/06</td>
						<td>
							<StyledLetterOutput>
								<div className='results-card'>
									<div className='results-card-front results-card-letter'>
										M
									</div>
								</div>
								<div className='results-card'>
									<div className='results-card-front results-card-letter'>
										M
									</div>
								</div>
								<div className='results-card'>
									<div className='results-card-front results-card-letter'>
										M
									</div>
								</div>
								<div className='results-card'>
									<div className='results-card-front results-card-letter'>
										M
									</div>
								</div>
							</StyledLetterOutput>
						</td>
						<td>
							<GiCheckMark size='22px' color='#004600' />
						</td>
					</tr>
					<tr>
						<td>12/06</td>
						<td>
							<StyledLetterOutput>
								<div className='results-card'>
									<div className='results-card-front results-card-letter'>
										M
									</div>
								</div>
								<div className='results-card'>
									<div className='results-card-front results-card-letter'>
										M
									</div>
								</div>
								<div className='results-card'>
									<div className='results-card-front results-card-letter'>
										M
									</div>
								</div>
								<div className='results-card'>
									<div className='results-card-front results-card-letter'>
										M
									</div>
								</div>
							</StyledLetterOutput>
						</td>
						<td>
							<GiCrossMark size='22px' color='#8a0202' />
						</td>
					</tr>
					<tr>
						<td>12/06</td>
						<td>
							<StyledLetterOutput>
								<div className='results-card'>
									<div className='results-card-front results-card-letter'>
										M
									</div>
								</div>
								<div className='results-card'>
									<div className='results-card-front results-card-letter'>
										M
									</div>
								</div>
								<div className='results-card'>
									<div className='results-card-front results-card-letter'>
										M
									</div>
								</div>
								<div className='results-card'>
									<div className='results-card-front results-card-letter'>
										M
									</div>
								</div>
							</StyledLetterOutput>
						</td>
						<td>
							<GiCheckMark size='22px' color='#004600' />
						</td>
					</tr>
					<tr>
						<td>12/06</td>
						<td>
							<StyledLetterOutput>
								<div className='results-card'>
									<div className='results-card-front results-card-letter'>
										M
									</div>
								</div>
								<div className='results-card'>
									<div className='results-card-front results-card-letter'>
										M
									</div>
								</div>
								<div className='results-card'>
									<div className='results-card-front results-card-letter'>
										M
									</div>
								</div>
								<div className='results-card'>
									<div className='results-card-front results-card-letter'>
										M
									</div>
								</div>
							</StyledLetterOutput>
						</td>
						<td>
							<GiCheckMark size='22px' color='#004600' />
						</td>
					</tr>
				</tbody>
			</table>
		</StyledWeeksResultsTable>
		// <StyledWordsDisplay>
		// 	<p className='yesterday-date'>12/04/2022</p>
		// 	<StyledLetterOutput>
		// 		<div className='results-card'>
		// 			<div className='results-card-front results-card-letter'>M</div>
		// 		</div>
		// 		<div className='results-card'>
		// 			<div className='results-card-front results-card-letter'>M</div>
		// 		</div>
		// 		<div className='results-card'>
		// 			<div className='results-card-front results-card-letter'>M</div>
		// 		</div>
		// 		<div className='results-card'>
		// 			<div className='results-card-front results-card-letter'>M</div>
		// 		</div>
		// 	</StyledLetterOutput>
		// 	<span>
		// 		<GiCheckMark size='22px' color='#004600' />
		// 	</span>
		// </StyledWordsDisplay>
	);
};
const StyledWeeksResultsTable = styled.section`
	padding: 1rem;
	background-color: ${({ theme }) => theme.bgTile};
	border-radius: 5px;
	display: flex;
	justify-content: center;
	table {
		/* width: 100%; */
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
	justify-content: center;
	grid-template-columns: repeat(4, 1fr);
	grid-template-rows: repeat(1, 3rem);
	border-radius: 5px;
	/* perspective: 500px; */
	gap: 0.1rem;
	.results-card {
		position: relative;
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
		font-size: 2rem;
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
