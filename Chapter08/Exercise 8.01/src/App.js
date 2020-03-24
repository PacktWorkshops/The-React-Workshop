import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import {UncontrolledForm} from './UncontrolledForm';
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
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
