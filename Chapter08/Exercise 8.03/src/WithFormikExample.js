import React from 'react';
import { withFormik } from 'formik';
import StatusMessage from "./ConnectExample";

const LoginForm = (props) => {
  const {
    values,
    handleChange,
    handleSubmit,
    isSubmitting,
    status
  } = props;
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={values.name}
               onChange={handleChange} />
      </label>
      <label>
        Password:
        <input type="password" name="password" value={values.password}
               onChange={handleChange} />
      </label>
      {status.isValidating}
      <input type="submit" value="Login" disabled={isSubmitting}/>
      Status: <StatusMessage />
    </form>
  );
};


const MyEnhancedLoginForm = withFormik({
  mapPropsToStatus: () => ({ isValidating: 'false' }),
  mapPropsToValues: () => ({ name: '', password: '' }),

  handleSubmit: (values, { setSubmitting, setStatus }) => {
    setStatus({ isValidating: 'true' });
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
      setStatus({ isValidating: 'false' });
    }, 1000);
  },

  displayName: 'LoginForm',
})(LoginForm);

export {MyEnhancedLoginForm}
