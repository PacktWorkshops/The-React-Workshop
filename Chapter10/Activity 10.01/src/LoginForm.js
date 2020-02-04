import React from 'react';
import { Formik } from 'formik';
import { Redirect,  } from 'react-router-dom';
import authService from './AuthService';

const LoginForm = () => (
  <div>
    <h1>Login</h1>
    <Formik
      initialValues={{ email: '', password: '' }}
      initialStatus={{isRedirectToVerifyPage: false}}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Email is Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting, setStatus }) => {
        setTimeout(() => {
          if (authService.isValidPassword(values.email, values.password)) {
            setStatus({isRedirectToVerifyPage: true});
          }
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
          values,
          errors,
          touched,
          status,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
        <form onSubmit={handleSubmit}>
          {
            status.isRedirectToVerifyPage ? <Redirect to={{
              pathname: "/verify",
              search: `?email=${values.email}`,
            }} /> : null
          }
          <input
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email && errors.email}
          <input
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          {errors.password && touched.password && errors.password}
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  </div>
);

export default LoginForm;
