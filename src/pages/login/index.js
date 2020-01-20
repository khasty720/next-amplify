import React, { Fragment, useContext, useEffect } from 'react';
import { Auth } from 'aws-amplify';
import { Button } from 'reactstrap';
import Router from 'next/router';
import { isEmpty } from 'lodash';
import { AppContext, HeadInfo, Login } from '../../components/common';

const Index = () => {
  const title = 'Hyralinx';
  const description = 'Industrial IOT Monitoring Solutions';
  const { user } = useContext(AppContext);

  useEffect(() => {
    if (!isEmpty(user)) Router.push('/');
  }, [user]);

  return (
    <Fragment>
      <HeadInfo title={title} description={description} />
      <Login title={title} description={description}>
        <Button color="primary" size="lg" onClick={() => Auth.federatedSignIn()}>Login</Button>
      </Login>
    </Fragment>
  );
};

export default Index;
