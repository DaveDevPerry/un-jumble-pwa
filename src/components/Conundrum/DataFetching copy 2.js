import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DataFetching({ conundrum }) {
	const [wordData, setWordData] = useState(null);

	useEffect(() => {
		const options = {
			method: 'GET',
			url: 'https://twinword-word-graph-dictionary.p.rapidapi.com/definition/',
			params: { entry: conundrum },
			headers: {
				'X-RapidAPI-Host': 'twinword-word-graph-dictionary.p.rapidapi.com',
				'X-RapidAPI-Key': 'api key',
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
	}, [conundrum]);
	return <p>{wordData && wordData.noun}</p>;
}

export default DataFetching;
