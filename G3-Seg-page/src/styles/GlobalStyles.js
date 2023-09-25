import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Lexend:wght@100;200;300;400;500;600;700;800;900&display=swap');

  body {
    background: #242424;
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }
  
  *{
    font-family: 'Lexend', sans-serif;
    margin: 0;
    padding: 0;
  }
  
  button {
    cursor: pointer;
  }


  /* body::-webkit-scrollbar {
  width: 12px;              
}

body::-webkit-scrollbar-track {
  background: #242424;       
}

body::-webkit-scrollbar-thumb {
  background-color: #242424;   
  border-radius: 20px;       
  border: 3px solid #242424;  
} */
  
  @media (max-width: 1023px) {
    body {
      width: 100%;
      background-color: #242424;
      display:flex;
      flex-direction: column;
      flex-wrap: wrap;
      align-items: flex-start;
      justify-content: center;
    }
  }

  
`;

export default GlobalStyle;
