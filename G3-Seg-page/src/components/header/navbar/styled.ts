import styled from "styled-components";
import menu_hamb from "../../../assets/img/icones/burger-menu.svg";

export const NavbarStyle = styled.div`
  .navbar {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    list-style-type: none;
  }

  .nav-logo-header {
    width: 50%;
  }

  .nav-btn-header {
    width: 50%;
  }

  #btn-mobile {
    // para menu hamburguer
    /* display: none;  */
  }

  /*  Celulares  */
  @media (min-width: 320px) and (max-width: 767px) {
    .navbar {
      width: 100%;
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      align-items: center;
      justify-content: space-between;
    }

    #btn-mobile {
      width: 50px;
      height: 50px;
      display: block;
      padding: 2rem;
      background-color: transparent;
      border: none;
      background-image: url(${menu_hamb});
      background-size: 50px;
      background-repeat: no-repeat;
      
    }

    .nav-btn-header {
      display: none;
    }
  }

  /* Tablets */
  @media (min-width: 768px) and(max-width: 1024px) {
    .navbar {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      background-color: pink; //retirar
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
      flex-wrap: nowrap;
      align-items: center;
    }

    .nav-logo-header {
      width: 35%;
    }

    .nav-btn-header {
      width: 75%;
    }
  }
`;
