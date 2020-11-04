# PARADISEC Repatriation Device Data Loader

- [PARADISEC Repatriation Device Data Loader](#paradisec-repatriation-device-data-loader)
  - [Setup](#setup)
  - [To develop the GUI](#to-develop-the-gui)
  - [Running the tests](#running-the-tests)
  - [Building a release](#building-a-release)
    - [Building and publishing a complete release](#building-and-publishing-a-complete-release)
      - [Building a release for local testing of the bundle](#building-a-release-for-local-testing-of-the-bundle)
    - [Building a Linux release](#building-a-linux-release)
    - [Building MacOS releases](#building-macos-releases)
      - [Requirements](#requirements)
      - [DO THIS FIRST](#do-this-first)
    - [Building Windows releases](#building-windows-releases)
    - [Code signing](#code-signing)
  - [Updating the version of the viewer that gets bundled with the application](#updating-the-version-of-the-viewer-that-gets-bundled-with-the-application)

A GUI to deploy a PARADISEC collection to a Raspberry Pi configured as a repatriation device or to build
a static site on a USB disk. A previous version of this application was able to configure a LibraryBox
as a repatriation device though this functionality has since been deprecated as LibraryBox's are no longer
available.

## Setup

You need nodejs installed (version 8 or greater). See [here](https://nodejs.org/en/download/) for what to do for your
system. Once nodejs is setup run `npm install` to install the packages.

## To develop the GUI

```
> npm run develop
```

## Running the tests

```
> npm run test
```

## Building a release

In order to build a release for Windows, Mac and Linux you will need:

-   to run the build on a Mac - you can't build for MacOS anywhere else;
-   docker installed as that's how the Windows build is done;
-   a `Github Personal Access Token` in order to push the release to the release page of the repo;
-   completed the extra steps in the sections [Building MacOS releases - Requirements](#requirements) and [Building MacOS releases - DO THIS FIRST](#do-this-first).

### Building and publishing a complete release

To build a release for all platforms run from the root of the repo `./bin/publish.sh`. This will:

-   ask you for your apple developer id, app specific password for describo and github personal access token.
-   ask if you want to bump the major, minor, patch numbers
-   build the 3 distributables and publish each release to the `releases` page of the repository

Once the release is published you then need to verify the draft and release it from the releases page of the describo github repository.

#### Building a release for local testing of the bundle

You can build a release for testing by simply running one of the following commands (obviously choose the one for your platform)

-   Build for linux: `npm run build:linux`
-   Build for mac: `npm run build:mac`
-   Build for windows: `npm run build:win`

The built executable will be in the `dist` folder at the top level.

### Building a Linux release

There are no special requirements to building a linux bundle.

### Building MacOS releases

#### Requirements

You will need an Apple developer certificate to sign the release as well as an app specific password. To set up the
app specfic password follow the instructions at [https://support.apple.com/en-au/HT204397](https://support.apple.com/en-au/HT204397)

Ensure you have xcode installed as the notarization stage uses a tool called `altool` that comes
with xcode full not xcode command line tools.

-   export APPLEID= < your apple developer id - you must have an apple developer cert >
-   export APPLEIDPASS= < app specific password >

#### DO THIS FIRST

There is a bug in electron-builder where a zip file is required for autoupdate to work but the code to generate
it results in a bundle that doesn't work on Catalina! So, you need to apply the following patch to
`node_modules/app-builder-lib/out/targets/ArchiveTarget.js`.

```
diff --git a/ArchiveTarget.js.orig b/ArchiveTarget.js
index 72a59df..f872592 100644
--- a/ArchiveTarget.js.orig
+++ b/ArchiveTarget.js
@@ -119,9 +119,9 @@ class ArchiveTarget extends _core().Target {
       };
       await (0, _archive().archive)(format, artifactPath, dirToArchive, archiveOptions);

-      if (this.isWriteUpdateInfo && format === "zip") {
-        updateInfo = await (0, _differentialUpdateInfoBuilder().appendBlockmap)(artifactPath);
-      }
+        //if (this.isWriteUpdateInfo && format === "zip") {
+        //updateInfo = await (0, _differentialUpdateInfoBuilder().appendBlockmap)(artifactPath);
+        //}
     }

     await packager.info.callArtifactBuildCompleted({

```

MacOS releases can only be built on MacOS.

### Building Windows releases

Like the MacOS release a developer certificate is required to sign the app but (I think) Windows doesn't stop anyone running an unsigned application.

Also, you'll need docker installed as the Windows build happens inside a docker container.

### Code signing

See https://www.electron.build/code-signing for information about code signing.

## Updating the version of the viewer that gets bundled with the application

This application requires the [mobile collection viewer](https://github.com/marcolarosa/pdsc-collection-viewer-v2). Download that repo and set it up as per those instructions.

Once set up, you can build a version of that viewer for integration into this application by following
the notes Then, follow the notes to `Deploying to the PARADISEC data loader`
