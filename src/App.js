import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

// COMPONENTS
import Header from './components/Global/Header';
import Footer from './components/Global/Footer';
import { useDarkMode } from './components/Global/useDarkMode';
import { GlobalStyles } from './components/globalStyles';
import { lightTheme, darkTheme } from './components/Themes';
// PAGES
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
// CONUNDRUM
import ConundrumHome from './pages/Conundrum/Home';
import ConundrumGame from './pages/Conundrum/Game';
import ConundrumResults from './pages/Conundrum/Results';
import ConundrumRules from './pages/Conundrum/Rules';
// LETTER ROUND
import LetterRoundHome from './pages/LettersRound/Home';
import LetterRoundRules from './pages/LettersRound/Rules';
import LetterSelect from './pages/LettersRound/LetterSelect';
import LetterRoundGame from './pages/LettersRound/Game';
import LetterRoundResults from './pages/LettersRound/Results';
// ANAGRAM - UNSCRAMBLE
import AnagramRoundHome from './pages/Anagrams/Home';
import AnagramRoundRules from './pages/Anagrams/Rules';
import AnagramRoundGame from './pages/Anagrams/Game';
import AnagramRoundResults from './pages/Anagrams/Results';

function App() {
	useEffect(() => {
		console.log('app render');
	}, []);
	const [theme, themeToggler, mountedComponent] = useDarkMode();
	const themeMode = theme === 'light' ? lightTheme : darkTheme;
	const [dictionary, setDictionary] = useState(null);
	const englishDictionary = require('an-array-of-english-words');

	// CONUNDRUM
	const [conundrum, setConundrum] = useState('');
	const [allNineLetterWords, setAllNineLetterWords] = useState(null);
	const [allEightLetterWords, setAllEightLetterWords] = useState(null);
	const [allSevenLetterWords, setAllSevenLetterWords] = useState(null);
	const [allSixLetterWords, setAllSixLetterWords] = useState(null);
	const [allFiveLetterWords, setAllFiveLetterWords] = useState(null);
	const [allFourLetterWords, setAllFourLetterWords] = useState(null);
	const [gameMode, setGameMode] = useState('');
	// const [showResults, setShowResults] = useState(false);
	// const [gotConundrum, setGotConundrum] = useState(false);

	// GLOBAL - working with conundrum
	const [isNextDayCountdownActive, setIsNextDayCountdownActive] =
		useState(true);

	// LETTER ROUND
	const [letterTypes, setLetterTypes] = useState([]);
	const [gameLetters, setGameLetters] = useState([]);
	const [isLetterRoundTimeUp, setIsLetterRoundTimeUp] = useState(false);
	const [letterRoundData, setLetterRoundData] = useState(null);
	const [showLetterRoundResults, setShowLetterRoundResults] = useState(false);
	const [gotNineLetterWord, setGotNineLetterWord] = useState('');
	const [letterRoundLongestWord, setLetterRoundLongestWord] = useState('');
	const [allLetterRoundUserWords, setAllLetterRoundUserWords] = useState([]);
	const [sortedWordsByLengthArray, setSortedWordsByLengthArray] = useState([]);
	const [currentLetterRoundWord, setCurrentLetterRoundWord] = useState('');
	// const [nineLetterWords, setNineLetterWords] = useState([])

	// ANAGRAM
	const [allAnagramUserWords, setAllAnagramUserWords] = useState([]);

	// useEffect(() => {
	// 		console.log('setting sorted');
	// 	const sortedWordsByLength = allLetterRoundUserWords.sort(function (a, b) {
	// 		return b.word.length - a.word.length;
	// 	});
	// 	console.log(sortedWordsByLength, 'sorted words');
	// 	setSortedWordsByLengthArray([
	// 		...sortedWordsByLengthArray,
	// 		sortedWordsByLength,
	// 	]);
	// console.log(sortedWordsByLength, 'sorted');
	// const nineCount = sortedWordsByLength.filter((wordItem) => {
	// 	return wordItem.word.length === 9;
	// });
	// setNineLetterWords(nineCount);
	// const eightCount = sortedWordsByLength.filter((wordItem) => {
	// 	return wordItem.word.length === 8;
	// });
	// setEightLetterWords(eightCount);
	// const sevenCount = sortedWordsByLength.filter((wordItem) => {
	// 	return wordItem.word.length === 7;
	// });
	// setSevenLetterWords(sevenCount);
	// const sixCount = sortedWordsByLength.filter((wordItem) => {
	// 	return wordItem.word.length === 6;
	// });
	// setSixLetterWords(sixCount);
	// const fiveCount = sortedWordsByLength.filter((wordItem) => {
	// 	return wordItem.word.length === 5;
	// });
	// setFiveLetterWords(fiveCount);
	// const fourCount = sortedWordsByLength.filter((wordItem) => {
	// 	return wordItem.word.length === 4;
	// });
	// setFourLetterWords(fourCount);
	// const threeCount = sortedWordsByLength.filter((wordItem) => {
	// 	return wordItem.word.length === 3;
	// });
	// setThreeLetterWords(threeCount);
	// },[allLetterRoundUserWords])

	useEffect(() => {
		const letterRoundWords = englishDictionary.filter(function (word) {
			return word.length > 2 && word.length < 10;
		});
		const conundrumNineWords = englishDictionary.filter(function (word) {
			return word.length === 9;
		});
		const conundrumEightWords = englishDictionary.filter(function (word) {
			return word.length === 8;
		});
		const conundrumSevenWords = englishDictionary.filter(function (word) {
			return word.length === 7;
		});
		const conundrumSixWords = englishDictionary.filter(function (word) {
			return word.length === 6;
		});
		const conundrumFiveWords = englishDictionary.filter(function (word) {
			return word.length === 5;
		});
		const conundrumFourWords = englishDictionary.filter(function (word) {
			return word.length === 4;
		});
		setAllNineLetterWords(conundrumNineWords);
		setAllEightLetterWords(conundrumEightWords);
		setAllSevenLetterWords(conundrumSevenWords);
		setAllSixLetterWords(conundrumSixWords);
		setAllFiveLetterWords(conundrumFiveWords);
		setAllFourLetterWords(conundrumFourWords);
		setDictionary(letterRoundWords);
	}, [englishDictionary]);

	if (!mountedComponent) return <div>Can i see this</div>;

	return (
		<ThemeProvider theme={themeMode}>
			<Router>
				<GlobalStyles />
				<div className='container'>
					<Header />
					<main>
						<Routes>
							<Route
								path='/'
								element={
									<Home
									// gameData={gameData}
									// setGameData={setGameData}
									// setConundrumData={setConundrumData}
									// letterRoundData={letterRoundData}
									/>
								}
							/>
							<Route
								path='/conundrum'
								element={
									<ConundrumHome
										allNineLetterWords={allNineLetterWords}
										allEightLetterWords={allEightLetterWords}
										allSevenLetterWords={allSevenLetterWords}
										allSixLetterWords={allSixLetterWords}
										allFiveLetterWords={allFiveLetterWords}
										allFourLetterWords={allFourLetterWords}
										// chosenWordLength={chosenWordLength}
										// setChosenWordLength={setChosenWordLength}
										gameMode={gameMode}
										setGameMode={setGameMode}
									/>
								}
							/>
							<Route path='/conundrum/rules' element={<ConundrumRules />} />
							{/* <Route
								path='/selectwordlength'
								element={
									<WordLengthSelect
										allNineLetterWords={allNineLetterWords}
										allEightLetterWords={allEightLetterWords}
										allSevenLetterWords={allSevenLetterWords}
										allSixLetterWords={allSixLetterWords}
									/>
								}
							/> */}
							<Route
								path='/conundrum/game'
								element={
									<ConundrumGame
										allNineLetterWords={allNineLetterWords}
										allEightLetterWords={allEightLetterWords}
										allSevenLetterWords={allSevenLetterWords}
										allSixLetterWords={allSixLetterWords}
										allFiveLetterWords={allFiveLetterWords}
										allFourLetterWords={allFourLetterWords}
										setGameMode={setGameMode}
										gameMode={gameMode}
										// showResults={showResults}
										// setShowResults={setShowResults}
										dictionary={dictionary}
										// setGotConundrum={setGotConundrum}
										setConundrum={setConundrum}
										isNextDayCountdownActive={isNextDayCountdownActive}
										setIsNextDayCountdownActive={setIsNextDayCountdownActive}
									/>
								}
							/>
							<Route
								path='/conundrum/results'
								element={
									<ConundrumResults
										// conundrumData={conundrumData}
										// setConundrumData={setConundrumData}
										// showResults={showResults}
										conundrum={conundrum}
										// setGotConundrum={setGotConundrum}
										// gotConundrum={gotConundrum}
										isNextDayCountdownActive={isNextDayCountdownActive}
										setIsNextDayCountdownActive={setIsNextDayCountdownActive}
									/>
								}
							/>
							{/* anagram round  */}
							<Route path='/anagramround' element={<AnagramRoundHome />} />
							<Route
								path='/anagramround/rules'
								element={<AnagramRoundRules />}
							/>
							{/* <Route
								path='/selectletters'
								element={
									<LetterSelect
										gameLetters={gameLetters}
										letterTypes={letterTypes}
										setLetterTypes={setLetterTypes}
										setGameLetters={setGameLetters}
									/>
								}
							/> */}
							<Route
								path='/anagramround/game'
								element={
									<AnagramRoundGame
										isLetterRoundTimeUp={isLetterRoundTimeUp}
										setIsLetterRoundTimeUp={setIsLetterRoundTimeUp}
										gameLetters={gameLetters}
										setGameLetters={setGameLetters}
										letterTypes={letterTypes}
										setLetterTypes={setLetterTypes}
										dictionary={dictionary}
										setLetterRoundData={setLetterRoundData}
										letterRoundData={letterRoundData}
										allFiveLetterWords={allFiveLetterWords}
										allAnagramUserWords={allAnagramUserWords}
										setAllAnagramUserWords={setAllAnagramUserWords}
									/>
								}
							/>
							<Route
								path='/anagramround/results'
								element={
									<AnagramRoundResults
										// isLetterRoundTimeUp={isLetterRoundTimeUp}
										// gameLetters={gameLetters}
										// setGameLetters={setGameLetters}
										// setLetterTypes={setLetterTypes}
										// setLetterRoundData={setLetterRoundData}
										// letterRoundData={letterRoundData}
										isNextDayCountdownActive={isNextDayCountdownActive}
										setIsNextDayCountdownActive={setIsNextDayCountdownActive}
										allAnagramUserWords={allAnagramUserWords}
										setAllAnagramUserWords={setAllAnagramUserWords}
									/>
								}
							/>
							{/* letter round  */}
							<Route path='/letterround' element={<LetterRoundHome />} />
							<Route path='/letterround/rules' element={<LetterRoundRules />} />
							<Route
								path='/selectletters'
								element={
									<LetterSelect
										gameLetters={gameLetters}
										letterTypes={letterTypes}
										setLetterTypes={setLetterTypes}
										setGameLetters={setGameLetters}
									/>
								}
							/>
							<Route
								path='/letterround/game'
								element={
									<LetterRoundGame
										isLetterRoundTimeUp={isLetterRoundTimeUp}
										setIsLetterRoundTimeUp={setIsLetterRoundTimeUp}
										gameLetters={gameLetters}
										// setGameLetters={setGameLetters}
										letterTypes={letterTypes}
										setLetterTypes={setLetterTypes}
										dictionary={dictionary}
										setLetterRoundData={setLetterRoundData}
										letterRoundData={letterRoundData}
										setGotNineLetterWord={setGotNineLetterWord}
										letterRoundLongestWord={letterRoundLongestWord}
										setLetterRoundLongestWord={setLetterRoundLongestWord}
										allLetterRoundUserWords={allLetterRoundUserWords}
										setAllLetterRoundUserWords={setAllLetterRoundUserWords}
										sortedWordsByLengthArray={sortedWordsByLengthArray}
										setSortedWordsByLengthArray={setSortedWordsByLengthArray}
										currentLetterRoundWord={currentLetterRoundWord}
										setCurrentLetterRoundWord={setCurrentLetterRoundWord}
									/>
								}
							/>
							<Route
								path='/letterround/results'
								element={
									<LetterRoundResults
										isLetterRoundTimeUp={isLetterRoundTimeUp}
										gameLetters={gameLetters}
										setGameLetters={setGameLetters}
										setLetterTypes={setLetterTypes}
										setLetterRoundData={setLetterRoundData}
										letterRoundData={letterRoundData}
										showLetterRoundResults={showLetterRoundResults}
										allLetterRoundUserWords={allLetterRoundUserWords}
										setAllLetterRoundUserWords={setAllLetterRoundUserWords}
										gotNineLetterWord={gotNineLetterWord}
										isNextDayCountdownActive={isNextDayCountdownActive}
										setIsNextDayCountdownActive={setIsNextDayCountdownActive}
										letterRoundLongestWord={letterRoundLongestWord}
										setShowLetterRoundResults={setShowLetterRoundResults}
										sortedWordsByLengthArray={sortedWordsByLengthArray}
										setSortedWordsByLengthArray={setSortedWordsByLengthArray}
									/>
								}
							/>

							<Route path='*' element={<ErrorPage />} />
						</Routes>
					</main>
					<Footer theme={theme} themeToggler={themeToggler} />
				</div>
			</Router>
		</ThemeProvider>
	);
}

export default App;
