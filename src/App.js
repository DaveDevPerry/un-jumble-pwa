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
							{/* letter round  */}

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
