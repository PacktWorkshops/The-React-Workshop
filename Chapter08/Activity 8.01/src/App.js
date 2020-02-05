import React, { Component } from 'react';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './App.css';

// Async Validation
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const RegisterSchema = Yup.object().shape({
    name: Yup.string()
      .min(6, 'Username too short!')
      .max(24, 'Username too long!')
      .required('Required'),
    password: Yup.string()
      .min(8, 'Password too short!')
      .required('Required')
      .matches(/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, 'At least one lowercase and one uppercase char required'),
    email: Yup.string()
      .email('Valid Email required')
      .required('Required')
      .test('Email unique', 'Email already registered!', (value) => {
        return sleep(200).then(() => {
          if (['vganesh@mac.com', 'guialbu@msn.com', 'nasarius@optonline.net', 'scato@icloud.com', 'dwheeler@optonline.net'].includes(value)) {
            return Promise.resolve(false);
          } else {
            return Promise.resolve(true);
          }
        })
      }),
    acceptTAC: Yup.boolean()
      .test('TAC Accepted', 'TAC needs to be accepted', (value) => !!value)
  }
);

const validate = (values) => {
  let errors = {};

  if (values.password !== values.passwordMatch) {
    errors.passwordMatch = 'Passwords must match';
  }

  return errors;
};

class App extends Component {

  render() {
    return (
      <div className="App">
        <Formik
          initialValues={{
            name: '',
            password: '',
            passwordMatch: '',
            email: '',
            acceptTAC: false
          }}
          validate={validate}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              setSubmitting(false);
            }, 200);
          }}
          validateOnChange={false}
          validationSchema={RegisterSchema}
        >
          {({
              handleSubmit,
              handleChange,
              isSubmitting,
              isValid,
            }) => (
            <form onSubmit={handleSubmit}>
              <label>
                Name:
              </label><br/>
                <Field type="text" name="name"
                       onChange={handleChange} /><ErrorMessage name="name"/><br/>
              <label>
                Password:
              </label><br/>
                <Field type="password" name="password"
                       onChange={handleChange} /><ErrorMessage name="password"/><br/>
              <label>
                Password Match:
              </label><br/>
              <Field type="password" name="passwordMatch"
                     onChange={handleChange} /><ErrorMessage name="passwordMatch"/><br/>
              <label>
                Email:
              </label><br/>
              <Field type="email" name="email"
                     onChange={handleChange} /><ErrorMessage name="email"/><br/>
              <label>
                Accept Terms and Conditions:
              </label>
              <Field type="checkbox" name="acceptTAC"
                     onChange={handleChange} /><ErrorMessage name="acceptTAC"/><br/><br/>
              <input type="submit" value="Register" disabled={isSubmitting || !isValid}/>
            </form>
          )}
        </Formik>
      </div>
    );
  }
}

export default App;

