import { ButtonsStyle } from "./styled";
import AnchorLink from "react-anchor-link-smooth-scroll";

function ButtonsNavbar() {
  return (
    <ButtonsStyle>
      <div className="buttons-navbar">
        <AnchorLink href="#servicos" className="btn-nav">
          SERVIÇOS
        </AnchorLink>

        <AnchorLink href="#historia" className="btn-nav">
          SOBRE
        </AnchorLink>

        <AnchorLink href="#prevencao" className="btn-nav">
          SOLUÇÕES
        </AnchorLink>

        {/* <button  className="btn-contato"> */}
        <AnchorLink href="#formulario" className="btn-contato-nav">
          FALE COM ESPECIALISTA
        </AnchorLink>
      </div>
    </ButtonsStyle>
  );
}

export default ButtonsNavbar;
