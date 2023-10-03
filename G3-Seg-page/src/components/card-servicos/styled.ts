import styled from "styled-components";

export const CardServicosStyle = styled.div`
  .card_servicos {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
  }

  .servicos_col_1 {
    width: 50%;
    display: flex;
    flex-direction: column;
  }

  .servicos_col_2 {
    width: 50%;
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
  }

  .card {
    width: 100%;
    height: auto;
    background: #2c2c2c;
    box-shadow: 0px 0px 12px rgba(255, 255, 255, 0.12);
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 0.5rem;
  }

  .img_card {
    width: 100%;
    height: auto;
  }

  .img-card-servicos {
    width: 100%;
    height: auto;
  }

  .h3_card_servicos {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
  }

  .center_card {
    margin-left: 1.5rem;
    width: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .icon-card-servicos {
    width: 1.25rem;
    height: auto;
    position: absolute;
    z-index: 1;
  }

  .gray-ellipse {
    background: linear-gradient(180deg, #2f5464 0%, #1c4354 100%);
    position: absolute;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
  }

  .title-card-servicos {
    color: #ffffff;
    font-style: normal;
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    margin: 3rem 1.5rem;
  }

  /*  Celulares  */
  @media (min-width: 320px) and (max-width: 767px) {
    .card_servicos {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
  }

  .servicos_col_1 {
    width: 50%;
    display: flex;
    flex-direction: column;
  }

  .servicos_col_2 {
    width: 50%;
    display: flex;
    flex-direction: column;

  }

  .img_card {
    width: 100%;
    height: auto;
  }

  .img-card-servicos {
    width: 100%;
    height: auto;
  }

  .center_card {
    margin-left: 1rem;
  }

  .title-card-servicos {
    color: #ffffff;
    font-style: normal;
    font-size: 14px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    margin: 2rem 1.5rem;
    }
  }

  /* Tablets */
  @media (min-width: 768px) and (max-width: 1024px) {
   
    .card_servicos {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
  }

  .servicos_col_1 {
    width: 50%;
    display: flex;
    flex-direction: column;
  }

  .servicos_col_2 {
    width: 50%;
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
  }

  .img_card {
    width: 100%;
    height: auto;
  }

  .img-card-servicos {
    width: 100%;
    height: auto;
  }

  .center_card {
    margin-left: 1rem;
  }

  .title-card-servicos {
    color: #ffffff;
    font-style: normal;
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    margin: 2rem 1.5rem;
    }
  }
  
`;
