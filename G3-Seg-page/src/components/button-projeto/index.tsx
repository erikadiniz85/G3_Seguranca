import { BtnProjetoStyled } from "./styled";
import AnchorLink from "react-anchor-link-smooth-scroll";

function BtnProjeto() {
  return (
    <>
      <BtnProjetoStyled>
        <AnchorLink href="#formulario" className="btn-projeto">
          COMECE SEU PROJETO
        </AnchorLink>
      </BtnProjetoStyled>
    </>
  );
}

export default BtnProjeto;
