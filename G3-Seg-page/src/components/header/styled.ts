import styled from "styled-components";
import backgroundHeader from "../../assets/img/background-inicio.svg";

export const HeaderStyled = styled.div`
  .header {
    background-image: url(${backgroundHeader});
    background-repeat: no-repeat;
    background-size: cover;
    width: auto;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-content: center;
    padding: 1rem 9rem;
  }

  .header-1 {
    width: 30%;
  }

  .header-2{
    width: 70%;
  }


  /*  Celulares  */
  @media (min-width: 320px) and (max-width: 767px) {
    .header {
      width: auto;
      height: auto;
      background-size: cover;
      padding: 1rem 1rem 3rem 1rem;
      display: flex;
      justify-content: center;
    }
  
    
  }

  /* Tablets */
  @media (min-width: 768px) and (max-width: 1024px) {
    .header {
      width: auto;
      height: auto;
      background-size: cover;
      padding: 1rem 3rem 3rem 3rem;
      display: flex;
      justify-content: center;
    }

  }
 

  /* Desktop */
  @media (min-width: 1025px) {
    .header {
      width: auto;
      height: auto;
      display: flex;
      justify-content: center;
      background-size: cover;
      padding: 1rem 9rem;
    }
  }
`;
