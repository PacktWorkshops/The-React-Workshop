import React from 'react';
import { Formik } from 'formik';
import { Redirect,  } from 'react-router-dom';
import authService from './AuthService';

const VerifyTokenForm = ({email}) => (
  <div>
    <h1>Verify Token</h1>
    <Formik
      initialValues={{ email: email, token: '' }}
      initialStatus={{isRedirectToDashboardPage: false}}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting, setStatus }) => {
        setTimeout(() => {
          if (authService.isValidToken(values.email, values.token)) {
            authService.setIsAuthenticated();
            setStatus({isRedirectToDashboardPage: true});
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
            status.isRedirectToDashboardPage ? <Redirect to={{
              pathname: "/dashboard",
            }} /> : null
          }
          <input
            type="text"
            name="token"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.token}
          />
          {errors.token && touched.token && errors.token}
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  </div>
);

export default VerifyTokenForm;
