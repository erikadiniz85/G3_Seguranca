import { ButtonsStyle } from "./styled.js";

function ButtonsNavbar() {
  return (
    <ButtonsStyle>
      <div className="buttons-navbar">
        <button>
          <a id="inicio">INICIO</a>
        </button>

        <button>
          <a id="sobre">SOBRE</a>
        </button>

        <button>
          <a id="solucoes">SOLUÇÕES</a>
        </button>

        <button id="contato" className="btn-contato">
          <a>FALE COM ESPECIALISTA</a>
        </button>
      </div>
    </ButtonsStyle>
  );
}

export default ButtonsNavbar;
