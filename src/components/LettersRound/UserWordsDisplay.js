import React from 'react';
import styled from 'styled-components';

const UserAllWordsDisplay = ({
	currentLetterRoundWord,
	allLetterRoundUserWords,
}) => {
	console.log(allLetterRoundUserWords, 'alluserwords');
	console.log(
		allLetterRoundUserWords.sort(function (a, b) {
			return parseFloat(b.length) - parseFloat(a.length);
		}),
		'sorted'
	);
	console.log(allLetterRoundUserWords, 'alluserwords');
	return (
		<StyledWordsDisplay>
			{/* {allLetterRoundUserWords} */}
			<ul>
				{allLetterRoundUserWords
					.sort(function (a, b) {
						return parseFloat(b.length) - parseFloat(a.length);
					})
					.map((word, index) => {
						return (
							<li key={word + index}>
								<p>
									{word.word}
									<span>{word.length}</span>
								</p>
							</li>
						);
					})}
			</ul>
		</StyledWordsDisplay>
		// <StyledWordsDisplay>
		// 	<ul>
		// 		{allLetterRoundUserWords
		// 			.sort(function (a, b) {
		// 				return b[1] - a[1];
		// 			})
		// 			.map((word, index) => {
		// 				return (
		// 					<li key={index}>
		// 						<p>
		// 							<span>{word[1]}</span>
		// 							{word[0]}
		// 						</p>
		// 					</li>
		// 				);
		// 			})}
		// 	</ul>
		// </StyledWordsDisplay>
	);
};
const StyledWordsDisplay = styled.section`
	background-color: ${({ theme }) => theme.bgTile};
	padding: 1rem 2rem;
	border-radius: 10px;
	width: 100%;
	ul {
		list-style: none;
		font-size: 3rem;
		display: grid;
		grid-template-columns: repeat(2, auto);
		grid-template-rows: repeat(4, auto);
		grid-auto-flow: column;
		li {
			display: flex;
			justify-content: flex-start;
			p {
				font-size: 2.5rem;
				span {
					color: ${({ theme }) => theme.bgChosen};
					padding-left: 1rem;
					font-size: 3rem;
					font-weight: bolder;
				}
			}
		}
	}
`;

export default UserAllWordsDisplay;
