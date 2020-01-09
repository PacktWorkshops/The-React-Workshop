import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const About = () => (
  <div className="About">
    <h1>About Page</h1>
    <hr />
    <p>Information about your app or who you are would go here!</p>
  </div>
);

const Homepage = () => (
  <div className="Homepage">
    <h1>Homepage</h1>
    <hr />
    <p>This is our homepage.</p>
  </div>
);

const App = () => (
  <Router>
    <Switch>
      <Route path="/about">
        <About />
      </Route>
      <Route>
        <Homepage />
      </Route>
    </Switch>
  </Router>
);

export default App;
