import React, { useState, useEffect } from 'react';
import Amplify, { Hub } from 'aws-amplify';
import PropTypes from 'prop-types';
import Router, { useRouter } from 'next/router';
import { isEmpty } from 'lodash';
import { AppWrapper, Layout, Navbar } from '../components/common';
import '../styles/index.scss';
import awsconfig from '../aws-exports';

Amplify.configure(awsconfig);

const App = ({ Component, pageProps }) => {
  const [user, setUser] = useState({});
  const { asPath } = useRouter();
  const isLoginPage = (asPath === '/login');

  // useEffect(() => {
  //   Auth.currentAuthenticatedUser()
  //     .then((data) => { setUser(data); })
  //     .catch((err) => {
  //       console.log('AuthenticatedUser Error: ', err);
  //       setUser({});
  //     });
  // }, []);

  useEffect(() => {
    Hub.listen('auth', ({ payload: { data } }) => {
      setUser(data);
      if (isEmpty(data)) Router.push('/login');
    });
  }, []);

  // useEffect(() => {
  //   if (isEmpty(user)) Router.push('/login');
  // }, []);

  return (
    <AppWrapper appContext={{ user }}>
      {/* Header and Navigation */}
      { !isLoginPage && <Navbar /> }

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppWrapper>
  );
};

App.propTypes = {
  pageProps: PropTypes.objectOf(PropTypes.any),
  Component: PropTypes.func,
};

App.defaultProps = {
  pageProps: {},
  Component: null,
};

export default App;
