import React, { Fragment } from 'react';
import { Table, Card, CardBody } from 'reactstrap';
import { API, graphqlOperation } from 'aws-amplify';
import useSWR from 'swr';
import { listDevices, listEvents } from '../../graphql/queries';

const getDevices = async () => {
  const { data: { listDevices: { items } } } = await API.graphql(graphqlOperation(listDevices));
  return items;
};

const getEvents = async () => {
  const { data: { listEvents: { items } } } = await API.graphql(graphqlOperation(listEvents));
  return items;
};

const Index = () => {
  const { data: devices, error } = useSWR('getDevices', getDevices);
  const { data: events } = useSWR('getEvents', getEvents);

  if (error) return <div>Failed to load</div>;
  if (!devices || !events) return <div>Loading...</div>;

  return (
    <Fragment>
      <h3>Devices:</h3>
      <Card className="mb-3">
        <CardBody>
          <Table striped>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Particle Device ID</th>
              </tr>
            </thead>
            <tbody>
              { devices.map((device) => (
                <tr>
                  <td>{device.id}</td>
                  <td>{device.name}</td>
                  <td>{device.particleDeviceId}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>

      <h3>Events:</h3>
      <Card>
        <CardBody>
          <Table striped>
            <thead>
              <tr>
                <th>event</th>
                <th>data</th>
                <th>coreid</th>
                <th>published_at</th>
              </tr>
            </thead>
            <tbody>
              { events.map((event) => (
                <tr>
                  <td>{event.data.event}</td>
                  <td>{event.data.data}</td>
                  <td>{event.data.coreid}</td>
                  <td>{event.data.published_at}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </Fragment>
  );
};

export default Index;
