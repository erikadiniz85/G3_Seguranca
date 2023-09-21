import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Lexend:wght@100;200;300;400;500;600;700;800;900&display=swap');

  body {
    background: #242424;
    /* width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap; */
    
  }

  @media (max-width: 1023px) {
    body {
      width: 100%;
      background-color: aquamarine;
      /* display:flex;
      flex-direction: column;
      flex-wrap: wrap;
      align-items: flex-start;
      justify-content: center; */
    }
  }
  

  *{
    font-family: 'Lexend', sans-serif;
    margin: 0;
    padding: 0;
  }

  button {
    cursor: pointer;
  }

`;

export default GlobalStyle;
