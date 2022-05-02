import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import theme from './assets/jss/theme';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import App from './App';

// Add css styles.
import 'overlayscrollbars/css/OverlayScrollbars.min.css';
import './assets/css/styles.css';

const root = createRoot(document.getElementById('root'));
const muiTheme = createTheme(theme);

root.render(
  <StrictMode>
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />

      <App />
    </ThemeProvider>
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
