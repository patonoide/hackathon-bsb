import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React from "react";
import { css } from "styled-components/macro"; //eslint-disable-line

import AgencyLandingPage from "pages/AgencyLandingPage.js";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { initializeApp } from "firebase/app";

const firebaseConfig = require("./firebase_config.json");

const app = initializeApp(firebaseConfig);

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <AgencyLandingPage />
        </Route>
      </Switch>
    </Router>
  );
}
