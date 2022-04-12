import React from 'react';
import styled from 'styled-components';

const UserWordsDisplay = ({ allAnagramUserWords }) => {
	return (
		<StyledWordsDisplay>
			<ul>
				{allAnagramUserWords.map((userWord, index) => {
					return (
						<li key={userWord.word + index}>
							<p className={userWord.isCorrect === false ? 'strike' : ''}>
								{userWord.word}
								{/* {allAnagramUserWords.length === 0
									? ''
									: allAnagramUserWords[index - 1].word} */}
							</p>
						</li>
					);
				})}
			</ul>
		</StyledWordsDisplay>
	);
};
const StyledWordsDisplay = styled.section`
	background-color: ${({ theme }) => theme.syntax};
	padding: 1rem 2rem;
	border-radius: 5px;
	width: 100%;
	flex: 1;
	/* border: 6px solid ${({ theme }) => theme.bgChosen}; */
	ul {
		list-style: none;
		font-size: 3rem;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: repeat(4, auto);
		grid-auto-flow: row;
		li {
			display: flex;
			justify-content: center;
			p {
				font-size: 1.8rem;
				text-transform: uppercase;
				color: black;
				font-weight: 800;
				&.strike {
					text-decoration: line-through;
					color: #9e9a9a;
					color: ${({ theme }) => theme.red};
				}
			}

			/* &:first-child, */
			/* &:nth-child(3n + 1) {
				justify-content: flex-start;
			}
			&:nth-child(2n + 3) {
				justify-content: center;
			}
			&:nth-child(3n) {
				justify-content: flex-end;
			} */
		}
	}
`;

export default UserWordsDisplay;
