import BtnProjeto from "../button-projeto";
import CardServicos from "../card-servicos";
import { ServicosStyled } from "./styled.js";

function Servicos() {
  return (
    <>
      <ServicosStyled>
        <div className="texto-servicos">
          <h2>
            Conheça nossos serviços para garantir a segurança da sua empresa
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore.
          </p>
        </div>

        <div>
          <CardServicos />
        </div>

        <div className="btn-servicos">
          <BtnProjeto />
        </div>
      </ServicosStyled>
    </>
  );
}

export default Servicos;
