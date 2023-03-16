import styled from 'styled-components';

export const Wrapper = styled.div`
  text-align: center;
  width: 80%;
  margin: 0 auto;
  margin-top: 5%;
`;

export const Button = styled.button`
  max-width: 580px;
  background-color: #1d9bf0;
  font-size: 1em;
  color: #fff;
  margin: 1em;
  padding: 2.5% 5%;
  border: none;
`;

export const Input = styled.input`
  min-width: 40%;
  border: 3px solid #1d9bf0;
  margin: 0.5em;
  flex-basis: 50%;
  padding: 2.5% 3%;
  ::placeholder {
    color: #1d9bf0;
  }
  :focus {
    outline: none;
  }
`;