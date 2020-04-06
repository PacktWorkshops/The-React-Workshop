import { Formik } from 'formik';
import React from 'react';
const FormikForm = () => (

    
 <Formik
  initialValues={{ name: '', password: '' }}
  onSubmit={(values, { setSubmitting }) => {
  setTimeout(() => {
    console.info(JSON.stringify(values, null, 2));
    setSubmitting(false);
  }, 400);
  }}
>
  {({
    values,
    handleChange,
    handleSubmit,
    isSubmitting,
  }) => (
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
  <input type="submit" value="Login" disabled={isSubmitting}/>
  </form>
  )}
 </Formik>



);

export {FormikForm};
