import { ButtonsStyle } from "./styled.js";
import  AnchorLink  from "react-anchor-link-smooth-scroll";

function ButtonsNavbar() {
  return (
    <ButtonsStyle>
      <div className="buttons-navbar">
        <button>
          <AnchorLink href="#servicos">SERVIÇOS</AnchorLink>
        </button>

        <button>
          <AnchorLink href="#historia">SOBRE</AnchorLink>
        </button>

        <button>
          <AnchorLink href="#prevencao">SOLUÇÕES</AnchorLink>
        </button>

        <button  className="btn-contato">
          <AnchorLink href="#formulario">FALE COM ESPECIALISTA</AnchorLink>
        </button>
      </div>
    </ButtonsStyle>
  );
}

export default ButtonsNavbar;
