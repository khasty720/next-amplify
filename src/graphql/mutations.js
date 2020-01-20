/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createDevice = `mutation CreateDevice(
  $input: CreateDeviceInput!
  $condition: ModelDeviceConditionInput
) {
  createDevice(input: $input, condition: $condition) {
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
export const updateDevice = `mutation UpdateDevice(
  $input: UpdateDeviceInput!
  $condition: ModelDeviceConditionInput
) {
  updateDevice(input: $input, condition: $condition) {
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
export const deleteDevice = `mutation DeleteDevice(
  $input: DeleteDeviceInput!
  $condition: ModelDeviceConditionInput
) {
  deleteDevice(input: $input, condition: $condition) {
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
export const createEvent = `mutation CreateEvent(
  $input: CreateEventInput!
  $condition: ModelEventConditionInput
) {
  createEvent(input: $input, condition: $condition) {
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
export const updateEvent = `mutation UpdateEvent(
  $input: UpdateEventInput!
  $condition: ModelEventConditionInput
) {
  updateEvent(input: $input, condition: $condition) {
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
export const deleteEvent = `mutation DeleteEvent(
  $input: DeleteEventInput!
  $condition: ModelEventConditionInput
) {
  deleteEvent(input: $input, condition: $condition) {
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
