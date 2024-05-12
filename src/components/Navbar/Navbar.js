import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import "../Navbar/Navbar.css";
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const toggleMobileNav = () => {
    setToggleMenu(!toggleMenu); 
};
  return (
    <div className="navbar">
      <div className="navbar-main">
        <div className="logo-and-menu-icon-con">
          <MenuSharpIcon className="hamburger-menu" onClick={toggleMobileNav}/>
          <img
            src="https://t3.ftcdn.net/jpg/02/47/48/00/360_F_247480017_ST4hotATsrcErAja0VzdUsrrVBMIcE4u.jpg"
            alt="shop-cart-logo"
            className="logo"
          />
        </div>
        <h1 className="logo-text">Logo</h1>
        <div className="icons-container">
          <SearchIcon className="nav-icon" />
          <FavoriteBorderIcon className="nav-icon" />
          <ShoppingBagOutlinedIcon className="nav-icon" />
          <PersonOutlineOutlinedIcon className="nav-icon person-icon" />
          <h3 className="nav-icon person-icon">Eng</h3>
          <KeyboardArrowDownOutlinedIcon className="nav-icon person-icon"/>
        </div>
      </div>
      <hr className="mobile-hr-line"></hr>
      {
        toggleMenu && <div className="mobile-nav-links">
        <ul>
          <li>Shop</li>
          <li>Shop</li>
          <li>Shop</li>
          <li>Shop</li>
        </ul>
      </div>
      }
      <div className="navliks-container">
      <ul>
          <li>SHOP</li>
          <li>SKILLS</li>
          <li>STORIES</li>
          <li>ABOUT</li>
          <li>CONTACT US</li>
        </ul>
      </div>
      <hr className="desktop-hr-line"></hr>
    </div>
  );
};

export default Navbar;
