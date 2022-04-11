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
		case 'ADD_CURRENT_DAY_CONUNDRUMS':
			return [
				...state,
				{
					date: new Date().toLocaleDateString(),
					level: action.conundrum.level,
					wordOfTheDay: action.conundrum.wordOfTheDay,
					isCorrect: action.conundrum.isCorrect,
				},
				// ,
				// {
				// 	date: new Date('Apr 02, 2022').toLocaleDateString(),
				// 	level: 5,
				// 	wordOfTheDay: '',
				// 	isCorrect: false,
				// },
				// {
				// 	date: new Date('Apr 02, 2022').toLocaleDateString(),
				// 	level: 6,
				// 	wordOfTheDay: '',
				// 	isCorrect: false,
				// },
				// {
				// 	date: new Date('Apr 02, 2022').toLocaleDateString(),
				// 	level: 7,
				// 	wordOfTheDay: '',
				// 	isCorrect: false,
				// },
				// {
				// 	date: new Date('Apr 02, 2022').toLocaleDateString(),
				// 	level: 8,
				// 	wordOfTheDay: '',
				// 	isCorrect: false,
				// },
				// {
				// 	date: new Date('Apr 02, 2022').toLocaleDateString(),
				// 	level: 9,
				// 	wordOfTheDay: '',
				// 	isCorrect: false,
				// },
			];
		// case 'REMOVE_BOOK':
		//   return state.filter(book => book.id !== action.id);
		default:
			return state;
	}
};
