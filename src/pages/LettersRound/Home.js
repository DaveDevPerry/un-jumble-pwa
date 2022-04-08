import React, { useEffect } from 'react';
import styled from 'styled-components';
import GameTitle from '../../components/Global/GameTitle';
import Button from '../../components/Global/Button';
import PlayButton from '../../components/Global/PlayButton';

const LetterRoundHome = () => {
	useEffect(() => {
		console.log('lr home render');
	}, []);
	return (
		<>
			<GameTitle title='letter round' />
			<StyledLetterRoundHome>
				<PlayButton url='/selectletters' />
				<Button url='/letterround/rules' name='rules' />
			</StyledLetterRoundHome>
		</>
	);
};
const StyledLetterRoundHome = styled.section`
	justify-content: space-between;
	align-items: center;
	flex-direction: column;
	word-wrap: wrap;
	display: flex;
	flex: 1;
	row-gap: 1rem;
`;
export default LetterRoundHome;
