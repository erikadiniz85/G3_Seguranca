import "./styled.js";
import retanguloCinza from "../../assets/img/retangulo-cinza.svg";
import { HistoriaG3Styled } from "./styled";

function HistoriaG3() {
  return (
    <>
      <HistoriaG3Styled>
        <div className="historia" id="historia">
          <div className="historia-wrapper">
            <h3 className="history-title">NOSSA TRAJETÓRIA</h3>

            <div className="acronym">
              <p className="history-acronym">
                Falar em segurança é algo complexo a medida que vivemos cenários
                de instabilidade econômica, desigualdade social e sob a frágil
                mão de nossos órgãos de governo. Para tanto é preciso muito
                conhecimento técnico, vivência prática e proximidade com os
                melhores métodos e conceitos.
              </p>
              <p className="history-acronym">
                Investimento de muitos anos ao serviço militar com formação e
                carreira vigorosa, agregados pela formação em Direito, Paulo
                Sérgio deixa a carreira pública para se dedicar a atuar em
                segmentos privados. Neste período, gozou da oportunidade de
                conhecer de forma mais profunda as nuances e fragilidades
                existentes nestesambientes corporativos. Detentor de visão
                crítica analítica, agregou valores por onde passou em empresas
                do segmento de transporte de cargas, transporte de passageiros,
                concessionárias de autos, lojas de varejo, atacados, operadores
                logísticos dentre outros.
              </p>
              <p className="history-acronym">
                Em 2007 aflora a visão empreendedora e então nasce a G3
                Segurança Patrimonial, observando os movimentos de mercado e as
                carências das organizaçõese em salvaguardarem seus patrimônios
                financeiros, pessoais e intelectuais. Muitos projetos foram
                desde então construídos e implementados permitindo que a G3
                obtenha resultados importantes e o reconhecimento de seus
                clientes nas regiões Sudeste e Norte do Brasil.
              </p>
              <p className="history-acronym">
                Logo chegou a sua vez de conhecer o que podemos fazer por você e
                pela sua empresa.
              </p>
            </div>
          </div>

          <div className="img-hist-wrapper">
            <img className="img-hist" src={retanguloCinza}></img>
            <img className="img-hist" src={retanguloCinza}></img>
            <img className="img-hist" src={retanguloCinza}></img>
          </div>
        </div>
      </HistoriaG3Styled>
    </>
  );
}

export default HistoriaG3;
