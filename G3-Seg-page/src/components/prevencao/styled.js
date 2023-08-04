import styled from "styled-components";
import backgroundPrevencao from "../../assets/img/i-stock-12633162971.svg";

export const PrevencaoStyle = styled.div`
  .prevencao-card-geral {
    /* background-image: url(${backgroundPrevencao}); */
    background-color: green;
    width: 100%;
    height: auto;
    /* display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        align-content: space-around; */
    
  }

  .prevencao-card-text {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    
  }

  .prevencao-card-h3 {
    color: #f9b32a;
    text-align: center;
    font-size: 2.1875rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-top: 5.94rem;
    
  }

  .prevencao-card-p {
    color: #f9b32a; 
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    width: 45rem;
    margin-top: 1rem;
    text-align: center;
  }

 
`;
