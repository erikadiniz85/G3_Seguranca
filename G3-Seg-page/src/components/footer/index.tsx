import Logo from "../../assets/img/logo.png";
import { FooterStyled } from "./styled.js";

function FooterArea() {
  return (
    <FooterStyled>
      <footer>
        <ul className="footer">
          <li>
            <img className="logo-footer" src={Logo} />
          </li>

          <li>
            <h6 className="frase-1">2023 - todos os direitos reservados</h6>
          </li>

          <li className="footer-contact">
            <a href="#">contato@g3seguranca.com.br</a>
            <a>(34) 9 9223-4389</a>
          </li>
        </ul>
      </footer>
    </FooterStyled>
  );
}

export default FooterArea;
