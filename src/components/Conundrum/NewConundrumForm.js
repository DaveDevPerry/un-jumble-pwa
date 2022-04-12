import React, { useContext, useEffect } from 'react';
import { ConundrumContext } from '../../contexts/ConundrumContext';
import { useNavigate } from 'react-router-dom';

const NewConundrumForm = ({
	conundrum,
	conundrumGameMode,
	isConundrumCorrect,
	setMessage,
	url,
}) => {
	useEffect(() => {
		console.log(
			'new con form initial render',
			conundrum,
			conundrumGameMode,
			isConundrumCorrect
		);
	}, [conundrum, conundrumGameMode, isConundrumCorrect]);
	let navigate = useNavigate();
	const { dispatch } = useContext(ConundrumContext);
	// const [date, setDate] = useState('');
	// const [level, setLevel] = useState(0);
	// const [wordOfTheDay, setWordOfTheDay] = useState('');
	// const [isCorrect, setIsCorrect] = useState(false);

	const handleSave = () => {
		// e.preventDefault();
		dispatch({
			type: 'ADD_CONUNDRUM',
			// conundrum: { date, level, wordOfTheDay, isCorrect },
			conundrum: {
				// date,
				// level,
				// wordOfTheDay,
				// isCorrect,
				date: new Date().toLocaleDateString(),
				level: conundrumGameMode,
				wordOfTheDay: conundrum,
				isCorrect: isConundrumCorrect,
			},
		});
		// setDate('');
		// setLevel('');
		// setWordOfTheDay('');
		// setIsCorrect(false);
		setTimeout(() => {
			// setMessage('play another?');
			navigate('/');
		}, 100);
	};

	return (
		<button
			onClick={() => {
				setMessage('fancy another?');
				// setDate(new Date().toLocaleDateString());
				// setLevel(conundrumGameMode);
				// setWordOfTheDay(conundrum);
				// setIsCorrect(isConundrumCorrect);
				handleSave();
			}}
		>
			Save Data
		</button>
		// <form onSubmit={handleSubmit}>
		//   <input type="text" placeholder="book title" value={title}
		//     onChange={(e) => setTitle(e.target.value)} required />
		//   <input type="text" placeholder="author name" value={author}
		//     onChange={(e) => setAuthor(e.target.value)} required />
		//   <input type="submit" value="add book" />
		// </form>
	);
};

export default NewConundrumForm;
