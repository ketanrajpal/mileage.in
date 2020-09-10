import React from "react";
import { useState } from "react";

export default () => {
  const [Approach] = useState([
    {
      name: "Result-oriented",
      slug: "result-oriented",
    },
    {
      name: "Self-actuated",
      slug: "self-actuated",
    },
    {
      name: "Cost effective",
      slug: "cost-effective",
    },
    {
      name: "Creative & Innovative",
      slug: "creative-and-innovative",
    },
    {
      name: "Target-specific",
      slug: "target-specific",
    },
  ]);

  const [Divisions] = useState([
    { name: "Consumer & lifestyle", slug: "consumer-and-lifestyle" },
    { name: "Information Technology", slug: "information-technology" },
    { name: "Healthcare / Pharmaceutical / Biotech", slug: "healthcare-pharmaceutical-biotech" },
    { name: "Tourism / Aviation / Hospitality", slug: "tourism-aviation-hospitality" },
    { name: "Financial / Investor relations", slug: "financial-investor-relations" },
    { name: "Shipping", slug: "shipping" },
    { name: "Sports", slug: "sports" },
    { name: "Crisis Management", slug: "crisis-management" },
  ]);

  return (
    <section className="about">
      <p className="main">
        We believe in remaining proactive and alert at all times by providing quality value-added services to our clients, and to retain our leading
        position as a PR consultancy
      </p>

      <div className="history">
        <main>
          <p>Incorporated in 1992</p>
          <p>Opened office in Delhi in 1999</p>
          <p>Opened a full-service Regional Office in Mumbai in 2000</p>
          <p>Opened office in Chennai in 2006</p>
          <p>Representatives in Kolkata and Bengaluru</p>
        </main>
      </div>

      <h2>Our Divisions</h2>
      <div className="division">
        {Divisions.map((data) => {
          return (
            <div style={{ backgroundImage: `url('${require(`../assets/img/divisions/${data.slug}.jpg`)}')` }}>
              <h3>{data.name}</h3>
            </div>
          );
        })}
      </div>

      <h2>Our Approach</h2>
      <div className="approach">
        {Approach.map((data) => {
          return (
            <div>
              <img src={require(`../assets/img/approach/${data.slug}.svg`)} alt={data.name}></img>
              <h2>{data.name}</h2>
            </div>
          );
        })}
      </div>
    </section>
  );
};
