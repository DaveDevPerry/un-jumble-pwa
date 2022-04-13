import React, { createContext, useReducer, useEffect } from 'react';
import { anagramReducer } from '../reducers/anagramReducer';

export const AnagramContext = createContext();

const AnagramContextProvider = (props) => {
	const [games, dispatch] = useReducer(anagramReducer, [], () => {
		const localData = localStorage.getItem('anagramRound');
		return localData ? JSON.parse(localData) : [];
	});
	useEffect(() => {
		localStorage.setItem('anagramRound', JSON.stringify(games));
	}, [games]);
	return (
		<AnagramContext.Provider value={{ games, dispatch }}>
			{props.children}
		</AnagramContext.Provider>
	);
};

export default AnagramContextProvider;
