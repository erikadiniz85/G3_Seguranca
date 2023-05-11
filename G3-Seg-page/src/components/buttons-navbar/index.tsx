import { ButtonsStyle } from "./styled.js";

function ButtonsNavbar() {
  return (
    <ButtonsStyle>
      <div className="buttons-navbar">
        <button>
          <a>INICIO</a>
        </button>

        <button>
          <a>SOBRE</a>
        </button>

        <button>
          <a>SOLUÇÕES</a>
        </button>

        <button className="btn-contato">
          <a>FALE COM ESPECIALISTA</a>
        </button>
      </div>
    </ButtonsStyle>
  );
}

export default ButtonsNavbar;
