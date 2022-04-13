export const anagramReducer = (state, action) => {
	switch (action.type) {
		case 'ADD_GAME':
			return [
				...state,
				{
					date: new Date().toLocaleDateString(),
					level: action.game.level,
					allAnagramWords: action.game.allAnagramWords,
				},
			];
		default:
			return state;
	}
};
