import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { Button } from "../../globalStyles";
import "./Navbar.css";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavItemBtn,
  NavLinks,
  NavBtnLink,
} from "./Navbar.elements";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  // MenuItem,
  // Menu,
  Typography,
} from "@material-ui/core";
import ShoppingCart from "@material-ui/icons/ShoppingCartOutlined";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <IconContext.Provider value={{ color: "#00000" }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/" onClick={closeMobileMenu}>
              {/* <NavIcon /> */}
              <div className="fonts">ShopOn</div>
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to="/" onClick={closeMobileMenu}>
                  <div className="Navmenu"> Home</div>
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="https://spaces.chec.io/30720"
                  onClick={closeMobileMenu}
                >
                  <div className="Navmenu">Map</div>
                </NavLinks>
              </NavItem>
             
              <NavItemBtn>
                <IconButton
                // component={Link}
                // to="./cart"
                // aria-label="Show cart item"
                // color="inherit"
                >
                  {/* <Badge badgeContent={totalItems} color="secondary"> */}
                 

                  {/* </Badge> */}
                </IconButton>
              </NavItemBtn>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
