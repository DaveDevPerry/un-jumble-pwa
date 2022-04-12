import React, { useState } from 'react';
import styled from 'styled-components';
import { GiCheckMark } from 'react-icons/gi';

const LetterCards = ({
	gameLetters,
	setGameLetters,
	setLetterTypes,
	letterTypes,
}) => {
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

	const playTile = () => {
		new Audio('/audio/tile.mp3').play();
	};

	const handlePickVowel = (e) => {
		playTile();
		console.log(setVowels, setConsonants);
		e.preventDefault();
		if (vowelCount === 5) {
			document.querySelector('.vowel-btn').style.pointerEvents = 'none';
		}
		setGameLetters([...gameLetters, vowels.pop()]);
		setLetterTypes([...letterTypes, 'V']);
		setVowelCount(vowelCount + 1);
	};
	const handlePickConsonant = (e) => {
		playTile();
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
					<button className='letter-btn vowel-btn' onClick={handlePickVowel}>
						VOWEL
					</button>
				</StyledVowelContainer>
				<StyledConsonantContainer className='consonant-container'>
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
					<button
						className='letter-btn consonant-btn'
						onClick={handlePickConsonant}
					>
						Consonant
					</button>
				</StyledConsonantContainer>
			</StyledLetterCards>
		</>
	);
};
const StyledLetterCards = styled.div`
	display: flex;
	justify-content: space-between;
	column-gap: 1rem;
`;
const StyledVowelContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
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
				font-weight: 800;
				text-align: center;
				line-height: 1;
			}
		}
	}
`;
const StyledConsonantContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
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
				font-weight: 800;
				text-align: center;
				line-height: 1;
			}
		}
	}
`;

export default LetterCards;
