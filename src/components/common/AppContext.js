import React, { createContext } from 'react';
import PropTypes from 'prop-types';

const AppContext = createContext();

const AppProvider = (props) => {
  const { children, value } = props;
  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

const AppConsumer = AppContext.Consumer;

AppProvider.propTypes = {
  value: PropTypes.objectOf(PropTypes.any),
  children: PropTypes.node.isRequired,
};

AppProvider.defaultProps = {
  value: {},
};

export default AppProvider;
export { AppConsumer, AppContext };
