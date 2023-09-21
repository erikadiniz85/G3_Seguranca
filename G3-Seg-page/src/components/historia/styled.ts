import styled from "styled-components";
import backgroundHistoria from "../../assets/img/background-historia.svg";

export const HistoriaG3Styled = styled.div`
  .historia {
    background-image: url(${backgroundHistoria});
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: auto;
  }

  .historia-wrapper {
    width: 100%;
    height: auto;
    color: #f9b32a;
    display: flex;
    /* flex-direction: row; */
    flex-wrap: wrap;
    justify-content: center;
    /* align-items: flex-start; */
    padding-top: 6rem;
  }

  .history-title {
    width: 19.25rem;
    color: #f9b32a;
    font-size: 2.1875rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .acronym {
    width: 30rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .history-acronym {
    color: #fff;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.3125rem;
    margin-bottom: 1.5rem;
  }

  .img-hist-wrapper {
    width: 100%;
    margin-top: 3rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-bottom: 6rem;
  }

  .img-hist {
    width: 19.25rem;
    height: 14.25rem;
    display: flex;
    margin-left: 1.5rem;
  }

  .history-acronym::first-letter {
  font-size: 18px;
  font-weight: bold;
  color: #f9b32a;
}

  @media only screen and (max-width: 1023px) {
    .historia {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
    }

    .historia-wrapper {
      display: flex;
      flex-direction: column;
      padding-left: 6rem;
    }

    .history-title {
      width: 100%;
      padding-bottom: 2rem;
      padding-left: 6rem;
    }

    .acronym {
      width: 80%;
    }

    .img-hist-wrapper {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
    }

    .img-hist {
      margin-bottom: 1.5rem;
    }
  }
`;
