import styled from "styled-components";
import img_card_prevencao from "../../assets/img/img-card-prev.svg";
export const PrevencaoStyle = styled.div`
  #prevencao {
    width: auto;
    height: auto;
    background-image: url(${img_card_prevencao});
    background-repeat: no-repeat;
    background-size: cover;
    background-blend-mode: lighten;
    padding: 6rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .prevencao-card-text {
    width: 100%;
    height: auto;
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
    text-align: center;
    margin-top: 1rem;
  }

  .prevencao-card-wrapper {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;

  }

  
  /* Mobile */
  @media (min-width: 320px) and (max-width: 767px) {

    #prevencao {
    width: auto;
    height: auto;
    background-size: cover;
    padding: 3rem 1rem;
    display: flex;
    flex-direction: column;
    align-content: center;
  }

  .prevencao-card-text {
    width:100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
  }

  .prevencao-card-h3 {
    color: #f9b32a;
    text-align: center;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .prevencao-card-p {
    color: #f9b32a;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 1rem;
    text-align: center;
  }

  .prevencao-card-wrapper {
    width: auto;
    height: auto;
    display: flex;
    justify-content: center;

  }

  }

  /* Tablet */
  @media (min-width: 768px) and (max-width: 1024px) {


  }

  /* Desktop */
  @media (min-width: 1025px) {

  }
`;
