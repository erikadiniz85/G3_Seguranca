import styled from "styled-components";

export const ServicosStyled = styled.div`
  .servicos {
    width: 100%;
    display: flex;
    margin-top: 3rem;


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
