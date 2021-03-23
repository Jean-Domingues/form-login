import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    outline: 0;
  }

  :root {
    --bg-primary: #363537;
    --bg-secondary: #625F63;
    --text: #CCC9DC;
    --title: #f3f3f3;
    --dark-text: #352D39;
    --primary: #324A5F;
    --secondary: #E1E2EF;
  }

  html, body, #root {
    height: 100vh;
  }

  button {
    background-color: var(--secondary);
    color: var(--dark-text);
    cursor: pointer;
  }

  body {
    font-size: 62.5%; // 1rem = 10px
    background-color: var(--bg-primary);
    color: var(--text);
    
    font: 500 1rem 'Ubuntu', sans-serif;
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
