import React from "react";
import ReactHelmet from "react-helmet";

import NotFound from "../assets/img/404.svg";

export default () => {
  return (
    <>
      <ReactHelmet>
        <meta charSet="utf-8" />
        <title>Mileage Communications Group | 404 Not Found</title>
        <link rel="canonical" href="https://www.mileage.in/404" />
        <meta
          name="description"
          content="A full-service strategic marketing communications, PR and representation company. An equity joint venture with Mileage Communications,
              Singapore."
        />
        <meta name="keywords" content="" />
        <meta name="author" content="Mileage Communications Group" />
      </ReactHelmet>
      <section className="notfound">
        <h1>The Mileage Communications Group</h1>
        <h2>Sorry! Page not Found</h2>
        <img src={NotFound} alt="Sorry! Page not Found"></img>
      </section>
    </>
  );
};
