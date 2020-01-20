# Next Amplify

## SSR Amplify config

 - https://github.com/aws-amplify/amplify-js/issues/4243#issuecomment-564553889

## Graphql Examples

```js
 mutation {createEvent(input: { data: { data: \"77\", coreid: \"111\", event: \"temp\", published_at: \"111\"}, eventDeviceId: "3649e6b4-b08e-4d0f-916f-e503680a9f8a" })}
```

### List Devices

```bash
curl -XPOST \
  https://4467i3knabhnfpsopj2rezcb34.appsync-api.us-east-1.amazonaws.com/graphql \
  -H 'Content-Type: application/graphql' \
  -H 'x-api-key: 123456789' \
  -d '{ "query": "query { listDevices { items { id name }}}" }'
```

### Create Event

```bash
curl -XPOST \
  https://4467i3knabhnfpsopj2rezcb34.appsync-api.us-east-1.amazonaws.com/graphql \
  -H 'Content-Type: application/graphql' \
  -H 'x-api-key: 123456789' \
  -d '{
    "query": "mutation { createEvent(input: { data: { data: \"77\", coreid: \"111\", event: \"temp\", published_at: \"111\"}, eventDeviceId: \"3649e6b4-b08e-4d0f-916f-e503680a9f8a\" }) {id} }"
  }'
  ```
