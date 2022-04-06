import React from 'react';
// import { render } from 'react-dom';
import './index.css';
import App from './App';

// render(
// 	<StrictMode>
// 		<App />
// 	</StrictMode>,
// 	document.getElementById('root')
// );
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App tab='home' />);
