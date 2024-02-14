import Logo from "../../assets/img/logo.svg";
import { FooterStyled } from "./styled";
import AnchorLink from "react-anchor-link-smooth-scroll";

function FooterArea() {
  return (
    <FooterStyled>
      <footer>
        <ul className="footer">
          <li>
            <AnchorLink href="#header" className="logo-footer">
              <img src={Logo} />
            </AnchorLink>
          </li>
          <li>
            <AnchorLink href="formulario" className="footer-contact">
              contato@g3seguranca.com.br
              <br />
              (34) 9 9223-4389
            </AnchorLink>
          </li>

          <li>
            <h6 className="frase-1">2023 - Todos os direitos reservados</h6>
          </li>
        </ul>
      </footer>
    </FooterStyled>
  );
}

export default FooterArea;
