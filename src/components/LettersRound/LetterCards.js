import React, { useState } from 'react';
import styled from 'styled-components';

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
	// const allVowels = [
	// 	'E',
	// 	'E',
	// 	'E',
	// 	'E',
	// 	'E',
	// 	'E',
	// 	'E',
	// 	'E',
	// 	'E',
	// 	'E',
	// 	'E',
	// 	'E',
	// 	'A',
	// 	'A',
	// 	'A',
	// 	'A',
	// 	'A',
	// 	'A',
	// 	'A',
	// 	'A',
	// 	'A',
	// 	'I',
	// 	'I',
	// 	'I',
	// 	'I',
	// 	'I',
	// 	'I',
	// 	'I',
	// 	'I',
	// 	'I',
	// 	'O',
	// 	'O',
	// 	'O',
	// 	'O',
	// 	'O',
	// 	'O',
	// 	'O',
	// 	'O',
	// 	'U',
	// 	'U',
	// 	'U',
	// 	'U',
	// ];
	// const allConsonants = [
	// 	'N',
	// 	'N',
	// 	'N',
	// 	'N',
	// 	'N',
	// 	'N',
	// 	'R',
	// 	'R',
	// 	'R',
	// 	'R',
	// 	'R',
	// 	'R',
	// 	'T',
	// 	'T',
	// 	'T',
	// 	'T',
	// 	'T',
	// 	'T',
	// 	'L',
	// 	'L',
	// 	'L',
	// 	'L',
	// 	'S',
	// 	'S',
	// 	'S',
	// 	'S',
	// 	'D',
	// 	'D',
	// 	'D',
	// 	'D',
	// 	'G',
	// 	'G',
	// 	'G',
	// 	'B',
	// 	'B',
	// 	'C',
	// 	'C',
	// 	'M',
	// 	'M',
	// 	'P',
	// 	'P',
	// 	'F',
	// 	'F',
	// 	'H',
	// 	'H',
	// 	'V',
	// 	'V',
	// 	'W',
	// 	'W',
	// 	'Y',
	// 	'Y',
	// 	'K',
	// 	'J',
	// 	'X',
	// 	'Q',
	// 	'Z',
	// ];
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
				</StyledVowelContainer>
				<StyledConsonantContainer className='consonant-container'>
					<button
						className='letter-btn consonant-btn'
						onClick={handlePickConsonant}
					>
						Consonant
					</button>
				</StyledConsonantContainer>
			</StyledLetterCards>
			<div className='letter-choice-msg-container'>
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

				{/* {consonantCount === 6 ? 'THE REST MUST BE VOWELS' : ' '}
				{vowelCount === 5 ? 'THE REST MUST BE CONSONANTS' : ' '} */}
			</div>
		</>
	);
};
const StyledLetterCards = styled.div`
	padding: 1rem 1rem 0 1rem;
	display: flex;
	justify-content: space-between;
	column-gap: 1rem;
	margin-bottom: 3rem;
`;
const StyledVowelContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	background-color: ${({ theme }) => theme.bgNumber};
	padding: 0.3rem;
	border-radius: 5px;
	background-color: ${({ theme }) => theme.bgChosen};
	font-size: 3rem;
	padding: 1rem;
	border-radius: 5px;
	.title {
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
			/* background-color: transparent; */
			width: 60px;
			height: 60px;
			position: absolute;
			top: 0;
			border-radius: 5px;
		}
	}
`;
const StyledConsonantContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	background-color: ${({ theme }) => theme.bgNumber};
	padding: 0.3rem;
	border-radius: 5px;
	background-color: ${({ theme }) => theme.bgChosen};
	font-size: 3rem;
	padding: 1rem;
	border-radius: 5px;
	.title {
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
			/* background-color: transparent; */
			width: 60px;
			height: 60px;
			position: absolute;
			top: 0;
			border-radius: 5px;
		}
	}
`;
// const StyledVowelGrid = styled.div`
// 	display: grid;
// 	justify-content: center;
// 	grid-template-columns: repeat(5, 1fr);
// 	grid-template-rows: repeat(2, 6rem);
// 	/* border: 2px solid ${({ theme }) => theme.border}; */
// 	/* background-color: ${({ theme }) => theme.bgTile}; */
// 	border-radius: 5px;
// 	gap: 0.3rem;
// 	.vowel-card {
// 		cursor: pointer;
// 		font-size: 2rem;
// 		/* border: 1px solid ${({ theme }) => theme.bgNumber}; */
// 		/* border: 1px solid white; */
// 		outline: none;
// 		background-color: ${({ theme }) => theme.bgNumber};
// 		display: grid;
// 		place-content: center;
// 		border-radius: 5px;
// 		transition: all 0.2s linear;
// 		/* &:hover,
// 		&:focus {
// 			background-color: rgba(3, 4, 94, 0.9);
// 		} */
// 		&.chosen {
// 			background-color: ${({ theme }) => theme.bgChosen};
// 		}
// 	}
// `;

export default LetterCards;
