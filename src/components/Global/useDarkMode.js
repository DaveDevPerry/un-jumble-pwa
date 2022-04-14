import { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';

export const useDarkMode = () => {
	// let navigate = useNavigate();
	const [theme, setTheme] = useState('light');
	const [mountedComponent, setMountedComponent] = useState(false);

	const setMode = (mode) => {
		window.localStorage.setItem('theme', mode);
		setTheme(mode);
	};

	const themeToggler = () => {
		theme === 'light' ? setMode('dark') : setMode('light');
		console.log('here');
		// navigate('/');
	};

	useEffect(() => {
		const localTheme = window.localStorage.getItem('theme');
		localTheme ? setTheme(localTheme) : setMode('light');
		setMountedComponent(true);
	}, []);
	return [theme, themeToggler, mountedComponent];
};
