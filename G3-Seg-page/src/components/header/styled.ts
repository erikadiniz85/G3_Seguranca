import styled from "styled-components";
import backgroundHeader from "../../assets/img/background-inicio.svg";

export const HeaderStyled = styled.div`
  .header {
    background-image: url(${backgroundHeader});
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
  }

  
  /*  Celulares  */
  @media (min-width: 320px) and (max-width: 767px) {
    .header {
      width: 100%;
      background-color: pink; // retirar
      background-size: cover;
      padding-bottom: 3rem;
      padding-left: 6rem;
      display: flex;
    }
  }


  /* Tablets */
  @media (min-width: 768px) and (max-width: 1024px) {
    .header {
      width: 100%;
      background-color: aqua; //retirar
      background-size: cover;
      padding-bottom: 3rem;
      padding-left: 3rem;
      display: flex;
    }
  }


  /* Desktop */
  @media (min-width: 1025px) {
    .header {
      width: 100%;
      background-color: greenyellow; // retirar após teste
      display: flex;
      justify-content: center;
      background-size: cover;
      padding-bottom: 3rem;
      padding-left: 6rem;
    }
  }
  
 

 
`;
