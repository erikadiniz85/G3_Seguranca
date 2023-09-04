import  {BtnProjetoStyled} from "../button-projeto/styled.js";
import AnchorLink from "react-anchor-link-smooth-scroll";


function BtnProjeto() {
  return (
    <>
      <BtnProjetoStyled>
        <button className="btn-projeto">
          <AnchorLink href="#formulario" className="btn-projeto-laranja">
            COMECE SEU PROJETO
          </AnchorLink>
        </button>
      </BtnProjetoStyled>
    </>
  );
}

export default BtnProjeto;
