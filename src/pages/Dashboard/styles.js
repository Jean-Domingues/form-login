import styled from 'styled-components';

export const Button = styled.button`
  margin-top: 30px;
  padding: 10px;

  font-size: 1.4rem;
  font-weight: bold;

  height: 3rem;
  width: 6rem;

  border: none;
  border-radius: 10px;

  color: var(--title);
  background-color: var(--primary);

  transition: all .2s;

  &:hover {
    background-color: #9dbeb9;
  }
`