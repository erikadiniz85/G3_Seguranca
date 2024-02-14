import styled from "styled-components";

export const ConhecaMaisStyled = styled.div`
  .conheca-mais {
    width: 100%;
    text-decoration: none;
    color: #fd7a1e;
    font-style: normal;
    font-size: 16px;
    font-weight: 700;
    line-height: 30px;
    letter-spacing: 0em;
    background: transparent;
    border: 2px solid #fd7a1e;
    padding: 0.75rem 1rem;
  }


  @media (min-width: 320px) and (max-width: 767px) {
    .conheca-mais {
    width: 100%;
    text-decoration: none;
    color: #ffffff;
    font-size: 16px;
    font-weight: 700;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: left;
    background-color: #fd7a1e;
    border: 2px solid #fd7a1e;
    padding: 0.75rem 1rem;
    }
  }

`;
