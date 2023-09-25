import styled from "styled-components";
export const CardPrevencaoStyle = styled.div`

  .prevencao-wrapper {
    width: 100%;
    list-style: none;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 3rem;
  }

  .prevencao-list {
    border-radius: 1rem;
    background: #262626;
    display: flex;
    align-items: center;
    width: auto;
    justify-content: start;
    color: #ffffff;
    font-size: 16px;
    font-weight: 700;
    line-height: 1.5rem;
    width: 19.25rem;
    margin-bottom: 1.5rem;
    padding-left: 1rem;
    padding-top: 1.63rem;
    padding-bottom: 1.63rem;
  }

  .column {
    width:20rem;
    display: flex;
    flex-direction: column;
    margin-right: 1.5rem;
  }

  @media only screen and (max-width: 1023px) {
    .prevencao-wrapper {
      width:80%;
      display: flex;
      flex-direction: column;
      
    }

    .column {
    display: flex;
    flex-direction: row;
    width: 100%;
    
  }

  .prevencao-list {
    margin-right: 1.5rem;
  }
  }
`;
