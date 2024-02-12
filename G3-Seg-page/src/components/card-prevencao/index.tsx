import { CardPrevencaoStyle } from "./styled";
import icon_comunicacao from "../../assets/img/icones/icon-comunicacao.svg";
import icon_foco_result from "../../assets/img/icones/icon-foco-result.svg";
import icon_lideranca from "../../assets/img/icones/icon-lideranca.svg";
import icon_planejamento from "../../assets/img/icones/icon-planejam.svg";
import icon_trab_equipe from "../../assets/img/icones/icon-trab-equipe.svg";
import icon_comp_tecnica from "../../assets/img/icones/vector-comp-tec.svg";

function PrevencaoCard() {
  return (
    <>
      <CardPrevencaoStyle>
        <div className="prevencao-wrapper">
          <ul className="row-1">
            <li className="prevencao-list">
              <img className="icon" src={icon_comp_tecnica} />
              <p>Competência técnica</p>
            </li>

            <li className="prevencao-list">
              <img className="icon" src={icon_comunicacao} />
              <p>Comunicação</p>
            </li>

            <li className="prevencao-list">
              <img className="icon" src={icon_foco_result} />
              <p>Foco em resultado</p>
            </li>
          </ul>

          <ul className="row-2">
            <li className="prevencao-list">
              <img className="icon" src={icon_lideranca} />
              <p>Liderança</p>
            </li>

            <li className="prevencao-list">
              <img className="icon" src={icon_planejamento} />
              <p>Planejamento</p>
            </li>

            <li className="prevencao-list">
              <img className="icon" src={icon_trab_equipe} />
              <p>Trabalho em equipe</p>
            </li>
          </ul>
        </div>
      </CardPrevencaoStyle>
    </>
  );
}

export default PrevencaoCard;
