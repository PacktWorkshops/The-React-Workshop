import React from 'react';
// import { StatusConsumer } from './StatusContext';

const ConvertStatus = ({ context }) => {
  const getStatus = value => {
    if (value > 50) {
      return 'Very hot';
    } else if (value > 30) {
      return 'Hot';
    } else if (value > 15) {
      return 'Warm';
    } else if (value > 0) {
      return 'Cool';
    } else if (value > -10) {
      return 'Cold';
    } else if (value <= -10) {
      return 'Very cold';
    }

    return null;
  };

  // return <StatusConsumer>{props => <div className="status">Status: {getStatus(props)}</div>}</StatusConsumer>;
  return <div className="status">Status: {getStatus(context)}</div>;
};

export default ConvertStatus;
