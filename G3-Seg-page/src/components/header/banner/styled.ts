import styled from "styled-components";

export const BannerStyled = styled.div`
  .banner-header {
    width: 100%;
    height: auto;
    margin-top: 7rem;
    display: flex;
    flex-direction: row;
  }

  .header-text {
    width: 60%;
    color: #ffffff;
    display: flex;
    flex-direction: column;
  }

  .header-image {
    width: 40%;
    height: auto;
    display: flex;
    justify-content: flex-end;
  }

  .header-subtitle {
    width: 100%;
    font-size: 48px;
    font-weight: 700;
    line-height: 60px;
    letter-spacing: 0em;
    text-align: left;
  }

  .header-paragraph {
    width: 100%;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
    margin-top: 1.5rem;
  }

  .btn-header-2 {
    width: 50%;
    display: flex;
    margin-bottom: 1rem;
  }

  .btn-comece-header {
    margin-right: 1.9rem;
  }

  /*  Celulares  */
  @media (min-width: 320px) and (max-width: 767px) {
    .banner-header {
      margin-top: 3rem;
      display: flex;
      flex-direction: column;
      width: 100%;
      flex-wrap: wrap;
      align-content: flex-start;
    }

    .header-text {
      margin-bottom: 2rem;
      width: 100%;

    }

    .header-subtitle {
      font-size: 24px;
      font-weight: 700;
      line-height: 30px;
      letter-spacing: 0em;
      text-align: left;
    }

    .header-paragraph {
      font-size: 16px;
      font-weight: 400;
      line-height: 20px;
      letter-spacing: 0em;
      text-align: left;
      margin-top: 1rem;
    }

    .header-image {
      width: 100%;
      height: auto;
      display: flex;
      justify-content: flex-start;
      margin-bottom:1rem;
    }

    .img-banner {
      width: 90%;
    }

    .btn-header-2 {
      width: 100%;
      display: flex;
      flex-direction: column;
      margin-top: 2rem;
    }

    .btn-comece-header {
      margin-bottom: 2rem;
    }

    .btn-conheca-header {
      width: 100%;
      display: flex;
    }

  }

  /* Tablets */
  @media (min-width: 768px) and (max-width: 1024px) {
    .banner-header {
      width: 100%;
      height: auto;
      margin-top: 1rem;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-items: center;
    }

    .header-text {
      width: 50%;
      height: auto;
      margin-bottom: 2rem;
      display: flex;
    }

    .header-image {
      width: 50%;
      height: auto;
      display: flex;
      justify-content: flex-end;
    }

    .header-paragraph {
      width: 90%;
    }

    .img-banner {
      width: 100%;
    }

    .btn-header-2 {
      width: 100%;
      margin-top: 1rem;
      margin-bottom: 1rem;
      display: flex;
    }
  }

  // Desktop
  @media (min-width: 1025px) {
    .banner-header {
      width: 100%;
      height: auto;
      margin-top: 1rem;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-items: center;
    }

    .header-text {
      width: 50%;
      height: auto;
      margin-bottom: 5rem;
      display: flex;
    }

    .header-image {
      width: 50%;
      height: auto;
      display: flex;
      justify-content: flex-end;
    }

    .header-paragraph {
      width: 90%;
    }

    .img-banner {
      width: 90%;
    }

    .btn-header-2 {
      
      width: 100%;
      margin-top: -1rem;
      margin-bottom: 1rem;
      display: flex;
    }
  }
`;
