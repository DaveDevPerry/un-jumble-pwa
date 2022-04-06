import React from 'react';
import styled from 'styled-components';

const UserWordsDisplay = ({ allUserWords }) => {
	return (
		<StyledWordsDisplay>
			{/* <p className='update-current-word-elem'>{currentWord}</p> */}
			<ul>
				{allUserWords
					.sort(function (a, b) {
						return parseFloat(b.length) - parseFloat(a.length);
					})
					.map((word, index) => {
						return (
							<li key={word + index}>
								<p>
									{word}
									{/* <span>{word.length}</span> */}
								</p>
							</li>
						);
					})}
			</ul>
		</StyledWordsDisplay>
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
				font-size: 1.4rem;
				text-transform: capitalize;
			}
		}
	}
`;

export default UserWordsDisplay;
