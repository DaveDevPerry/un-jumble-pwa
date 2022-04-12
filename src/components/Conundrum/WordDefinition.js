import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

function WordDefinition({ conundrum, APIKey }) {
	const [wordData, setWordData] = useState(null);

	useEffect(() => {
		const options = {
			method: 'GET',
			url: 'https://twinword-word-graph-dictionary.p.rapidapi.com/definition/',
			params: { entry: conundrum },
			headers: {
				'X-RapidAPI-Host': 'twinword-word-graph-dictionary.p.rapidapi.com',
				'X-RapidAPI-Key': APIKey,
			},
		};

		axios
			.request(options)
			.then(function (response) {
				console.log(response.data.meaning);

				setTimeout(() => {
					setWordData(response.data.meaning);
					document
						.querySelector('.results-outcome-container')
						.classList.add('appear');
				}, 700);
			})
			.catch(function (error) {
				console.error(error);
			});
	}, [conundrum, APIKey]);
	return (
		<StyledWordDefinition className='word-description-wrapper'>
			{wordData === undefined ? (
				<p>Descriptions are not available for this word at present</p>
			) : (
				<table>
					<tbody>
						{wordData && wordData.noun ? (
							<tr>
								<td>
									<p>{wordData.noun.substring(1, 4)}</p>
								</td>
								<td>
									<p className='word-description'>
										{wordData.noun.substring(6, wordData.noun.length)}
									</p>
								</td>
							</tr>
						) : (
							''
						)}
						{wordData && wordData.verb ? (
							<tr>
								<td>
									<p>{wordData.verb.substring(1, 4)}</p>
								</td>
								<td>
									<p className='word-description'>
										{wordData.verb.substring(6, wordData.verb.length)}
									</p>
								</td>
							</tr>
						) : (
							''
						)}
						{wordData && wordData.adverb ? (
							<tr>
								<td>
									<p>{wordData.adverb.substring(1, 4)}</p>
								</td>
								<td>
									<p className='word-description'>
										{wordData.adverb.substring(6, wordData.adverb.length)}
									</p>
								</td>
							</tr>
						) : (
							''
						)}
						{wordData && wordData.adjective ? (
							<tr>
								<td>
									<p>{wordData.adjective.substring(1, 4)}</p>
								</td>
								<td>
									<p className='word-description'>
										{wordData.adjective.substring(6, wordData.adjective.length)}
									</p>
								</td>
							</tr>
						) : (
							''
						)}
					</tbody>
					{/* {wordData && wordData.noun ? <li>{wordData && wordData.noun}</li> : ''}
				{wordData && wordData.verb ? <li>{wordData && wordData.verb}</li> : ''}
				{wordData && wordData.adverb ? (
					<li>{wordData && wordData.adverb}</li>
				) : (
					''
				)}
				{wordData && wordData.adjective ? (
					<li>{wordData && wordData.adjective}</li>
				) : (
					''
				)} */}
				</table>
			)}
		</StyledWordDefinition>
		// <StyledWordDefinition>
		// 	<ul>
		// 		{wordData && wordData.noun ? <li>{wordData && wordData.noun}</li> : ''}
		// 		{wordData && wordData.verb ? <li>{wordData && wordData.verb}</li> : ''}
		// 		{wordData && wordData.adverb ? (
		// 			<li>{wordData && wordData.adverb}</li>
		// 		) : (
		// 			''
		// 		)}
		// 		{wordData && wordData.adjective ? (
		// 			<li>{wordData && wordData.adjective}</li>
		// 		) : (
		// 			''
		// 		)}

		// 	</ul>
		// </StyledWordDefinition>
		// <StyledWordDefinition>{wordData && wordData.noun}</StyledWordDefinition>
	);
}

const StyledWordDefinition = styled.div`
	/* opacity: 0; */
	/* overflow: hidden; */
	p {
		text-align: center;
	}
	table {
		/* border: 1px solid; */
		font-family: 'Montserrat', cursive;
		font-size: 1.2rem;
		tr {
			display: flex;
			align-items: flex-start;
			column-gap: 0.5rem;

			td:first-child {
				p {
					font-weight: 800;
					text-transform: uppercase;
					/* color: ${({ theme }) => theme.bgChosen}; */
					background-color: ${({ theme }) => theme.bgChosen};
					border-radius: 3px;
					padding: 0.2rem 0.5rem;
				}
			}
			td:last-child {
				padding-bottom: 0.5rem;
				border-bottom: 2px solid ${({ theme }) => theme.bgChosen};
				p {
					text-wrap: balance;
					/* font-size: 1.2rem; */
				}
			}
			&:last-child {
				td:last-child {
					border-bottom: 0px solid ${({ theme }) => theme.bgChosen};
				}
			}
			.word-description {
			}
		}
	}
	/* &.appear {
		opacity: 1;
	} */
`;
// const StyledWordDefinition = styled.div`
// 	ul {
// 		list-style: none;
// 		font-family: 'Montserrat', cursive;
// 		font-size: 1.2rem;
// 		display: flex;
// 		flex-direction: column;
// 		row-gap: 0.5rem;
// 	}
// `;
// const StyledWordDefinition = styled.p`
// 	text-align: center;
// 	font-size: 1.4rem;
// `;

export default WordDefinition;
