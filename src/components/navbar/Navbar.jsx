import React, { useState } from "react";
import * as RiIcons from "react-icons/ri";
import logo from "../../assets/logo.svg";
import "./navbar.css";

const Menu = () => {
  return (
    <>
      <p>
        {" "}
        <a href="#home">Home</a>{" "}
      </p>
      <p>
        {" "}
        <a href="#wgpt3">What is GPT3?</a>{" "}
      </p>
      <p>
        {" "}
        <a href="#possibility">Open AI</a>{" "}
      </p>
      <p>
        {" "}
        <a href="#features">Case Studies</a>{" "}
      </p>
      <p>
        {" "}
        <a href="#blog">Library</a>{" "}
      </p>
    </>
  );
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3_navbar">
      <div className="gpt3_navbar-links">
        <div className="gpt3_navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt3_navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="gpt3_navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="gpt3_navbar-menu">
        {toggleMenu ? (
          <RiIcons.RiCloseLine
            color="#fff"
            size={27}
            style={{margin: ' 0 10px'}}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiIcons.RiMenu3Fill
            color="#fff"
            size={27}
            style={{margin: ' 0 10px'}}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="gpt3_navbar-menu_container scale-up-center">
            <div className="gpt3_navbar-menu_container-links">
              <Menu />
            </div>
            <div className="gpt3_navbar-menu_container-links-sign">
              <p>Sign in</p>
              <button type="button">Sign up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
