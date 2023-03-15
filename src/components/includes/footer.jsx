import React from "react";

import MtiLogo from "../../assets/img/mti.png";
import PrgnLogo from "../../assets/img/prgn.png";

export default () => {
  return (
    <footer>
      <div className="container">
        <div>
          <h2>About Mileage</h2>
          A full-service strategic marketing communications, PR and representation company. An equity joint venture with Mileage Communications,
          Singapore.
          <br />
          <br />{" "}
          <span>
            &copy; Mileage Communication (India) Pvt. Ltd.
            <br /> All rights reserved {new Date().getFullYear()}.
          </span>
        </div>
        <div>
          <h2>Reach us at</h2>
          Mileage Communication (India) Pvt. Ltd.
          <br />
          M-6 (First Floor), Hauz Khas,
          <br />
          Aurobindo Marg, New Delhi &ndash; 110016 India
          <br />
          <br />
          <span>Email.</span> <a href="mailto:info@mileage.in">info@mileage.in</a>
          <br />
          <span>Phone.</span> <a href="tel:+911149401916">+ (91) 11-49401916</a>
        </div>

        <div>
          <h2>A Member of</h2>
          <img src={MtiLogo} alt="MTI Network Logo"></img>
          <img src={PrgnLogo} alt="PRGN Logo"></img>
        </div>
      </div>
    </footer>
  );
};
