## Purpose of this Repo
Just a place to mess around with this tech. According to the developers R3F could be faster than standalone 3JS and has the benefit of modern React composition [and hooks](https://github.com/react-spring/react-three-fiber#hooks). Note also that this can be implemented for [React Native using expo](https://github.com/react-spring/react-three-fiber/blob/master/recipes.md#usage-with-react-native). Not sure if this implementation has any benefits over useing raw 3JS in that case -- again, other than the built in component. I believe that even with R3F you can manipulate lower level 3JS if needed. 
 
## Navigating Experiments

### Location-based (URL) Navigation
One the app is running you can navigate to experiments using the following location url pattern: `/experiments/_name-of-experiment_` (Eg. `http://localhost:3000/experiment/cube`).

### Adding Experiments
* Experiments all live in the `src/experiments` directory
  * _Add your experiment directory and have at it_
* They are rolled up in a single barrel file (`index.js`) at the root of `/experiments`
  * _Make sure to import and export your experiment here_
* This barrel file also exports and object defining the enumeration of available experiments
  * _Make sure to add your experiment to the object, the `key` will be used as the path, the value as the component to be displayed_
* All experiments are wrapped in the same simple `<Canvas>` (defined by `CanvasContainer`).


## How It's Made

### Create React App
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).<br/>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

### React Three Fiber
In addition to CRA, `react-spring` and `react-three-fiber` are in place.<br/>
You can get the basics about it [here](https://github.com/react-spring/react-three-fiber#what-is-it)

### Setting up and Running
The usual CRA scripts apply.

`yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits.<br />
You will also see any lint errors in the console.

`yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

`yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

`yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.
