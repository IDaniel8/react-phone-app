<img src="./logo.png" alt="IDaniel" width="80">

> Phones App

## Pre Requisites

In order to start must have installed node >= 12.0.0 and npm >= 6.0.0
Docker (optional)
yarn (optional)

Note: i encourage you to use better `yarn` than `npm` but is a thing of preference.

## Quick start

To start must install the packages first using

```bash
npm install or yarn install
```

Then in order to start we have 2 options

with docker

```bash
npm run docker:build or yarn docker:build # Just only for the first time
npm run dev:docker or yarn dev:docker
```

without docker

```bash
npm run dev or yarn dev
```

Note: this scripts will run both api and client server, but you can run it separately too.

### Architecture

This is a monorepository based on node-js REST api and a client with react.

### ENV Variables

For mocked authorization variable is injected directly using cross-env.

For client:
REACT_APP_JWT_SECRET (for mocking purposes should removed when the api rest is more robust)
REACT_APP_API_URL (for indicate the baseURL for the endpoints request)

For api:
JWT_SECRET (for mocking purposes should removed when the api rest is more robust)

### React (Client)

This app uses the latest version on react and its constructed with hooks and functional components.
the architecture its based on the containers/view pattern with reusable global components and immer for immutability, also another tools like:

for the base scaffoling => create-react-app [docs](https://create-react-app.dev/docs/getting-started/)
for the styling => styled-components [docs](https://styled-components.com/)
for the async-request handler => react-async [docs](https://docs.react-async.com/) and redux-thunk [docs](https://github.com/reduxjs/redux-thunk)
for storage handler => redux-toolkit [docs](https://redux-toolkit.js.org/)
for request adapter => axios [docs](https://github.com/axios/axios)
for request cache-adapter => cachios [docs](https://github.com/AlbinoDrought/cachios)
for routing pages => connected-react-router [docs](https://github.com/supasate/connected-react-router) and react-router-dom [docs](https://reactrouter.com/)

The folder structure has:

```
  src
    - actions (divided per model creation)
    - api (divided per model)
    - assets
        - images
        - icons
    - components (reusable and generic components)
    - reducers (divided per model creation)
    - shared (utilities and function handlers)
    - store (definition of the redux storage)
    - theme (definition of the app globalStyles and styleguides)
    - views
      - [model name] (divided by the container file and its inner views if applies also has its on thunkActions, selectors and components if applies)
    - App.jsx (entry point for providers and configurations of the app on global perspective)
    - index.jsx
```

### Node (Server REST Api)

As a basic and simple nodejs rest api, its architecture is based of transpiled module with babel to makes available the use of ES2020 features and nodemon as development server. It uses a mockfile for data purposes and a mockup authorization middleware for endpoint protection using jsonwebtokens.

### TODOS

- add robust architecture to the node server api
- add database connection
- add helmet and security protection to the api
- add routing configuration for the api
- add real authorization middleware for the api (not mocked one)
