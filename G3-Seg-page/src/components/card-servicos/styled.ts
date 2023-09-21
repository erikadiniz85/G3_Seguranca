import styled from "styled-components";

export const CardServicosStyle = styled.div`

  .card_servicos {
    width: 100%;
    display: flex;
    gap: 3.5%;

  }

  .servicos_col_1 {
    display: flex;
    width: 50%;
    flex-direction: column;
    
  }

  .servicos_col_2 {
    display: flex;
    width: 50%;
    flex-direction: column;
  }

  .card {
    width: 19.25rem;
    height: 19.063rem;
    background: #2C2C2C;
    box-shadow: 0px 0px 12px rgba(255, 255, 255, 0.12);
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    z-index: -5;
    margin-bottom: 1.5rem;
    
  }

  .img-card-servicos {
    position: absolute;
    z-index: -4;
    
  }

  .icon-card-servicos {
    width: 1.25rem;
    height: auto;
    position: absolute;
    z-index: -2;
    margin-top: 9.1rem;
    margin-left: 2.156rem;
    
  }

  .gray-ellipse {
    background: linear-gradient(180deg, #2f5464 0%, #1c4354 100%);
    position: absolute;
    z-index: -3;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    margin-top: 8.5rem;
    margin-left: 1.5rem;

  }

  .title-card-servicos {
    width: 16.25rem;
    color: #ffffff;
    font-style:normal;
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    margin-top: 12.688rem;
    display: flex;
    margin-left: 1.5rem;
  }


  /* @media only screen and (max-width: 1023px) {
    .card_servicos {
      padding-left: 0rem;
    }
  } */
`;
