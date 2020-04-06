import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Main from "./components/Main";
import NoMatch from "./sections/NoMatch";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
