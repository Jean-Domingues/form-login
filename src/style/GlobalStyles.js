import styled, { createGlobalStyle, keyframes, css } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    outline: 0;
  }

  :root {
    --bg-secondary: #7C7C7C;
    --text: #FFFBFC;
    --title: #f3f3f3;
    --dark-text: #352D39;
    --primary: #28b5b5;
    --secondary: #E1E2EF;
    --error: #BF3100;
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
    background: linear-gradient(rgba(68,138,147,1) 0%, rgba(112,112,112,1) 100%);
    color: var(--text);
    
    font: 500 1rem 'Ubuntu', sans-serif;
  }

  .app-container {
    height: 100vh;
    width: 100vw;
    
    font-size: 1.6rem;

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center
  }
`;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
    }
  100% {
    transform: rotate(360deg);
    }
`;

export const Loader = styled.div`
  display: inline-block;
  border: ${(props) => props.border} solid var(--dark-text);
  border-radius: 50%;
  border-top: ${(props) => props.border} solid #fff;
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  animation: ${spin} 2s linear infinite;

  ${(props) =>
    props.margin &&
    css`
      margin-left: ${props.margin};
    `}
`;

export default GlobalStyles;
