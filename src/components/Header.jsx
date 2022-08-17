import React from "react";
import logo from "../img/logo.svg";
import couch from "../img/couch.png";
import app from "../img/app.svg";

function Header() {
  const [nav, setNav] = React.useState({
    navigation: "Navigation",
    navBtn: "",
  });
  console.log(nav);

  const [link, setLink] = React.useState({
    nav: "Nav",
    navLink: "",
  });
  console.log(link);

  function handleHambuger() {
    const classes = nav.navBtn === "" ? "show" : "";

    setNav((prevNav) => {
      return {
        ...prevNav,
        navBtn: classes,
      };
    });
    setLink((prevLink) => {
      const classes = link.navLink === "" ? "active" : "";
      return {
        ...prevLink,
        navLink: classes,
      };
    });
  }

  return (
    <header className="container-fluid Header" id="header">
      <div className="Nav__brand">
        <img src={logo} alt="" className="logo" />

        <div
          onClick={handleHambuger}
          className={`${nav.navigation} ${nav.navBtn}`}
        >
          <span className="Nav__button"></span>
          <span className="Nav__button"></span>
          <span className="Nav__button"></span>
        </div>
      </div>
      <nav className={`${link.nav} ${link.navLink}`}>
        <ul className="Nav__list links">
          <li className="Nav__item">
            <a href="#header" className="Nav__link">
              Home
            </a>
          </li>
          <li className="Nav__item">
            <a href="#contact" className="Nav__link">
              Contact
            </a>
          </li>
        </ul>

        <div className="Nav__links links">
          <a href="#" className="Nav__login">
            Login
          </a>
          <a href="#" className="Nav__sign-up">
            Sign-up
          </a>
        </div>
      </nav>
      <div>
        <img src={couch} alt="couch" className="Header__couch" />
        <img src={app} alt="app-svg" className="Header__app" />
      </div>

      <div className="btn-button Header__download ">
        <a href="#" className="btn ">
          {" "}
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 1024 1024"
            height="30"
            width="30"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M505.7 661a8 8 0 0 0 12.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"></path>
          </svg>
          Download the App
        </a>
      </div>
    </header>
  );
}

export default Header;
