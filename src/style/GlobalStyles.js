import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html, body, #root {
    height: 100vh;
  }

  body {
    font-size: 62.5%; // 1rem = 10px
    background-color: #535353;
    color: #f3f3f3;
  }

  .app-container {
    height: 100vh;
    width: 100vw;
    
    font-size: 1.6rem;

    display: flex;
    align-items: center;
    justify-content: center
  }
`;

export default GlobalStyles;
