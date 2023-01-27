import React from "react";
import { Link, NavLink } from "react-router-dom";
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
            <NavLink to="/" activeClassName="current" exact={true}>
              <span className="fa fa-home"></span>Home
            </NavLink>
            <NavLink to="/clients" activeClassName="current">
              <span className="fa fa-chess-rook"></span>Clients
            </NavLink>
            <NavLink to="/services" activeClassName="current">
              <span className="fa fa-chess"></span>Services
            </NavLink>
            <NavLink to="/team" activeClassName="current">
              <span className="fa fa-users"></span>Team
            </NavLink>
            <NavLink to="/contact" activeClassName="current">
              <span className="fa fa-at"></span>Contact
            </NavLink>
            <a href="https://www.facebook.com/mileagecommunicationsindia" rel="noopener noreferrer" target="_blank">
              <span className="fab fa-facebook"></span>
            </a>
            <a href="https://instagram.com/mileagecommunicationsindia" rel="noopener noreferrer" target="_blank">
              <span className="fab fa-instagram"></span>
            </a>
            <a href="https://www.linkedin.com/company/mileage-communications-india/" rel="noopener noreferrer" target="_blank">
              <span className="fab fa-linkedin"></span>
            </a>
          </nav>
        </nav>
      </header>
    </div>
  );
};

export default HeaderComponent;
