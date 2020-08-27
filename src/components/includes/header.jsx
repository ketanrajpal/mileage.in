import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo.png";

const HeaderComponent = () => {
  return (
    <div className="header">
      <header>
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="Mileage Communications"></img>
          </Link>
        </div>
        <nav>
          <nav>
            <Link to="/">
              <span className="fa fa-home"></span>Home
            </Link>
            <Link to="/about">
              <span className="fa fa-chess-rook"></span>About
            </Link>
            <Link to="/expertise">
              <span className="fa fa-chess"></span>Expertise
            </Link>
            <Link to="/team">
              <span className="fa fa-users"></span>Team
            </Link>
            <Link to="/contact">
              <span className="fa fa-at"></span>Contact
            </Link>
            <a href="#">
              <span className="fab fa-facebook"></span>
            </a>
            <a href="#">
              <span className="fab fa-instagram"></span>
            </a>
            <a href="#">
              <span className="fab fa-linkedin"></span>
            </a>
          </nav>
        </nav>
      </header>
    </div>
  );
};

export default HeaderComponent;
