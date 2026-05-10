import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
  {/* to keep track of the url and rendering of the page */}
    <BrowserRouter> 
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

