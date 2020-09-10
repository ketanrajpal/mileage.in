import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export default () => {
  const [Clients, setClients] = useState([]);

  useEffect(() => {
    let clients = [];
    for (let i = 1; i < 40; i++) {
      clients.push(
        <div>
          <img src={require(`../assets/img/clients/${i}.png`)} alt="Client for Mileage Communications"></img>
        </div>
      );
    }
    setClients(clients);
  }, []);

  return (
    <section className="clients">
      <h1>Our Cients</h1>
      <section>{Clients}</section>
    </section>
  );
};
