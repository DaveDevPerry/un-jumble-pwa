export const letterRoundReducer = (state, action) => {
	switch (action.type) {
		case 'ADD_GAME':
			return [
				...state,
				{
					date: new Date().toLocaleDateString(),
					letterSet: action.game.letterSet,
					allWords: action.game.allWords,
					timeLimit: action.game.timeLimit,
				},
			];
		default:
			return state;
	}
};
