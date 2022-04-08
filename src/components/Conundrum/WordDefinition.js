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
				setWordData(response.data.meaning);
			})
			.catch(function (error) {
				console.error(error);
			});
	}, [conundrum, APIKey]);
	return (
		<StyledWordDefinition>{wordData && wordData.noun}</StyledWordDefinition>
	);
}

const StyledWordDefinition = styled.p`
	text-align: center;
	font-size: 1.4rem;
`;

export default WordDefinition;
