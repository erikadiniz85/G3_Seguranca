import { CardSegmentacaoStyles } from "./styled.js";
import  icon1Segmentacao  from "../../assets/img/icones/shopping-shop.svg";
import  icon2Segmentacao  from "../../assets/img/icones/users-approve-user.svg";
import  icon3Segmentacao  from "../../assets/img/icones/user-interface-increase-brightness.svg";
import  icon4Segmentacao  from "../../assets/img/icones/education-library.svg";
import  icon5Segmentacao  from "../../assets/img/icones/security-lock-key.svg";
import  icon6Segmentacao  from "../../assets/img/icones/graphic-board.svg";
import  icon7Segmentacao  from "../../assets/img/icones/education-presentation-board.svg";






function CardSegmentacao() {
  return (
    <>
      <CardSegmentacaoStyles>
        <div className="card-segmentacao">
          <div className="segmentacao">
            <div className="svg_segmentacao">
              <img src={icon1Segmentacao}/>
            </div>

            <div className="txt_segmentacao">

            <h4>Estrutural Segurança perimetral</h4>
            <ul>
              <li>Avaliação do nível de segurança local</li>
              <li>Risco perimetral</li>
              <li>Histórico de incidentes</li>
              <li>Nivel de cobertura pública</li>
              <li>Condições gerais de vedação</li>
              <li>Condições gerais de fechamento</li>
            </ul>
            </div>
          </div>

          <div className="segmentacao">
            <div className="svg_segmentacao">
            <img src={icon2Segmentacao}/>
            </div>

            <div className="txt_segmentacao">
            <h4>Material humano</h4>
            <ul>
              <li>Headcount geral</li>
              <li>Efetivo de segurança</li>
              <li>Processos seletivos</li>
              <li>Históricos de turnover</li>
              <li>Históricos de eventos com danos</li>
              <li>Acessos controles</li>
              <li>Avaliação sócio econômica</li>
              <li>Sindicância</li>
              <li>Nivelamento da cultura de segurança</li>
              <li>Revisão/Adequação/Treinamento/Formação de times</li>
              <li>Oportunidade de melhorias</li>
            </ul>
            </div>
          </div>

          <div className="segmentacao">
            <div className="svg_segmentacao">
            <img src={icon3Segmentacao}/>
            </div>

            <div className="txt_segmentacao">
            <h4>Emprego tecnologia segurança</h4>
            <ul>
              <li>Sistemas e instrumentos de segurança</li>
              <li>Nível de adequação</li>
              <li>Nível de funcionamento</li>
              <li>Níveis de Gestão de informações</li>
              <li>Nível de aplicabilidade</li>
              <li>Níveis de integração</li>
              <li>Níveis de eficácia</li>
              <li>Revisão - oportunidades de melhoria</li>
            </ul>
            </div>
          </div>

          <div className="segmentacao">
            <div className="svg_segmentacao">
            <img src={icon4Segmentacao}/>
            </div>

            <div className="txt_segmentacao">
            <h4>Normativos e regras de segurança</h4>
            <ul>
              <li>Existência</li>
              <li>Níveis de aplicabilidade</li>
              <li>Incongruência</li>
              <li>Alçadas</li>
              <li>Níveis de aderência com as operações</li>
              <li>Pontos de fragilidade</li>
              <li>Nível de conhecimento e defesa da liderança</li>
              <li>Níveis de conhecimento e prática de colaboradores</li>
              <li>Oportunidade de melhoria</li>
            </ul>
            </div>
          </div>

          <div className="segmentacao">
            <div className="svg_segmentacao">
            <img src={icon5Segmentacao}/>
            </div>

            <div className="txt_segmentacao">
            <h4>Acessibilidade em áreas de risco</h4>
            <ul>
              <li>Tratamentos especiais para produtos e processos com risco</li>
              <li>Segmentação do risco</li>
              <li>Contigência para mitigar</li>
              <li>Eficácia das ações</li>
              <li>Oportunidade de melhorias</li>
            </ul>
            </div>
          </div>

          <div className="segmentacao">
          <div className="svg_segmentacao">
            <img src={icon6Segmentacao}/>
            </div>

            <div className="txt_segmentacao">
            <h4>Conceitos de preservação de patrimônio</h4>
            <ul>
              <li>
                Condições gerais de sistema de combate a incêndio/Estrutura
              </li>
              <li>Isoladores térmicos e elétricos</li>
              <li>Atendimento as normas de segurança laboral</li>
              <li>Emprego de EPIs</li>
              <li>Riscos de acidentes</li>
              <li>Riscos de invasão sistêmicas</li>
              <li>Contingência para mitigar</li>
              <li>Eficácia das operações</li>
              <li>Oportunidade de melhorias</li>
            </ul>
            </div>
          </div>

          <div className="segmentacao">
            <div className="svg_segmentacao">
            <img src={icon7Segmentacao}/>
            </div>

            <div className="txt_segmentacao">
            <h4>Mitigar riscos e sinistros</h4>
            <ul>
              <li>Controles</li>
              <li>Registros</li>
              <li>Históricos</li>
              <li>Plano de ação por eventos efetivados</li>
              <li>Gestores responsáveis</li>
              <li>Canalização e alçadas</li>
              <li>Oportunidade de melhorias</li>
            </ul>
           </div> 
          </div>
        </div>
      </CardSegmentacaoStyles>
    </>
  );
}

export default CardSegmentacao;
