/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateDevice = `subscription OnCreateDevice {
  onCreateDevice {
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
export const onUpdateDevice = `subscription OnUpdateDevice {
  onUpdateDevice {
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
export const onDeleteDevice = `subscription OnDeleteDevice {
  onDeleteDevice {
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
export const onCreateEvent = `subscription OnCreateEvent {
  onCreateEvent {
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
export const onUpdateEvent = `subscription OnUpdateEvent {
  onUpdateEvent {
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
export const onDeleteEvent = `subscription OnDeleteEvent {
  onDeleteEvent {
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
