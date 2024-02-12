import styled from "styled-components";

export const ButtonsStyle = styled.div`
  .buttons-navbar {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .btn-nav {
    color: #fd7a1e;
    border: none;
    background-color: transparent;
    font-weight: 700;
    font-size: 16px;
    line-height: 30px;
    text-decoration: none;
  }

  .btn-contato-nav {
    color: #ffffff;
    background-color: #fd7a1e;
    padding: 0.75rem 1rem;
    text-decoration: none;
    font-size: 16px;
    font-weight: 700;
    line-height: 30px;
  }

  /*  Celulares  */
  @media (min-width: 320px) and (max-width: 767px) {
    .buttons-navbar {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
  }

  /* Tablets */
  @media (min-width: 768px) and (max-width: 1024px) {
    .buttons-navbar {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  }

  /* Desktop */
  @media (min-width: 1025px) {
    .buttons-navbar {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    }

    .btn-nav {
    }

    .btn-contato-nav {
    }
  }
`;
