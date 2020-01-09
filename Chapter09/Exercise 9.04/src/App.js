import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const About = () => {
  return (
    <Router>
      <div className="About">
        <h1>About Page</h1>
        <hr />
        <p>Information about your app or who you are would go here!</p>
        <br />
        <Link to="/about/contact">Contact Me</Link>
        &nbsp;
        <Link to="/about/bio">My Bio</Link>
        <Switch>
          <Route path="/about/contact">
            <Contact />
          </Route>
          <Route path="/about/bio">
            <Bio />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

const Bio = () => (
  <div className="Bio">
    <h1>Bio</h1>
    <hr />
    <p>I'm a pretty cool person.</p>
  </div>
);

const Contact = () => (
  <div className="Contact">
    <h1>Contact Me</h1>
    <hr />
    <p>Send me an email at test@test.com!</p>
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
      <Route exact path="/">
        <Homepage />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="*">
        <h1>404 - Component Not Found</h1>
      </Route>
    </Switch>
  </Router>
);

export default App;
