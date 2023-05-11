import styled from "styled-components";

export const CardServicosStyle = styled.div`
  .card_serviços {
    margin-left: 30px;
    margin-bottom: 30px;
    display: flex;
  }

  .card {
    width: 19.25rem;
    height: 19.063rem;
    box-shadow: 0px 0px 12px rgba(255, 255, 255, 0.12);
    margin-top: 5.438rem;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    margin-bottom: 30px;
    margin-left: 30px;
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
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    position: absolute;
    z-index: 1;
    margin-top: 12.688rem;
    display: flex;
    justify-content: center;
    
  }
`;
