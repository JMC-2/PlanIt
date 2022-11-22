import React from 'react';
import { render } from 'react-dom';
import App from './src/App';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client'
// import './styles.css';


//React 18 needs to use createRoot
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
    <BrowserRouter>
          <App />
    </BrowserRouter>
);