import styled from "styled-components";
import img_card_prevencao from "../../assets/img/img-card-prev.svg";
export const PrevencaoStyle = styled.div`
  .prevencao-card-geral {
    width: 100%;
    height: auto;
    background-image: url(${img_card_prevencao});
    background-repeat: no-repeat;
    background-size: cover;
    background-blend-mode: lighten;
    padding-top: 6rem;
    padding-bottom: 6rem;
    display: flex;
    flex-direction: column;
    align-content: center;
  }

  .prevencao-card-text {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
  }

  .prevencao-card-h3 {
    color: #f9b32a;
    text-align: center;
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .prevencao-card-p {
    color: #f9b32a;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    width: 45rem;
    margin-top: 1rem;
    text-align: center;
  }

  /* .prevencao-card-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
  } */

  //media query

  @media only screen and (max-width: 1023px) {
    .prevencao-card-geral {
      width: 100%;
      padding-left: 6rem;
      padding-top: 3rem;
      padding-bottom: 3rem;
      background-size: cover;
      display: flex;
    }

    .prevencao-card-text {
      display: flex;
      align-content: flex-start;
      align-items: flex-start;
    }

    .prevencao-card-wrapper {
      width: 100%;
      display: flex;
    }
  }
`;
