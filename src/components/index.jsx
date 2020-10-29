import React from "react";
import ReactHelmet from "react-helmet";

import Background from "../assets/img/artwork.svg";

const IndexComponent = () => {
  return (
    <>
      <ReactHelmet>
        <meta charSet="utf-8" />
        <title>Mileage Communications Group | Public Relations agency</title>
        <link rel="canonical" href="https://www.mileage.in" />
        <meta
          name="description"
          content="A full-service strategic marketing communications, PR and representation company. An equity joint venture with Mileage Communications,
              Singapore."
        />
        <meta name="keywords" content="" />
        <meta name="author" content="Mileage Communications Group" />
      </ReactHelmet>
      <div className="index">
        <section>
          <div className="container">
            <h1>The Mileage Communications Group</h1>
            <h2>We go the extra mile for you</h2>
            <p>
              A full-service strategic marketing communications, PR and representation company. An equity joint venture with Mileage Communications,
              Singapore.
            </p>
          </div>
        </section>
        <section>
          <img src={Background} alt="Mileage Communications"></img>
        </section>
      </div>
      <div className="homeAbout">
        <p>
          A leading Public Relations agency, Mileage Communications India has been an industry leader handling a range of industry sectors such as
          travel/tourism/ hospitality; consumer / lifestyle; corporate finance / investor relations / IPOs; InfoComm/technology, biotech / healthcare
          / pharmaceutical; education; auto industry and shipping. Mileage is a member of the MTI Network, which is a global network of Public
          Relations agencies working on crisis communication, incident management and crisis training for the shipping industry.
          <br />
          <br />
          Mileage Communications India is a member of the Public Relations Global Network (PRGN), an international alliance of more than 50 leading
          independent, owner-operated public relations agencies working together to serve clients’ needs with deep local insights, simultaneously
          sharing best practices on a global level. Mileage Communications India has a network of offices across India and branches across the Asian
          region.
        </p>
      </div>
    </>
  );
};

export default IndexComponent;
