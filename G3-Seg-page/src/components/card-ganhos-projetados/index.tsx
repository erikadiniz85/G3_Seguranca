import BtnProjeto from "../button-projeto";
import { CardGanhosProjetadosStyles } from "./style.js";
import img1_ganhos from "../../assets/img/img1_ganhos.svg";
import img2_ganhos from "../../assets/img/img2_ganhos.svg";
import approve_icon from "../../assets/img/icones/aprove.svg";

function GanhosProjetadosCard() {
  return (
    <>
      <CardGanhosProjetadosStyles>
        <div className="div_geral">
          <div className="div_quadro_ganhos">
            <div className="div_title">
              <h3 className="div_title_h3">Ganhos projetados</h3>
              <p className="div_title_p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore.
              </p>
            </div>

            <div className="ganhos_txt_img">
              <div className="div_ganhos">
                <h4 className="div_ganhos_title">Ganhos para seu negócio</h4>

                <div className="div_list_ganhos">
                  <ul className="ganhos_list_left">
                    <li className="li_left">
                      <img src={approve_icon} />
                      <p>Controle</p>
                    </li>
                    <li className="li_left">
                      <img src={approve_icon} />
                      <p>Gestão de estoque</p>
                    </li>
                    <li className="li_left">
                      <img src={approve_icon} />
                      <p>Serviços</p>
                    </li>
                  </ul>

                  <ul className="ganhos_list_right">
                    <li className="li_right">
                      <img src={approve_icon} />
                      <p>Imagem</p>
                    </li>
                    <li className="li_right">
                      <img src={approve_icon} />
                      <p>Cliente</p>
                    </li>
                    <li className="li_right">
                      <img src={approve_icon} />
                      <p>Colaboradores</p>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="div_img1">
                <img src={img1_ganhos} alt="n" />
              </div>
            </div>

            <div className="ganhos_txt_img">
              <div className="div_img2">
                <img src={img2_ganhos} />
              </div>
              <div className="div_ganhos">
                <h4 className="div_ganhos_title">Prejuízos evitados</h4>

                <div className="div_list_ganhos">
                  <ul className="ganhos_list_left">
                    <li className="li_left">
                      <img src={approve_icon} />
                      <p>Reduções de custos</p>
                    </li>
                    <li className="li_left">
                      <img src={approve_icon} />
                      <p>Passivos trabalhistas</p>
                    </li>
                    <li className="li_left">
                      <img src={approve_icon} />
                      <p>Redução de perdas</p>
                    </li>
                  </ul>

                  <ul className="ganhos_list_right">
                    <li className="li_right">
                      <img src={approve_icon} />
                      <p>Redução de avarias</p>
                    </li>
                    <li className="li_right">
                      <img src={approve_icon} />
                      <p>Passivos cíveis</p>
                    </li>
                  </ul>
                </div>
                <div className="btn_ganhos_proj">

                </div>
                <BtnProjeto />
              </div>
            </div>
          </div>
        </div>
      </CardGanhosProjetadosStyles>
    </>
  );
}

export default GanhosProjetadosCard;
