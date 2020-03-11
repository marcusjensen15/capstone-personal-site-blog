## Timetable (2/28/2020)
-8am - initial site plan
- 11:30 - 2pm lunch with potential employer
  -> Technology utilized: React front end with Ruby/Rails API back end.
  -> Necessary Routes:
    - "/" -> Home
    - "/resume" -> Resumé
    - "/about" -> About
    - "/blog" -> Blog
    - "/admin" -> (some sort of admin side where I can add blog posts)
    - "/codingblog/:id" -> need to figure out how to do dynamic routes

    ## Timetable (3/6/2020)
      - 945am: meeting with director of talent for software company.
      - 11am: picking out color design palates.
      - 12pm: meeting with contact for potential job.

## Application Component Structure (3/11/2020)
                      App.js
             /        /       \              \
    Home.jsx      Resume.jsx CodingBlog.jsx Admin.jsx
                               |                   |          \                \
                            Post.jsx          NewPostForm.jsx, EditPostForm.jsx  PostAdmin.jsx



## Explanation of each component:

App.js - Holds all of the core functions of the app. State also lives in this level. State values and core functions are passed down through props. All of the routing for the entire app lives within this component.

CodingBlog.jsx - This is the 'show' for all of the blogs from my API. The entire list of posts is being passed down as a state value through props (postList). If you are looking at the live deployment, you may need to refresh a couple of times. The API is being hosted on a free Heroku plan which goes to sleep after 30 min of inactivity. (takes a few seconds to wake up).

EditPostForm.jsx - 







This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
