import React from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route,
  useLocation,
  Switch,
  Redirect
} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
          <div>
            <h2>Pages</h2>
            <ul>
              <li>
                <Link to="/">Page1</Link>
              </li>
              <li>
                <Link to="/page2">Page2</Link>
              </li>
              <li>
                <Link to="/Page3?param=123">Page3</Link>
              </li>
              <li>
                <Link to="/page4">Page4</Link>
              </li>
            </ul>
          </div>
          <Switch>
            <Route exact path="/">
              <Page1 />
            </Route>
            <Route path="/Page2">
              <Page2 />
            </Route>
            <Route path="/Page3">
              <Page3 />
            </Route>
            <Route path="/404">
              <NoMatch />
            </Route>
            <Redirect to="/404" />
          </Switch>
      </Router>
    </div>
  );
}

function Page1() {
  return <h3>Page1</h3>;
}

function Page2() {
  return <h3>Page2</h3>;
}

function Page3() {
  let param = new URLSearchParams(useLocation().search);
  return <h3>Page3 { param ? `${param}` : ''}</h3>;
}

function NoMatch() {
  return <h3>404 Sorry!</h3>;
}

export default App;

