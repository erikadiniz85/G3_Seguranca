import { BtnProjetoStyle } from "./styled.js";

function BtnProjeto() {
  return (
    <>
      <BtnProjetoStyle>
        <button className="btn-projeto">
          <a className="btn-projeto-laranja" href="#">
            COMECE SEU PROJETO
          </a>
        </button>
      </BtnProjetoStyle>
    </>
  );
}

export default BtnProjeto;
