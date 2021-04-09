import styled from 'styled-components';

export const UserPhoto = styled.header`
  position: absolute;
  top: -20%;
  left: 50%;

  img { 
    border-radius: 50%;
    width: 150px;
    transform: translateX(-50%);
  }
`;

export const FormContainer = styled.main`
  background-color: transparent;

  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;

  padding: 15px;
  height: 400px;
  width: 380px;

  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    div.error-box {
      font-style: italic;
      font-size: 1rem;
      color: var(--error);
    }

    label {
      width: 100%;
      font-size: 1.2rem;
    }

    input {
      margin-bottom: 15px;
      margin-top: 5px;
      padding: 8px;
      font-size: 1.2rem;

      border: none;
      border-radius: 8px;

      width: 100%;
      height: 36px;
    }

    button {
      width: 50%;
      height: 40px;

      position: absolute;
      bottom: 40px;

      border: none;
      border-radius: 8px;
      font: 1.4rem 'Ubuntu', sans-serif;
    }

    button:hover {
      filter: brightness(0.9);
    }
  }
`;
