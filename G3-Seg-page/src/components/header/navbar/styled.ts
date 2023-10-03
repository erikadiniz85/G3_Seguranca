import styled from "styled-components";

export const NavbarStyle = styled.div`
  .navbar {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
  }

  .nav-logo-header {
    width: 50%;
  }

  .nav-btn-header {
    width: 50%;
  }


  /*  Celulares  */
  @media (min-width: 320px) and (max-width: 767px) {
    .navbar {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    .nav-logo-header {
    width: 100%;
  }

  .nav-btn-header {
    width: 100%;
  }

    .logo-header {
      margin-bottom: 1rem;
    }
  }

  /* Tablets */
  @media (min-width: 768px) and (max-width: 1024px) {
    .navbar {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;

    }

    .nav-logo-header {
      width: 50%;
    }

    .logo-header {
      width: 70%;
    }

    .nav-btn-header {
      width: 50%;
    }
  }

    /* Desktop */
    @media (min-width: 1025px) {
    .navbar {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    .nav-logo-header {
      width: 50%;
    }

    .logo-header {
      width: 30%;
    }

    .nav-btn-header {
      width: 50%;
    }
  }
`;
