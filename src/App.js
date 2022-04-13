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
// import ConundrumContextProvider from './contexts/ConundrumContext';
// import ConundrumHome from './pages/Conundrum/Home';
import ConundrumGame from './pages/Conundrum/Game';
import ConundrumResults from './pages/Conundrum/Results';
// import ConundrumRules from './pages/Conundrum/Rules';
// LETTER ROUND
// import LetterRoundHome from './pages/LettersRound/Home';
// import LetterRoundRules from './pages/LettersRound/Rules';
import LetterSelect from './pages/LettersRound/LetterSelect';
import LetterRoundGame from './pages/LettersRound/Game';
import LetterRoundResults from './pages/LettersRound/Results';
// ANAGRAM - UNSCRAMBLE
// import AnagramRoundHome from './pages/Anagrams/Home';
// import AnagramRoundRules from './pages/Anagrams/Rules';
import AnagramRoundGame from './pages/Anagrams/Game';
import AnagramRoundResults from './pages/Anagrams/Results';
import PageLoader from './components/Global/PageLoader';
import Delete from './pages/Delete';
import ConundrumRules from './pages/Conundrum/Rules';
import AnagramRoundRules from './pages/Anagrams/Rules';
import LetterRoundRules from './pages/LettersRound/Rules';
import LetterRoundStats from './pages/LettersRound/Stats';
import LetterRoundContextProvider from './contexts/LetterRoundContext';
// import ConundrumContextProvider from './contexts/ConundrumContext';

