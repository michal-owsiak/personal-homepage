import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider, useSelector } from 'react-redux';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './globalStyle';
import store from './store';
import { selectIsThemeDark } from './theme/themeSlice';
import { lightTheme, darkTheme } from './theme/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));

const AppWrapper = () => {
  const dark = useSelector(selectIsThemeDark);

  return (
    <React.StrictMode>
      <ThemeProvider theme={
        dark ? darkTheme : lightTheme
      }>
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
