// src/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background-color: #f5f5f5;
    color: #333;
    overflow: hidden; /* Prevent scrollbars from showing */
    
  cursor: none;

  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: bold;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }
`;

export default GlobalStyles;