function App() {
	// const { conundrums } = useContext(ConundrumContext);
	const APIKey = process.env.REACT_APP_API_KEY;
	// const [APIKey, setAPIKey] = useState(process.env.REACT_APP_API_KEY);

	// useEffect(() => {
	// 	console.log('app render');
	// 	// console.log(setAPIKey);
	// 	// console.log(conundrums);
	// 	// setCurrentDate(new Date().toLocaleDateString())
	// 	const localLRData = JSON.parse(localStorage.getItem('letterRounds')) || [];
	// 	console.log(localLRData, 'lr data');
	// 	setLetterRoundData(localLRData);
	// }, []);

	// const [letterRoundData, setLetterRoundData] = useState(null)

	const [theme, themeToggler, mountedComponent] = useDarkMode();
	const themeMode = theme === 'light' ? lightTheme : darkTheme;
	const [dictionary, setDictionary] = useState(null);
	const englishDictionary = require('an-array-of-english-words');
	// GLOBAL - working with conundrum
	// const [currentDate, setCurrentDate] = useState('')
	const [isNextDayCountdownActive, setIsNextDayCountdownActive] =
		useState(true);
	// HEADER
	const [pageTitle, setPageTitle] = useState('select game');
	// FOOTER
	const [message, setMessage] = useState('');

	// CONUNDRUM
	const [conundrum, setConundrum] = useState('');
	const [allNineLetterWords, setAllNineLetterWords] = useState(null);
	const [allEightLetterWords, setAllEightLetterWords] = useState(null);
	const [allSevenLetterWords, setAllSevenLetterWords] = useState(null);
	const [allSixLetterWords, setAllSixLetterWords] = useState(null);
	const [allFiveLetterWords, setAllFiveLetterWords] = useState(null);
	const [allFourLetterWords, setAllFourLetterWords] = useState(null);
	const [gameMode, setGameMode] = useState('');
	const [conundrumGameMode, setConundrumGameMode] = useState('');
	const [isConundrumCorrect, setIsConundrumCorrect] = useState(false);

	// LETTER ROUND
	const [letterTypes, setLetterTypes] = useState([]);
	const [gameLetters, setGameLetters] = useState([]);
	const [isLetterRoundTimeUp, setIsLetterRoundTimeUp] = useState(false);
	// const [letterRoundData, setLetterRoundData] = useState([]);
	const [showLetterRoundResults, setShowLetterRoundResults] = useState(false);
	const [gotNineLetterWord, setGotNineLetterWord] = useState('');
	const [letterRoundLongestWord, setLetterRoundLongestWord] = useState('');
	const [allLetterRoundUserWords, setAllLetterRoundUserWords] = useState([]);
	const [sortedWordsByLengthArray, setSortedWordsByLengthArray] = useState([]);
	const [currentLetterRoundWord, setCurrentLetterRoundWord] = useState('');
	// const [LetterRoundNineLetters, setLetterRoundNineLetters] = useState(second)
	// useEffect(() => {
	// 	setTimeout(() => {
	// 		const currentDate = new Date().toLocaleDateString();
	// 		const todayPlayed = letterRoundData.find(
	// 			(Obj) => Obj.date === currentDate
	// 		);
	// 		console.log(todayPlayed, 'played already?');
	// 		if (todayPlayed !== undefined) {
	// 			document.querySelector('.letter-round-status').classList.add('played');
	// 		}
	// 	}, 2000);
	// }, [letterRoundData]);

	// ANAGRAM
	const [allAnagramUserWords, setAllAnagramUserWords] = useState([]);
	const [anagramGameMode, setAnagramGameMode] = useState('');

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

	if (!mountedComponent) return <div id='unmounted'>Can i see this</div>;

	return (
		<ThemeProvider theme={themeMode}>
			<GlobalStyles />
			<Router>
				<div className='container'>
					<PageLoader />
					<Header pageTitle={pageTitle} />
					{/* <StrictMode> */}
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
										conundrumGameMode={conundrumGameMode}
										setConundrumGameMode={setConundrumGameMode}
										allNineLetterWords={allNineLetterWords}
										allEightLetterWords={allEightLetterWords}
										allSevenLetterWords={allSevenLetterWords}
										allSixLetterWords={allSixLetterWords}
										allFiveLetterWords={allFiveLetterWords}
										allFourLetterWords={allFourLetterWords}
										anagramGameMode={anagramGameMode}
										setAnagramGameMode={setAnagramGameMode}
										setPageTitle={setPageTitle}
									/>
								}
							/>
							<Route path='/delete' element={<Delete />} />

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
										dictionary={dictionary}
										setConundrum={setConundrum}
										isNextDayCountdownActive={isNextDayCountdownActive}
										setIsNextDayCountdownActive={setIsNextDayCountdownActive}
										conundrumGameMode={conundrumGameMode}
										setConundrumGameMode={setConundrumGameMode}
										setMessage={setMessage}
										message={message}
										setPageTitle={setPageTitle}
										setIsConundrumCorrect={setIsConundrumCorrect}
									/>
								}
							/>
							<Route
								path='/conundrum/results'
								element={
									<ConundrumResults
										conundrum={conundrum}
										isNextDayCountdownActive={isNextDayCountdownActive}
										setIsNextDayCountdownActive={setIsNextDayCountdownActive}
										APIKey={APIKey}
										setPageTitle={setPageTitle}
										conundrumGameMode={conundrumGameMode}
										isConundrumCorrect={isConundrumCorrect}
										setIsConundrumCorrect={setIsConundrumCorrect}
										setMessage={setMessage}
									/>
								}
							/>
							<Route
								path='/conundrum/rules'
								element={<ConundrumRules setPageTitle={setPageTitle} />}
							/>
							{/* anagram round  */}
							<Route
								path='/anagramround/rules'
								element={<AnagramRoundRules setPageTitle={setPageTitle} />}
							/>
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
										// setLetterRoundData={setLetterRoundData}
										// letterRoundData={letterRoundData}
										allSevenLetterWords={allSevenLetterWords}
										allSixLetterWords={allSixLetterWords}
										allFiveLetterWords={allFiveLetterWords}
										allFourLetterWords={allFourLetterWords}
										allAnagramUserWords={allAnagramUserWords}
										setAllAnagramUserWords={setAllAnagramUserWords}
										anagramGameMode={anagramGameMode}
										setAnagramGameMode={setAnagramGameMode}
										setPageTitle={setPageTitle}
										setMessage={setMessage}
									/>
								}
							/>
							<Route
								path='/anagramround/results'
								element={
									<AnagramRoundResults
										isNextDayCountdownActive={isNextDayCountdownActive}
										setIsNextDayCountdownActive={setIsNextDayCountdownActive}
										allAnagramUserWords={allAnagramUserWords}
										setAllAnagramUserWords={setAllAnagramUserWords}
										setPageTitle={setPageTitle}
										setMessage={setMessage}
										anagramGameMode={anagramGameMode}
									/>
								}
							/>
							{/* letter round  */}
							{/* <Route
								path='/letterround/rules'
								element={<LetterRoundRules setPageTitle={setPageTitle} />}
							/> */}
							<Route
								path='/letterround/rules'
								element={<LetterRoundRules setPageTitle={setPageTitle} />}
							/>

							<Route
								path='/letterround/stats'
								element={
									<LetterRoundContextProvider>
										<LetterRoundStats setPageTitle={setPageTitle} />
									</LetterRoundContextProvider>
								}
							/>

							<Route
								path='/selectletters'
								element={
									<LetterSelect
										gameLetters={gameLetters}
										letterTypes={letterTypes}
										setLetterTypes={setLetterTypes}
										setGameLetters={setGameLetters}
										setPageTitle={setPageTitle}
										setMessage={setMessage}
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
										letterTypes={letterTypes}
										setLetterTypes={setLetterTypes}
										dictionary={dictionary}
										// setLetterRoundData={setLetterRoundData}
										// letterRoundData={letterRoundData}
										setGotNineLetterWord={setGotNineLetterWord}
										letterRoundLongestWord={letterRoundLongestWord}
										setLetterRoundLongestWord={setLetterRoundLongestWord}
										allLetterRoundUserWords={allLetterRoundUserWords}
										setAllLetterRoundUserWords={setAllLetterRoundUserWords}
										sortedWordsByLengthArray={sortedWordsByLengthArray}
										setSortedWordsByLengthArray={setSortedWordsByLengthArray}
										currentLetterRoundWord={currentLetterRoundWord}
										setCurrentLetterRoundWord={setCurrentLetterRoundWord}
										setPageTitle={setPageTitle}
										setMessage={setMessage}
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
										// setLetterRoundData={setLetterRoundData}
										// letterRoundData={letterRoundData}
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
										setPageTitle={setPageTitle}
										setMessage={setMessage}
									/>
								}
							/>
							<Route
								path='*'
								element={<ErrorPage setPageTitle={setPageTitle} />}
							/>
						</Routes>
					</main>
					{/* </StrictMode> */}
					<Footer theme={theme} themeToggler={themeToggler} message={message} />
				</div>
			</Router>
		</ThemeProvider>
	);
}

export default App;
