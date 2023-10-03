import styled from "styled-components";
import backgroundHistoria from "../../assets/img/background-historia.svg";

export const HistoriaG3Styled = styled.div`
  .historia {
    width: auto;
    height: auto;
    background-image: url(${backgroundHistoria});
    background-image: opacity(0.1);
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    padding: 3rem 9rem;
  }

  .historia-wrapper {
    width: 100%;
    height: auto;
    color: #f9b32a;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    padding-top: 6rem;
  }

  .img-hist-wrapper {
    width: 100%;
    height: auto;
    margin-top: 3rem;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    padding-bottom: 6rem;
  }

  .history-h3 {
    width: 30%;
  }

  .history-title {
    color: #f9b32a;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .acronym {
    width: 60%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }

  .history-acronym {
    color: #fff;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.3125rem;
    margin-bottom: 1.5rem;
  }

  .img-hist {
    width: 40%;
    margin-left: 1rem;
    height: auto;
    display: flex;
  }

  .history-acronym::first-letter {
  font-size: 20px;
  font-weight: bold;
  color: #f9b32a;
}



@media (min-width: 320px) and (max-width: 767px) {
  .historia {
    width: auto;
    display: flex;
    flex-direction: column;
    padding: 2rem 1rem;
  }

  .historia-wrapper {
    width: 100%;
    height: auto;
    color: #f9b32a;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    padding-top: 1rem;
  }

  .img-hist-wrapper {
    display: none;
  }

  .history-h3 {
    width: 100%;
  }

  .history-title {
    color: #f9b32a;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .acronym {
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin-top: 2rem;
  }

  .history-acronym {
    color: #fff;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.3125rem;
    margin-bottom: 1.5rem;
  }

  .history-acronym::first-letter {
  font-size: 18px;
  font-weight: bold;
  color: #f9b32a;
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
  .historia {
    width: auto;
    display: flex;
    flex-direction: column;
    padding: 3rem 3rem;
  }

  .historia-wrapper {
    width: 100%;
    height: auto;
    color: #f9b32a;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    padding-top: 1rem;
  }

  .img-hist-wrapper {
    display: none;
  }

  .history-h3 {
    width: 100%;
  }

  .history-title {
    color: #f9b32a;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .acronym {
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin-top: 2rem;
  }

  .history-acronym {
    color: #fff;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.3125rem;
    margin-bottom: 1.5rem;
  }


  .history-acronym::first-letter {
  font-size: 18px;
  font-weight: bold;
  color: #f9b32a;
}
}

/* Desktop */
/* @media (min-width: 1025px) {
  
      background-size: cover;
      width: auto;
      height: auto;
      display: flex;
      justify-content: center;
      padding: 1rem 9rem;
    
  } */
`;
