import ButtonsNavbar from "../../buttons-navbar/index.js";
import Logo from "../../../assets/img/logo.svg";
import { NavbarStyle } from "./styled";

// function Navbar() {
//   return (
//     <NavbarStyle>
      
//       <ul className="navbar">
//         <li className="nav-logo-header">
//           <img className="logo-header" src={Logo} />
//         </li>
//         <li className="nav-btn-header">
//           <ButtonsNavbar />
//         </li>
//         <li id="btn-mobile"><button >Menu</button></li>
//       </ul>
      
//     </NavbarStyle>
//   );
// }

// export default Navbar;


import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <NavbarStyle>
      <ul className="navbar">
        <li className="nav-logo-header">
          <img className="logo-header" src={Logo} />
        </li>
        <li className="nav-btn-header">
          <ButtonsNavbar />
        </li>
        <li >
          <button id="btn-mobile" onClick={toggleMenu}></button>
        </li>
      </ul>

      {isMenuOpen && (
        <ul className="mobile-menu">
          <li>
            <ButtonsNavbar />
          </li>
        </ul>
      )}
    </NavbarStyle>
  );
}

export default Navbar;