import React from 'react';
import { render } from 'react-dom';
import App from './src/App';
// import './styles.css';

// render(
//     <App>
//     </App>,
//     document.getElementById('root')
// );

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
          <App />
);