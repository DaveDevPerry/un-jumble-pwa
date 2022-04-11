import React, { useContext, useState } from 'react';
import { ConundrumContext } from '../../contexts/ConundrumContext';

const NewConundrumForm = () => {
	const { dispatch } = useContext(ConundrumContext);
	const [date, setDate] = useState('');
	const [level, setLevel] = useState(0);
	const [wordOfTheDay, setWordOfTheDay] = useState('');
	const [isCorrect, setIsCorrect] = useState(false);

	const handleSave = (e) => {
		e.preventDefault();
		dispatch({
			type: 'ADD_CONUNDRUM',
			conundrum: { date, level, wordOfTheDay, isCorrect },
		});
		setDate('');
		setLevel('');
		setWordOfTheDay('');
		setIsCorrect('');
	};

	return (
		<form onSubmit={handleSave}>
			<input
				type='date'
				placeholder='conundrum date'
				value={date}
				onChange={(e) => setDate(e.target.value)}
				required
			/>
			<input
				type='text'
				placeholder='conundrum level'
				value={level}
				onChange={(e) => setLevel(e.target.value)}
				required
			/>
			<input
				type='text'
				placeholder='conundrum word of the day'
				value={wordOfTheDay}
				onChange={(e) => setWordOfTheDay(e.target.value)}
				required
			/>
			<input
				type='text'
				placeholder='conundrum correct'
				value={isCorrect}
				onChange={(e) => setIsCorrect(e.target.value)}
				required
			/>
			<input type='submit' value='add conundrum' />
		</form>
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
