import "./styled.js";
import retanguloCinza from "../../assets/img/retangulo-cinza.svg";
import { HistoriaG3Styled } from "./styled";

function HistoriaG3() {
  return (
    <>
      <HistoriaG3Styled>
        <article className="historia">
          <div className="historia-wrapper">
            <h3>História da G3 Segurança Patrimonial</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
              <br></br>
              <br></br>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
          </div>

          <div className="img-hist-wrapper">
            <img className="img-hist-1" src={retanguloCinza}></img>
            {/* <img className="img-hist-2" src={retanguloCinza}></img>
            <img className="img-hist-3" src={retanguloCinza}></img> */}
          </div>
        </article>
      </HistoriaG3Styled>
    </>
  );
}

export default HistoriaG3;
