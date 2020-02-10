import React  from 'react';
import { Formik, ErrorMessage, Field } from 'formik';
import './App.css';

function validateName(value) {
  let error;
  if (!value) {
    error = 'Name is Required';
  }
  return error;
}


function validatePassword(value) {
  let error;
  if (!value) {
    error = 'Password is Required';
  }
  if (value.length < 8) {
    error = 'Min length of Password is 8 chars';
  }
  return error;
}

const FormValidationControl = () => {
  return (
    <Formik
      validateOnChange={false}
      validateOnBlur={false}
      initialStatus={{isValidating: false}}
      initialValues={{ name: '', password: ''}}
      onSubmit={(values, { setSubmitting, setStatus }) => {
        setStatus({isValidating: true});
        setTimeout(() => {
          console.info(JSON.stringify(values, null, 2));
          setSubmitting(false);
          setStatus({isValidating: false})
        }, 400);
      }}
    >
      {({
          handleChange,
          handleBlur,
          validateField,
          handleSubmit,
          isSubmitting,
        }) => (
        <form onSubmit={handleSubmit}>
          <label>
            Name*:
            <Field type="text" name="name"
                   validate={validateName}
                   onBlur={(e)=> {
                     handleBlur(e);
                     validateField('name');
                   }}
                   onChange={(e)=> {
                     handleChange(e);
                     validateField('name');
                   }}/>
          </label>
          <ErrorMessage name="name" />
          <label>
            Password*:
            <Field type="password" name="password"
                   validate={validatePassword}
                   onBlur={(e)=> {
                     handleBlur(e);
                     validateField('password');
                   }}
                   onChange={handleChange}/>
          </label>
          <ErrorMessage name="password" />
          <input type="submit" value="Login" disabled={isSubmitting}/>
        </form>
      )}
    </Formik>
  )
};

export default FormValidationControl;

