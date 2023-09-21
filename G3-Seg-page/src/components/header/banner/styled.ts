import styled from "styled-components";

export const BannerStyled = styled.div`
  .banner-header {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
  }

  .header-text {
    width: 32.125rem;
    color: #ffffff;
    margin-top: 7.625rem;
    margin-bottom: 7rem;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
  }

  .header-subtitle {
    font-size: 48px;
    font-weight: 700;
    line-height: 60px;
    letter-spacing: 0em;
    text-align: left;
  }

  .header-paragraph {
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
    margin-top: 1.5rem;
  }

  .btn-header-2 {
    margin-top: 1.5rem;
    display: flex;
  }

  .btn-conheca {
    background: transparent;
    border: 2px solid #fd7a1e;
    color: #fd7a1e;
    padding: 0.75rem 1rem;
    margin-left: 1.875rem;
    font-size: 16px;
    font-weight: 700;
    line-height: 30px;
    letter-spacing: 0em;
  }

  .btn-go-segmentacao {
    text-decoration: none;
    color: #fd7a1e;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.875rem; /* 187.5% */
  }

  .header-image {
    width: 29.625rem;
    height: 16.688rem;
    margin-top: 12.188rem;
  }


  @media only screen and (max-width: 1023px) {
    .banner-header {
      display: flex;
      flex-direction: column;
    }

    .header-text {
      width: auto;
      display: flex;
      margin-left: 6rem;
    }

    .header-image { //conferir 
      margin-top: 2rem;
      margin-left: 6rem;
      
    }
  }
`;
