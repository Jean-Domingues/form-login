import styled from 'styled-components';

export const UserPhoto = styled.header`
  position: absolute;
  top: -20%;
  left: 50%;

  img {
    border-radius: 50%;
    width: 150px;
    transform: translateX(-50%)
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;

  padding: 15px;
  height: 400px;
  width: 380px;

  border-radius: 20px;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    label {
      width: 100%;
      font-size: 1.2rem;
    }

    input {
      margin-bottom: 15px;
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
      bottom: 30px;

      font: 1.4rem 'Roboto', sans-serif;
    }
  }
`;
