import './style.css';
import React, {  StrictMode } from 'react';

import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './app/index';


const appDiv = document.getElementById('app');
const root = appDiv && createRoot(appDiv);

if (root) {
  root.render(
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  );
} else {
  console.log('Root Element Not Found...');
}
