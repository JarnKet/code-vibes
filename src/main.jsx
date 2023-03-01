import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';
import { Layout } from './components';
import { BackgroundProvider } from './components/context/BackgroundContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BackgroundProvider>
      <Layout>
        <App />
      </Layout>
    </BackgroundProvider>
  </React.StrictMode>
);
