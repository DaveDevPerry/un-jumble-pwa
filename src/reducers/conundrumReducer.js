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
			];
		default:
			return state;
	}
};
