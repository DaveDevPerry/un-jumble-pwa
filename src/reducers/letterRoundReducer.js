// import uuid from 'uuid/v4';

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
		// case 'CHECK_FOR_GAME':
		// 	console.log(...state, 'games?');
		// 	const checkForExisting = state.find(
		// 		(Obj) => Obj.date === new Date().toLocaleDateString()
		// 	);
		// 	console.log(checkForExisting, 'existing');

		// 	return console.log(checkForExisting);
		default:
			return state;
	}
};
