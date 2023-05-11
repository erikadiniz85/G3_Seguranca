import Logo from "../../assets/img/logo.svg";
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
            <h6 className="frase-1">2023 - Todos os direitos reservados</h6>
          </li>

          <li>
            <a href="#" className="footer-contact">
              contato@g3seguranca.com.br
            
            <br />

              (34) 9 9223-4389
            </a>
          </li>
        </ul>
      </footer>
    </FooterStyled>
  );
}

export default FooterArea;
