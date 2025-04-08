import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.js';
import Xz, {hello as hf, greeting as gf} from './demo_default_export.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
   <App />
   
    <Xz/>
   
  
  </React.StrictMode>
);

console.log(hf(), gf());

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
