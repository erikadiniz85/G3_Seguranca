import styled from "styled-components";
import backgroundHeader from "../../assets/img/background-inicio.svg"

export const HeaderStyled = styled.div`
    .header {
        background-image: url(${backgroundHeader});
        width: 100%;
        height: auto;
        background-size: contain;
        display: flex;
        flex-direction: column;
        
    }

    @media only screen and (max-width: 320px) {
  .header {
    background: #242424;
  }
}
`