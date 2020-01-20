import React from 'react';
import Amplify, { Hub } from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react'; // or 'aws-amplify-react-native'
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { AppWrapper, Layout, Navbar } from '../components/common';
import '../styles/index.scss';
import awsconfig from '../aws-exports';

Amplify.configure(awsconfig);

Hub.listen('auth', ({ payload: { event } }) => {
  if (event === 'signIn') toast.success('Login success!');
});

const App = ({ Component, pageProps, authData }) => (
  <AppWrapper appContext={{ user: authData }}>
    <Navbar />
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </AppWrapper>
);

App.propTypes = {
  authData: PropTypes.objectOf(PropTypes.any).isRequired,
  pageProps: PropTypes.objectOf(PropTypes.any),
  Component: PropTypes.func,
};

App.defaultProps = {
  pageProps: {},
  Component: null,
};

export default withAuthenticator(App);
