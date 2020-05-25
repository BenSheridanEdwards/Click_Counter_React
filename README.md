# Click Counter

[![CircleCI](https://circleci.com/gh/BenSheridanEdwards/Click_Counter_React.svg?style=svg)](https://circleci.com/gh/BenSheridanEdwards/Click_Counter_React)
[![Maintainability](https://api.codeclimate.com/v1/badges/32d8f217be4f246461fa/maintainability)](https://codeclimate.com/github/BenSheridanEdwards/Click_Counter_React/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/32d8f217be4f246461fa/test_coverage)](https://codeclimate.com/github/BenSheridanEdwards/Click_Counter_React/test_coverage)

[Description](#description) | [User Stories](#user-stories) | [Mockups](#mockups) | [Application Showcase](#app-showcase) | [Installation Instructions](#installation) | [Credits](#credits)

## <a name="description">Description</a>

A simple counter app made with React. You can increment or decrement the counter. It throws an error if you try to decrement 0. 

**Tech Stack:** *JavaScript, React, Node, CSS, HTML, Jest, Enzyme, Webpack, Babel, CircleCI, Code Climate, Firebase*

You'll find the app [here](https://click-counter-react.web.app/), use cmd/window + click to open in a new tab.

## <a name="user-stories">User Stories</a>

```
As a user of Click Counter,
I expect to see a counter display, telling me my current count.
```
```
As a user of Click Counter,
when I click incredment, 
I expect to see the counter display value to increase by 1.
```
```
As a user of Click Counter,
when I click decredment, 
I expect to see the counter display value to decrease by 1.
```
```
As a user of Click Counter,
when the counter is 0 and I click decredment, 
I expect to see an error and the counter not to be decremented to -1.
```

## <a name="mockups">Mockups</a>

![Click Counter Mockup](https://github.com/BenSheridanEdwards/Click_Counter_React/blob/master/media/ClickCounter-MockUp.png)

<a name="app-showcase"><br /></a>

## Application Showcase

![Application Screenrecording](https://github.com/BenSheridanEdwards/Click_Counter_React/blob/master/media/ClickCounter-AppShowcaseGif.gif)

## <a name="installation">Installation Instructions</a>

Clone this repository from github then change directory into it.

```
$ git clone git@github.com:BenSheridanEdwards/Click_Counter_React.git
$ cd Click_Counter_React
```

### Launching the Application from the Command Line

From inside the project folder, you can run `npm start` in the terminal to launch the app in the browser.

```
$ npm start
```

Launching the app from the command line should open up a new tab in your default browser. If it doesn't, you can navigate to [http://localhost:3000](http://localhost:3000) to view the application.

### Running Tests

From inside the project folder, you can run `npm test` in the terminal to run the test suite. 

```
$ npm test
```

### Seeing Test Coverage

From inside the project folder, you can run `npm test -- --coverage` in the terminal to see the code coverage for this project.

```
$ npm test -- --coverage
```

## <a name="credits">Credits</a>

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This project was tested with [Jest](https://jestjs.io/) & [Enzyme](https://enzymejs.github.io/enzyme/). 

This project has continuous integration and deployment with [CircleCI](https://circleci.com/) & [Firebase](https://firebase.google.com/).

This project utilises [Code Climate](https://codeclimate.com/) to ensure high code quality.
