import React, { useEffect, useState, Fragment } from 'react';
import Amplify from 'aws-amplify';
import API, { graphqlOperation } from '@aws-amplify/api';
import useSWR from 'swr';
import { listDevices, listEvents } from '../../graphql/queries';
import awsconfig from '../../aws-exports';

Amplify.configure(awsconfig);

const Index = () => {
    const { data: devices, error } = useSWR('getDevices', getDevices);
    const { data: events } = useSWR('getEvents', getEvents);

    if (error) return <div>Failed to load</div>;
    if (!devices || ! events) return <div>Loading...</div>;

    return (
      <Fragment>
        <h3>Devices:</h3>
        <ul>
          { 
            devices.map((device) => <li>{JSON.stringify(devices)}</li>)
          } 
        </ul>

        <h3>Events:</h3>
        <ul>
          { 
            events.map((event) => <li>{JSON.stringify(event)}</li>)
          } 
        </ul>
      </Fragment>
    );
};

const getDevices = async () => {
    const { data: { listDevices: { items } } }  = await API.graphql(graphqlOperation(listDevices));
    return items;
}

const getEvents = async () => {
  const { data: { listEvents: { items } } }  = await API.graphql(graphqlOperation(listEvents));
  return items;
}

export default Index;