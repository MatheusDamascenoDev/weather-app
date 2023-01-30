import styled from 'styled-components';

export const Container = styled.div`
  width: 268px;
  display: flex;

  input {
    width: 100%;
    background: #BFBFBF;;
    border: none;
    border-radius: 0.3125rem 0px 0px 0.3125rem;
    height: 3.125rem;
    box-shadow: 0px 0.25rem 0.625rem rgba(0, 0, 0, 0.04);
    outline: 0;
    padding: 0 1rem;

    &::placeholder {
      color: #BCBCBC;
    }
  }

  .SearchIconButton {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30%;
    height: 3.125rem;
    border-radius: 0px 0.3125rem 0.3125rem 0px;
    cursor: pointer;
    border: 1px solid #817E7E;

    background: #817E7E;

    img {
      width: 1.5rem;
      height: 1.5rem;

      color: #D4E5F7;
    }
  }

`;
