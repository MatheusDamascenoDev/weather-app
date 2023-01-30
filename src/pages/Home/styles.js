import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 5px solid;
  border-radius: 1.25rem;
  height: 98vh;
  background: #AEE2FF;

  .informations {
    display: flex;
    width: 100%;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    h1 {
      font-size: 1.5rem;
      font-weight: bold;
    }

    h2 {
      font-size: 1.25rem;
      margin: 0.3125rem;
    }

    p {
      margin: 0.3125rem;
    }

    img {
      width: 9.375rem;
    }

    .more-informations {
      display: flex;
      flex-direction: row;
      justify-content: center;
      width: 100%;

      h2 {
        border: 2px solid;
        border-radius: 0.3125rem;
        padding: 0.625rem;
        margin: 5px;
        font-size: 1rem;
        text-align: center;
      }
  }
  }


`;
