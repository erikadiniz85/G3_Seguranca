import styled from "styled-components";
import bg_img_servicos from "../../assets/img/img_bg_servicos.svg";

export const ServicosStyled = styled.div`
  #servicos {
    width: auto;
    height: auto;
    background-image: url(${bg_img_servicos});
    background-image: opacity(0.1);
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: row;
    padding: 3rem 9rem;
  }

  .texto-servicos {
    width: 40%;
    display: flex;
    flex-direction: column;
    color: #f9b32a;
  }

  .coluna-servicos {
    width: 60%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: flex-end;
  }

  .h2-servicos {
    color: #f9b32a;
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    width: 100%;
  }

  .p-servicos {
    color: #f9b32a;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 1rem;
    width: 100%;
  }

  .btn-servicos {
    margin-top: 1rem;
  }

  /*  Celulares  */
  @media (min-width: 320px) and (max-width: 767px) {
    #servicos {
      width: auto;
      height: auto;
      padding: 1rem 1rem;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .texto-servicos {
      width: 100%;
      display: flex;
      flex-direction: column;
      color: #f9b32a;
    }

    .coluna-servicos {
      width: 100%;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      margin-top: 2rem;
    }

    .h2-servicos {
      color: #f9b32a;
      font-size: 36px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      width: 100%;
    }

    .p-servicos {
      color: #f9b32a;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      margin-top: 1rem;
      width: 100%;
    }

    .btn-servicos {
      margin-top: 1rem;
    }
  }

  /* Tablets */
  @media (min-width: 768px) and (max-width: 1024px) {
    #servicos {
      
      padding: 3rem 3rem;
      flex-direction: row;
    }

    .texto-servicos {
      margin-right: 2rem;
    }
  }


  /* Desktop */
  @media (min-width: 1025px) {
    .servicos {
      display: flex;
      justify-content: center;
    }

    .texto-servicos {
      margin-right: 2rem;
    }
  }
`;
