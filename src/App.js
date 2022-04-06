import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

// COMPONENTS
import Header from './components/Header';
import Footer from './components/Footer';
import { useDarkMode } from './components/useDarkMode';
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
import AnagramRoundHome from './pages/Anagrams/Home';
import AnagramRoundRules from './pages/Anagrams/Rules';
import AnagramRoundGame from './pages/Anagrams/Game';
import AnagramRoundResults from './pages/Anagrams/Results';

function App() {
	const [theme, themeToggler, mountedComponent] = useDarkMode();
	const themeMode = theme === 'light' ? lightTheme : darkTheme;
	const [dictionary, setDictionary] = useState(null);
	const englishDictionary = require('an-array-of-english-words');

	// CONUNDRUM
	const [showResults, setShowResults] = useState(false);
	const [allNineLetterWords, setAllNineLetterWords] = useState(null);
	const [allEightLetterWords, setAllEightLetterWords] = useState(null);
	const [allSevenLetterWords, setAllSevenLetterWords] = useState(null);
	const [allSixLetterWords, setAllSixLetterWords] = useState(null);
	const [allFiveLetterWords, setAllFiveLetterWords] = useState(null);
	const [allFourLetterWords, setAllFourLetterWords] = useState(null);
	const [gameMode, setGameMode] = useState('');

	// LETTER ROUND
	const [letterTypes, setLetterTypes] = useState([]);
	const [gameLetters, setGameLetters] = useState([]);
	const [isLetterRoundTimeUp, setIsLetterRoundTimeUp] = useState(false);
	const [letterRoundData, setLetterRoundData] = useState(null);

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
										showResults={showResults}
										setShowResults={setShowResults}
										dictionary={dictionary}
									/>
								}
							/>
							<Route
								path='/conundrum/results'
								element={
									<ConundrumResults
									// conundrumData={conundrumData}
									// setConundrumData={setConundrumData}
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
									/>
								}
							/>
							<Route
								path='/anagramround/results'
								element={
									<AnagramRoundResults
										isLetterRoundTimeUp={isLetterRoundTimeUp}
										gameLetters={gameLetters}
										setGameLetters={setGameLetters}
										setLetterTypes={setLetterTypes}
										setLetterRoundData={setLetterRoundData}
										letterRoundData={letterRoundData}
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
										setGameLetters={setGameLetters}
										letterTypes={letterTypes}
										setLetterTypes={setLetterTypes}
										dictionary={dictionary}
										setLetterRoundData={setLetterRoundData}
										letterRoundData={letterRoundData}
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
