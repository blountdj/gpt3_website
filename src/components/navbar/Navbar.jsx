import React, {useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";
import logo from "./logo.svg";


const Menu = () => {
  return (
  <>
    <p><a href="#home">Home</a></p>
    <p><a href="#wgpt3">What is GPT?</a></p>
    <p><a href="#possibility">Open AI</a></p>
    <p><a href="#Features">Case Studies</a></p>
    <p><a href="#blog">Library</a></p>
  </>
  )
}

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} />
        </div>
        <div className="gpt3__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>Sign In</p>
        <button type="button">Sign Up</button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu 
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)}></RiCloseLine> 
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)}></RiMenu3Line>}
          {toggleMenu && (
            <>
            <div className="gpt3__navbar-menu-container scale-up-center">
              <div className="gpt3__navbar-menu-container-links">
                <Menu />
              </div>
            </div>
            <div className="gpt3__navbar-menu-container-links-sign">
              <p>Sign In</p>
              <button type="button">Sign Up</button>
            </div>
            </>
          )}
      </div>
    </div>
  );
};

export default Navbar;
