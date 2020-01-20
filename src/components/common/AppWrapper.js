import React from 'react';
import PropTypes from 'prop-types';
import { ToastContainer } from 'react-toastify';
import AppProvider from './AppContext';

const AppWrapper = ({ children, appContext }) => (
  <div className="app__wrapper">
    <AppProvider value={appContext}>
      { children }
    </AppProvider>
    <ToastContainer position="bottom-right" hideProgressBar />
  </div>
);

AppWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  appContext: PropTypes.objectOf(PropTypes.any),
};

AppWrapper.defaultProps = {
  appContext: {},
};

export default AppWrapper;
