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
import ConundrumGame from './pages/Conundrum/Game';
import ConundrumResults from './pages/Conundrum/Results';
// LETTER ROUND
import LetterSelect from './pages/LettersRound/LetterSelect';
import LetterRoundGame from './pages/LettersRound/Game';
import LetterRoundResults from './pages/LettersRound/Results';
// ANAGRAM - UNSCRAMBLE
import AnagramRoundGame from './pages/Anagrams/Game';
import AnagramRoundResults from './pages/Anagrams/Results';
import PageLoader from './components/Global/PageLoader';
import Delete from './pages/Delete';
import ConundrumRules from './pages/Conundrum/Rules';
import AnagramRoundRules from './pages/Anagrams/Rules';
import LetterRoundRules from './pages/LettersRound/Rules';
import LetterRoundStats from './pages/LettersRound/Stats';
import LetterRoundContextProvider from './contexts/LetterRoundContext';
import ConundrumStats from './pages/Conundrum/Stats';
import ConundrumContextProvider from './contexts/ConundrumContext';
import AnagramContextProvider from './contexts/AnagramContext';
import AnagramStats from './pages/Anagrams/Stats';
import Settings from './pages/Settings';

function App() {
	const APIKey = process.env.REACT_APP_API_KEY;

	const [theme, themeToggler, mountedComponent] = useDarkMode();
	const themeMode = theme === 'light' ? lightTheme : darkTheme;
	const [dictionary, setDictionary] = useState(null);
	const englishDictionary = require('an-array-of-english-words');
	// GLOBAL - working with conundrum
	const [isNextDayCountdownActive, setIsNextDayCountdownActive] =
		useState(true);
	// HEADER
	const [pageTitle, setPageTitle] = useState('FUN-Jumble');
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
	const [showLetterRoundResults, setShowLetterRoundResults] = useState(false);
	const [gotNineLetterWord, setGotNineLetterWord] = useState('');
	const [letterRoundLongestWord, setLetterRoundLongestWord] = useState('');
	const [allLetterRoundUserWords, setAllLetterRoundUserWords] = useState([]);
	const [sortedWordsByLengthArray, setSortedWordsByLengthArray] = useState([]);
	const [currentLetterRoundWord, setCurrentLetterRoundWord] = useState('');
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
					<main>
						<Routes>
							<Route
								path='/'
								element={
									<Home
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
								path='/settings'
								element={
									<Settings
										setPageTitle={setPageTitle}
										theme={theme}
										themeToggler={themeToggler}
									/>
								}
							/>
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
							<Route
								path='/conundrum/stats'
								element={
									<ConundrumContextProvider>
										<ConundrumStats setPageTitle={setPageTitle} />
									</ConundrumContextProvider>
								}
							/>
							{/* anagram round  */}
							<Route
								path='/anagramround/rules'
								element={<AnagramRoundRules setPageTitle={setPageTitle} />}
							/>
							<Route
								path='/anagramround/stats'
								element={
									<AnagramContextProvider>
										<AnagramStats setPageTitle={setPageTitle} />
									</AnagramContextProvider>
								}
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
					<Footer message={message} />
				</div>
			</Router>
		</ThemeProvider>
	);
}

export default App;
