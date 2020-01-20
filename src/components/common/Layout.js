import React from 'react';
import PropTypes from 'prop-types';

const Layout = ({ children }) => (
  <div className="app__container">
    <div className="app__content">
      {children}
    </div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
