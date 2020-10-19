import React, { useState, useEffect } from "react";
import ReactHelmet from "react-helmet";

export default () => {
  const [Tourism, setTourism] = useState([]);
  const [Brand, setBrand] = useState([]);

  useEffect(() => {
    let tourism = [];
    for (let i = 1; i < 16; i++) {
      tourism.push(
        <div>
          <img src={require(`../assets/img/clients/${i}-tourism.png`)} alt="Client for Mileage Communications"></img>
        </div>
      );
    }
    setTourism(tourism);

    let brand = [];
    for (let i = 1; i < 25; i++) {
      brand.push(
        <div>
          <img src={require(`../assets/img/clients/${i}-brand.png`)} alt="Client for Mileage Communications"></img>
        </div>
      );
    }
    setBrand(brand);
  }, []);

  return (
    <>
      <ReactHelmet>
        <meta charSet="utf-8" />
        <title>Mileage Communications Group | Clients</title>
        <link rel="canonical" href="https://www.mileage.in/clients" />
        <meta
          name="description"
          content="A full-service strategic marketing communications, PR and representation company. An equity joint venture with Mileage Communications,
              Singapore."
        />
        <meta name="keywords" content="" />
        <meta name="author" content="Mileage Communications Group" />
      </ReactHelmet>
      <section className="clients">
        <h1>Our Clients</h1>
        <h2>Tourism, Aviation, Hospitality &amp; Lifestyle</h2>
        <section>{Tourism}</section>
        <h2>Corporate and Brand PR</h2>
        <section>{Brand}</section>
      </section>
    </>
  );
};
