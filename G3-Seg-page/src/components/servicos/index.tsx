import BtnProjeto from "../button-projeto";
import CardServicos from "../card-servicos/index.js";
import { ServicosStyled } from "./styled.js";

function Servicos() {
  return (
    <>
      <ServicosStyled>
        <div className="servicos">
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

        <div className="btn-servicos">
            
        </div>
        
      </ServicosStyled>
    </>
  );
}

export default Servicos;
