import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  useLocation
} from 'react-router-dom';
import './App.css';
import LoginForm from "./LoginForm";
import VerifyTokenForm from "./VerifyTokenForm";
import authService from './AuthService';
import Dashboard from "./Dashboard";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/verify">
            <Verify />
          </Route>
          <IsAuthenticatedRoute path="/dashboard">
            <Dashboard />
          </IsAuthenticatedRoute>
          <Route path="/404">
            <NoMatch />
          </Route>
          <Redirect to="/404" />
        </Switch>
      </Router>
    </div>
  );
}

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Login() {
  return <LoginForm />;
}

function Verify() {
  const query = useQuery();
  const location = useLocation();
  const email = query.get('email');
  if (!email) {
    return <Redirect to={{
      pathname: "/",
      state: {from: location}
    }} />
  }
  return <VerifyTokenForm email={email}/>;
}

const IsAuthenticatedRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    authService.isAuthenticated() === true
      ? <Component {...props} />
      : <Redirect to={{
        pathname: '/',
        state: { from: props.location }
      }} />
  )} />
);

function NoMatch() {
  return <h3>404 Sorry!</h3>;
}

export default App;

