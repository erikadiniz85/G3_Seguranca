import styled from "styled-components";

export const Section_contato_Styles = styled.div`
  .section_contato {
    width: 100%;
    background: #242424;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-top: 6rem;
    padding-bottom: 2rem;
  }

  .txt_contato_form {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 14rem;
    color: #f9b32a;
    padding-right: 6.5rem;
    padding-bottom: 6rem;
  }

  .title_contato_form {
    font-size: 2.1875rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .p_contato_form {
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  // Mobile

  @media (min-width: 320px) and (max-width: 767px){
    .section_contato {
      width: 90%;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      justify-content: flex-start;
      padding: 1rem;
    }

    #formulario {
      width: 100%;
      padding: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 2rem;
    }

    .title_contato_form{
      font-size: 26px;
      width: 100%;
    }

    .p_contato_form {
      width: 100%;
      font-size: 14px;
      margin-top: 1rem;
      display: flex;
    }

  

  }

  
`;
