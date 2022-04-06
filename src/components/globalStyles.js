import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :root{
    --letter-count: 9;
  }
  html {
    font-size: 62.5%;
    -webkit-touch-callout: none;
	  -webkit-user-select: none;
	  -khtml-user-select: none;
	  -moz-user-select: none;
	  -ms-user-select: none;
	  user-select: none;
  }
  body {
    background: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.syntax};
    transition: all 0.50s linear;
    font-family: 'Bebas Neue', cursive;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 1.6rem;
    height: 100vh;
  }
  nav{
    font-size: 2rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    a{
      color: white;
    }
  }
  .container {
    height: 100vh;
    width: clamp(320px, 100%, 500px);
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    background: ${({ theme }) => theme.bgBody};
    transition: all 0.5s linear;
    position: relative;
  }
  main{
    /* padding: 0 1rem; */
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    flex: 1;
    row-gap: 1rem;
    border: 1px solid black;
    margin: 0 1rem 1rem 1rem;
  }
  p {
			font-family: 'Montserrat', sans-serif;
  }

  h3{
    color: ${({ theme }) => theme.syntax};
  }
  button{
    border: none;
    outline: none;
    font-family: 'Bebas Neue', cursive;
	letter-spacing: 2px;
	font-size: 2.4rem;
	padding: 0.5rem 1rem;
	background-color: ${({ theme }) => theme.bgChosen};
	border: 1px solid ${({ theme }) => theme.btnBorder};
	border-radius: 5px;
	color: ${({ theme }) => theme.syntax};
	cursor: pointer;
	border: none;
	width: 100%;

  }
.hide{
  display: none !important;
}
`;
