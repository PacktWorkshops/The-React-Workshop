import React from 'react';
import { connect, getIn } from 'formik';

const StatusMessage = props => {
  const isValidating = getIn(props.formik.status, 'isValidating') === "true" ? true : false;
  return <span> {isValidating ? 'Is Validating' : 'Is not Validating'}</span>
};

export default connect(StatusMessage);