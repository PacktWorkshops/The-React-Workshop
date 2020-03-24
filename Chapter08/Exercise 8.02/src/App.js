import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import {ControlledForm} from './ControlledForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Controlled Form Component</Link>
            </li>
          </ul>
          <hr />
          <Switch>
            <Route exact path="/">
              <ControlledForm />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
