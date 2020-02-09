import { connect, getIn } from 'formik';

const StatusMessage = props => {
  const isValidating = getIn(props.formik.status, 'isValidating');
  return isValidating ? 'Is Validating' : 'Is not Validating'
};

export default connect(StatusMessage);
