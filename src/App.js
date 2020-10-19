import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import HeaderComponent from "./components/includes/header";
import FooterComponent from "./components/includes/footer";

import IndexComponent from "./components/index";
import AboutComponent from "./components/about";
import ClientComponent from "./components/clients";
import ExpertiseComponent from "./components/expertise";
import TeamComponent from "./components/team";
import ContactComponent from "./components/contact";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <HeaderComponent></HeaderComponent>
        <Switch>
          <Route path="/" exact>
            <IndexComponent></IndexComponent>
            <AboutComponent></AboutComponent>
          </Route>
          <Route path="/clients">
            <ClientComponent></ClientComponent>
          </Route>
          <Route path="/services">
            <ExpertiseComponent></ExpertiseComponent>
          </Route>
          <Route path="/team">
            <TeamComponent></TeamComponent>
          </Route>
          <Route path="/contact">
            <ContactComponent></ContactComponent>
          </Route>
        </Switch>
        <FooterComponent></FooterComponent>
      </div>
    </BrowserRouter>
  );
}

export default App;
