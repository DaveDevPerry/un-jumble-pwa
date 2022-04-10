import React from 'react';
import styled from 'styled-components';

const UserAllWordsDisplay = ({ allLetterRoundUserWords }) => {
	console.log(allLetterRoundUserWords, 'alluserwords');
	// console.log(
	// 	allLetterRoundUserWords.sort(function (a, b) {
	// 		return parseFloat(b.length) - parseFloat(a.length);
	// 	}),
	// 	'sorted'
	// );
	console.log(allLetterRoundUserWords, 'alluserwords');
	return (
		<StyledWordsDisplay>
			{/* {allLetterRoundUserWords} */}
			<ul>
				{allLetterRoundUserWords &&
					allLetterRoundUserWords
						// .sort(function (a, b) {
						// 	return parseFloat(b.length) - parseFloat(a.length);
						// })
						.map((userWord, index) => {
							return (
								<li key={userWord.word + index}>
									<p className={userWord.isCorrect === false ? 'strike' : ''}>
										{userWord.word}
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
	background-color: ${({ theme }) => theme.syntax};
	padding: 1rem 2rem;
	border-radius: 10px;
	width: 100%;
	flex: 1;
	border: 6px solid ${({ theme }) => theme.bgChosen};
	ul {
		list-style: none;
		font-size: 3rem;
		display: grid;
		grid-template-columns: repeat(3, auto);
		grid-template-rows: repeat(4, auto);
		grid-auto-flow: row;
		li {
			display: flex;
			justify-content: center;
			p {
				font-size: 1.8rem;
				text-transform: capitalize;
				color: black;
				&.strike {
					text-decoration: line-through;
					color: #9e9a9a;
					color: #ca0404;
				}
			}
		}
	}
`;

export default UserAllWordsDisplay;
