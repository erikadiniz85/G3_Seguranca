import styled from "styled-components";
import backgroundHeader from "../../assets/img/background-inicio.svg"

export const HeaderStyled = styled.div`
    .header {
        background-image: url(${backgroundHeader});
        width: 100%;
        height: auto;
        background-size: contain;
        
    }

    @media only screen and (max-width: 320px) {
  .header {
    background-color: salmon; /*voltar tom original */
  }
}
`