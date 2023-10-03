import ButtonsNavbar from "../../buttons-navbar/index.js";
import Logo from "../../../assets/img/logo.svg";
import { NavbarStyle } from "./styled";

function Navbar() {
  return (
    <NavbarStyle>
      <div className="navbar">
        <div className="nav-logo-header">
          <img className="logo-header" src={Logo} />
        </div>
        <div className="nav-btn-header">
          <ButtonsNavbar />
        </div>
      </div>
    </NavbarStyle>
  );
}

export default Navbar;
