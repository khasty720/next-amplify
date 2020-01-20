/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getDevice = `query GetDevice($id: ID!) {
  getDevice(id: $id) {
    id
    name
    particleDeviceId
    events {
      items {
        id
      }
      nextToken
    }
  }
}
`;
export const listDevices = `query ListDevices(
  $filter: ModelDeviceFilterInput
  $limit: Int
  $nextToken: String
) {
  listDevices(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      particleDeviceId
      events {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getEvent = `query GetEvent($id: ID!) {
  getEvent(id: $id) {
    id
    data {
      event
      data
      coreid
      published_at
    }
    device {
      id
      name
      particleDeviceId
      events {
        nextToken
      }
    }
  }
}
`;
export const listEvents = `query ListEvents(
  $filter: ModelEventFilterInput
  $limit: Int
  $nextToken: String
) {
  listEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      data {
        event
        data
        coreid
        published_at
      }
      device {
        id
        name
        particleDeviceId
      }
    }
    nextToken
  }
}
`;
