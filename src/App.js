import React from "react";

import { HashRouter, Switch, Route } from "react-router-dom";

import HeaderComponent from "./components/includes/header";
import FooterComponent from "./components/includes/footer";

import IndexComponent from "./components/index";
import AboutComponent from "./components/about";
import ExpertiseComponent from "./components/expertise";
import TeamComponent from "./components/team";
import ContactComponent from "./components/contact";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <HeaderComponent></HeaderComponent>
        <Switch>
          <Route path="/" exact>
            <IndexComponent></IndexComponent>
          </Route>
          <Route path="/about">
            <AboutComponent></AboutComponent>
          </Route>
          <Route path="/expertise">
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
    </HashRouter>
  );
}

export default App;
