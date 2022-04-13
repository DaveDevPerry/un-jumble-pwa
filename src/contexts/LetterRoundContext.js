import React, { createContext, useReducer, useEffect } from 'react';
import { letterRoundReducer } from '../reducers/letterRoundReducer';

export const LetterRoundContext = createContext();

const LetterRoundContextProvider = (props) => {
	const [games, dispatch] = useReducer(letterRoundReducer, [], () => {
		const localData = localStorage.getItem('letterRounds');
		return localData ? JSON.parse(localData) : [];
	});
	useEffect(() => {
		localStorage.setItem('letterRounds', JSON.stringify(games));
	}, [games]);
	return (
		<LetterRoundContext.Provider value={{ games, dispatch }}>
			{props.children}
		</LetterRoundContext.Provider>
	);
};

export default LetterRoundContextProvider;
