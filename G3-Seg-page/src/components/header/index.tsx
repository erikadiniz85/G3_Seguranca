
import BannerHeader from "./banner/index";
import Navbar from "./navbar";
import { HeaderStyled } from "./styled.js";

function HeaderArea() {
  return (
    <>
      <HeaderStyled>
        <div className="header">
          <Navbar />
          <BannerHeader />
        </div>
      </HeaderStyled>
    </>
  );
}

export default HeaderArea;
