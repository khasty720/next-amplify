import React from 'react';
import Amplify from 'aws-amplify';
import PropTypes from 'prop-types';
import { Layout } from '../components/common';
import '../styles/index.scss';
import awsconfig from '../aws-exports';

Amplify.configure(awsconfig);

const App = ({ Component, pageProps }) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
);

App.propTypes = {
  pageProps: PropTypes.objectOf(PropTypes.any),
  Component: PropTypes.func,
};

App.defaultProps = {
  pageProps: {},
  Component: null,
};

export default App;
