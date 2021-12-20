import styled from 'styled-components';

export const Container = styled.header`
  margin-top: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const InputSearchContainer = styled.div`
  margin-top: 48px;
  width: 100%;


  input {
    border: 0;
    width: 100%;
    border-radius: 25px;
    background: #fff;
    height: 50px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.04);
    outline: 0;
    padding: 0 16px;

    &::placeholder {
      color: #BCBCBC;
    }
  }

`;
