import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from 'react-router-dom';

const About = () => {
  const { path, url } = useRouteMatch();
  return (
    <Router>
      <div className="About">
        <h1>About Page</h1>
        <hr />
        <p>Information about your app or who you are would go here!</p>
        <hr />
        <Link to={`${url}`}>About Home</Link>
        &nbsp;
        <Link to={`${url}/contact`}>Contact</Link>
        &nbsp;
        <Link to={`${url}/bio`}>Bio</Link>
        <hr />
        <Switch>
          <Route path={`${path}/contact`}>
            <Contact />
          </Route>
          <Route path={`${path}/bio`}>
            <Bio />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

const Bio = () => (
  <div className="Bio">
    <h2>Bio</h2>
    <hr />
    <p>I'm a pretty cool person.</p>
  </div>
);

const Contact = () => (
  <div className="Contact">
    <h2>Contact Me</h2>
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

const Navbar = () => (
  <div className="Navbar">
    <Link to="/">Home</Link>
    &nbsp;
    <Link to="/about">About</Link>
  </div>
);

const App = () => (
  <div className="App">
    <Router>
      <Navbar />
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
  </div>
);

export default App;
