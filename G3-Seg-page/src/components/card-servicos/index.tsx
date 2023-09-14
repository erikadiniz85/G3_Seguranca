import { CardServicosStyle } from "./styled";

import img_levantamento_dados from "../../assets/img/img-levantamentodedados.svg";
import icon_levantamento_dados from "../../assets/img/icones/icon-levantamento-dados.svg";
import ellipse from "../../assets/img/icones/ellipse.svg";

import img_diagnostico from "../../assets/img/img-diagnostico.svg";
import icone_diagnostico from "../../assets/img/icones/icone-diagnostico.svg";

import img_construcao_projetos from "../../assets/img/img-construcao-de-projetos.svg";
import icon_construcao_projetos from "../../assets/img/icones/icone-construc-projeto.svg";

import img_construc_normativos_seg from "../../assets/img/img-construcao-normativa.svg";
import icon_construc_normativos_seg from "../../assets/img/icones/icon-construcao-normativos.svg";

import img_implantac_treinam from "../../assets/img/img-implantacao-treinamento.svg";
import icon_implantac_treinam from "../../assets/img/icones/icon-implantacao-treinam.svg";

import img_acoes_sensib from "../../assets/img/img-acoes-de-sensibilizacao.svg";
import icon_acoes_sensib from "../../assets/img/icones/icon-acoes-sensib.svg";

import img_acultur_seg from "../../assets/img/img-aculturamento-seg.svg";
import icon_acultur_seg from "../../assets/img/icones/icon-acultu-seg.svg";

import img_manutenc_evoluc from "../../assets/img/img-manutencao-evolucao.svg";
import icon_manutenc_evoluc from "../../assets/img/icones/icon-manut-evoluc.svg";

function CardServicos() {
  return (
    <>
      <CardServicosStyle>

      <div className="card_servicos">
        <ul className="servicos_col_1">
          

          <li className="card">
            <img className="img-card-servicos" src={img_levantamento_dados}></img>
            <img className="gray-ellipse" src={ellipse}></img>
            <img className="icon-card-servicos" src={icon_levantamento_dados}></img>
            <h3 className="title-card-servicos">Levantamento de dados</h3>
          </li>

          <li className="card">
            <img className="img-card-servicos" src={img_diagnostico}></img>
            <img className="gray-ellipse" src={ellipse}></img>
            <img className="icon-card-servicos" src={icone_diagnostico}></img>
            <h3 className="title-card-servicos">Diagnóstico</h3>
          </li>

          <li className="card">
            <img className="img-card-servicos" src={img_construcao_projetos}></img>
            <img className="gray-ellipse" src={ellipse}></img>
            <img className="icon-card-servicos" src={icon_construcao_projetos}></img>
            <h3 className="title-card-servicos">Construção de projetos estruturais</h3>
          </li>

          <li className="card">
            <img className="img-card-servicos" src={img_construc_normativos_seg}></img>
            <img className="gray-ellipse" src={ellipse}></img>
            <img className="icon-card-servicos" src={icon_construc_normativos_seg}></img>
            <h3 className="title-card-servicos">Construção normativos de segurança</h3>
          </li>
        </ul>
         
        <ul className="servicos_col_2">
          <li className="card">
            <img className="img-card-servicos" src={img_implantac_treinam}></img>
            <img className="gray-ellipse" src={ellipse}></img>
            <img className="icon-card-servicos" src={icon_implantac_treinam}></img>
            <h3 className="title-card-servicos">Implantação e treinamento</h3>
          </li>

          <li className="card">
            <img className="img-card-servicos" src={img_acoes_sensib}></img>
            <img className="gray-ellipse" src={ellipse}></img>
            <img className="icon-card-servicos" src={icon_acoes_sensib}></img>
            <h3 className="title-card-servicos">Ações de sensibilização</h3>
          </li>

          <li className="card">
            <img className="img-card-servicos" src={img_acultur_seg}></img>
            <img className="gray-ellipse" src={ellipse}></img>
            <img className="icon-card-servicos" src={icon_acultur_seg}></img>
            <h3 className="title-card-servicos">Aculturamento segurança</h3>
          </li>

          <li className="card">
            <img className="img-card-servicos" src={img_manutenc_evoluc}></img>
            <img className="gray-ellipse" src={ellipse}></img>
            <img className="icon-card-servicos" src={icon_manutenc_evoluc}></img>
            <h3 className="title-card-servicos">Manutenção e evolução</h3>
          </li>
        
        </ul>
      </div>
      </CardServicosStyle>
    </>
  );
}

export default CardServicos;
