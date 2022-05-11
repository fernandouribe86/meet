# Task 4.1

## User Stories
- As a user, I should be able to have all event elements collapsed by default so that I can easily navigate the page.
  Given the page has been opened, When user navigates the page, Then the event elements will be collapsed by default.

- As a user, I should be able to click to expand a specific event so that I can view all of the event details at once.
  Given the page has been opened, When user clicks to expand a specific event, Then the event element will be expanded and details will be shown.

- As a user, I should be able to click to collaps a specific event so that I can view all events at once and easily navigate the page.
  Given the event element has been opened, When user clicks to collapse the event element, Then the event elements will be collapsed and details will be hidden.

- As a user, I should be able to see a certain number of events at once so that I am not overwhelmed by choices.
  Given the page has been loaded, When user observes the page, Then the default number of events shall be 32 events.

- As a user, I should be able to specify the number of events I see so that I can view more than the default events at once.
  Given the page has been loaded, When user clicks on "Show More", Then a dropdown containing more event counts will appear with options for 48, 64, or "All".

- As a user, I should be able to view the page offline, so that I can view the events and details without an internet connection.
  Given the page has been loaded prior, When user views or navigates to page while offline, Then the page will be rendered using cached data.

- As a user, I should be able to see an error when I change settings so that I do not view events for the wrong city when the filters have been updated.
  Given the page has been loaded with events, When user changes settings, Then an error message will be shown if no events are found.

- As a user, I should be able to see a chart with the number of upcoming events in each city so that I can easily see how many events are in a particular area.
  Given the page has been loaded with events, When user observes the page, Then an chart is displayed summarizing how many events are occuring in a city in a 30-day time frame.
___ 
# Achievement 4 Project: Meet App


## Objective
  To build a serverless, progressive web application (PWA) with React using a test-driven development (TDD) technique. The application uses the Google Calendar API to fetch upcoming events.

## Context
Serverless and PWAs have grown in popularity over the last few years, and they’re both considered to
be the future of web development. By combining these two concepts, my app will not only work as a
normal web application, but it will also reap the benefits of both serverless architecture and PWAs:

- Serverless : No backend maintenance, easy to scale, always available, no cost for idle time.
- PWAs : Instant loading, offline support, push notifications, “add to home screen” prompt, responsive design, and cross-platform compatibility.


    
____________________________



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in my browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
my app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from my project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into my project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on my own.

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
