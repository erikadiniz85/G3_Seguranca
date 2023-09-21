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
    padding-bottom: 6.44rem;
    
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
    font-size: 2.1875rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-top: 5.94rem;
    
  }

  .prevencao-card-p {
    color: #f9b32a; 
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    width: 45rem;
    margin-top: 1rem;
    text-align: center;
  }

  @media only screen and (max-width: 1023px) {
    .prevencao-card-p {
      width: 75%;
    }
  }
 
`;
