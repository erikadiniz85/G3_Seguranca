import styled from "styled-components";
import bg_img_servicos from "../../assets/img/img_bg_servicos.svg";

export const ServicosStyled = styled.div`
  .servicos {
    width: 100%;
    height: auto;
    background-image: url(${bg_img_servicos});
    background-image: opacity(0.1); 
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    padding-top: 6rem;
    display: flex;
    
  }

  .texto-servicos {
    /* width: 33%; */
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: flex-start;
    align-content: flex-end;
    color: #f9b32a;
    flex-grow: 3;
    z-index: 2;
  }

  .coluna-servicos {
    /* width: 66%; */
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: flex-start;
    align-content: flex-start;
    flex-grow: 3;
    margin-left: 3rem;
    z-index: 2;
  }

  .h2-servicos {
    color: #f9b32a;
    font-size: 35px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    width: 19.25rem;
  }

  .p-servicos {
    color: #f9b32a;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    width: 14.0625rem;
    margin-top: 1rem;
  }

  .btn-servicos {
    margin-bottom: 4.75rem;
  }


  @media only screen and (max-width: 1023px) {
    .servicos {
      width: 100%;
      background-size: cover;
      display: flex;
      flex-direction: column;
      padding-left: 6rem;
      padding-bottom: 2rem;
    }

    .texto-servicos {
      width: 80%;
      display: flex;
      align-content: flex-start;
      padding-bottom: 2rem;
    }

    .h2-servicos {
      width: 100%;
    }

    .p-servicos {
      width: 100%;
    }

    .coluna-servicos {
      margin-left: 0rem;
    }

  
  }
`;
