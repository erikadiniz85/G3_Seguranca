import ImagemBanner from "../../../assets/img/imagem-banner.svg";
import BtnProjeto from "../../button-projeto";
import { BannerStyled } from "./styled.js";


function BannerHeader() {
  return (
    <>
      <BannerStyled>
        <div id="header" className="banner-header">
          <div className="header-text">
            <h2 className="header-subtitle">
            Proteja seu patrimônio, invista em segurança!           
            </h2>

            <p className="header-paragraph">
              Alarme, Câmeras, Portaria Virtual, Controle de Acesso,
              Monitoramento 24h
            </p>

            <div className="btn-header-2">
              <BtnProjeto />

              <button className="btn-conheca">
                <a>CONHEÇA MAIS</a>
              </button>
            </div>
          </div>

          <div className="header-image">
            <img
              className="img-banner"
              src={ImagemBanner}
              alt="homem de costas olhando circuito de câmera"
            />
          </div>
        </div>
      </BannerStyled>
    </>
  );
}

export default BannerHeader;
