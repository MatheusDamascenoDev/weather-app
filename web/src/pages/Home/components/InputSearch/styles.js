import styled from 'styled-components';

export const Container = styled.div`
  width: 268px;
  display: flex;

  input {
    width: 100%;
    background: #BFBFBF;;
    border: none;
    border-radius: 5px 0px 0px 5px;
    height: 50px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
    outline: 0;
    padding: 0 16px;

    &::placeholder {
      color: #BCBCBC;
    }
  }

  .SearchIconButton {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30%;
    height: 50px;
    border-radius: 0px 5px 5px 0px;
    cursor: pointer;
    border: 1px solid #817E7E;

    background: #817E7E;

    img {
      width: 24px;
      height: 24px;

      color: #D4E5F7;
    }
  }

`;
