import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Lexend:wght@100;200;300;400;500;600;700;800;900&display=swap');
:root {
  --white: #FFFFFF;
  --black: #000000;
  --gray: #2C2C2C;
  --orange: #FD7A1E;
  --orange-light: #F9B32A;
}

* {
  margin: 0;
  padding: 0;
  font-family: 'Lexend', sans-serif;
  box-sizing: border-box;
}

body {
  background-color: #242424;
  width: 100%;
}

button {
  cursor: pointer;
  }

`;
