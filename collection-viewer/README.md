# COLLECTION VIEWER

- [COLLECTION VIEWER](#collection-viewer)
  - [Setup](#setup)
  - [Building a version for deployment](#building-a-version-for-deployment)
    - [Deploying to the PARADISEC data loader](#deploying-to-the-paradisec-data-loader)

This is a collection viewer designed specifically for use on repatriation devices.

It features:

-   modern tooling
-   a modern framework - Vue.js
-   modern styling designed specifically for non technical users and mobile devices

## Setup

You need nodejs installed (version 8 or greater). See [here](https://nodejs.org/en/download/) for what to do for your
system.

```
> npm run develop
```

Then load `http://localhost:9001` in your browser.

## Building a version for deployment

### Deploying to the PARADISEC data loader

The viewer is copied in to the folder `../loader/src/viewer` replacing the files already there.

```
> npm run build:production
```
