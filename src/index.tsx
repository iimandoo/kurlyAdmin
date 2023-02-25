import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { composeWithDevTools } from 'redux-devtools-extension';
import theme from 'theme';
import './index.css';
import App from './App';
import rootReducer from 'store';
import logger from 'redux-logger';

const enhancer =
  process.env.NODE_ENV === 'production' ? compose(applyMiddleware()) : composeWithDevTools(applyMiddleware(logger));

const store = createStore(rootReducer, enhancer);
const persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
);
