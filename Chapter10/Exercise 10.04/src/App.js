import React from 'react';
import { Formik, Form, Field } from 'formik';
import { createBrowserHistory as createHistory } from 'history';
import { Prompt, Link, Switch, Route, BrowserRouter as Router, Redirect } from 'react-router-dom';
import './App.css';

function validateEmail(value) {
  let error;
  if (!value) {
    error = 'Email is Required';
  }
  return error;
}

function validateName(value) {
  let error;
  if (!value) {
    error = 'Name is Required';
  }
  return error;
}


function App() {
  const history = createHistory({
    getUserConfirmation(message, callback) {
      const allowTransition = window.confirm(message);
      callback(allowTransition);
    }
  });
  return (
    <div className="App">
      <Router
        history={history}>
        <ul>
          <li>
            <Link to="/">Form</Link>
          </li>
          <li>
            <Link to="/Feed">Feed</Link>
          </li>
          <li>
            <Link to="/Dashboard">Dashboard</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/" exact children={<SignupForm />} />
          <Route path="/feed" children={<div>Feed</div>} />
          <IsAuthenticatedRoute exact path="/Dashboard" component={<div>Dashboard</div>} />
        </Switch>
      </Router>
    </div>
  );
}

export const SignupForm = () => (
  <div>
    <h1>Signup</h1>
    <Formik
      initialValues={{
        username: '',
        email: '',
      }}
      onSubmit={values => {
        // same shape as initial values
        console.log(values);
      }}
    >
      {({ errors, touched, validateField, validateForm, dirty }) => (
        <Form>
          <label>
            Email*:
          <Field name="email" validate={validateEmail} />
          </label>
          {errors.email && touched.email && <div>{errors.email}</div>}

          <label>
            Name*:
          <Field name="username" validate={validateName} />
          </label>
          {errors.username && touched.username && <div>{errors.username}</div>}
          <button type="submit">Submit</button>
          <span>Form is Dirty: {dirty ? "True" : "False"}</span>
          <Prompt
            message={location =>
              `Are you sure you want to go to ${location.pathname}? You will lose all your data!`
            }
            when={dirty}
          />
        </Form>
      )}
    </Formik>
  </div>
);

const authService = {
  isAuthenticated: function () {
    return false;
  }
};

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


export default App;

