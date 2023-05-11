import {SegmentacaoStyles} from "./styled.js";
import CardSegmentacao from "../../components/card-segmentacao/index.tsx"
import BtnProjeto from "../../components/button-projeto/index.tsx"

function Segmentacao() {
  return (
    <SegmentacaoStyles>

    <div className="container">
      <div className="segmentacao-div">
        <h3 className="segmentacao-title">
          Segmentação atual para sua segurança
        </h3>
        <p className="segmentacao-p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore.
        </p>
      </div>

      <div className="segmentacao-card-wrapper">
        <CardSegmentacao/>

      </div>

      <div className="btn-projeto">
        <BtnProjeto/>
      </div>
    </div>
    </SegmentacaoStyles>
  );
}

export default Segmentacao;
