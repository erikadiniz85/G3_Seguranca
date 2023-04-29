import  ImagemBanner from "../../../assets/img/imagem-banner.png"




function BannerHeader() {
  return (
    <>
      <h2>A maneira mais inteligente de proteger seu patrimônio!</h2>

      <p>
        Alarme, Câmeras, Portaria Virtual, Controle de Acesso, Monitoramento 24h
      </p>

      <img src={ImagemBanner} alt="homem de costas olhando circuito de câmera"/>
    </>
  );
}

export default BannerHeader;
