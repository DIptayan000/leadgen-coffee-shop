# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


#  Getting Started with React Storybook

This project was bootstrapped with React Storybook.It is an open-source tool for UI development, Storybook is essentially a library or a playground for UI components.The tool enables developers to showcase the interaction of the components in an isolated development environment, making it easier to test and debug the components and collaborate with fellow developers.


## Available Scripts

In the project directory, you can run:

## Install
### `npx storybook@latest init`

## Addon Link
### `npm install @storybook/addon-links`

## Deployment
### `npm run storybook`
The page will run the storybook when you make changes.\

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.



#  Getting Started with @testing-library

The @testing-library family of packages helps you test UI components in a user-centric way.

The core library, DOM Testing Library, is a light-weight solution for testing web pages by querying and interacting with DOM nodes (whether simulated with JSDOM/Jest or in the browser). The main utilities it provides involve querying the DOM for nodes in a way that's similar to how the user finds elements on the page. In this way, the library helps ensure your tests give you confidence that your application will work when a real user uses it.

## Available Scripts

In the project directory, you can run:

## Deployment
## `npm run test`
The page will run the unit test in your terminal when you make changes.\

## Generate Coverage Report In Your Terminal
## `npm test -- src/partials/Homemain.test.js --coverage --collectCoverageFrom=src/partials/Homemain.js`
The page will show the code coverage in your terminal when you make changes.\


#  Getting Started Testing with Playwright/Codecept JS

Playwright is a Node library to automate the Chromium, WebKit and Firefox browsers as well as Electron apps with a single API. It enables cross-browser web automation that is ever-green, capable, reliable and fast.

Playwright was built similarly to Puppeteer, using its API and so is very different in usage. However, Playwright has cross browser support with better design for test automation.

## Available Scripts

In the project directory, you can run:


## Setup
## `npm install codeceptjs playwright --save`
To start you need CodeceptJS with Playwright packages installed

## `npx codeceptjs init`
To start a new project initialize CodeceptJS to create main config file: codecept.conf.js.

## `npx codeceptjs gt`
Additional CodeceptJS tests should be created with gt command:

## `npx codeceptjs run --steps`
This is just enough to run a test, open a browser, and think what to do next to write a test case.

When you execute such test with codeceptjs run command you may see the browser is started


