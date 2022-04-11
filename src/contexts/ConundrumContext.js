import React, { createContext, useReducer, useEffect } from 'react';
import { conundrumReducer } from '../reducers/conundrumReducer';

export const ConundrumContext = createContext();

const ConundrumContextProvider = (props) => {
	const [conundrums, dispatch] = useReducer(conundrumReducer, [], () => {
		const localData = localStorage.getItem('conundrums');
		return localData ? JSON.parse(localData) : [];
	});
	useEffect(() => {
		localStorage.setItem('conundrums', JSON.stringify(conundrums));
	}, [conundrums]);
	return (
		<ConundrumContext.Provider value={{ conundrums, dispatch }}>
			{props.children}
		</ConundrumContext.Provider>
	);
};

export default ConundrumContextProvider;
