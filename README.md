AJK16G Jensen Yrkeshögskola
## Available Scripts

If Yarn was installed when the project was initialized, then dependencies will have been installed via Yarn, and you should probably use it to run these commands as well. Unlike dependency installation, command running syntax is identical for Yarn and NPM at the time of this writing.

### `npm start`

Runs your app in development mode.

Open it in the [Expo app](https://expo.io) on your phone to view it. It will reload if you save edits to your files, and you will see build errors and logs in the terminal.

Sometimes you may need to reset or clear the React Native packager's cache. To do so, you can pass the `--reset-cache` flag to the start script:

```
npm start -- --reset-cache
# or
yarn start -- --reset-cache
```

#### `npm test`

Runs the [jest](https://github.com/facebook/jest) test runner on your tests.

#### `npm run ios`

Like `npm start`, but also attempts to open your app in the iOS Simulator if you're on a Mac and have it installed.

#### `npm run android`

Like `npm start`, but also attempts to open your app on a connected Android device or emulator. Requires an installation of Android build tools (see [React Native docs](https://facebook.github.io/react-native/docs/getting-started.html) for detailed setup). We also recommend installing Genymotion as your Android emulator. Once you've finished setting up the native build environment, there are two options for making the right copy of `adb` available to Create React Native App:
## Contributors

[Erik Svedenlund](https://www.linkedin.com/in/erik-svedenlund-b8829512a/)
[Christian Nylander](https://www.linkedin.com/in/christian-nylander-70082812a/)

## Description

A live score football app using the API from [football-data.org](http://www.football-data.org/index) to fetch
data about the fixtures and teams in Premier League. Also using [our own API](https://github.com/eriksvedenlund/teamData/blob/master/teams.json) to fetch additional data about the teams.

Sort the matches by day using [react-native-calendar-strip](https://github.com/BugiDev/react-native-calendar-strip) to see when the match is taking place, what teams are playing eachother and the current score. Press the information button to navigate to the about screen. Here you will find further information about the teams. Such as their emblem, what arena the match is taking place at and
the team coaches. We have also included the feature to see the match form of the teams, i.e if the four latest matches for each team ended in a draw, loss or win.
From this screen you can also navigate to the Premier League Table to see the current standing of the teams. How many games are played so far, draws, losses, wins and points.

## Technologies

React Native

### Components used

* [Scrollview](https://facebook.github.io/react-native/docs/scrollview.html)
* [View](https://facebook.github.io/react-native/docs/view.html)
* [Text](https://facebook.github.io/react-native/docs/text.html)
* [Image](https://facebook.github.io/react-native/docs/image.html)
* [Stacknavigator](https://reactnavigation.org/docs/intro/)
* [Activityindicator](https://facebook.github.io/react-native/docs/activityindicator.html)
* [react-native-button](https://js.coach/react-native/react-native-button?search=button)
* [Touchablehighlight](https://facebook.github.io/react-native/docs/touchablehighlight.html)
* [react-native-calendar-strip](https://github.com/BugiDev/react-native-calendar-strip)
* [moment.js](https://momentjs.com/)

## API

[Football-data.org](http://www.football-data.org/index)

## Devices tested during development

* LG G3
* Motorola G5
* Nexus X5 (emulator)
