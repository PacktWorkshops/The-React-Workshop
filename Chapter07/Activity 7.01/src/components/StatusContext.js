import React from 'react';

const StatusContext = React.createContext({});

export const StatusProvider = StatusContext.Provider;
export const StatusConsumer = StatusContext.Consumer;

export default StatusContext;
