import styled from "styled-components";

export const Section_contato_Styles = styled.div`
  .section_contato {
    background: #242424;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 6rem;
  }

  .txt_contato_form {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 14rem;
    color: #f9b32a;
    margin-right: 6.5rem;
    margin-bottom: 6rem;
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

  @media only screen and (max-width: 1023px) {
    .section_contato {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: flex-start;
      padding-left: 6rem;
    }

    .txt_contato_form {
      width: 100%;
      margin-bottom: 2rem;
    }
  }
`;
