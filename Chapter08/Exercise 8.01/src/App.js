import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import {UncontrolledForm} from './UncontrolledForm';
import {ControlledForm} from "./ControlledForm";
import './App.css';
import {PlainForm} from "./PlainForm";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Plain Form</Link>
            </li>
            <li>
              <Link to="/uncontrolled">Uncontrolled Form Component</Link>
            </li>
            <li>
              <Link to="/controlled">Controlled Form Component</Link>
            </li>
          </ul>
          <hr />
          <Switch>
            <Route exact path="/">
              <PlainForm />
            </Route>
            <Route exact path="/uncontrolled">
              <UncontrolledForm />
            </Route>
            <Route path="/controlled">
              <ControlledForm />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
