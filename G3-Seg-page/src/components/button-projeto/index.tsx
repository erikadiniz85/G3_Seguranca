import { BtnProjetoStyle } from "./styled.js";
import AnchorLink from "react-anchor-link-smooth-scroll";


function BtnProjeto() {
  return (
    <>
      <BtnProjetoStyle>
        <button className="btn-projeto">
          <AnchorLink href="#formulario" className="btn-projeto-laranja">
            COMECE SEU PROJETO
          </AnchorLink>
        </button>
      </BtnProjetoStyle>
    </>
  );
}

export default BtnProjeto;
