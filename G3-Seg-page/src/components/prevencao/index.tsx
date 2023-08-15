import PrevencaoCard from "../card-prevencao";
import { PrevencaoStyle } from "./styled.js";

function Prevencao() {
  return (
    <>
      <PrevencaoStyle>
        <div className="prevencao-card-geral" id="prevencao">
          <div className="prevencao-card-text">
            <h3 className="prevencao-card-h3">
              Prevenção: Ferramentas utilizadas
            </h3>
            <p className="prevencao-card-p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </p>
          </div>

          <div className="prevencao-card-wrapper">
            <PrevencaoCard />
          </div>
        </div>
      </PrevencaoStyle>
    </>
  );
}

export default Prevencao;
