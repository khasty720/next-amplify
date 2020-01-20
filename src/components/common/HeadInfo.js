import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

const HeadInfo = (props) => {
  const { children, title, description } = props;
  return (
    <Head>
      <title>{ title } | Hydalinx®</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <meta name="theme-color" content="#ffffff" />
      {children}
    </Head>
  );
};

HeadInfo.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.node,
};

HeadInfo.defaultProps = {
  title: 'Hyralinx',
  description: 'Industrial IOT Monitoring Solutions',
  children: null,
};

export default HeadInfo;
