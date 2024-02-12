import styled from "styled-components";
export const CardPrevencaoStyle = styled.div`
  .prevencao-wrapper {
    width: auto;
    height: auto;
    list-style: none;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin-top: 3rem;
  }

  .prevencao-list {
    width: 33%;
    border-radius: 1rem;
    background: #262626;
    display: flex;
    align-items: center;
    justify-content: start;
    color: #ffffff;
    font-size: 16px;
    font-weight: 700;
    line-height: 1.5rem;
    margin: 0.5rem;
    padding: 2.38rem 3.81rem 2.37rem 1.5rem;
  }

  .row-1 {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
  }

  .row-2 {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
  }

  // Mobile

  @media (min-width: 320px) and (max-width: 767px) {
    .prevencao-wrapper {
      width: auto;
      height: auto;
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      margin-top: 2rem;
    }

    .prevencao-list {
      width: 7.5rem;
      height: 5.4rem;
      display: flex;
      flex-direction: row;
      align-content: center;
      justify-content: center;
      padding: 1rem;
      font-size: 14px;
    }

    .icon {
      width: 2rem;
      height: 2rem;
      margin-right: 0.5rem;
    }


    .row-1 {
      width: auto;
      height: auto;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-content: center;
    }

    .row-2 {
      width: auto;
      height: auto;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      align-content: center;
    }
  }
`;
