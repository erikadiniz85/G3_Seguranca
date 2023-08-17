import styled from "styled-components";
import bg_img_servicos from "../../assets/img/img_bg_servicos.svg";

export const ServicosStyled = styled.div`
  .servicos {
    width: 100%;
    height: auto;
    /* background: rgba(36, 36, 36, 0.5); */
    background-image: url(${bg_img_servicos});
    /* background-image: linear-gradient(left rgba(36,36,36,0));*/
    background-image: opacity(0.1); 
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    margin-top: 6rem;
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
`;
