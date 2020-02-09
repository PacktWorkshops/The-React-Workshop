import React  from 'react';
import { Formik, ErrorMessage, Field } from 'formik';
import * as Yup from 'yup';
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

const LoginSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
});

const FormYupValidation = () => {
  return (
    <Formik
      validationSchema={LoginSchema}
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
          handleSubmit,
          isSubmitting,
        }) => (
        <form onSubmit={handleSubmit}>
          <label>
            Name*:
            <Field type="text" name="name"
                   onBlur={handleBlur}
                   validate={validateName}
                   onChange={handleChange}/>
          </label>
          <ErrorMessage name="name" className="error" component="span"/>
          <label>
            Password*:
            <Field type="password" name="password"
                   onBlur={handleBlur}
                   validate={validatePassword}
                   onChange={handleChange}/>
          </label>
          <ErrorMessage name="password" className="error" component="span" />
          <input type="submit" value="Login" disabled={isSubmitting}/>
        </form>
      )}
    </Formik>
  )
};



export default FormYupValidation;

