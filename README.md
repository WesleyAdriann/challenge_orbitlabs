Desafio Orbitlabs
============

## Description

This is a solution to the orbitlabs challenge. The app is for users to recommend restaurants.

This solution was created using the flux architecture with [Redux](#built-with), and I've used multiple libraries like [React Navigation](#built-with) for screen navigation, [styled components](#built-with) to create style and more.

The application contains four screens, [Home](./src/views/Home/index.js) where a fake order is placed with a promise of 1.5 seconds, as requested in the [documentation](./docs/TesteReactNative2020.pdf), and shows food categories and restaurant recommendations where, after clicking on the restaurant, press the screen [Login](./src/views/login/index.js). In screens [Login](./src/views/Login/index.js), [Register](./src/views/Register/index.js) and [Forgot Password](./src/views/ForgotPassword/index.js). I used react native async storage for reading and write users. To login is validated if all inputs are empty and email and password was valid and read phone storage if the user exists and valid if the password is correct, and redirect to Home, Register or Forgot Password. In the [register](./src/views/Register/index.js), empty inputs also are validated and are evaluated all entries follow the rules, like numbers in the name, phone length and others, after user click in 'confirmar" the user data is save in phone storage to use in login or forgot password. And in [forgot password](./src/views/ForgotPassword/index.js) is used email to register a new password to the user.


Challenge description is located in **./docs/TesteReactNative2020.pdf**

## Hierarchy

- **/__tests__** directory where the tests is located;
- **/android** directory where the android files is located;
- **/ios** directory where the ios files is located;
- **/src** directory where the develop files is located;
  - **/assets** directory where static files like fonts and images is located;
  - **/components** directory where react components is located;
  - **/config** directory where project configuration is located;
  - **/services** directory where the files related to services used in the application will be created, for example HTTP requests;
  - **/store** directory where Redux files is located;
  - **/views** directory where de pages is located.

## Prerequisites

- [NodeJS](https://nodejs.org)
- [npm](https://www.npmjs.com) or [yarn](https://yarnpkg.com)
- [React Native Cli](https://www.npmjs.com/package/react-native-cli)
- [SDK Android](https://developer.android.com/studio)
- [ADB](https://developer.android.com/studio/command-line/adb.html)
- [Docker](https://www.docker.com)
- [Docker Compose](https://docs.docker.com/compose/)

## Usage
Configures basic workstation with React Native Cli  
- [React Native Getting Started](https://facebook.github.io/react-native/docs/getting-started)

In the directory, install the dependencies
```bash
npm install
```
In the first time install the application in emulator
```bash
react-native run-android
```
Await for application open in android emulator.

In others times only execute
```
react-native start
```
Open application in android emulator.

## Built With

- [React Native](https://facebook.github.io/react-native/)
- [React Navigation](https://reactnavigation.org)
- [Redux](https://redux.js.org)
- [React Redux](https://react-redux.js.org)
- [Styled Components](https://www.styled-components.com)
- [React Native Async Storage](https://github.com/react-native-community/async-storage)
- [React Navigation](https://reactnavigation.org)
- [React Native Masked Text](https://github.com/benhurott/react-native-masked-text)
- [React Native Linear Gradient](https://github.com/react-native-community/react-native-linear-gradient)
- [React Native Vector Icon](https://github.com/oblador/react-native-vector-icons)

## Authors

- [Wesley Adriann](https://github.com/WesleyAdriann/)

## Docker
Docker will be generate new apk in */build/release/app-release.apk*

#### ARG's
- **android_home** - path to android_home
```yml
ARG android_home=/opt/android/sdk
```
- **sdk_version** - version of android sdk tools
```yml
ARG sdk_version=sdk-tools-linux-4333796.zip
```

### Run with docker-compose
```bash
docker-compose up
``` 
or
```bash
docker-compose up --build
```

## URL Project Reference

- [https://github.com/WesleyAdriann/desafio_orbitlabs](https://github.com/WesleyAdriann/desafio_orbitlabs)

## Observation

For more information
- [React Native](https://facebook.github.io/react-native/)
- [Getting Started React Native](https://facebook.github.io/react-native/docs/getting-started)
