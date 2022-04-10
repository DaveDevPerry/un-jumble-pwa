import React from 'react';
import styled from 'styled-components';

const PageLoader = () => {
	return (
		<StyledPageLoader>
			<h1>PageLoader</h1>
		</StyledPageLoader>
	);
};
const StyledPageLoader = styled.div`
	z-index: 100;
	background-color: yellow;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: grid;
	place-content: center;
	h1 {
		color: black;
	}
`;

export default PageLoader;
