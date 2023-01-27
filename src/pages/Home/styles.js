import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 5px solid;
  border-radius: 20px;
  height: 100vh;
  background: #AEE2FF;

  .informations {
    display: flex;
    width: 100%;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    h1 {
      font-size: 24px;
      font-weight: bold;
    }

    h2 {
      font-size: 20px;
      margin: 5px;
    }

    p {
      margin: 5px;
    }

    img {
      width: 150px;
    }

    .more-informations {
      display: flex;
      flex-direction: row;
      justify-content: center;
      margin: 5px;
      width: 100%;

      h2 {
        border: 2px solid;
        border-radius: 5px;
        padding: 10px;
        margin: 5px;
        font-size: 16px;
        text-align: center;
      }
  }
  }


`;
