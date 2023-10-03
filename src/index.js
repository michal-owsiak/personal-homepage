import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider, useSelector } from 'react-redux';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './globalStyle';
import store from './store';
import { selectCurrentTheme } from './themeSlice';

const root = ReactDOM.createRoot(document.getElementById('root'));

const AppWrapper = () => {
  const currentTheme = useSelector(selectCurrentTheme);

  return (
    <React.StrictMode>
      <ThemeProvider theme={currentTheme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </React.StrictMode>
  );
};

root.render(
  <Provider store={store}>
    <AppWrapper />
  </Provider>,
);

reportWebVitals();
