import  {ConhecaMaisStyled} from "./styled";
import AnchorLink from "react-anchor-link-smooth-scroll";


function BtnConhecaMais() {
  return (
    <>
      <ConhecaMaisStyled>
        <AnchorLink href="#segmentacao" className="conheca-mais">CONHEÇA MAIS</AnchorLink>
      </ConhecaMaisStyled>
    </>
  );
}

export default BtnConhecaMais;