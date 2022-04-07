import React from 'react';
import { func, string } from 'prop-types';

const Toggle = ({ toggleTheme }) => {
	return (
		<button id='toggle-switch' onClick={toggleTheme}>
			mode
		</button>
	);
};
Toggle.propTypes = {
	theme: string.isRequired,
	toggleTheme: func.isRequired,
};
export default Toggle;
