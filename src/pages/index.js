import React, { Fragment } from 'react';
import Amplify, { Auth, JS } from 'aws-amplify';
import { Button, Row, Col } from 'reactstrap';
import Nav from '../components/nav';
import config from '../aws-exports';

JS.browserOrNode = () => {
  const isBrowser = typeof window !== 'undefined' && typeof window.document !== 'undefined';
  const isNode = typeof process !== 'undefined' && process.versions != null && process.versions.node != null;
  return {
    isBrowser,
    isNode,
  };
};

Amplify.configure(config);

const signOut = () => {
  Auth.signOut()
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
};

const Home = () => (
  <Fragment>
    <Nav />
    <Row className="m-5">
      <Col md="6" className="text-center">
        <Button color="primary" onClick={() => Auth.federatedSignIn()}>Sign In</Button>
      </Col>
      <Col md="6" className="text-center">
        <Button color="primary" onClick={() => signOut()}>Sign Out</Button>
      </Col>
    </Row>
  </Fragment>
);

export default Home;
