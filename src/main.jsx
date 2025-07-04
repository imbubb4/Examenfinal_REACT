import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/Examenfinal_REACT/">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
