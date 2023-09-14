import BtnProjeto from "../button-projeto";
import CardServicos from "../card-servicos/index";
import { ServicosStyled } from "./styled";

function Servicos() {
  return (
    <>
      <ServicosStyled>
        <div id="servicos" className="servicos">
          <div className="texto-servicos">
            <h2 className="h2-servicos">
              Conheça nossos serviços para garantir a segurança da sua empresa
            </h2>
            <p className="p-servicos">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </p>
          </div>

          <div className="coluna-servicos">
            <CardServicos />
            <BtnProjeto />
          </div>
        </div>
      </ServicosStyled>
    </>
  );
}

export default Servicos;
