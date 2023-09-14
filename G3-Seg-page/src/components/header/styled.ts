import styled from "styled-components";
import backgroundHeader from "../../assets/img/background-inicio.svg";

export const HeaderStyled = styled.div`
  .header {
    background-image: url(${backgroundHeader});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
  }

  @media only screen and (max-width: 320px) {
    .header {
      background: #242424;
    }
  }
`;
