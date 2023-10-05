# **Personal Homepage**

***This project was bootstrapped with [**Create React App**](https://github.com/facebook/create-react-app).***

Welcome to my personal online portfolio. You can [**check out**](https://michal-owsiak.github.io/personal-homepage) what my programming skills are, and browse through the projects that are fetched from my GitHub profile API.

![screenshot](https://github.com/michal-owsiak/personal-homepage/blob/main/src/images/demo.gif?raw=true)

## **Functionality**

### **Fetching Repositories**

***This section outlines how the portfolio tiles retrieve data from the GitHub API and the process it undergoes before rendering the portfolio.***


The data inside the portfolio tiles is fetched from GitHub network-based API, using asynchronous function and ```Axios``` library. The fetched data is then passed to ```sortAndFilterProjects``` asynchronous function which sorts repositories by the date of creation, and then filters only those repositories which are included in the ```desiredProjectsIds``` array. The output array is finally passed to the custom hook     ```useSortedAndFilteredProjects```. Depending on the states returned from this hook, rendering function of ```Projects``` component displays either loading animation, error prompt, or the actual fetched portfolio.  

### **Theme Toggling**

#### **Theme Toggling - Reducer:**

***The website's color theme can be toggled between light and dark modes. This section explains how this functionality is achieved through the use of a `Redux` reducer.***

The reducer, named `themeSlice`, handles the toggling logic. It listens for actions that toggle between boolean values, representing whether dark mode is on or off. These actions are dispatched when the user clicks the `ThemeButton` component.  

The `ThemeProvider` component retrieves the boolean value from the `selectIsThemeDark` selector, provided by the reducer. Depending on whether the value is `true` (indicating dark mode) or `false` (indicating light mode), the `ThemeProvider` applies the corresponding set of colors - `darkTheme` or `lightTheme`.  

The initial theme state is read by the reducer from local storage. When no theme data is found in local storage (e.g., during the user's first visit), the `getDarkFromLocalStorage` function returns `false`, setting the light theme as the default one.  


#### **Theme Toggling - Saga:**

***In addition to the `Redux` reducer, the application uses `Redux-Saga` middleware to manage the theme toggling functionality.***


The `themeSaga` is responsible for handling the `saveDarkInLocalStorage` function when a dispatched action changes the state of `dark` boolean value. The saga retrieves the boolean information from the `selectIsThemeDark` selector and subsequently calls the `saveDarkInLocalStorage` function, passing retrieved information to it. This approach ensures that the user's chosen theme preference is stored in local storage, providing a seamless experience between visits.



## **Tools Used**

### **Languages**

```bash
- JavaScript (ES6+) with JSX Syntax
- CSS
- HTML
```

### **Libraries**

```bash
- React
- Axios
- Redux
- Redux-Toolkit
- Redux-Saga
- Styled-Components
```

## **Installation and Usage**

To get started with this project, follow these steps:

1. Clone this repository.
2. Run `npm install` to install the required dependencies.
3. Run `npm start` to launch the development server. The app will be available at [http://localhost:3000](http://localhost:3000).

## **Deployment**

To build the app for production, use:

```bash
npm run build
```
This command creates an optimized production build in the build folder, ready for deployment.

```bash
npm run deploy
```

This command is a convenient shortcut that both builds the application (as a predeploy action) and deploys it. It's useful for quickly deploying your app to your hosting platform.

```bash
npm run eject
```

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.