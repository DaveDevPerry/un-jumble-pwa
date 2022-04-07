import React, { useState } from 'react';
import styled from 'styled-components';
import { GiCheckMark } from 'react-icons/gi';

const LetterCards = ({
	gameLetters,
	setGameLetters,
	setLetterTypes,
	letterTypes,
}) => {
	// const [vowels, setVowels] = useState([]);
	const [consonants, setConsonants] = useState(
		[
			'N',
			'N',
			'N',
			'N',
			'N',
			'N',
			'R',
			'R',
			'R',
			'R',
			'R',
			'R',
			'T',
			'T',
			'T',
			'T',
			'T',
			'T',
			'L',
			'L',
			'L',
			'L',
			'S',
			'S',
			'S',
			'S',
			'D',
			'D',
			'D',
			'D',
			'G',
			'G',
			'G',
			'B',
			'B',
			'C',
			'C',
			'M',
			'M',
			'P',
			'P',
			'F',
			'F',
			'H',
			'H',
			'V',
			'V',
			'W',
			'W',
			'Y',
			'Y',
			'K',
			'J',
			'X',
			'Q',
			'Z',
		].sort(() => Math.random() - 0.5)
	);
	const [vowels, setVowels] = useState(
		[
			'E',
			'E',
			'E',
			'E',
			'E',
			'E',
			'E',
			'E',
			'E',
			'E',
			'E',
			'E',
			'A',
			'A',
			'A',
			'A',
			'A',
			'A',
			'A',
			'A',
			'A',
			'I',
			'I',
			'I',
			'I',
			'I',
			'I',
			'I',
			'I',
			'I',
			'O',
			'O',
			'O',
			'O',
			'O',
			'O',
			'O',
			'O',
			'U',
			'U',
			'U',
			'U',
		].sort(() => Math.random() - 0.5)
	);
	const [vowelCount, setVowelCount] = useState(1);
	const [consonantCount, setConsonantCount] = useState(1);

	// const [consonants, setConsonants] = useState([])
	const handlePickVowel = (e) => {
		console.log(vowels, setVowels);
		// const currentVowel = vowels.pop();
		e.preventDefault();
		if (vowelCount === 5) {
			document.querySelector('.vowel-btn').style.pointerEvents = 'none';
		}
		// if(vowelCount === 5){
		// 	document.querySelectorAll('.vowel-btn').forEach((card) => {
		// 		card.style.pointerEvents = 'none';
		// })
		setGameLetters([...gameLetters, vowels.pop()]);
		setLetterTypes([...letterTypes, 'V']);
		setVowelCount(vowelCount + 1);
		console.log(vowelCount, 'vowel count');
		// const count = letterTypes.reduce((accumulator, value) => {
		// 	return { ...accumulator, [value]: (accumulator[value] || 0) + 1 };
		// }, {});
		// console.log(count);
	};
	const handlePickConsonant = (e) => {
		console.log(consonants, setConsonants);
		e.preventDefault();
		if (consonantCount === 6) {
			document.querySelector('.consonant-btn').style.pointerEvents = 'none';
		}
		setGameLetters([...gameLetters, consonants.pop()]);
		setLetterTypes([...letterTypes, 'C']);
		setConsonantCount(consonantCount + 1);
	};

	if (gameLetters.length === 9) {
		document.querySelectorAll('.letter-btn').forEach((card) => {
			card.style.pointerEvents = 'none';
		});
	}
	return (
		<>
			<StyledLetterCards>
				<StyledVowelContainer className='vowel-container'>
					<button className='letter-btn vowel-btn' onClick={handlePickVowel}>
						VOWEL
					</button>
					<div className='count-update'>
						<p>Minimum</p>
						<p>
							{2 - vowelCount + 2 > 0 ? (
								2 - vowelCount + 2
							) : (
								<GiCheckMark size='30px' color='#004600' />
							)}
						</p>
						<p>required</p>
					</div>
				</StyledVowelContainer>
				<StyledConsonantContainer className='consonant-container'>
					<button
						className='letter-btn consonant-btn'
						onClick={handlePickConsonant}
					>
						Consonant
					</button>
					<div className='count-update'>
						<p>Minimum</p>
						<p>
							{3 - consonantCount + 2 > 0 ? (
								3 - consonantCount + 2
							) : (
								<GiCheckMark size='30px' color='#004600' />
							)}
						</p>
						<p>required</p>
					</div>
				</StyledConsonantContainer>
			</StyledLetterCards>
			{/* <StyledLetterCards>
				<StyledVowelContainer className='vowel-container'>
					<button className='letter-btn vowel-btn' onClick={handlePickVowel}>
						VOWEL
					</button>
				</StyledVowelContainer>
				<StyledConsonantContainer className='consonant-container'>
					<button
						className='letter-btn consonant-btn'
						onClick={handlePickConsonant}
					>
						Consonant
					</button>
				</StyledConsonantContainer>
			</StyledLetterCards> */}
			{/* <div className='letter-choice-msg-container'>
				{consonantCount < 7 && vowelCount < 6 ? (
					<p className='letter-choice-msg'>MIN 3 VOWELS & 4 CONSONANTS</p>
				) : (
					<p className='letter-choice-msg'>
						{consonantCount === 7 && gameLetters.length !== 9
							? 'THE REST MUST BE VOWELS'
							: ' '}
						{vowelCount === 6 && gameLetters.length !== 9
							? 'THE REST MUST BE CONSONANTS'
							: ' '}
					</p>
				)}

		
			</div> */}
		</>
	);
};
const StyledLetterCards = styled.div`
	/* padding: 1rem 0rem; */
	display: flex;
	justify-content: space-between;
	column-gap: 1rem;
	/* margin-bottom: 3rem; */
`;
const StyledVowelContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	/* align-items: center; */
	row-gap: 0.5rem;
	flex: 1;
	background-color: ${({ theme }) => theme.bgTile};
	.letter-btn {
		background-color: ${({ theme }) => theme.bgChosen};
	}
	.count-update {
		background-color: ${({ theme }) => theme.bgTile};
		align-self: center;
		p {
			font-size: 1.6rem;
			text-align: center;
			&:nth-child(2) {
				font-size: 4rem;
				color: ${({ theme }) => theme.bgChosen};
				font-family: 'Bebas Neue', cursive;
				/* line-height: 5rem; */
				font-weight: 800;
				text-align: center;
				line-height: 1;
				/* display: grid;
				place-content: center; */
			}
		}
	}
	/* background-color: ${({ theme }) => theme.bgNumber}; */
	/* border-radius: 5px; */
	/* background-color: ${({ theme }) => theme.bgChosen}; */
	/* font-size: 3rem; */
	/* border-radius: 5px; */
	/* padding: 0 1rem; */
	/* flex: 1; */
	/* display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	background-color: ${({ theme }) => theme.bgNumber};
	border-radius: 5px;
	background-color: ${({ theme }) => theme.bgChosen};
	font-size: 3rem;
	border-radius: 5px;
	padding: 0 1rem;
	flex: 1; */
`;
const StyledConsonantContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	/* align-items: center; */
	flex: 1;
	row-gap: 0.5rem;
	background-color: ${({ theme }) => theme.bgTile};
	.letter-btn {
		background-color: ${({ theme }) => theme.bgChosen};
	}
	.count-update {
		background-color: ${({ theme }) => theme.bgTile};
		align-self: center;
		p {
			font-size: 1.6rem;
			text-align: center;
			&:nth-child(2) {
				font-size: 4rem;
				color: ${({ theme }) => theme.bgChosen};
				font-family: 'Bebas Neue', cursive;
				/* line-height: 5rem; */
				font-weight: 800;
				text-align: center;
				line-height: 1;
			}
		}
	}
	/* .title {
		background-color: ${({ theme }) => theme.bgChosen};
		font-size: 3rem;
		padding: 1rem;
		border-radius: 5px;
	}
	.vowel-cards {
		background-color: black;
		display: flex;
		position: relative;
		.vowel-card {
			border: 1px solid white;
			background-color: blue !important;
			width: 60px;
			height: 60px;
			position: absolute;
			top: 0;
			border-radius: 5px;
		}
	} */
`;

export default LetterCards;
