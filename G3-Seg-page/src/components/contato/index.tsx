import Formulario from "../formulario-contato";
import { Section_contato_Styles } from "./styled.js";

function ContatoCard() {
  return (
    <>
      <Section_contato_Styles>
        <div className="section_contato">
          <div className="txt_contato_form">
            <h3 className="title_contato_form">Fale com especialista</h3>
            <p className="p_contato_form">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </p>
          </div>
          <Formulario />
        </div>
      </Section_contato_Styles>
    </>
  );
}

export default ContatoCard;
