// import uuid from 'uuid/v4';

export const conundrumReducer = (state, action) => {
	switch (action.type) {
		case 'ADD_CONUNDRUM':
			return [
				...state,
				{
					date: new Date().toLocaleDateString(),
					level: action.conundrum.level,
					wordOfTheDay: action.conundrum.wordOfTheDay,
					isCorrect: action.conundrum.isCorrect,
					// id: uuid(),
				},
			];
		// case 'REMOVE_BOOK':
		//   return state.filter(book => book.id !== action.id);
		default:
			return state;
	}
};
