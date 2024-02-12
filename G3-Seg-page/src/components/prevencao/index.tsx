import PrevencaoCard from "../card-prevencao";
import { PrevencaoStyle } from "./styled";

function Prevencao() {
  return (
    <>
      <PrevencaoStyle>
        <div className="prevencao" id="prevencao">
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
