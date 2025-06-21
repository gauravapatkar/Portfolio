import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import menu from "../../assets/menu.png";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="navbar">
      <div className="Menu">
        <Link
          activeClass="active"
          to="/"
          // spy={true}
          // smooth={true}
          // offset={-100}
          // duration={500}
          className="MenuList"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="/About"
          // spy={true}
          // smooth={true}
          // offset={-80}
          // duration={500}
          className="MenuList"
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="/Projects"
          // spy={true}
          // smooth={true}
          // offset={-80}
          // duration={500}
          className="MenuList"
        >
          Project
        </Link>
        <Link
          activeClass="active"
          to="/contact"
          // spy={true}
          // smooth={true}
          // offset={-80}
          // duration={500}
          className="MenuList"
        >
          Contact
        </Link>
        {/* <ul className="MenuList">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Projects">Projects</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul> */}
      </div>

      <img
        src={menu}
        alt="Menu"
        className="mobMenu"
        onClick={() => {
          setShowMenu(!showMenu);
        }}
      />

      <div className="navMenu" style={{ display: showMenu ? "flex" : "none" }}>
        {/* <ul className="MenuList">
          <li className="navMenuList">
            <Link to="/" onClick={() => setShowMenu(false)}>
              Home
            </Link>
          </li>
          <li className="navMenuList">
            <Link to="/About" onClick={() => setShowMenu(false)}>
              About
            </Link>
          </li>
          <li className="navMenuList">
            <Link to="/Projects" onClick={() => setShowMenu(false)}>
              Projects
            </Link>
          </li>
          <li className="navMenuList">
            <Link to="/contact" onClick={() => setShowMenu(false)}>
              Contact
            </Link>
          </li>
        </ul> */}

        <Link
          activeClass="active"
          to="/"
          // spy={true}
          // smooth={true}
          // offset={-100}
          // duration={500}
          className="navMenuList"
          onClick={() => setShowMenu(false)}
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="/About"
          // spy={true}
          // smooth={true}
          // offset={-50}
          // duration={500}
          className="navMenuList"
          onClick={() => setShowMenu(false)}
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="/Projects"
          // spy={true}
          // smooth={true}
          // duration={500}
          // offset={-70}
          className="navMenuList"
          onClick={() => setShowMenu(false)}
        >
          Project
        </Link>
        <Link
          activeClass="active"
          to="/contact"
          // spy={true}
          // smooth={true}
          // offset={-100}
          // duration={500}
          className="navMenuList"
          onClick={() => setShowMenu(false)}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
