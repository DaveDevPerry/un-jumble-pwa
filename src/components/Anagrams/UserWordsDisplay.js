import React from 'react';
import styled from 'styled-components';

const UserWordsDisplay = ({ allAnagramUserWords }) => {
	return (
		<StyledWordsDisplay>
			{/* <p className='update-current-word-elem'>{currentAnagramWord}</p> */}
			<ul>
				{allAnagramUserWords.map((userWord, index) => {
					return (
						<li key={userWord.word + index}>
							<p className={userWord.isCorrect === false ? 'strike' : ''}>
								{userWord.word}
							</p>
						</li>
					);
				})}
			</ul>
			{/* <ul>
				{allAnagramUserWords
					.sort(function (a, b) {
						return parseFloat(b.length) - parseFloat(a.length);
					})
					.map((word, index) => {
						return (
							<li key={word + index}>
								<p>
									{word}
								</p>
							</li>
						);
					})}
			</ul> */}
		</StyledWordsDisplay>
	);
};
const StyledWordsDisplay = styled.section`
	/* background-color: ${({ theme }) => theme.bgTile}; */
	background-color: ${({ theme }) => theme.syntax};
	padding: 1rem 2rem;
	border-radius: 10px;
	/* display: flex; */
	width: 100%;
	flex: 1;
	border: 6px solid ${({ theme }) => theme.bgChosen};
	ul {
		list-style: none;
		font-size: 3rem;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: repeat(4, auto);
		grid-auto-flow: row;
		li {
			display: flex;
			justify-content: flex-start;
			p {
				font-size: 1.8rem;
				text-transform: uppercase;
				color: black;
				&.strike {
					text-decoration: line-through;
					color: #9e9a9a;
					color: ${({ theme }) => theme.red};
				}
			}
		}
	}
`;

export default UserWordsDisplay;
