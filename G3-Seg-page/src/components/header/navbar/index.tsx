import ButtonsNavbar from "../../buttons-navbar/index.js";
import Logo from "../../../assets/img/logo.svg";
import { NavbarStyle } from "./styled.js";

function Navbar() {
  return (
    <NavbarStyle>
      <div className="navbar">
        <img className="logo-header" src={Logo} />
        <ButtonsNavbar />
      </div>
    </NavbarStyle>
  );
}

export default Navbar;
